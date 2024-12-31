import { pgEnum, timestamp, varchar } from "drizzle-orm/pg-core";

export const timestamps = {
  updated_at: timestamp(),
  created_at: timestamp().defaultNow().notNull(),
  deleted_at: timestamp(),
};

export const socialMedias = {
  github: varchar("github"),
  linkedin: varchar("linkedin"),
  facebook: varchar("facebook"),
  instagram: varchar("instagram"),
  twitter: varchar("twitter"),
};

export const rolesEnum = pgEnum("roles", [
  "superadmin",
  "admin",
  "receptionist",
  "instructor",
  "student",
  "parent",
]);

export const currencyEnum = pgEnum("currency", ["EGP", "USD", "EUR", "GBP"]);

export const themeEnum = pgEnum("theme", ["light", "dark", "system"]);

export const languageEnum = pgEnum("language", ["ar", "eng"]);

export const timezoneEnum = pgEnum("timezone", [
  "UTC-12:00",
  "UTC-11:00",
  "UTC-10:00",
  "UTC-09:00",
  "UTC-08:00",
  "UTC-07:00",
  "UTC-06:00",
  "UTC-05:00",
  "UTC-04:00",
  "UTC-03:00",
  "UTC-02:00",
  "UTC-01:00",
  "UTC", // Standard UTC
  "UTC+01:00",
  "UTC+02:00",
  "UTC+03:00",
  "UTC+04:00",
  "UTC+05:00",
  "UTC+06:00",
  "UTC+07:00",
  "UTC+08:00",
  "UTC+09:00",
  "UTC+10:00",
  "UTC+11:00",
  "UTC+12:00",
]);
