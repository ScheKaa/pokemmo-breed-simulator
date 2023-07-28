import type { Config } from "drizzle-kit"

export default {
    schema: "./src/drizzle/schema.ts",
    out: "./src/drizzle/migrations",
    driver: "turso",
    dbCredentials: {
        url: process.env.DATABASE_URL!,
        authToken: process.env.DATABASE_TOKEN,
    },
} satisfies Config
