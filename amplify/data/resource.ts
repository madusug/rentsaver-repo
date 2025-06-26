import { a, defineData } from '@aws-amplify/backend';
import { renderToStream } from 'vue/server-renderer';

const schema = a.schema({
  Tenant: a.model({
    name: a.string(),
    email: a.string(),
    bankAccountID: a.string(),
    rentGoal: a.float(),
    transactionHistory: a.string().array(),
  }).authorization(allow => [allow.authenticated()]),
  Landlord: a.model({
    name: a.string(),
    property: a.string(),
    bankAccountID: a.string(),
    tenants: a.string().array(),
    rentAmount: a.float(),
    transactionHistory: a.string().array(),
  }).authorization(allow => [allow.authenticated()])
});


export const data = defineData({
  schema
});