import {
  TFormSchemaAddAdmin,
  TFormSchemaAddAssignment,
  TFormSchemaAddClass,
  TFormSchemaAddEmployee,
  TFormSchemaAddInstructor,
  TFormSchemaAddParent,
  TFormSchemaAddStudent,
} from "./types-forms";

export const exampleEmployee: TFormSchemaAddEmployee = {
  user_type: "Employee",
  nid: "1234567890",
  employee_name: "John Doe",
  employee_email: "john.doe@example.com",
  gender: "Male",
  dateofbirth: new Date("1990-01-01"),
  homeaddress: "123 Main St, Cityville",
  employee_salary: 50000,
  employee_mobilenum: "+123456789",
  joined_date: new Date("2023-05-01"),
  employee_pic: { name: "profile.jpg", size: 400000, type: "image/jpeg" }, // Mock file object for demonstration
  fathername_husbandname: "James Doe", // Optional
  experience: "5 years in software development",
  religion: "Christianity",
  blood_group: "O+",
  education: "Bachelor's Degree in Computer Science",
  username: "johndoe123",
  password: "securePassword123",
  timezone: "UTC-5",
  language: "English",
  currency: "USD",
  theme: "Light",
};

export const exampleAdmin: TFormSchemaAddAdmin = {
  admin_position: "HR Manager",
  branch_id: "BR123",
  // Fields from FormSchemaAddEmployee
  user_type: "Admin",
  nid: "9876543210",
  employee_name: "Jane Smith",
  employee_email: "jane.smith@example.com",
  gender: "Female",
  dateofbirth: new Date("1985-03-15"),
  homeaddress: "456 Elm St, Townsville",
  employee_salary: 70000,
  employee_mobilenum: "+1987654321",
  joined_date: new Date("2022-08-15"),
  employee_pic: { name: "admin_profile.png", size: 450000, type: "image/png" }, // Mock file object for example
  fathername_husbandname: "Robert Smith",
  experience: "10 years in administration",
  religion: "Hinduism",
  blood_group: "B+",
  education: "Master's Degree in Business Administration",
  username: "janesmith",
  password: "strongPassword!2024",
  timezone: "UTC+1",
  language: "English",
  currency: "USD",
  theme: "Dark",
};

export const exampleInstructor: TFormSchemaAddInstructor = {
  // Fields specific to FormSchemaAddInstructor
  instructor_age: "35",
  instructor_whatsapp: "+123456789",
  instructor_faculty: "Engineering Faculty",
  instructor_cv: { name: "resume.pdf", size: 4000000, type: "application/pdf" }, // Mock file object for CV
  instructor_major: "Computer Science",
  theme: "Dark",

  // Fields from FormSchemaAddEmployee
  user_type: "Instructor",
  nid: "6543210987",
  employee_name: "Alice Johnson",
  employee_email: "alice.johnson@example.com",
  gender: "Female",
  dateofbirth: new Date("1988-07-12"),
  homeaddress: "789 Oak St, Villagetown",
  employee_salary: 60000,
  employee_mobilenum: "+1230984567",
  joined_date: new Date("2021-09-10"),
  employee_pic: {
    name: "instructor_photo.jpg",
    size: 300000,
    type: "image/jpeg",
  }, // Mock file for profile picture
  fathername_husbandname: "David Johnson",
  experience: "7 years in teaching",
  religion: "Islam",
  blood_group: "A-",
  education: "Ph.D. in Computer Science",
  username: "alicejohnson",
  password: "securePassword!2024",
  timezone: "UTC+3",
  language: "English",
  currency: "EUR",
};

export const exampleStudent: TFormSchemaAddStudent = {
  student_nid: "1234567890",
  student_name: "Tom Brown",
  gender: "Male",
  student_dateofbirth: new Date("2010-06-15"),
  student_address: "123 Maple St, Springfield",
  student_mobile: "+1234567890",
  student_whatsappnum: "+1234567891",
  student_pic: { name: "student_photo.jpg", size: 400000, type: "image/jpeg" }, // Mock file object
  student_dateofadmission: new Date("2023-09-01"),
  student_prevschool: "Springfield Elementary",
  student_religion: "Christianity",
  student_diseases: "None",
  student_laptop: "Yes",
  timezone: "UTC-5",
  language: "English",
  orphan: "No",
  isactive: "Yes",
  theme: "Light",
  student_bloodgroup: "O+",
  student_feediscount: "10%",
  student_referralcode: "REF123",
  student_totalsibs: "2",
  student_additionalnotes: "Allergic to peanuts",
  student_email: "tom.brown@example.com",
  student_password: "password123",
  student_familyid: "FAM456",
};

export const exampleParents: TFormSchemaAddParent[] = [
  {
    nid: "9876543210",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1234567890",
    password: "securePassword123", // At least 8 characters for security
    gender: "Male",
    parent_education: "Bachelor's Degree",
    parent_profession: "Engineer",
    parent_occupation: "Software Developer",
    parent_income: "80,000 USD",
    parent_address: "456 Elm St, Springfield",
    photo: { name: "parent_photo.jpg", size: 400000, type: "image/jpeg" }, // Mock file for photo
    is_active: "Yes",
    referral: "REF456",
    language: "English",
    timezone: "UTC-6",
    theme: "Dark",
    promocode: "PROMO789",
    num_of_children: "3",
    username: "johndoe",
  },
  {
    nid: "1234567890",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    password: "SecurePassword123",
    gender: "Male",
    parent_education: "Bachelor's Degree",
    parent_profession: "Engineer",
    parent_occupation: "Civil Engineering",
    parent_income: "75000",
    parent_address: "123 Maple Street, Springfield",
    photo: [{ name: "profile.jpg", size: 4500000 }], // Valid image file under 5MB
    is_active: "yes",
    referral: "REF12345",
    language: "English",
    timezone: "GMT-5",
    theme: "dark",
    promocode: "PROMO20",
    num_of_children: "2",
    username: "johndoe123",
  },

  {
    nid: "9876543210",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "098-765-4321",
    password: "AnotherSecurePassword!456",
    gender: "Female",
    parent_education: undefined, // Optional field left undefined
    parent_profession: "Doctor",
    parent_occupation: "Pediatrics",
    parent_income: "100000",
    parent_address: "456 Oak Avenue, Centerville",
    photo: null, // No photo uploaded
    is_active: "yes",
    referral: "REF67890",
    language: "English",
    timezone: "GMT+1",
    theme: "light",
    promocode: "SAVE10",
    num_of_children: "1",
    username: "janesmith456",
  },
];

export const exampleClasses: TFormSchemaAddClass[] = [
  {
    id: "c1a2s3s4i5d6", // Optional field
    class_name: "Advanced Mathematics",
    class_fees: 150.0,
    program_id: "prog1234abcd5678", // Represents foreign key to Programs
    instructor_id: "instr9876efgh4321", // Optional UUID for instructor
    classbegindate: new Date("2024-01-10"),
    classenddate: new Date("2024-06-10"),
  },
  {
    id: "class7890id12",
    class_name: "Introduction to Computer Science",
    class_fees: 200.0,
    program_id: "prog5678ijkl9012",
    instructor_id: "instr1234mnop5678",
    classbegindate: new Date("2024-02-01"),
    classenddate: new Date("2024-07-01"),
  },
  {
    id: "class1234abcd",
    class_name: "Creative Writing Workshop",
    class_fees: 75.5,
    program_id: "prog3456qrst7890",
    // `instructor_id` is omitted as it's optional
    classbegindate: new Date("2024-03-15"),
    classenddate: new Date("2024-05-15"),
  },
];

export const exampleAssignments: TFormSchemaAddAssignment[] = [
  {
    assignment_url: "/",
    assignment_duedate: new Date("2024-04-01"),
    assignment_attachment: null, // No file uploaded
    assignment_description:
      "Complete the essay on environmental sustainability.",
    subject_id: "subj1234abcd",
    class_id: "class5678efgh",
    sent_by: "teacher1234xyz",
  },
  {
    assignment_url: undefined, // Optional field left undefined
    assignment_duedate: new Date("2024-05-15"),
    assignment_attachment: [{ name: "assignment2.docx", size: 4500000 }], // Valid file attachment under 5MB
    assignment_description: "Prepare a presentation on renewable energy.",
    subject_id: "subj2345bcde",
    class_id: "class6789ijkl",
    sent_by: "teacher5678abc",
  },
  {
    assignment_url: "/",
    assignment_duedate: new Date("2024-06-10"),
    assignment_attachment: null, // No file attached
    assignment_description: "Solve all exercises from Chapter 3.",
    subject_id: "subj3456cdef",
    class_id: "class7890mnop",
    sent_by: "teacher7890def",
  },
];
