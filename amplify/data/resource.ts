import { a, defineData } from '@aws-amplify/backend';
const schema = a.schema({
  Tenant: a.model({
    name: a.string(),
    email: a.string(),
    bankAccountID: a.string(),
    rentGoal: a.float(),
    rentPaid: a.float(),
    rentDue: a.float(),
    rentDueDate: a.string(),
    transactionHistory: a.string().array()
  }).authorization(allow => [allow.authenticated()]),
  Landlord: a.model({
    name: a.string(),
    property: a.string(),
    bankAccountID: a.string(),
    tenants: a.string().array(),
    rentAmount: a.float(),
    rentDueDate: a.string(),
    transactionHistory: a.string().array()
  }).authorization(allow => [allow.authenticated()])
});
export const data = defineData({
  schema
});