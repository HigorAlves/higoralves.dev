import { GraphQLClient } from 'graphql-request'

const ENDPOINT =
	'https://api-us-west-2.graphcms.com/v2/ckzvruldv2zgj01za831374p6/master'

export const graphQLClient = new GraphQLClient(ENDPOINT, { headers: {} })
