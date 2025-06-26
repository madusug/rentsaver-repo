import { a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Tenant: a.model({
    name: a.string(),
    email: a.string(),
  }),
  Landlord: a.model({
    name: a.string(),
    property: a.string(),
  })
}).authorization(allow => [allow.authenticated()]);

export const data = defineData({
  schema
});