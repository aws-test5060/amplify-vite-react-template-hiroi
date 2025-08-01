// amplify/data/resource.ts
import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
 Todo: a
   .model({
     content: a.string(),
   })
   .authorization((allow) => [allow.authenticated()]), // 変更
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
 schema,
 authorizationModes: {
   defaultAuthorizationMode: "userPool", // 変更
   // API 認証の記述を削除
 },
});
