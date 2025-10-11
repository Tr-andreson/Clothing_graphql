
export async function fetchGraphQL<T>(
  query: string,
  variables?: Record<string, any>
): Promise<T> {
  const res = await fetch("http://localhost:8000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
    cache: "no-store", // can be 'force-cache' or 'no-store' depending on need
  });

  if (!res.ok) {
    throw new Error(`GraphQL error: ${res.statusText}`);
  }

  const { data, errors } = await res.json();

  if (errors) {
    console.error(errors);
    throw new Error(errors[0].message);
  }

  return data;
}
