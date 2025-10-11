
import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://localhost:8000/graphql', // your GraphQL API endpoint
  documents: ['src/**/*.graphql'],
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
}

export default config
