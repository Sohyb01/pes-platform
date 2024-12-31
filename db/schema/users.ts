import {
  pgTable,
  varchar,
  text,
  numeric,
  date,
  uuid,
} from "drizzle-orm/pg-core";

import {
  currencyEnum,
  languageEnum,
  socialMedias,
  themeEnum,
  timestamps,
  timezoneEnum,
} from "./common";
// import { v4 } from "uuid";

// ---

const baseEmployee = {
  id: uuid("id").primaryKey(),
  username: varchar("username", { length: 255 }).notNull(),
  password: varchar("password", { length: 255 }).notNull(),
  first_name: varchar("first_name", { length: 255 }).notNull(),
  last_name: varchar("last_name", { length: 255 }).notNull(),
  date_of_birth: date("date_of_birth").notNull(),
  gender: varchar("gender", { length: 255 }).notNull(),
  //   --- Contact / Legal Info ---
  national_id: varchar("national_id", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  address_line_one: text("address_line_one").notNull(),
  address_line_two: text("address_line_two").notNull(),
  phone: varchar("phone", { length: 255 }).notNull(),
  whatsapp: varchar("whatsapp", { length: 255 }).notNull(),
  ...socialMedias,
  // Optional information
  image: text("image"), // Optional image file path or URL
  religion: varchar("religion", { length: 255 }),
  //   Customization
  theme: themeEnum().default("light"),
  timezone: timezoneEnum(),
  language: languageEnum().default("eng"),
  currency: currencyEnum().default("EGP"),
  // Timestamps (created, updated, deleted)
  ...timestamps,
};

export const instructors = pgTable("instructors", {
  faculty: varchar("faculty", { length: 255 }).notNull(),
  university: varchar("university", { length: 255 }).notNull(),
  specialty: varchar("specialty", { length: 255 }).notNull(),
  salary: numeric("salary").notNull(),
  //   Core employee schema
  ...baseEmployee,
});
