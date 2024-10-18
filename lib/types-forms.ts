import { z } from "zod";
import { checkCVFileType, MAX_FILE_SIZE_5MB } from "./utils";

// Contact form
export const SchemaContactForm = z.object({
  firstname: z.string().min(2).max(50),
  lastname: z.string().min(2).max(50),
  mobile: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  country: z.string().min(2).max(50),
  city: z.string().min(2).max(50),
});

export type TSchemaContactForm = z.infer<typeof SchemaContactForm>;

// Franchise application form
export const SchemaFranchiseForm = z.object({
  firstname: z.string().min(2).max(50),
  lastname: z.string().min(2).max(50),
  mobile: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  location: z.string().min(2).max(300),
  motivation: z.string().min(2).max(300),
  budget: z.number(),
  message: z.string().min(2).max(300),
});

export type TSchemaFranchiseForm = z.infer<typeof SchemaFranchiseForm>;

// Pending Instructor Form
export const SchemaPendingInstructor = z.object({
  pinstructor_nid: z.string().min(2).max(50),
  pinstructor_fullname: z.string().min(2).max(50),
  pinstructor_age: z.number().min(2).max(50),
  pinstructor_email: z.string().email().min(2).max(50),
  pinstructor_phonenum: z.string().min(2).max(50),
  pinstructor_gender: z.string().min(2).max(50),
  pinstructor_faculty: z.string().min(2).max(50),
  pinstructor_whatsapp: z.string().min(2).max(50),
  pinstructor_cv: z
    .any()
    .refine((file: File) => file?.size !== 0, "File is required")
    .refine((file) => file.size < MAX_FILE_SIZE_5MB, "Max size is 5MB.")
    .refine(
      (file) => checkCVFileType(file),
      "Only .pdf, .docx formats are supported."
    ),
  pinstructor_experience: z.string().min(2).max(50),
  instructor_picture: z
    .any()
    .refine((file: File) => file?.size !== 0, "File is required")
    .refine((file) => file.size < MAX_FILE_SIZE_5MB, "Max size is 5MB.")
    .refine(
      (file) => checkCVFileType(file),
      "Only .webp, .png, .jpg, ,jpeg formats are supported."
    ),
  pinstructor_major: z.string().min(2).max(50),
});

export type TSchemaPendingInstructor = z.infer<typeof SchemaPendingInstructor>;
