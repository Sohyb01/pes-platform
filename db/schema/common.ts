import { pgEnum, timestamp, varchar } from "drizzle-orm/pg-core";

export const timestamps = {
  updated_at: timestamp(),
  created_at: timestamp().defaultNow().notNull(),
  deleted_at: timestamp(),
  expires_at: timestamp(),
  redeemed_at: timestamp(),
  submitted_at: timestamp(),
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

//Enum for status of attendance
export const attendanceStatusEnum = pgEnum("status", [
  "present",
  "absent",
  "late",
]);

// Enum for promotion waiting list status
export const classTransferEnum = pgEnum("status", [
  "pending",
  "approved",
  "rejected",
]);

// Enum for franchise status
export const franchiseStatusEnum = pgEnum("status", [
  "pending",
  "franchise agreement reached",
  "franchise agreement reached",
  "rejected",
]);

// Enum for franchise status
export const reviewStatusEnum = pgEnum("review_status", [
  "pending",
  "approved",
  "rejected",
]);

// Enum for franchise status
export const pendingInstructorStatusEnum = pgEnum("status", [
  "pending",
  "interview successful",
  "interview not successful",
  "rejected",
]);

// Enum for fees status
export const feesStatusEnum = pgEnum("status", ["fixed", "editable"]);

// Enum for rules category
export const rulesCategoryEnum = pgEnum("category", [
  "whole place",
  "students",
  "employees",
]);
