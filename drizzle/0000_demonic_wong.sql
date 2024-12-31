CREATE TYPE "public"."currency" AS ENUM('EGP', 'USD', 'EUR', 'GBP');--> statement-breakpoint
CREATE TYPE "public"."language" AS ENUM('ar', 'eng');--> statement-breakpoint
CREATE TYPE "public"."roles" AS ENUM('superadmin', 'admin', 'receptionist', 'instructor', 'student', 'parent');--> statement-breakpoint
CREATE TYPE "public"."theme" AS ENUM('light', 'dark', 'system');--> statement-breakpoint
CREATE TYPE "public"."timezone" AS ENUM('UTC-12:00', 'UTC-11:00', 'UTC-10:00', 'UTC-09:00', 'UTC-08:00', 'UTC-07:00', 'UTC-06:00', 'UTC-05:00', 'UTC-04:00', 'UTC-03:00', 'UTC-02:00', 'UTC-01:00', 'UTC', 'UTC+01:00', 'UTC+02:00', 'UTC+03:00', 'UTC+04:00', 'UTC+05:00', 'UTC+06:00', 'UTC+07:00', 'UTC+08:00', 'UTC+09:00', 'UTC+10:00', 'UTC+11:00', 'UTC+12:00');--> statement-breakpoint
CREATE TABLE "instructors_to_programs" (
	"instructor_id" uuid NOT NULL,
	"program_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "program_stages" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" text,
	"id_program" uuid NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "programs" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"price" varchar(255) NOT NULL,
	"start" date,
	"end" date,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "instructors" (
	"faculty" varchar(255) NOT NULL,
	"university" varchar(255) NOT NULL,
	"specialty" varchar(255) NOT NULL,
	"salary" numeric NOT NULL,
	"id" uuid PRIMARY KEY NOT NULL,
	"username" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"first_name" varchar(255) NOT NULL,
	"last_name" varchar(255) NOT NULL,
	"date_of_birth" date NOT NULL,
	"gender" varchar(255) NOT NULL,
	"national_id" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"address_line_one" text NOT NULL,
	"address_line_two" text NOT NULL,
	"phone" varchar(255) NOT NULL,
	"whatsapp" varchar(255) NOT NULL,
	"github" varchar,
	"linkedin" varchar,
	"facebook" varchar,
	"instagram" varchar,
	"twitter" varchar,
	"image" text,
	"religion" varchar(255),
	"theme" "theme" DEFAULT 'light',
	"timezone" timezone,
	"language" "language" DEFAULT 'eng',
	"currency" "currency" DEFAULT 'EGP',
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
ALTER TABLE "instructors_to_programs" ADD CONSTRAINT "instructors_to_programs_instructor_id_instructors_id_fk" FOREIGN KEY ("instructor_id") REFERENCES "public"."instructors"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "instructors_to_programs" ADD CONSTRAINT "instructors_to_programs_program_id_programs_id_fk" FOREIGN KEY ("program_id") REFERENCES "public"."programs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "program_stages" ADD CONSTRAINT "program_stages_id_program_programs_id_fk" FOREIGN KEY ("id_program") REFERENCES "public"."programs"("id") ON DELETE no action ON UPDATE no action;