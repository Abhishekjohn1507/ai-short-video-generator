import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./configs/schema.js",
  dialect: "postgresql",
  
  dbCredentials: {
    url: 'postgresql://ai-short-video_owner:npg_4MiWZJSmwl5H@ep-hidden-brook-a572cmx9-pooler.us-east-2.aws.neon.tech/ai-short-video?sslmode=require'
  }
});
