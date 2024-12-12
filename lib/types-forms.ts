import { z } from "zod";
import {
  checkAttachmentFileType,
  checkCVFileType,
  checkImageFileType,
  MAX_FILE_SIZE_5MB,
} from "./utils";

// Use the format below for optional files
// instructor_cv: z
//   .any()
//   .refine(
//     (files) => files[0] == undefined || files[0]?.size < MAX_FILE_SIZE_5MB,
//     "File is too big! Max 5MB"
//   )
//   .refine(
//     (files) => files && checkCVFileType(files[0]?.name),
//     "Only .pdf, .docx formats are supported."
//   )
//   .nullish(),

// Use this for non-optional files
// instructor_cv: z
//   .any()
//   .refine(
//     (files) => files[0] == undefined || files[0]?.size < MAX_FILE_SIZE_5MB,
//     "File is too big! Max 5MB"
//   )
//   .refine(
//     (files) => files && checkCVFileType(files[0]?.name),
//     "Only .py, .js formats are supported."
//   ),

// Website Forms

export const FormSchemaAddReview = z.object({
  rev_fname: z.string().trim().min(1, "Required").max(50),
  rev_email: z.string().trim().min(1, "Required").max(50),
  rev_job: z.string().trim().min(1, "Required").max(50),
  rev_rate: z.string().trim().min(1, "Required").max(50),
  rev_desc: z.string().trim().min(1, "Required").max(50),
});

export type TFormSchemaAddReview = z.infer<typeof FormSchemaAddReview>;

export const FormSchemaContactForm = z.object({
  firstname: z.string().min(2).max(50),
  lastname: z.string().min(2).max(50),
  mobile: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  country: z.string().min(2).max(50),
  city: z.string().min(2).max(50),
});

export type TFormSchemaContactForm = z.infer<typeof FormSchemaContactForm>;

export const FormSchemaPendingFranchise = z.object({
  // Franchisee contact info
  applicant_name: z.string().trim().min(1, { message: "Required" }).max(50),
  applicant_email: z.string().trim().min(1, { message: "Required" }).max(50),
  applicant_whatsapp: z.string().trim().min(1, { message: "Required" }).max(50),
  applicant_address: z.string().trim().min(1, { message: "Required" }).max(50),
  // Applicant business info
  applicant_business_history: z.boolean(),
  applicant_business_history_description: z
    .string()
    .trim()
    .max(1000)
    .optional(),
  applicant_education_business_history: z.boolean(),
  applicant_education_business_history_description: z
    .string()
    .trim()
    .max(1000)
    .optional(),
  // Applicant financial info
  applicant_employment_status: z
    .string()
    .trim()
    .min(1, { message: "Required" })
    .max(50),
  applicant_investment_budget: z
    .string()
    .trim()
    .min(1, { message: "Required" })
    .max(50),
  applicant_has_financing: z.boolean(),
  // Franchise geographic info
  franchise_desired_location_city: z
    .string()
    .trim()
    .min(1, { message: "Required" })
    .max(50),
  franchise_desired_location_country: z
    .string()
    .trim()
    .min(1, { message: "Required" })
    .max(50),
  applicant_knows_competition_in_location: z.boolean(),
  applicant_knows_competition_in_location_description: z
    .string()
    .trim()
    .max(1000)
    .optional(),
  // Why PES?
  applicant_why_pes: z
    .string()
    .trim()
    .min(1, { message: "Required" })
    .max(1000),
  // Legal questions
  applicant_was_bankrupt: z.boolean(),
  applicant_was_bankrupt_description: z.string().trim().max(1000).optional(),
  applicant_was_in_lawsuit: z.boolean(),
  applicant_was_in_lawsuit_description: z.string().trim().max(1000).optional(),
  applicant_has_necessary_documents: z.boolean(),
  applicant_message: z.string().trim().max(1000).optional(),
  application_date: z.date(),
});

export type TFormSchemaPendingFranchise = z.infer<
  typeof FormSchemaPendingFranchise
>;

export const FormSchemaPendingPartnership = z.object({
  applicant_name: z.string().trim().min(1, { message: "Required" }).max(50),
  applicant_email: z.string().trim().min(1, { message: "Required" }).max(50),
  applicant_whatsapp: z.string().trim().min(1, { message: "Required" }).max(50),
  applicant_address: z.string().trim().min(1, { message: "Required" }).max(50),
  applicant_organization: z
    .string()
    .trim()
    .min(1, { message: "Required" })
    .max(50),
  applicant_position: z.string().trim().min(1, { message: "Required" }).max(50),
  partnership_type: z.string().trim().min(1, { message: "Required" }).max(50),
  //
  partnership_description: z
    .string()
    .trim()
    .min(1, { message: "Required" })
    .max(1000),
  partnership_goals: z
    .string()
    .trim()
    .min(1, { message: "Required" })
    .max(1000),
  partnership_start_date: z.date(),
  partnership_duration: z
    .string()
    .trim()
    .min(1, { message: "Required" })
    .max(50),
  //
  partnership_requirements: z
    .string()
    .trim()
    .min(1, { message: "Required" })
    .max(1000),
  applicant_message: z.string().max(1000).optional(),
  application_date: z.date(),
});

export type TFormSchemaPendingPartnership = z.infer<
  typeof FormSchemaPendingPartnership
>;

export const FormSchemaPendingEmployee = z.object({
  pemployee_nid: z.string().trim().min(1, { message: "Required" }).max(50), // Required employee NID
  pemployee_name: z.string().trim().min(1, { message: "Required" }).max(100), // Required employee name
  pemployee_email: z
    .string()
    .trim()
    .min(1, { message: "Required" })
    .email()
    .max(100), // Required employee email
  pemployee_gender: z.string().trim().min(1, { message: "Required" }).max(50), // Required gender
  pemployee_dateofbirth: z.date(), // Required date of birth
  pemployee_address: z.string().trim().min(1, { message: "Required" }).max(200), // Required home address
  pemployee_mobile: z.string().trim().min(1, { message: "Required" }).max(15), // Required mobile number
  pemployee_whatsapp: z.string().trim().min(1, { message: "Required" }).max(15), // Adjust for WhatsApp number format
  pemployee_dateofjoin: z.date(), // Required date of joining
  pemployee_salary: z.number().positive().nullish(), // Optional positive salary
  pemployee_img: z
    .any()
    .refine(
      (files) => files && files[0]?.size < MAX_FILE_SIZE_5MB,
      "File is too big! Max 5MB"
    )
    .refine(
      (files) => checkImageFileType(files[0]?.name, false),
      "Please upload an image under 5MB (webp, png, jpg)"
    )
    .nullish(),
  pemployee_education: z
    .string()
    .trim()
    .min(1, { message: "Required" })
    .max(100)
    .nullish(),
  pemployee_faculty: z.string().trim().min(1, { message: "Required" }).max(100),
  pemployee_cv: z
    .any()
    .refine(
      (files) => files[0] == undefined || files[0]?.size < MAX_FILE_SIZE_5MB,
      "File is too big! Max 5MB"
    )
    .refine(
      (files) => files && checkCVFileType(files[0]?.name),
      "Only .pdf, .docx formats are supported."
    )
    .nullish(),
  pemployee_major: z.string().trim().min(1, { message: "Required" }).max(100),
  pemployee_why_pes: z.string().max(1000).optional(),
});

export type TFormSchemaPendingEmployee = z.infer<
  typeof FormSchemaPendingEmployee
>;

// Platform backend requests forms

export const FormSchemaAddParent = z.object({
  id: z.string().nullish(),
  nid: z.string().min(1, { message: "Required" }).max(50),
  name: z.string().min(1, { message: "Required" }).max(50),
  email: z.string().email().min(1, { message: "Required" }).max(50),
  phone: z.string().min(1, { message: "Required" }).max(50),
  password: z.string().min(8).max(255), // Passwords should have a min length for security
  gender: z.string().min(1, { message: "Required" }).max(50),
  parent_education: z.string().max(50).optional(),
  parent_profession: z.string().max(50).optional(),
  parent_occupation: z.string().max(50).optional(),
  parent_income: z.string().max(50).optional(),
  parent_address: z.string().min(1, { message: "Required" }).max(50),
  // Date auto generates
  photo: z
    .any()
    .refine(
      (files) => files && files[0]?.size < MAX_FILE_SIZE_5MB,
      "File is too big! Max 5MB"
    )
    .refine(
      (files) => checkImageFileType(files[0]?.name, false),
      "Please upload an image under 5MB (webp, png, jpg)"
    )
    .nullish(),
  is_active: z.string().min(1, { message: "Required" }).max(50),
  referral: z.string().max(50).optional(),
  language: z.string().min(1, { message: "Required" }).max(50),
  timezone: z.string().min(1, { message: "Required" }).max(50),
  theme: z.string().min(1, { message: "Required" }).max(50),
  promocode: z.string().min(1, { message: "Required" }).max(50),
  num_of_children: z.string().min(1, { message: "Required" }).max(50),
  username: z.string().min(1, { message: "Required" }).max(50),
});

export type TFormSchemaAddParent = z.infer<typeof FormSchemaAddParent>;

export const FormSchemaAddStudent = z.object({
  id: z.string().nullish(),
  student_nid: z.string().trim().min(1, "Required").max(50),
  student_name: z.string().trim().min(1, "Required").max(50),
  gender: z.string().trim().min(1, "Required").max(50),
  student_dateofbirth: z.date().optional(),
  student_address: z.string().optional(),
  student_mobile: z.string().trim().min(1, "Required").max(50),
  student_whatsappnum: z.string().max(50).optional(),
  student_pic: z
    .any()
    .refine(
      (files) => files[0] == undefined || files[0]?.size < MAX_FILE_SIZE_5MB,
      "File is too big! Max 5MB"
    )
    .refine(
      (files) => files && checkImageFileType(files[0]?.name, false),
      "Only .pdf, .docx formats are supported."
    )
    .nullish(),
  student_dateofadmission: z.date(),
  student_prevschool: z.string().max(50).optional(),
  student_religion: z.string().max(50).optional(),
  student_diseases: z.string().optional(),
  student_laptop: z.string().trim().min(1, "Required").max(50),
  timezone: z.string().max(50).optional(),
  language: z.string().max(50).optional(),
  orphan: z.string().max(50).optional(),
  isactive: z.string().trim().min(1, "Required").max(50),
  theme: z.string().max(50).optional(),
  student_bloodgroup: z.string().max(50).optional(),
  student_feediscount: z.string().max(50).optional(),
  student_referralcode: z.string().max(50).optional(),
  student_totalsibs: z.string().trim().min(1, "Required").max(50),
  student_additionalnotes: z.string().max(50).optional(),
  student_email: z.string().email().trim().min(1, "Required").max(50),
  student_password: z.string().trim().min(1, "Required").max(256),
  student_familyid: z.string().max(50).optional(),
});

export type TFormSchemaAddStudent = z.infer<typeof FormSchemaAddStudent>;

const FormSchemaAddEmployee = z.object({
  user_type: z
    .string()
    .min(1, { message: "Required" })
    .max(50)
    .default("Instructor"), // Represents `user_role`, will be set by the form itself

  id: z.string().nullish(), // National ID (required)
  nid: z.string().trim().min(1, "Required"), // National ID (required)
  employee_name: z.string().trim().min(1, "Required"),
  employee_email: z.string().email("Invalid email address"),
  gender: z.string().trim().min(1, "Required"), // String gender field
  dateofbirth: z.date(),
  homeaddress: z.string().trim().min(1, "Required"),
  employee_salary: z.coerce.number().min(0, "Salary must be a positive number"),
  employee_mobilenum: z.string().trim().min(1, "Required"),
  joined_date: z.date(),
  employee_pic: z
    .any()
    .refine(
      (files) => checkImageFileType(files[0]?.name, false),
      "Please upload an image under 5MB (webp, png, jpg)"
    )
    .nullish(),
  fathername_husbandname: z.string().optional(), // Optional
  experience: z.string().trim().min(1, "Required"),
  religion: z.string().trim().min(1, "Required"),
  blood_group: z.string().trim().min(1, "Required"),
  education: z.string().trim().min(1, "Required"),
  username: z
    .string()
    .trim()
    .min(1, "Required")
    .max(50, "Username must be at most 50 characters"),
  password: z.string().trim().min(1, "Required"),
  //
  timezone: z.string().trim().min(1, { message: "Required" }).max(50),
  language: z.string().trim().min(1, { message: "Required" }).max(50),
  currency: z.string().trim().min(1, { message: "Required" }).max(50),
  theme: z.string().trim().min(1, { message: "Required" }).max(50),
});

export type TFormSchemaAddEmployee = z.infer<typeof FormSchemaAddEmployee>;

export const FormSchemaAddAdmin = z
  .object({
    admin_position: z.string().trim().min(1, { message: "Required" }).max(50),
    branch_id: z.string().trim().min(1, { message: "Required" }).max(50),
  })
  .merge(FormSchemaAddEmployee);

export type TFormSchemaAddAdmin = z.infer<typeof FormSchemaAddAdmin>;

export const FormSchemaAddInstructor = z
  .object({
    instructor_age: z.string().min(1, { message: "Required" }).max(50), // String to match the model's age field
    instructor_whatsapp: z.string().min(1, { message: "Required" }).max(50),
    instructor_faculty: z.string().min(1, { message: "Required" }).max(50),
    instructor_cv: z
      .any()
      .refine(
        (files) => files[0] == undefined || files[0]?.size < MAX_FILE_SIZE_5MB,
        "File is too big! Max 5MB"
      )
      .refine(
        (files) => files && checkCVFileType(files[0]?.name),
        "Only .pdf, .docx formats are supported."
      ),
    instructor_major: z.string().min(1, { message: "Required" }).max(50),
    theme: z.string().max(50),
  })
  .merge(FormSchemaAddEmployee);

export type TFormSchemaAddInstructor = z.infer<typeof FormSchemaAddInstructor>;

// Receptionist is the same as employee
export const FormSchemaAddReceptionist = z
  .object({})
  .merge(FormSchemaAddEmployee);

export type TFormSchemaAddReceptionist = z.infer<
  typeof FormSchemaAddReceptionist
>;

export const FormSchemaAddClass = z.object({
  id: z.string().optional(),
  class_name: z.string().trim().min(1, "Required").max(50), // Matches model's max length constraint
  class_fees: z.coerce.number().positive(), // Represents `class_fees` as a positive float
  program_id: z.string().trim().min(1, "Required"), // UUID format for foreign key to Programs
  instructor_id: z.string().trim().min(1, "Required").optional(), // UUID format, optional if not provided
  classbegindate: z.date(),
  classenddate: z.date(),
});

export type TFormSchemaAddClass = z.infer<typeof FormSchemaAddClass>;

// Base schema for common properties
const BaseQuestionSchema = z.object({
  id: z.string(),
  questionText: z.string(),
});

// MCQ Question Schema
const MCQQuestionSchema = BaseQuestionSchema.extend({
  type: z.literal("mcq"),
  options: z.array(z.string()),
  correctAnswer: z.string(),
});

// Essay Question Schema
const EssayQuestionSchema = BaseQuestionSchema.extend({
  type: z.literal("essay"),
  wordLimit: z.number().int().positive().optional(),
});

// True/False Question Schema
const TrueFalseQuestionSchema = BaseQuestionSchema.extend({
  type: z.literal("true_false"),
  correctAnswer: z.boolean(),
});

// Union schema for questions
const QuestionSchema = z.union([
  MCQQuestionSchema,
  EssayQuestionSchema,
  TrueFalseQuestionSchema,
]);

// Exam Schema
export const FormSchemaAddExam = z.object({
  id: z.string().optional(),
  quizname: z.string().trim().min(1, "Required"),
  quiz_type: z.string().trim().min(1, "Required"),
  timestamp: z.date().optional(),
  class_field: z.string().trim().min(1, "Required"),
  instructor_id: z.string().trim().min(1, "Required"),
  questions: z.array(QuestionSchema).min(1, "Quiz must have questions"),
  duration: z.coerce.number().min(60, "Must be at least 60"), // Duration in seconds
});

export type TFormSchemaAddExam = z.infer<typeof FormSchemaAddExam>;

// Answers for solved exam object

const MCQAnswerSchema = MCQQuestionSchema.extend({
  studentAnswer: z.string().trim().min(1, "Required"),
});
const EssayAnswerSchema = EssayQuestionSchema.extend({
  studentAnswer: z.string().trim().min(1, "Required"),
});
const TrueFalseAnswerSchema = TrueFalseQuestionSchema.extend({
  studentAnswer: z.boolean(),
});

const AnswerSchema = z.union([
  MCQAnswerSchema,
  EssayAnswerSchema,
  TrueFalseAnswerSchema,
]);

// Exam Schema, replaces default questions array with the one that includes student answers
export const FormSchemaSolvedExam = FormSchemaAddExam.merge(
  z.object({
    questions: z.array(AnswerSchema),
    student_id: z.string(),
    grade: z.number().optional(),
  })
);

export type TFormSchemaSolvedExam = z.infer<typeof FormSchemaSolvedExam>;

export const FormSchemaAddAssignment = z.object({
  assignment_id: z.string().nullish(),
  assignment_url: z.string().optional(), // Optional URL field
  assignment_duedate: z.date(), // Validated as date
  assignment_attachment: z
    .any()
    .refine(
      (files) => files[0] == undefined || files[0]?.size < MAX_FILE_SIZE_5MB,
      "File is too big! Max 5MB"
    )
    .refine(
      (files) => files && checkAttachmentFileType(files[0]?.name),
      "Only .rar, code file formats are supported."
    )
    .nullish(),
  assignment_description: z.string().optional(), // Optional text field
  subject_id: z.string().trim().min(1, "Required"), // Required foreign key reference
  class_id: z.string().trim().min(1, "Required"), // Required foreign key reference
  sent_by: z.string().trim().min(1, "Required"), // Required foreign key reference
});

export type TFormSchemaAddAssignment = z.infer<typeof FormSchemaAddAssignment>;

export const FormSchemaAddCertificate = z.object({
  certificate_id: z.string().trim().min(1, "Required"), // Optional, as it’s generated automatically
  serial_number: z.string().trim().min(1, "Required"),
  certificate_type: z.string().trim().min(1, "Required"),
  class_id: z.string().trim().min(1, "Required"), // Foreign key reference to class
  student_name: z.string().trim().min(1, "Required"),
  student_id: z.string().trim().min(1, "Required"), // Foreign key reference to student
});

export type TFormSchemaAddCertificate = z.infer<
  typeof FormSchemaAddCertificate
>;

// const FormSchemaAddProgram = z.object({
//   program_id: z.string().uuid().optional(), // Optional, as it’s generated automatically
//   program_name: z.string().min(1, "Program name is required"),
//   program_levels: z.string().min(1, "Program levels are required"),
//   program_price: z.number().min(0, "Program price must be a positive number"),
//   description: z.string().min(1, "Description is required"),
//   numberoflevels: z.string().min(1, "Number of levels is required"),
// });

// export type TFormSchemaAddProgram = z.infer<typeof FormSchemaAddProgram>;

export const FormSchemaAddSchedule = z.object({
  id: z.string().optional(),
  schedule_name: z.string().trim().min(1, "Required"),
  schedule_type: z.string().trim().min(1, "Required"),
  url: z
    .string()
    .trim()
    .min(1, "Required")
    .url("Invalid URL format")
    .optional(), // URL of the schedule
  timestamp: z.date(),
  instructor_id: z.string().trim().min(1, "Required"),
  class_field: z.string().trim().min(1, "Required"),
  description: z.string().optional(),
});

export type TFormSchemaAddSchedule = z.infer<typeof FormSchemaAddSchedule>;

const dateTimeFormatRegex = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/;

const scheduleDateTimeStringSchema = z
  .string()
  .refine(
    (value) => dateTimeFormatRegex.test(value), // Check format
    { message: "Invalid date format. Expected format: YYYY-MM-DD HH:mm" }
  )
  .refine(
    (value) => !isNaN(new Date(value.replace(" ", "T")).getTime()), // Check if it's a valid date
    { message: "Invalid date and time." }
  );

// Only for displaying events in the schedule

export const FormSchemaDisplayScheduleEvent = z.object({
  id: z.string(),
  title: z
    .string()
    .trim()
    .min(1, "Required")
    .max(100, "Event name must be less than 100 characters"),
  type: z
    .string()
    .trim()
    .min(1, "Required")
    .max(50, "Event type must be less than 50 characters"),
  start: scheduleDateTimeStringSchema,
  end: scheduleDateTimeStringSchema,
  people_invited: z
    .array(z.string())
    .nonempty("At least one person must be invited"),
  description: z
    .string()
    .max(500, "Description must be less than 500 characters")
    .optional(),
  scheduler_id: z.string(),
});

export type TFormSchemaDisplayScheduleEvent = z.infer<
  typeof FormSchemaDisplayScheduleEvent
>;

export const FormSchemaAddScheduleEvent = z
  .object({
    id: z.string().optional(),
    title: z
      .string()
      .trim()
      .min(1, "Required")
      .max(100, "Event name must be less than 100 characters"),
    type: z
      .string()
      .trim()
      .min(1, "Required")
      .max(50, "Event type must be less than 50 characters"),
    start: z
      .date()
      .refine((date) => date > new Date(), "Timestamp must be a future date"),
    end: z
      .date()
      .refine((date) => date > new Date(), "Timestamp must be a future date"),
    people_invited: z
      .array(z.string())
      .nonempty("At least one person must be invited"),
    description: z
      .string()
      .max(500, "Description must be less than 500 characters")
      .optional(),
    scheduler_id: z.string(),
  })
  .refine((data) => data.end > data.start, {
    message: "End date must be after start date",
    path: ["end"], // Points to the `end` field in the error message
  });

export type TFormSchemaAddScheduleEvent = z.infer<
  typeof FormSchemaAddScheduleEvent
>;

// Define the schema for program phases
const ProgramlevelSchema = z.object({
  level_id: z.string().optional(),
  level_name: z.string(),
  description: z.string().optional(),
  subjects: z.array(z.string().trim().min(1, "Required")),
  // sessions: z.array(FormSchemaAddSchedule), //removed sessions
});

// Define the schema for programs
export const FormSchemaAddProgram = z.object({
  program_id: z.string().optional(),
  program_name: z.string().trim().min(1, "Required"),
  program_levels: z
    .array(ProgramlevelSchema)
    .min(1, "The program must have at least one level"),
  program_price: z.string().trim().min(1, "Required"),
  description: z.string().trim().min(1, "Required"),
  duration: z.string().trim().min(1, "Required"),
  start_date: z.date().optional(),
});

export type TFormSchemaAddProgram = z.infer<typeof FormSchemaAddProgram>;

export const FormSchemaAddLog = z.object({
  id: z.string(), // Optional since it's auto-generated
  action: z.string().trim().min(1, "Required"),
  timestamp: z.date(),
  user_id: z.string().trim().min(1, "Required"),
  victim_id: z.string().trim().min(1, "Required"),
});

export type TFormSchemaAddLog = z.infer<typeof FormSchemaAddLog>;

export const FormSchemaAddMaterial = z.object({
  id: z.string().trim().min(1, "Required").optional(), // Optional since it's auto-generated
  attachment: z
    .any()
    .refine(
      (files) => files[0] == undefined || files[0]?.size < MAX_FILE_SIZE_5MB,
      "File is too big! Max 5MB"
    )
    .refine(
      (files) => files && checkAttachmentFileType(files[0]?.name),
      "Only .py, .js formats are supported."
    ),
  session_id: z.string().trim().min(1, "Required"),
  class_field: z.string().trim().min(1, "Required"),
  instructor_id: z.string().trim().min(1, "Required"),
});

export type TFormSchemaAddMaterial = z.infer<typeof FormSchemaAddMaterial>;

// Combination of LevelsProject and ProjectLevelMap models
export const FormSchemaAddProject = z.object({
  project_id: z.string().optional(),
  project_name: z.string().trim().min(1, "Required"),
  //
  level_id: z.string().optional(),
  //
  project_url: z.string().trim().min(1, "Required"),
  description: z.string().trim().min(1, "Required"),
  student_id: z.string().trim().min(1, "Required"),
  track_id: z.string().trim().min(1, "Required"),
  //
});

export type TFormSchemaAddProject = z.infer<typeof FormSchemaAddProject>;

// Registers

// Authentication

// Other

export const FormSchemaAddMeeting = z.object({
  sessionid: z.string(), // Optional as it’s auto-generated
  playback_start_time: z.string().datetime(), // Nullable and optional timestamp
  playback_end_timestamp: z.string().datetime(), // Nullable and optional timestamp
  session_time: z.string().datetime(), // Required timestamp
  deviceid: z.string(), // Nullable, optional field
  admin_id: z.string(), // Nullable and optionaloreign key
  user_id: z.string(), // Nullable and optional
});

export type TFormSchemaAddMeeting = z.infer<typeof FormSchemaAddMeeting>;
