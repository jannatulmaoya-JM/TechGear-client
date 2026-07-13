import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
console.log("Client ID from env:", process.env.GOOGLE_CLIENT_ID);
const client = new MongoClient(process.env.MONGODB_URI!);

export const auth = betterAuth({
    baseURL: "http://localhost:3000",
    database: mongodbAdapter(client.db("Tech-Gear")),
    emailAndPassword: {
        enabled: true,
    },
    user: {
        additionalFields: {
            image: { type: "string" },
            role: { type: "string" },
            plan: { type: "string", defaultValue: "free" },
        }
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        },
    },
});