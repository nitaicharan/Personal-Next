import { z } from "zod";

const envSchema = z.object({
  API_URL: z.string().url().min(5),
});

export const env = envSchema.parse(process.env);
