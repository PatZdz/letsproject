import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const contactFormTable = sqliteTable("contact_form", {
  id: int().primaryKey({ autoIncrement: true }),
  fullName: text().notNull(),
  company: text().notNull(),
  email: text().notNull(),
  expectations: text().notNull(), // Will store as JSON string
  budget: int().notNull(),
  currency: text().notNull(),
  howWeCanHelp: text(),
  howDidYouHear: text(),
  nda: int(), // Will store as 0 or 1
  createdAt: text().default(sql`CURRENT_TIMESTAMP`),
});
