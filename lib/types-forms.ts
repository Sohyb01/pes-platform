import { z } from "zod";
import {
  checkCVFileType,
  checkImageFileType,
  MAX_FILE_SIZE_5MB,
} from "./utils";

// Website Forms
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
});

export type TFormSchemaPendingFranchise = z.infer<
  typeof FormSchemaPendingFranchise
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
      (files) => checkImageFileType(files[0]?.name, false),
      "Please upload an image under 5MB (webp, png, jpg)"
    )
    .nullish(),
  // pemployee_experience: z
  //   .any()
  //   // Use this to valdidate if a file is not required
  //   .refine((files) => {
  //     if (files?.length == 0) return true;
  //     if (files[0]?.size < MAX_FILE_SIZE_5MB) {
  //       return true;
  //     } else return false;
  //   }, "File is too big! Max 5MB")
  //   .refine((files) => {
  //     if (typeof files == undefined) return true;
  //     if (checkCVFileType(files[0]?.name)) {
  //       return true;
  //     } else return false;
  //   }, "Only .pdf, .docx formats are supported.")
  //   .nullish(),
  pemployee_education: z
    .string()
    .trim()
    .min(1, { message: "Required" })
    .max(100)
    .nullish(),
  pemployee_faculty: z.string().trim().min(1, { message: "Required" }).max(100),
  pemployee_cv: z
    .any()
    .refine((files) => files && files?.length, "Required")
    .refine(
      (files) => files && files[0]?.size < MAX_FILE_SIZE_5MB,
      "File is too big! Max 5MB"
    )
    .refine(
      (files) => files && checkCVFileType(files[0]?.name),
      "Only .pdf, .docx formats are supported."
    ),
  pemployee_major: z.string().trim().min(1, { message: "Required" }).max(100),
  pemployee_why_pes: z.string().max(1000).optional(),
});

// Platform backend requests forms
export type TFormSchemaPendingEmployee = z.infer<
  typeof FormSchemaPendingEmployee
>;

export const FormSchemaRegisterParent = z.object({
  parent_nid: z.string().max(50),
  parent_name: z.string().max(100),
  parent_email: z.string().email().max(100),
  parent_phone: z.string().max(15), // Adjust as needed for phone format
  parent_password: z.string().min(8), // Minimum length for passwords
  gender: z.string().max(10), // Adjust based on expected values (e.g., 'Male', 'Female', etc.)
  parent_education: z.string().max(100),
  parent_profession: z.string().max(100),
  parent_occupation: z.string().max(100),
  parent_income: z.number().positive(), // Assuming income is a positive number
  parent_address: z.string().max(200),
  joined_date: z.string().max(50), // Adjust as per date format
  parent_photo: z.string().url().max(200), // Assuming photo is a URL
  is_active: z.boolean(),
  parent_referral: z.string().max(50).nullish(), // Assuming referral is optional
  language: z.string().max(50).nullish(), // Assuming language is optional
  timezone: z.string().max(50).nullish(), // Assuming timezone is optional
  theme: z.string().max(50).nullish(), // Assuming theme is optional
  parent_promocode: z.string().max(50).nullish(), // Assuming promo code is optional
  parent_numofchildren: z.number().int().nonnegative(), // Assuming this is a non-negative integer
});

export type TFormSchemaRegisterParent = z.infer<
  typeof FormSchemaRegisterParent
>;

export const FormSchemaAddParent = z.object({
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

export default FormSchemaAddParent;

export type TFormSchemaAddParent = z.infer<typeof FormSchemaAddParent>;

export const FormSchemaLogin = z.object({
  email: z.string().email().max(100).nullish(), // Optional email field
  password: z.string().nullish(), // Optional password field with minimum length
  user_type: z.string().max(50).nullish(), // Optional user type field
});

export type TFormSchemaLogin = z.infer<typeof FormSchemaLogin>;

export const FormSchemaAddPartner = z.object({
  partner_name: z.string().max(100).nullish(), // Adjust max length as needed
  partner_logo: z.string().url().nullish(), // Assuming logo is a URL
});

export type TFormSchemaAddPartner = z.infer<typeof FormSchemaAddPartner>;

export const FormSchemaAddFranchise = z.object({
  name: z.string().trim().min(1, { message: "Required" }).max(100).nullish(), // Optional name field
  profession: z.string().trim().min(1, { message: "Required" }).max(100),
  franchise_location: z
    .string()
    .trim()
    .min(1, { message: "Required" })
    .max(200),
  budget: z.number().positive(),
  motivation: z.string().trim().min(1, { message: "Required" }).max(1000),
  expectations: z.string().trim().min(1, { message: "Required" }).max(1000),
  connection_type: z.string().trim().min(1, { message: "Required" }).max(50),
  requirement_stage: z.string().trim().min(1, { message: "Required" }).max(50),
  comments: z.string().trim().min(1, { message: "Required" }).max(1000),
  email: z.string().trim().min(1, { message: "Required" }).email().max(50),
  phone_number: z.string().trim().min(1, { message: "Required" }).max(15),
  city: z.string().trim().min(1, { message: "Required" }).max(50),
  country: z.string().trim().min(1, { message: "Required" }).max(50),
});

export type TFormSchemaAddFranchise = z.infer<typeof FormSchemaAddFranchise>;

export const FormSchemaPendingSchool = z.object({
  school_name: z.string().max(100), // Required school name
  contact_person: z.string().max(100), // Required contact person
  phone_number: z.string().max(15), // Required phone number
  plans: z.string().max(500), // Required plans
  email: z.string().email().max(100), // Required email
  proficiency_level: z.string().max(50), // Required proficiency level
  budget: z.number().positive(), // Required positive budget
  grades: z.string().max(200), // Required grades
  capacity: z.number().int().positive(), // Required positive capacity
  expectations: z.string().max(500), // Required expectations
});

export type TFormSchemaPendingSchool = z.infer<typeof FormSchemaPendingSchool>;

export const FormSchemaAddStudent = z.object({
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
      (files) => checkImageFileType(files[0]?.name, false),
      "Please upload an image under 5MB (webp, png, jpg)"
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

export const FormSchemaAddFamily = z.object({
  father_id: z.string().nullish(), // Optional father ID
  mother_id: z.string().nullish(), // Optional mother ID
  student_id: z.string().max(50), // Required student ID
});

export type TFormSchemaAddFamily = z.infer<typeof FormSchemaAddFamily>;

export const FormSchemaAddProgram = z.object({
  program_name: z.string().max(100),
  program_levels: z.string().max(50), // Adjust as needed based on expected format
  program_price: z.number().positive(), // Assuming price is a positive number
  description: z.string().max(500), // Adjust as needed
  numberoflevels: z.number().int().positive(), // Assuming this is a positive integer
});

export type TFormSchemaAddProgram = z.infer<typeof FormSchemaAddProgram>;

export const FormSchemaAddClass = z.object({
  class_name: z.string().max(100), // Adjust max length as needed
  class_fees: z.number().positive(), // Assuming fees are positive numbers
  program_id: z.string(), // Assuming program_id is a string
  instructor_id: z.string().nullish(), // Optional instructor ID
  classbegindate: z.string().max(50), // Adjust as per date format
  classenddate: z.string().max(50), // Adjust as per date format
});

export type TFormSchemaAddClass = z.infer<typeof FormSchemaAddClass>;

export const FormSchemaMapStudentToClass = z.object({
  student_id: z.string().max(50), // Required student ID
  class_id: z.string().max(50), // Required class ID
});

export type TFormSchemaMapStudentToClass = z.infer<
  typeof FormSchemaMapStudentToClass
>;

export const FormSchemaGenerateCertificates = z.object({
  class_id: z.string().max(50), // Required class ID
});

export type TFormSchemaGenerateCertificates = z.infer<
  typeof FormSchemaGenerateCertificates
>;

export const FormSchemaAddRole = z.object({
  role_name: z.string().max(100), // Required role name
});

export type TFormSchemaAddRole = z.infer<typeof FormSchemaAddRole>;

export const FormSchemaAddEmployee = z.object({
  employee_nid: z.string().trim().min(1, { message: "Required" }).max(50), // Required employee NID
  employee_name: z.string().trim().min(1, { message: "Required" }).max(100), // Required employee name
  employee_email: z
    .string()
    .trim()
    .min(1, { message: "Required" })
    .email()
    .max(100), // Required employee email
  employee_gender: z.string().trim().min(1, { message: "Required" }).max(10), // Required gender
  employee_dateofbirth: z.date(), // Required date of birth
  employee_address: z.string().trim().min(1, { message: "Required" }).max(200), // Required home address
  employee_mobile: z.string().trim().min(1, { message: "Required" }).max(15), // Required mobile number
  employee_whatsapp: z.string().trim().min(1, { message: "Required" }).max(15), // Adjust for WhatsApp number format
  employee_dateofjoin: z.date(), // Required date of joining
  employee_roleid: z.string().trim().min(1, { message: "Required" }).max(50), // Required role ID
  employee_password: z.string().trim().min(1, { message: "Required" }).min(8), // Minimum length for passwords
  // Optional below
  employee_salary: z.number().positive().nullish(), // Optional positive salary
  employee_img: z
    .any()
    .refine(
      (files) => checkImageFileType(files[0]?.name, false),
      "Please upload an image under 5MB (webp, png, jpg)"
    )
    .nullish(),
  employee_fathername_husbandname: z
    .string()
    .trim()
    .min(1, { message: "Required" })
    .max(100)
    .nullish(),
  // employee_experience: z
  //   .any()
  //   // Use this to valdidate if a file is not required
  //   .refine((files) => {
  //     if (files?.length == 0) return true;
  //     if (files[0]?.size < MAX_FILE_SIZE_5MB) {
  //       return true;
  //     } else return false;
  //   }, "File is too big! Max 5MB")
  //   .refine((files) => {
  //     if (typeof files == undefined) return true;
  //     if (checkCVFileType(files[0]?.name)) {
  //       return true;
  //     } else return false;
  //   }, "Only .pdf, .docx formats are supported.")
  //   .nullish(),
  employee_religion: z
    .string()
    .trim()
    .min(1, { message: "Required" })
    .max(50)
    .nullish(),
  employee_blood_group: z
    .string()
    .trim()
    .min(1, { message: "Required" })
    .max(10)
    .nullish(),
  employee_education: z
    .string()
    .trim()
    .min(1, { message: "Required" })
    .max(100)
    .nullish(),
  employee_language: z
    .string()
    .trim()
    .min(1, { message: "Required" })
    .max(50)
    .nullish()
    .default("English"),
  employee_timezone: z
    .string()
    .trim()
    .min(1, { message: "Required" })
    .max(50)
    .nullish()
    .default("UTC"),
  employee_username: z
    .string()
    .trim()
    .min(1, { message: "Required" })
    .max(50)
    .nullish(),
  employee_currency: z
    .string()
    .trim()
    .min(1, { message: "Required" })
    .max(50)
    .nullish()
    .default("USD"),
  employee_theme: z
    .string()
    .trim()
    .min(1, { message: "Required" })
    .max(50)
    .nullish()
    .default("light"),
});

export const BasePropertiesAdmin = z.object({
  admin_position: z
    .string()
    .trim()
    .min(1, { message: "Required" })
    .max(50)
    .nullish()
    .default("Manager"),
});

export const FormSchemaAddAdmin =
  FormSchemaAddEmployee.merge(BasePropertiesAdmin);

export type TFormSchemaAddAdmin = z.infer<typeof FormSchemaAddAdmin>;

export const BasePropertiesInstructor = z.object({
  instructor_faculty: z
    .string()
    .trim()
    .min(1, { message: "Required" })
    .max(100),
  instructor_cv: z
    .any()
    .refine((files) => files && files?.length, "Required")
    .refine(
      (files) => files && files[0]?.size < MAX_FILE_SIZE_5MB,
      "File is too big! Max 5MB"
    )
    .refine(
      (files) => files && checkCVFileType(files[0]?.name),
      "Only .pdf, .docx formats are supported."
    ),
  instructor_major: z.string().trim().min(1, { message: "Required" }).max(100),
});

export const FormSchemaAddInstructor = FormSchemaAddEmployee.merge(
  BasePropertiesInstructor
);

export type TFormSchemaAddInstructor = z.infer<typeof FormSchemaAddInstructor>;

//
//
//
//
//

export type TFormSchemaAddEmployee = z.infer<typeof FormSchemaAddEmployee>;

export const FormSchemaMarkStudentAttendance = z.object({
  id: z.string().max(50), // Required student ID
  status: z.enum(["Present", "Absent", "Late"]), // Required status
  date: z.string().refine(
    (date) => {
      return !isNaN(Date.parse(date)); // Validate date format (YYYY-MM-DD)
    },
    {
      message: "Date must be in 'YYYY-MM-DD' format",
    }
  ), // Required date
});

export type TFormSchemaMarkStudentAttendance = z.infer<
  typeof FormSchemaMarkStudentAttendance
>;

export const FormSchemaMarkEmployeeAttendance = z.object({
  id: z.string().max(50), // Required employee ID
  status: z.enum(["Present", "Absent", "Late"]), // Required status
  date: z.string().refine(
    (date) => {
      return !isNaN(Date.parse(date)); // Validate date format (YYYY-MM-DD)
    },
    {
      message: "Date must be in 'YYYY-MM-DD' format",
    }
  ), // Required date
  check_in_time: z.string().nullish(), // Optional check-in time
  check_out_time: z.string().nullish(), // Optional check-out time
});

export type TFormSchemaMarkEmployeeAttendance = z.infer<
  typeof FormSchemaMarkEmployeeAttendance
>;

export const FormSchemaMarkAttendance = z.object({
  id: z.string().max(50), // Required ID for student or employee
  status: z.enum(["Present", "Absent", "Late"]), // Required status
  date: z.string().refine(
    (date) => {
      return !isNaN(Date.parse(date)); // Validate date format (YYYY-MM-DD)
    },
    {
      message: "Date must be in 'YYYY-MM-DD' format",
    }
  ), // Required date
  check_in_time: z.string().nullish(),
  check_out_time: z.string().nullish(), // Optional check-out time
});

export type TFormSchemaMarkAttendance = z.infer<
  typeof FormSchemaMarkAttendance
>;

export const FormSchemaRegisterForCourse = z.object({
  student_id: z.string().max(50), // Required student ID
  program_id: z.string().max(50), // Required program ID
});

export type TFormSchemaRegisterForCourse = z.infer<
  typeof FormSchemaRegisterForCourse
>;

export const FormSchemaAddContact = z.object({
  contact_name: z.string().min(1), // Required contact name
  phonenum: z.string().nullish(), // Optional phone number
  profile_photo: z.string().nullish(), // Optional profile photo URL
  host_id: z.string().nullish(), // Optional host ID
});

export type TFormSchemaAddContact = z.infer<typeof FormSchemaAddContact>;

export const FormSchemaAddConversation = z.object({
  conversation_name: z.string().min(1), // Required conversation name
  contact_id: z.string().min(1), // Required contact ID
  host_id: z.string().nullish(), // Optional host ID
});

export type TFormSchemaAddConversation = z.infer<
  typeof FormSchemaAddConversation
>;

export const FormSchemaSendMessage = z.object({
  conversation_id: z.string().min(1), // Required conversation ID
  message_content: z.string().min(1), // Required message content
  sender_id: z.string().min(1), // Required sender ID
});

export type TFormSchemaSendMessage = z.infer<typeof FormSchemaSendMessage>;

export const FormSchemaSendAttachment = z.object({
  conversation_id: z.string().min(1), // Required conversation ID
  attachment_data: z.string().min(1), // Required attachment data (could be a base64 string)
  sender_id: z.string().min(1), // Required sender ID
});

export type TFormSchemaSendAttachment = z.infer<
  typeof FormSchemaSendAttachment
>;

export const FormSchemaSubmitReview = z.object({
  rev_fname: z.string().min(1, "Full name is required"), // Required full name of the reviewer
  rev_email: z.string().email("Invalid email format"), // Required email, must be valid format
  rev_job: z.string().nullish(), // Optional job title
  rev_rate: z.number().min(1).max(5, "Rating must be between 1 and 5"), // Required rating between 1 and 5
  rev_desc: z.string().nullish(), // Optional review description
});

export type TFormSchemaSubmitReview = z.infer<typeof FormSchemaSubmitReview>;

export const FormSchemaUpdateReviewStatus = z.object({
  review_id: z.string().uuid("Invalid review ID format"), // Required, must be a valid UUID
  status: z.enum(["pending", "approved", "rejected"]), // Required, must be one of the specified statuses
});

export type TFormSchemaUpdateReviewStatus = z.infer<
  typeof FormSchemaUpdateReviewStatus
>;

export const FormSchemaDeleteReview = z.object({
  review_id: z.string().uuid("Invalid review ID format"), // Required, must be a valid UUID
});

export type TFormSchemaDeleteReview = z.infer<typeof FormSchemaDeleteReview>;

export const FormSchemaAddBranch = z.object({
  branch_name: z.string().max(100), // Adjust max length as needed
  branch_logo: z.string().url().max(200), // Assuming logo is a URL
  branch_email: z.string().email().max(100),
  branch_address: z.string().max(200),
  branch_phonenum: z.string().max(15), // Adjust as per phone number standards
  branch_website: z.string().url().max(200),
  branch_targetline: z.string().max(200),
  branch_country: z.string().max(100),
  institute_id: z.string(), // Assuming institute_id is a string
});

export type TFormSchemaAddBranch = z.infer<typeof FormSchemaAddBranch>;

export const FormSchemaAddInstitute = z.object({
  institute_name: z.string().max(100), // Adjust max length as needed
  institute_logo: z.string().url().max(200), // Assuming logo is a URL
  institute_email: z.string().email().max(100),
  institute_address: z.string().max(200),
  institute_phonenum: z.string().max(15), // Adjust as per phone number standards
  institute_website: z.string().url().max(200),
  institute_targetline: z.string().max(200),
  institute_country: z.string().max(100),
});

export type TFormSchemaAddInstitute = z.infer<typeof FormSchemaAddInstitute>;

export const FormSchemaLoginAdmin = z.object({
  admin_username: z.string().min(1, "Username is required"), // Required, non-empty string
  admin_password: z.string().min(1, "Password is required"), // Required, non-empty string
});

export type TFormSchemaLoginAdmin = z.infer<typeof FormSchemaLoginAdmin>;
