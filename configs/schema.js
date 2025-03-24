import { pgTable, serial, varchar, boolean as pgBoolean } from "drizzle-orm/pg-core";

export const Users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),  // Specify length
  email: varchar("email", { length: 255 }).notNull(), // Fix missing ()
  imageUrl: varchar("image", { length: 255 }).notNull(), // Fix missing ()
  subscription: pgBoolean("subscription").default(false) // Use `pgBoolean` to avoid keyword issues
});
