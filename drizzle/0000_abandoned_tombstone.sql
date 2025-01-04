CREATE TYPE "public"."assignment_status" AS ENUM('submitted', 'reviewed', 'due');--> statement-breakpoint
CREATE TYPE "public"."attendance_status" AS ENUM('present', 'absent', 'late');--> statement-breakpoint
CREATE TYPE "public"."class_transfer_status" AS ENUM('pending', 'approved', 'rejected');--> statement-breakpoint
CREATE TYPE "public"."currency" AS ENUM('EGP', 'USD', 'EUR', 'GBP');--> statement-breakpoint
CREATE TYPE "public"."fee_status" AS ENUM('fixed', 'editable');--> statement-breakpoint
CREATE TYPE "public"."franchise_application_status" AS ENUM('pending', 'agreement reached', 'rejected');--> statement-breakpoint
CREATE TYPE "public"."language" AS ENUM('ar', 'eng');--> statement-breakpoint
CREATE TYPE "public"."pending_instructor_status" AS ENUM('pending', 'interview successful', 'interview not successful', 'rejected');--> statement-breakpoint
CREATE TYPE "public"."review_status" AS ENUM('pending', 'approved', 'rejected');--> statement-breakpoint
CREATE TYPE "public"."roles" AS ENUM('superadmin', 'admin', 'receptionist', 'instructor', 'student', 'parent');--> statement-breakpoint
CREATE TYPE "public"."theme" AS ENUM('light', 'dark', 'system');--> statement-breakpoint
CREATE TYPE "public"."timezone" AS ENUM('UTC-12:00', 'UTC-11:00', 'UTC-10:00', 'UTC-09:00', 'UTC-08:00', 'UTC-07:00', 'UTC-06:00', 'UTC-05:00', 'UTC-04:00', 'UTC-03:00', 'UTC-02:00', 'UTC-01:00', 'UTC', 'UTC+01:00', 'UTC+02:00', 'UTC+03:00', 'UTC+04:00', 'UTC+05:00', 'UTC+06:00', 'UTC+07:00', 'UTC+08:00', 'UTC+09:00', 'UTC+10:00', 'UTC+11:00', 'UTC+12:00');--> statement-breakpoint
CREATE TYPE "public"."balance_type" AS ENUM('income', 'expense');--> statement-breakpoint
CREATE TYPE "public"."institute_application_status" AS ENUM('pending', 'approved', 'rejected');--> statement-breakpoint
CREATE TYPE "public"."category" AS ENUM('company-wide', 'students', 'employees');--> statement-breakpoint
CREATE TABLE "achievements" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" varchar(255) NOT NULL,
	"image" varchar(255) NOT NULL,
	"category" varchar(255)
);
--> statement-breakpoint
CREATE TABLE "assignments" (
	"id" uuid PRIMARY KEY NOT NULL,
	"url" varchar(255),
	"due_date" timestamp with time zone NOT NULL,
	"attachment" varchar(255),
	"description" varchar(255),
	"status" "assignment_status",
	"id_subject" uuid NOT NULL,
	"id_class" uuid NOT NULL,
	"id_instructor" uuid NOT NULL,
	"notes" varchar(255),
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "assignments_handed" (
	"id" uuid PRIMARY KEY NOT NULL,
	"url" varchar(255),
	"due_date" timestamp with time zone NOT NULL,
	"attachment" varchar(255),
	"description" varchar(255),
	"status" "assignment_status",
	"id_subject" uuid NOT NULL,
	"id_class" uuid NOT NULL,
	"id_instructor" uuid NOT NULL,
	"notes" varchar(255),
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp,
	"id_assignment" uuid NOT NULL,
	"id_student" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "feedback" (
	"id" uuid PRIMARY KEY NOT NULL,
	"grade" varchar(255) NOT NULL,
	"desc" varchar(255) NOT NULL,
	"id_assignment_handed" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "branches" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"logo" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"phone" varchar(255) NOT NULL,
	"website" varchar(255) NOT NULL,
	"address_line_one" varchar(255) NOT NULL,
	"address_line_two" varchar(255) NOT NULL,
	"country" varchar(255) NOT NULL,
	"id_institute" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "certificates" (
	"id" uuid PRIMARY KEY NOT NULL,
	"student_name" varchar(255) NOT NULL,
	"serial_number" varchar(255) NOT NULL,
	"certificate_type" varchar(255) NOT NULL,
	"id_class" uuid NOT NULL,
	"id_student" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "classes" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"times" varchar(255),
	"begin_date" date NOT NULL,
	"end_date" date NOT NULL,
	"id_program" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "transfer_class_applications" (
	"id" uuid PRIMARY KEY NOT NULL,
	"status" "class_transfer_status" DEFAULT 'pending' NOT NULL,
	"id_desired_class" uuid,
	"id_student" uuid NOT NULL,
	"id_current_class" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "class_sessions" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" varchar(255),
	"description" varchar(255),
	"start" timestamp with time zone,
	"end" timestamp with time zone,
	"id_class" uuid NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "students_to_class_sessions" (
	"student_id" uuid NOT NULL,
	"session_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "display_projects_images" (
	"id" uuid PRIMARY KEY NOT NULL,
	"src" varchar(255) NOT NULL,
	"description" varchar(255),
	"id_display_project" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "display_projects" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"url" varchar(255),
	"description" varchar(255) NOT NULL,
	"id_student" uuid NOT NULL,
	"id_track" uuid,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "instructors_attendance" (
	"id" uuid PRIMARY KEY NOT NULL,
	"status" "attendance_status" NOT NULL,
	"date" timestamp with time zone NOT NULL,
	"check_in" timestamp,
	"check_out" timestamp,
	"id_instructor" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "receptionists_attendance" (
	"id" uuid PRIMARY KEY NOT NULL,
	"status" "attendance_status" NOT NULL,
	"date" timestamp with time zone NOT NULL,
	"check_in" timestamp,
	"check_out" timestamp,
	"id_receptionist" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "essay_questions" (
	"id" uuid PRIMARY KEY NOT NULL,
	"id_exam" uuid NOT NULL,
	"question_text" varchar(255) NOT NULL,
	"word_limit" numeric NOT NULL,
	"points" numeric NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "essay_student_answers" (
	"id" uuid PRIMARY KEY NOT NULL,
	"answer" varchar(255) NOT NULL,
	"student_points" numeric,
	"id_essay_questions" uuid NOT NULL,
	"id_exam_submission" uuid NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "exam_submissions" (
	"id" uuid PRIMARY KEY NOT NULL,
	"status" varchar(100),
	"id_class" uuid NOT NULL,
	"id_student" uuid NOT NULL,
	"id_exam" uuid NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "exams" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"exam_type" varchar(100) NOT NULL,
	"id_class" uuid NOT NULL,
	"id_instructor" uuid NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "mcq_correct_answers" (
	"id" uuid PRIMARY KEY NOT NULL,
	"answer" varchar(255) NOT NULL,
	"id_mcq_questions" uuid NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "mcq_question_options" (
	"id" uuid PRIMARY KEY NOT NULL,
	"option" varchar(255) NOT NULL,
	"id_mcq_question" uuid NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "mcq_questions" (
	"id" uuid PRIMARY KEY NOT NULL,
	"id_exam" uuid NOT NULL,
	"question_text" varchar(255) NOT NULL,
	"points" numeric NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "mcq_student_answers" (
	"id" uuid PRIMARY KEY NOT NULL,
	"answer" varchar(255) NOT NULL,
	"student_points" numeric NOT NULL,
	"id_mcq_questions" uuid NOT NULL,
	"id_exam_submission" uuid NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "true_false_correct_answers" (
	"id" uuid PRIMARY KEY NOT NULL,
	"answer" boolean NOT NULL,
	"id_true_false_questions" uuid NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "true_false_questions" (
	"id" uuid PRIMARY KEY NOT NULL,
	"id_exam" uuid NOT NULL,
	"question_text" varchar(255) NOT NULL,
	"points" numeric NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "true_false_student_answers" (
	"id" uuid PRIMARY KEY NOT NULL,
	"answer" varchar(255) NOT NULL,
	"student_points" numeric NOT NULL,
	"id_true_false_questions" uuid NOT NULL,
	"id_exam_submission" uuid NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "families" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "balances" (
	"id" uuid PRIMARY KEY NOT NULL,
	"timestamp" timestamp with time zone NOT NULL,
	"type" "balance_type",
	"amount" numeric NOT NULL,
	"description" varchar(255) NOT NULL,
	"id_branch" uuid
);
--> statement-breakpoint
CREATE TABLE "chart_heads" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"type" "balance_type",
	"id_branch" uuid
);
--> statement-breakpoint
CREATE TABLE "institute_request" (
	"id" uuid PRIMARY KEY NOT NULL,
	"id_institute" uuid NOT NULL,
	"request" text NOT NULL,
	"max_students" integer DEFAULT 0,
	"max_parents" integer DEFAULT 0,
	"max_teachers" integer DEFAULT 0,
	"max_supervisors" integer DEFAULT 0,
	"max_classes" integer DEFAULT 0,
	"max_grades" integer DEFAULT 0,
	"status" "institute_application_status",
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "institutes" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"logo" varchar(255),
	"email" varchar(255) NOT NULL,
	"address_line_one" varchar(255) NOT NULL,
	"address_line_two" varchar(255) NOT NULL,
	"phone" varchar(255) NOT NULL,
	"website" varchar(255) NOT NULL,
	"country" varchar(255) NOT NULL,
	"max_students" integer DEFAULT 0,
	"max_teachers" integer DEFAULT 0,
	"max_grades" integer DEFAULT 0,
	"max_classes" integer DEFAULT 0,
	"max_parents" integer DEFAULT 0,
	"max_supervisors" integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE "instructor_calls" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" varchar(255),
	"description" varchar(255),
	"start" timestamp with time zone,
	"end" timestamp with time zone,
	"id_instructor" uuid NOT NULL,
	"id_student" uuid,
	"id_parent" uuid,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "map_student_achievements_students" (
	"student_id" uuid NOT NULL,
	"student_achievement_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "map_classes_instructors" (
	"instructor_id" uuid NOT NULL,
	"class_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "map_classes_students" (
	"student_id" uuid NOT NULL,
	"class_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "map_exams_students" (
	"student_id" uuid NOT NULL,
	"exam_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "map_materials_class_sessions" (
	"class_session_id" uuid NOT NULL,
	"material_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "map_materials_students" (
	"student_id" uuid NOT NULL,
	"material_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "map_programs_instructors" (
	"instructor_id" uuid NOT NULL,
	"program_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "map_classes_stages" (
	"stage_id" uuid NOT NULL,
	"class_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "map_programs_stages" (
	"stage_id" uuid NOT NULL,
	"program_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "map_subjects_stages" (
	"stage_id" uuid NOT NULL,
	"subject_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "materials" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"attachment" varchar(255) NOT NULL,
	"id_instructor" uuid NOT NULL,
	"admin_only" boolean DEFAULT true NOT NULL
);
--> statement-breakpoint
CREATE TABLE "class_announcements" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" varchar(255) DEFAULT 'Important Announcement!' NOT NULL,
	"content" varchar(1000) NOT NULL,
	"id_class" uuid NOT NULL,
	"id_instructor" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "newsletter_subscription" (
	"id" uuid PRIMARY KEY NOT NULL,
	"email" varchar(255) NOT NULL,
	"first_name" varchar(255) NOT NULL,
	"last_name" varchar(255) NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "otp" (
	"id" uuid PRIMARY KEY NOT NULL,
	"email" varchar(255) NOT NULL,
	"otp" varchar(6) NOT NULL,
	"was_used" boolean DEFAULT false NOT NULL,
	"expires_at" timestamp,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "rules_and_regulations" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL,
	"content" varchar(1000) NOT NULL,
	"category" "category" DEFAULT 'company-wide' NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "program_stages" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" text,
	"num_of_weeks" numeric NOT NULL,
	"price" double precision NOT NULL,
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
	"start" date,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "projects" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"url" text,
	"description" text NOT NULL,
	"id_student" uuid NOT NULL,
	"id_program_stage" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "reviews" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"text" varchar(255) NOT NULL,
	"rating" numeric,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "attendances" (
	"id" uuid PRIMARY KEY NOT NULL,
	"status" "attendance_status" NOT NULL,
	"date" timestamp with time zone NOT NULL,
	"id_class" uuid NOT NULL,
	"id_student" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "subjects" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "submissions_contact_us" (
	"id" uuid PRIMARY KEY NOT NULL,
	"first_name" varchar(255) NOT NULL,
	"last_name" varchar(255) NOT NULL,
	"mobile" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"country" varchar(255) NOT NULL,
	"city" varchar(255) NOT NULL,
	"message" varchar(255) NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "tracks" (
	"id" uuid PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "admins_educational" (
	"id" uuid PRIMARY KEY NOT NULL,
	"role" "roles" NOT NULL,
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
	"notes" varchar(255),
	"theme" "theme" DEFAULT 'light',
	"timezone" timezone,
	"language" "language",
	"currency" "currency",
	"active" boolean DEFAULT true NOT NULL,
	"id_institute" uuid NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "admins_financial" (
	"id" uuid PRIMARY KEY NOT NULL,
	"role" "roles" NOT NULL,
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
	"notes" varchar(255),
	"theme" "theme" DEFAULT 'light',
	"timezone" timezone,
	"language" "language",
	"currency" "currency",
	"active" boolean DEFAULT true NOT NULL,
	"id_institute" uuid NOT NULL,
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
	"role" "roles" NOT NULL,
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
	"notes" varchar(255),
	"theme" "theme" DEFAULT 'light',
	"timezone" timezone,
	"language" "language",
	"currency" "currency",
	"active" boolean DEFAULT true NOT NULL,
	"id_institute" uuid NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "parent" (
	"referral_code" varchar(255) NOT NULL,
	"id" uuid PRIMARY KEY NOT NULL,
	"role" "roles" NOT NULL,
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
	"notes" varchar(255),
	"theme" "theme" DEFAULT 'light',
	"timezone" timezone,
	"language" "language",
	"currency" "currency",
	"active" boolean DEFAULT true NOT NULL,
	"id_institute" uuid NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "receptionists" (
	"id" uuid PRIMARY KEY NOT NULL,
	"role" "roles" NOT NULL,
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
	"notes" varchar(255),
	"theme" "theme" DEFAULT 'light',
	"timezone" timezone,
	"language" "language",
	"currency" "currency",
	"active" boolean DEFAULT true NOT NULL,
	"id_institute" uuid NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "students" (
	"referral_code" varchar(255) NOT NULL,
	"diseases" varchar(255) NOT NULL,
	"has_laptop" boolean DEFAULT false NOT NULL,
	"sibling_count" numeric,
	"id_family" uuid,
	"id" uuid PRIMARY KEY NOT NULL,
	"role" "roles" NOT NULL,
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
	"notes" varchar(255),
	"theme" "theme" DEFAULT 'light',
	"timezone" timezone,
	"language" "language",
	"currency" "currency",
	"active" boolean DEFAULT true NOT NULL,
	"id_institute" uuid NOT NULL,
	"updated_at" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
ALTER TABLE "assignments" ADD CONSTRAINT "assignments_id_subject_subjects_id_fk" FOREIGN KEY ("id_subject") REFERENCES "public"."subjects"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "assignments" ADD CONSTRAINT "assignments_id_class_classes_id_fk" FOREIGN KEY ("id_class") REFERENCES "public"."classes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "assignments" ADD CONSTRAINT "assignments_id_instructor_instructors_id_fk" FOREIGN KEY ("id_instructor") REFERENCES "public"."instructors"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "assignments_handed" ADD CONSTRAINT "assignments_handed_id_subject_subjects_id_fk" FOREIGN KEY ("id_subject") REFERENCES "public"."subjects"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "assignments_handed" ADD CONSTRAINT "assignments_handed_id_class_classes_id_fk" FOREIGN KEY ("id_class") REFERENCES "public"."classes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "assignments_handed" ADD CONSTRAINT "assignments_handed_id_instructor_instructors_id_fk" FOREIGN KEY ("id_instructor") REFERENCES "public"."instructors"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "assignments_handed" ADD CONSTRAINT "assignments_handed_id_assignment_assignments_id_fk" FOREIGN KEY ("id_assignment") REFERENCES "public"."assignments"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "assignments_handed" ADD CONSTRAINT "assignments_handed_id_student_students_id_fk" FOREIGN KEY ("id_student") REFERENCES "public"."students"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "feedback" ADD CONSTRAINT "feedback_id_assignment_handed_assignments_handed_id_fk" FOREIGN KEY ("id_assignment_handed") REFERENCES "public"."assignments_handed"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "branches" ADD CONSTRAINT "branches_id_institute_institutes_id_fk" FOREIGN KEY ("id_institute") REFERENCES "public"."institutes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "certificates" ADD CONSTRAINT "certificates_id_class_classes_id_fk" FOREIGN KEY ("id_class") REFERENCES "public"."classes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "certificates" ADD CONSTRAINT "certificates_id_student_students_id_fk" FOREIGN KEY ("id_student") REFERENCES "public"."students"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "classes" ADD CONSTRAINT "classes_id_program_programs_id_fk" FOREIGN KEY ("id_program") REFERENCES "public"."programs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transfer_class_applications" ADD CONSTRAINT "transfer_class_applications_id_desired_class_classes_id_fk" FOREIGN KEY ("id_desired_class") REFERENCES "public"."classes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transfer_class_applications" ADD CONSTRAINT "transfer_class_applications_id_student_students_id_fk" FOREIGN KEY ("id_student") REFERENCES "public"."students"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transfer_class_applications" ADD CONSTRAINT "transfer_class_applications_id_current_class_classes_id_fk" FOREIGN KEY ("id_current_class") REFERENCES "public"."classes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "class_sessions" ADD CONSTRAINT "class_sessions_id_class_classes_id_fk" FOREIGN KEY ("id_class") REFERENCES "public"."classes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "students_to_class_sessions" ADD CONSTRAINT "students_to_class_sessions_student_id_students_id_fk" FOREIGN KEY ("student_id") REFERENCES "public"."students"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "students_to_class_sessions" ADD CONSTRAINT "students_to_class_sessions_session_id_class_sessions_id_fk" FOREIGN KEY ("session_id") REFERENCES "public"."class_sessions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "display_projects_images" ADD CONSTRAINT "display_projects_images_id_display_project_display_projects_id_fk" FOREIGN KEY ("id_display_project") REFERENCES "public"."display_projects"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "display_projects" ADD CONSTRAINT "display_projects_id_student_students_id_fk" FOREIGN KEY ("id_student") REFERENCES "public"."students"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "display_projects" ADD CONSTRAINT "display_projects_id_track_tracks_id_fk" FOREIGN KEY ("id_track") REFERENCES "public"."tracks"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "instructors_attendance" ADD CONSTRAINT "instructors_attendance_id_instructor_instructors_id_fk" FOREIGN KEY ("id_instructor") REFERENCES "public"."instructors"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "receptionists_attendance" ADD CONSTRAINT "receptionists_attendance_id_receptionist_receptionists_id_fk" FOREIGN KEY ("id_receptionist") REFERENCES "public"."receptionists"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "essay_questions" ADD CONSTRAINT "essay_questions_id_exam_exams_id_fk" FOREIGN KEY ("id_exam") REFERENCES "public"."exams"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "essay_student_answers" ADD CONSTRAINT "essay_student_answers_id_essay_questions_essay_questions_id_fk" FOREIGN KEY ("id_essay_questions") REFERENCES "public"."essay_questions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "essay_student_answers" ADD CONSTRAINT "essay_student_answers_id_exam_submission_exam_submissions_id_fk" FOREIGN KEY ("id_exam_submission") REFERENCES "public"."exam_submissions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "exam_submissions" ADD CONSTRAINT "exam_submissions_id_class_classes_id_fk" FOREIGN KEY ("id_class") REFERENCES "public"."classes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "exam_submissions" ADD CONSTRAINT "exam_submissions_id_student_students_id_fk" FOREIGN KEY ("id_student") REFERENCES "public"."students"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "exam_submissions" ADD CONSTRAINT "exam_submissions_id_exam_exams_id_fk" FOREIGN KEY ("id_exam") REFERENCES "public"."exams"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "exams" ADD CONSTRAINT "exams_id_class_classes_id_fk" FOREIGN KEY ("id_class") REFERENCES "public"."classes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "exams" ADD CONSTRAINT "exams_id_instructor_instructors_id_fk" FOREIGN KEY ("id_instructor") REFERENCES "public"."instructors"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "mcq_correct_answers" ADD CONSTRAINT "mcq_correct_answers_id_mcq_questions_mcq_questions_id_fk" FOREIGN KEY ("id_mcq_questions") REFERENCES "public"."mcq_questions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "mcq_question_options" ADD CONSTRAINT "mcq_question_options_id_mcq_question_mcq_questions_id_fk" FOREIGN KEY ("id_mcq_question") REFERENCES "public"."mcq_questions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "mcq_questions" ADD CONSTRAINT "mcq_questions_id_exam_exams_id_fk" FOREIGN KEY ("id_exam") REFERENCES "public"."exams"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "mcq_student_answers" ADD CONSTRAINT "mcq_student_answers_id_mcq_questions_mcq_questions_id_fk" FOREIGN KEY ("id_mcq_questions") REFERENCES "public"."mcq_questions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "mcq_student_answers" ADD CONSTRAINT "mcq_student_answers_id_exam_submission_exam_submissions_id_fk" FOREIGN KEY ("id_exam_submission") REFERENCES "public"."exam_submissions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "true_false_correct_answers" ADD CONSTRAINT "true_false_correct_answers_id_true_false_questions_true_false_questions_id_fk" FOREIGN KEY ("id_true_false_questions") REFERENCES "public"."true_false_questions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "true_false_questions" ADD CONSTRAINT "true_false_questions_id_exam_exams_id_fk" FOREIGN KEY ("id_exam") REFERENCES "public"."exams"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "true_false_student_answers" ADD CONSTRAINT "true_false_student_answers_id_true_false_questions_true_false_questions_id_fk" FOREIGN KEY ("id_true_false_questions") REFERENCES "public"."true_false_questions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "true_false_student_answers" ADD CONSTRAINT "true_false_student_answers_id_exam_submission_exam_submissions_id_fk" FOREIGN KEY ("id_exam_submission") REFERENCES "public"."exam_submissions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "balances" ADD CONSTRAINT "balances_id_branch_branches_id_fk" FOREIGN KEY ("id_branch") REFERENCES "public"."branches"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "chart_heads" ADD CONSTRAINT "chart_heads_id_branch_branches_id_fk" FOREIGN KEY ("id_branch") REFERENCES "public"."branches"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "institute_request" ADD CONSTRAINT "institute_request_id_institute_institutes_id_fk" FOREIGN KEY ("id_institute") REFERENCES "public"."institutes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "instructor_calls" ADD CONSTRAINT "instructor_calls_id_instructor_instructors_id_fk" FOREIGN KEY ("id_instructor") REFERENCES "public"."instructors"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "instructor_calls" ADD CONSTRAINT "instructor_calls_id_student_students_id_fk" FOREIGN KEY ("id_student") REFERENCES "public"."students"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "instructor_calls" ADD CONSTRAINT "instructor_calls_id_parent_parent_id_fk" FOREIGN KEY ("id_parent") REFERENCES "public"."parent"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "map_student_achievements_students" ADD CONSTRAINT "map_student_achievements_students_student_id_students_id_fk" FOREIGN KEY ("student_id") REFERENCES "public"."students"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "map_student_achievements_students" ADD CONSTRAINT "map_student_achievements_students_student_achievement_id_achievements_id_fk" FOREIGN KEY ("student_achievement_id") REFERENCES "public"."achievements"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "map_classes_instructors" ADD CONSTRAINT "map_classes_instructors_instructor_id_instructors_id_fk" FOREIGN KEY ("instructor_id") REFERENCES "public"."instructors"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "map_classes_instructors" ADD CONSTRAINT "map_classes_instructors_class_id_classes_id_fk" FOREIGN KEY ("class_id") REFERENCES "public"."classes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "map_classes_students" ADD CONSTRAINT "map_classes_students_student_id_students_id_fk" FOREIGN KEY ("student_id") REFERENCES "public"."students"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "map_classes_students" ADD CONSTRAINT "map_classes_students_class_id_classes_id_fk" FOREIGN KEY ("class_id") REFERENCES "public"."classes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "map_exams_students" ADD CONSTRAINT "map_exams_students_student_id_students_id_fk" FOREIGN KEY ("student_id") REFERENCES "public"."students"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "map_exams_students" ADD CONSTRAINT "map_exams_students_exam_id_exams_id_fk" FOREIGN KEY ("exam_id") REFERENCES "public"."exams"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "map_materials_class_sessions" ADD CONSTRAINT "map_materials_class_sessions_class_session_id_class_sessions_id_fk" FOREIGN KEY ("class_session_id") REFERENCES "public"."class_sessions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "map_materials_class_sessions" ADD CONSTRAINT "map_materials_class_sessions_material_id_materials_id_fk" FOREIGN KEY ("material_id") REFERENCES "public"."materials"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "map_materials_students" ADD CONSTRAINT "map_materials_students_student_id_students_id_fk" FOREIGN KEY ("student_id") REFERENCES "public"."students"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "map_materials_students" ADD CONSTRAINT "map_materials_students_material_id_materials_id_fk" FOREIGN KEY ("material_id") REFERENCES "public"."materials"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "map_programs_instructors" ADD CONSTRAINT "map_programs_instructors_instructor_id_instructors_id_fk" FOREIGN KEY ("instructor_id") REFERENCES "public"."instructors"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "map_programs_instructors" ADD CONSTRAINT "map_programs_instructors_program_id_programs_id_fk" FOREIGN KEY ("program_id") REFERENCES "public"."programs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "map_classes_stages" ADD CONSTRAINT "map_classes_stages_stage_id_program_stages_id_fk" FOREIGN KEY ("stage_id") REFERENCES "public"."program_stages"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "map_classes_stages" ADD CONSTRAINT "map_classes_stages_class_id_classes_id_fk" FOREIGN KEY ("class_id") REFERENCES "public"."classes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "map_programs_stages" ADD CONSTRAINT "map_programs_stages_stage_id_program_stages_id_fk" FOREIGN KEY ("stage_id") REFERENCES "public"."program_stages"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "map_programs_stages" ADD CONSTRAINT "map_programs_stages_program_id_programs_id_fk" FOREIGN KEY ("program_id") REFERENCES "public"."programs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "map_subjects_stages" ADD CONSTRAINT "map_subjects_stages_stage_id_program_stages_id_fk" FOREIGN KEY ("stage_id") REFERENCES "public"."program_stages"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "map_subjects_stages" ADD CONSTRAINT "map_subjects_stages_subject_id_subjects_id_fk" FOREIGN KEY ("subject_id") REFERENCES "public"."subjects"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "materials" ADD CONSTRAINT "materials_id_instructor_instructors_id_fk" FOREIGN KEY ("id_instructor") REFERENCES "public"."instructors"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "class_announcements" ADD CONSTRAINT "class_announcements_id_class_classes_id_fk" FOREIGN KEY ("id_class") REFERENCES "public"."classes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "class_announcements" ADD CONSTRAINT "class_announcements_id_instructor_instructors_id_fk" FOREIGN KEY ("id_instructor") REFERENCES "public"."instructors"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "program_stages" ADD CONSTRAINT "program_stages_id_program_programs_id_fk" FOREIGN KEY ("id_program") REFERENCES "public"."programs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects" ADD CONSTRAINT "projects_id_student_students_id_fk" FOREIGN KEY ("id_student") REFERENCES "public"."students"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects" ADD CONSTRAINT "projects_id_program_stage_program_stages_id_fk" FOREIGN KEY ("id_program_stage") REFERENCES "public"."program_stages"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "attendances" ADD CONSTRAINT "attendances_id_class_classes_id_fk" FOREIGN KEY ("id_class") REFERENCES "public"."classes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "attendances" ADD CONSTRAINT "attendances_id_student_students_id_fk" FOREIGN KEY ("id_student") REFERENCES "public"."students"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "admins_educational" ADD CONSTRAINT "admins_educational_id_institute_institutes_id_fk" FOREIGN KEY ("id_institute") REFERENCES "public"."institutes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "admins_financial" ADD CONSTRAINT "admins_financial_id_institute_institutes_id_fk" FOREIGN KEY ("id_institute") REFERENCES "public"."institutes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "instructors" ADD CONSTRAINT "instructors_id_institute_institutes_id_fk" FOREIGN KEY ("id_institute") REFERENCES "public"."institutes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "parent" ADD CONSTRAINT "parent_id_institute_institutes_id_fk" FOREIGN KEY ("id_institute") REFERENCES "public"."institutes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "receptionists" ADD CONSTRAINT "receptionists_id_institute_institutes_id_fk" FOREIGN KEY ("id_institute") REFERENCES "public"."institutes"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "students" ADD CONSTRAINT "students_id_family_families_id_fk" FOREIGN KEY ("id_family") REFERENCES "public"."families"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "students" ADD CONSTRAINT "students_id_institute_institutes_id_fk" FOREIGN KEY ("id_institute") REFERENCES "public"."institutes"("id") ON DELETE no action ON UPDATE no action;