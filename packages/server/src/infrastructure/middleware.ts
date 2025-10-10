
import { MiddlewareInterface, NextFn, ResolverData } from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { parseResolveInfo, ResolveTree } from "graphql-parse-resolve-info";

/**
 * AutoSelectMiddleware dynamically builds .select() and .populate()
 * for Mongoose/Typegoose queries based on requested GraphQL fields.
 */
export class AutoSelectMiddleware implements MiddlewareInterface<any> {
  async use({ info }: ResolverData<any>, next: NextFn) {
    const parsed = parseResolveInfo(info as GraphQLResolveInfo) as ResolveTree;
    if (!parsed) return next();

    const typeFields = Object.values(parsed.fieldsByTypeName)[0];
    const select: string[] = [];
    const populate: any[] = [];

    // Helper recursive builder
    const traverse = (fields: Record<string, ResolveTree>, prefix = "") => {
      for (const [key, value] of Object.entries(fields)) {
        if (value.fieldsByTypeName && Object.keys(value.fieldsByTypeName).length > 0) {
          // Nested type → populate
          const nestedType = Object.values(value.fieldsByTypeName)[0];
          const nestedFields = Object.keys(nestedType).join(" ");
          populate.push({
            path: prefix + key,
            select: nestedFields,
          });
        } else {
          select.push(prefix + key);
        }
      }
    };

    traverse(typeFields);

    // Attach to context (accessible in resolvers)
    (info as any).mongoSelect = select.join(" ");
    (info as any).mongoPopulate = populate;

    return next();
  }
}
