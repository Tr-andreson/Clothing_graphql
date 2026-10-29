import { HealthResponseT } from "./dto"
import { Resolver, Query } from "type-graphql";


@Resolver()
export class HealthResolver {
	@Query(() => HealthResponseT) 
	async Health() {

		const HealthResponse = {
			status: 200,
			message: "Graphql Health Route Working"
		}

		return HealthResponse

	}
			
}
