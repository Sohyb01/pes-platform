import {
  TFormSchemaAddAdmin,
  TFormSchemaAddAssignment,
  TFormSchemaAddCertificate,
  TFormSchemaAddClass,
  TFormSchemaAddEmployee,
  TFormSchemaAddExam,
  TFormSchemaAddInstructor,
  TFormSchemaAddLog,
  TFormSchemaAddMaterial,
  TFormSchemaAddParent,
  TFormSchemaAddProgram,
  TFormSchemaAddProject,
  TFormSchemaAddReview,
  TFormSchemaAddStudent,
  TFormSchemaDisplayScheduleEvent,
  TFormSchemaExamSubmition,
  TFormSchemaPendingFranchise,
  TFormSchemaPendingPartnership,
  TFormSchemaSendMessage,
  TFormSchemaSolvedExam,
  TFormSchemaClassMapping,
} from "./types-forms";

export const exampleEmployees: TFormSchemaAddEmployee[] = [
  {
    user_type: "Employee",
    id: "employee1",
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
    religion: "Christian",
    blood_group: "O+",
    education: "Bachelor's Degree in Computer Science",
    username: "johndoe123",
    password: "securePassword123",
    timezone: "UTC-5",
    language: "English",
    currency: "USD",
    theme: "Light",
  },
];

export const exampleAdmins: TFormSchemaAddAdmin[] = [
  {
    admin_position: "HR Manager",
    branch_id: "BR123",
    // Fields from FormSchemaAddEmployee
    user_type: "Admin",
    id: "admin1",
    nid: "9876543210",
    employee_name: "Jane Smith",
    employee_email: "jane.smith@example.com",
    gender: "Female",
    dateofbirth: new Date("1985-03-15"),
    homeaddress: "456 Elm St, Townsville",
    employee_salary: 70000,
    employee_mobilenum: "+1987654321",
    joined_date: new Date("2022-08-15"),
    employee_pic: {
      name: "admin_profile.png",
      size: 450000,
      type: "image/png",
    }, // Mock file object for example
    fathername_husbandname: "Robert Smith",
    experience: "10 years in administration",
    religion: "Other",
    blood_group: "B+",
    education: "Master's Degree in Business Administration",
    username: "janesmith",
    password: "strongPassword!2024",
    timezone: "GMT + 5:00",
    language: "English",
    currency: "USD",
    theme: "Dark",
  },
];

export const exampleInstructors: TFormSchemaAddInstructor[] = [
  {
    // Fields specific to FormSchemaAddInstructor
    instructor_age: "35",
    instructor_whatsapp: "+123456789",
    instructor_faculty: "Engineering Faculty",
    instructor_cv: {
      name: "resume.pdf",
      size: 4000000,
      type: "application/pdf",
    }, // Mock file object for CV
    instructor_major: "Computer Science",
    theme: "Dark",

    // Fields from FormSchemaAddEmployee
    user_type: "Instructor",
    id: "instructor1",
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
    religion: "Muslim",
    blood_group: "A-",
    education: "Ph.D. in Computer Science",
    username: "alicejohnson",
    password: "securePassword!2024",
    timezone: "UTC+3",
    language: "English",
    currency: "EUR",
  },
  {
    // Fields specific to FormSchemaAddInstructor
    instructor_age: "35",
    instructor_whatsapp: "+123456789",
    instructor_faculty: "Engineering Faculty",
    instructor_cv: {
      name: "resume.pdf",
      size: 4000000,
      type: "application/pdf",
    }, // Mock file object for CV
    instructor_major: "Computer Science",
    theme: "Dark",

    // Fields from FormSchemaAddEmployee
    user_type: "Instructor",
    id: "instructor2",
    nid: "6543210987",
    employee_name: "Ahmed Reda",
    employee_email: "ahmed.reda@example.com",
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
    fathername_husbandname: "David reda",
    experience: "7 years in teaching",
    religion: "Muslim",
    blood_group: "A-",
    education: "Ph.D. in Computer Science",
    username: "aahmedreda",
    password: "securePassword!2024",
    timezone: "UTC+3",
    language: "English",
    currency: "EUR",
  },
];

export const exampleStudents: TFormSchemaAddStudent[] = [
  {
    id: "student1",
    student_nid: "1234567890",
    student_name: "Tom Brown",
    gender: "Male",
    student_dateofbirth: new Date("2010-06-15"),
    student_address: "123 Maple St, Springfield",
    student_mobile: "+1234567890",
    student_whatsappnum: "+1234567891",
    student_pic: {
      name: "student_photo.jpg",
      size: 400000,
      type: "image/jpeg",
    }, // Mock file object
    student_dateofadmission: new Date("2023-09-01"),
    student_prevschool: "Springfield Elementary",
    student_religion: "Christian",
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
    student_familyid: "family1",
  },
  {
    id: "student2",
    student_nid: "9876543210",
    student_name: "Emily Davis",
    gender: "Female",
    student_dateofbirth: new Date("2011-04-20T00:00:00.000Z"),
    student_address: "456 Oak Ave, Metropolis",
    student_mobile: "+19876543210",
    student_whatsappnum: "+19876543211",
    student_pic: {
      name: "emily_photo.png",
      size: 350000,
      type: "image/png",
    }, // Mock file object
    student_dateofadmission: new Date("2023-08-15T00:00:00.000Z"),
    student_prevschool: "Metropolis Academy",
    student_religion: "Muslim",
    student_diseases: "Asthma",
    student_laptop: "No",
    timezone: "UTC-6",
    language: "English",
    orphan: "No",
    isactive: "Yes",
    theme: "Dark",
    student_bloodgroup: "A-",
    student_feediscount: "15%",
    student_referralcode: "REF456",
    student_totalsibs: "1",
    student_additionalnotes: "Needs inhaler during sports",
    student_email: "emily.davis@example.com",
    student_password: "securepass456",
    student_familyid: "family2",
  },
  {
    id: "student3",
    student_nid: "5678901234",
    student_name: "Liam Johnson",
    gender: "Male",
    student_dateofbirth: new Date("2009-11-25T00:00:00.000Z"),
    student_address: "789 Pine Rd, Rivertown",
    student_mobile: "+15432109876",
    student_whatsappnum: "+15432109877",
    student_pic: {
      name: "liam_photo.jpeg",
      size: 300000,
      type: "image/jpeg",
    },
    student_dateofadmission: new Date("2022-05-10T00:00:00.000Z"),
    student_prevschool: "Rivertown Middle School",
    student_religion: "Hindu",
    student_diseases: "None",
    student_laptop: "Yes",
    timezone: "UTC-7",
    language: "English",
    orphan: "No",
    isactive: "No",
    theme: "Light",
    student_bloodgroup: "B+",
    student_feediscount: "20%",
    student_referralcode: "REF789",
    student_totalsibs: "3",
    student_additionalnotes: "Plays in the school band",
    student_email: "liam.johnson@example.com",
    student_password: "mypassword789",
    student_familyid: "family3",
  },
];

export const exampleClassMapping: TFormSchemaClassMapping[] = [
  {
    id: "classmapping1",
    student_id: "student1",
    class_id: "class1",
  },
  {
    id: "classmapping1",
    student_id: "student2",
    class_id: "class1",
  },
  {
    id: "classmapping1",
    student_id: "student3",
    class_id: "class1",
  },
  {
    id: "classmapping1",
    student_id: "student1",
    class_id: "class2",
  },
  {
    id: "classmapping1",
    student_id: "student2",
    class_id: "class2",
  },
  {
    id: "classmapping1",
    student_id: "student3",
    class_id: "class2",
  },
  {
    id: "classmapping1",
    student_id: "student1",
    class_id: "class3",
  },
  {
    id: "classmapping1",
    student_id: "student2",
    class_id: "class3",
  },
];

export const exampleParents: TFormSchemaAddParent[] = [
  {
    id: "parent1",
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
    id: "parent2",
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
    id: "parent3",
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
    class_times: "Mon 4PM",
    id: "class1", // Optional field
    class_name: "Advanced Mathematics ➗", //
    class_fees: 150.0, //
    program_id: "prog1", // Represents foreign key to Programs
    instructor_id: "instructor1", // Optional UUID for instructor
    classbegindate: new Date("2024-01-10"),
    classenddate: new Date("2025-06-10"),
    class_level: "Beginner",
  },
  {
    class_times: "Wed 7PM - Sat 7PM",
    id: "class2",
    class_name: "Introduction to Computer Science 🖥️",
    class_fees: 200.0,
    program_id: "prog2",
    instructor_id: "instr1234mnop5678",
    classbegindate: new Date("2024-02-01"),
    classenddate: new Date("2025-07-01"),
    class_level: "Intermediate",
  },
  {
    class_times: "Fri 5PM",
    id: "class3",
    class_name: "Creative Writing Workshop ✍️",
    class_fees: 75.5,
    program_id: "prog2",
    // `instructor_id` is omitted as it's optional
    classbegindate: new Date("2024-03-15"),
    classenddate: new Date("2024-05-15"),
    class_level: "Expert",
  },
];

export const examplePrograms: TFormSchemaAddProgram[] = [
  {
    program_id: "prog1", // Optional, included
    program_name: "Advanced Programming Bootcamp",
    program_levels: [
      {
        level_id: "level1", // Optional, included
        level_name: "Beginner Level",
        description: "Introduction to programming fundamentals",
        subjects: ["Variables", "Loops", "Conditionals"],
        // sessions: [
        //   {
        //     id: "schedule1",
        //     schedule_name: "Introduction to Variables",
        //     schedule_type: "Classroom",
        //     url: "https://example.com/schedules/variables",
        //     timestamp: new Date("2024-11-01T10:00:00"), // Valid date object
        //     instructor_id: "instructor456",
        //     class_field: "class123",
        //   },
        // ],
      },
      {
        level_id: "level2",
        level_name: "Intermediate Level",
        description: "In-depth exploration of data structures",
        subjects: ["Arrays", "Linked Lists", "Trees"],
        // sessions: [
        //   {
        //     id: "schedule2",
        //     schedule_name: "Data Structures Workshop",
        //     schedule_type: "Online",
        //     url: "https://example.com/schedules/ds-workshop",
        //     timestamp: new Date("2024-12-01T15:00:00"),
        //     instructor_id: "instructor789",
        //     class_field: "class456",
        //   },
        // ],
      },
    ],
    program_price: "500 USD",
    description: "A comprehensive bootcamp for aspiring developers.",
    duration: "6 months",
    start_date: new Date("2024-11-01"),
  },
  {
    program_id: "prog2", // Optional, included
    program_name: "Data Science Essentials",
    program_levels: [
      {
        // level_id is optional and omitted
        level_name: "Fundamentals of Data Science",
        description: "Learn the basics of data analysis and visualization",
        subjects: ["Statistics", "Data Cleaning", "Visualization"],
        // sessions: [
        //   {
        //     id: "schedule3",
        //     schedule_name: "Statistics Introduction",
        //     schedule_type: "Classroom",
        //     url: "https://example.com/schedules/stats",
        //     timestamp: new Date("2024-11-05T09:00:00"),
        //     instructor_id: "instructor321",
        //     class_field: "class789",
        //   },
        // ],
      },
    ],
    program_price: "3000 EGP",
    description: "A beginner-friendly introduction to data science concepts.",
    duration: "3 months",
    start_date: new Date("2024-11-05"),
  },
];

export const exampleExams: TFormSchemaAddExam[] = [
  {
    id: "exam1",
    quizname: "Midterm A",
    quiz_type: "Type B",
    class_field: "class1",
    instructor_id: "123",
    questions: [
      {
        id: "q1",
        type: "mcq",
        questionText: "What is the capital of France?",
        options: ["Madrid", "Berlin", "Paris", "Rome"],
        correctAnswer: "Paris",
        score: 2,
      },
      {
        id: "q2",
        type: "essay",
        questionText: "Explain the theory of relativity.",
        wordLimit: 500,
        score: 1,
      },
      {
        id: "q3",
        type: "true_false",
        questionText: "The Earth is flat.",
        correctAnswer: false,
        score: 1,
      },
    ],
    timestamp: new Date("2024-11-01T11:00:00Z"),
    duration: 10, //Minutes
  },
  {
    id: "exam2",
    quizname: "Final Exam ",
    quiz_type: "Type A",
    class_field: "class2",
    instructor_id: "123",
    questions: [
      {
        id: "q1",
        type: "mcq",
        questionText: "What is the capital of France?",
        options: ["Madrid", "Berlin", "Paris", "Rome"],
        correctAnswer: "Paris",
        score: 2,
      },
      {
        id: "q2",
        type: "essay",
        questionText: "Explain the theory of relativity.",
        wordLimit: 500,
        score: 1,
      },
      {
        id: "q3",
        type: "true_false",
        questionText: "The Earth is flat.",
        correctAnswer: false,
        score: 2,
      },
    ],
    timestamp: new Date("2025-11-01T11:00:00Z"),
    duration: 10, //Minutes
  },
];

// Exam Submition
export const exampleExamSubmitions: TFormSchemaExamSubmition[] = [
  {
    solved_exam_id: "exam2",
    total_score: 2,
    evaluation: [
      {
        question_id: "df6c03d1-ef63-4a92-99af-2e383e79868f",
        student_answer: "5",
        correct_answer: "4",
        is_correct: false,
        score: 0,
        status: "evaluated",
      },
      {
        question_id: "34acee87-8fe1-4abc-b053-372064f21a70",
        student_answer: "Madrid",
        correct_answer: "Paris",
        is_correct: false,
        score: 0,
        status: "evaluated",
      },
      {
        question_id: "ac0f891c-3917-405c-929e-a29d77757034",
        student_answer: "Water",
        correct_answer: null,
        is_correct: null,
        score: null,
        status: "pending",
      },
      {
        question_id: "cc0c0d3f-d8df-4fa5-aa32-a3d0b5fd746d",
        student_answer: "Relative",
        correct_answer: null,
        is_correct: null,
        score: null,
        status: "pending",
      },
      {
        question_id: "90623ec8-6b08-4060-bbe9-004f6645d5dd",
        student_answer: true,
        correct_answer: true,
        is_correct: true,
        score: 1,
        status: "evaluated",
      },
      {
        question_id: "feb403b9-e85e-4b77-8f21-d05af4bdf681",
        student_answer: true,
        correct_answer: false,
        is_correct: true,
        score: 1,
        status: "evaluated",
      },
    ],
  },
];

// Exam solutions
// how can I refrence that exact exam ? and why's everything stupidly complicated
// why seperate the evaluation from each question?
export const exampleSolvedExams: TFormSchemaSolvedExam[] = [
  {
    id: "solvedexam1",
    quizname: "Midterm A",
    quiz_type: "Type B",
    class_field: "class1",
    timestamp: new Date("2024-11-01T11:00:00Z"),
    questions: [
      {
        id: "q1",
        type: "mcq",
        questionText: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris",
        studentAnswer: "Paris",
        score: 2, // question's score
      },
      {
        id: "q2",
        type: "essay",
        questionText: "Explain the theory of relativity.",
        wordLimit: 500,
        studentAnswer: "Good morning 123",
        score: 1, // question's score
      },
      {
        id: "q3",
        type: "true_false",
        questionText: "The Earth is flat.",
        correctAnswer: false,
        studentAnswer: false,
        score: 2, // question's score
      },
    ],

    evaluation: [
      {
        question_id: "q1",
        student_answer: "Paris",
        correct_answer: "Paris",
        is_correct: true,
        score: 2, // student's score
        status: "evaluated",
      },
      {
        question_id: "q2",
        student_answer: "Relativity theory is about relativity duh...",
        correct_answer: "Relativity is relative duh...",
        is_correct: false,
        score: 0, // student's score
        status: "evaluated",
      },
      {
        question_id: "q3",
        student_answer: true, // yup the earth is actually flat don't let the government trick u
        correct_answer: false,
        is_correct: false,
        score: 0, // student's score
        status: "evaluated",
      },
    ],

    duration: 120,
    student_id: "123",
    total_score: 2,
  },
];

export const exampleCertificates: TFormSchemaAddCertificate[] = [
  {
    certificate_id: "cert1", // Unique certificate ID
    serial_number: "SN123456789",
    certificate_type: "Completion",
    class_id: "class2", // Reference to a specific class
    student_name: "Alice Johnson",
    student_id: "student1", // Reference to a specific student
  },
  {
    certificate_id: "cert2",
    serial_number: "SN987654321",
    certificate_type: "Excellence in Science",
    class_id: "class1",
    student_name: "Michael Smith",
    student_id: "student2",
  },
];

export const exampleReviews: TFormSchemaAddReview[] = [
  {
    rev_fname: "John Doe",
    rev_email: "johndoe@example.com",
    rev_job: "Software Engineer",
    rev_rate: "5", // Rating out of 5
    rev_desc: "Excellent course, very insightful!",
  },
  {
    rev_fname: "Jane Smith",
    rev_email: "janesmith@example.com",
    rev_job: "Project Manager",
    rev_rate: "4",
    rev_desc: "Great content, but could use more real-life examples.",
  },
];

export const exampleLogs: TFormSchemaAddLog[] = [
  {
    id: "log-1234-f67c-89a0",
    action: "User login",
    timestamp: new Date("2024-10-30"),
    user_id: "123e4567-e89b-12d3-a456-426614174000",
    victim_id: "123e4567-e89b-12d3-a456-426614174001",
  },
  {
    id: "log-1234-f67c-89a0",
    action: "Profile update",
    timestamp: new Date("2024-10-30T14:30:00Z"),
    user_id: "123e4567-e89b-12d3-a456-426614174002",
    victim_id: "123e4567-e89b-12d3-a456-426614174003",
  },
];

export const exampleSessions = [
  {
    sessionid: "session1",
    playback_start_time: "2024-11-01T10:00:00Z",
    playback_end_timestamp: "2024-11-01T11:00:00Z",
    admin_id: "admin1",
    user_id: "instructor1",
    name: "Constants & Variables",
    class_id: "class1",
    program_id: "prog1",
  },
  {
    sessionid: "session2",
    playback_start_time: "2024-12-02T10:00:00Z",
    playback_end_timestamp: "2024-12-02T10:00:00Z",
    admin_id: "admin1",
    user_id: "instructor2",
    name: "Loops (for, while)",
    class_id: "class2",
    program_id: "prog2",
  },
  {
    sessionid: "session3",
    playback_start_time: "2024-12-02T10:00:00Z",
    playback_end_timestamp: "2024-12-02T10:00:00Z",
    admin_id: "admin1",
    user_id: "instructor2",
    name: "Web Development P1",
    class_id: "class2",
    program_id: "prog2",
  },
];

export const exampleMaterials: TFormSchemaAddMaterial[] = [
  {
    name: "Material 1",
    id: "material-1234-f67c-89a0",
    attachment: [{ name: "lesson1.py", size: 4500000 }], // Example file within 5MB limit
    session_id: "123e4567-e89b-12d3-a456-426614174000",
    class_field: "class1",
    instructor_id: "instructor1",
  },
  {
    name: "Material 2",
    id: "material-1234-f67c-89a0",
    attachment: [{ name: "example.js", size: 3000000 }], // Another valid file within 5MB limit
    session_id: "123e4567-e89b-12d3-a456-426614174002",
    class_field: "class2",
    instructor_id: "instructor1",
  },
];

export const examplePendingPartnerships: TFormSchemaPendingPartnership[] = [
  {
    applicant_name: "John Doe", //
    applicant_email: "johndoe@example.com", //
    applicant_whatsapp: "+1234567890", //
    applicant_address: "123 Main St, Cityville", //
    applicant_organization: "Tech Innovators", //
    applicant_position: "CEO", //
    partnership_type: "Technology Collaboration",
    //
    partnership_description:
      "Seeking a partnership to co-develop AI-driven solutions for educational platforms.",
    //
    partnership_goals:
      "Enhance learning experiences and develop innovative solutions for global education systems.",
    partnership_start_date: new Date("2024-11-01"), //
    partnership_duration: "1 year", //
    //
    partnership_requirements:
      "Commitment to bi-weekly project updates and access to research data.",
    //
    applicant_message:
      "Looking forward to a productive partnership that benefits both organizations.",
    application_date: new Date("2024-05-10"), //
  },
  {
    applicant_name: "Sarah Lee",
    applicant_email: "sarahlee@nonprofit.org",
    applicant_whatsapp: "+0987654321",
    applicant_address: "456 Elm St, Townville",
    applicant_organization: "Green Earth Initiative",
    applicant_position: "Project Manager",
    partnership_type: "Environmental Advocacy",
    partnership_description:
      "A partnership to promote sustainable practices within local communities.",
    partnership_goals:
      "Educate communities on eco-friendly practices and reduce carbon footprint.",
    partnership_start_date: new Date("2025-01-15"),
    partnership_duration: "6 months",
    partnership_requirements:
      "Monthly reporting and access to marketing resources.",
    application_date: new Date("2024-10-10"),
  },
];

export const examplePendingFranchises: TFormSchemaPendingFranchise[] = [
  {
    applicant_name: "Emily Johnson", //
    applicant_email: "emilyjohnson@example.com", //
    applicant_whatsapp: "+1234567890", //
    applicant_address: "789 Maple St, Citytown", //
    applicant_business_history: true, //
    //
    applicant_business_history_description:
      "Owned and managed a retail store for 5 years.",
    applicant_education_business_history: false, //
    applicant_education_business_history_description: undefined, //
    applicant_employment_status: "Self-employed", //
    applicant_investment_budget: "$100,000 - $150,000", //
    applicant_has_financing: true, //
    franchise_desired_location_city: "Los Angeles", //
    franchise_desired_location_country: "USA", //
    applicant_knows_competition_in_location: true, //
    //
    applicant_knows_competition_in_location_description:
      "Familiar with local competitors in the health and wellness industry.",
    //
    applicant_why_pes:
      "PES offers a unique business model with a strong support system that aligns with my passion for wellness.",
    applicant_was_bankrupt: false, //
    applicant_was_bankrupt_description: undefined, //
    applicant_was_in_lawsuit: false, //
    applicant_was_in_lawsuit_description: undefined, //
    applicant_has_necessary_documents: true, //
    applicant_message: "Looking forward to a long-term partnership with PES.", //
    application_date: new Date("2024-10-30"),
  },
  {
    applicant_name: "Michael Smith",
    applicant_email: "michaelsmith@business.net",
    applicant_whatsapp: "+0987654321",
    applicant_address: "101 Oak Ave, Metropolis",
    applicant_business_history: false,
    applicant_business_history_description: undefined,
    applicant_education_business_history: true,
    applicant_education_business_history_description:
      "Completed a business management course with a focus on entrepreneurship.",
    applicant_employment_status: "Employed",
    applicant_investment_budget: "$50,000 - $80,000",
    applicant_has_financing: false,
    franchise_desired_location_city: "Toronto",
    franchise_desired_location_country: "Canada",
    applicant_knows_competition_in_location: false,
    applicant_knows_competition_in_location_description: undefined,
    applicant_why_pes:
      "I admire PES's mission and want to bring its benefits to my community.",
    applicant_was_bankrupt: true,
    applicant_was_bankrupt_description:
      "Filed for bankruptcy 10 years ago after a business closure.",
    applicant_was_in_lawsuit: false,
    applicant_was_in_lawsuit_description: undefined,
    applicant_has_necessary_documents: true,
    applicant_message:
      "Excited about this opportunity and willing to work hard for success.",
    application_date: new Date("2024-10-30"),
  },
];

export const exampleMeetings = [
  {
    sessionid: "session123",
    playback_start_time: "2024-11-01T10:00:00Z",
    playback_end_timestamp: "2024-11-01T11:00:00Z",
    admin_id: "admin1",
    user_id: "instructor1",
    name: "Constants & Variables",
    class_id: "class1",
    program_id: "prog1",
  },
  {
    sessionid: "session124",
    playback_start_time: "2024-12-02T10:00:00Z",
    playback_end_timestamp: "2024-12-02T10:00:00Z",
    admin_id: "admin1",
    user_id: "instructor2",
    name: "Loops (for, while)",
    class_id: "class2",
    program_id: "prog2",
  },
  {
    sessionid: "session3",
    playback_start_time: "2024-12-02T10:00:00Z",
    playback_end_timestamp: "2024-12-02T10:00:00Z",
    admin_id: "admin1",
    user_id: "instructor2",
    name: "Web Development P1",
    class_id: "class2",
    program_id: "prog2",
  },
];

export const exampleProjects: TFormSchemaAddProject[] = [
  {
    project_id: "proj001",
    project_name: "Web Development Basics",
    level_id: "level123",
    project_url: "https://example.com/projects/web-basics",
    description: "A beginner-level project focusing on HTML and CSS.",
    student_id: "student456",
    track_id: "track789",
  },
  {
    project_id: "proj002",
    project_name: "Machine Learning Model",
    level_id: undefined, // `null` is allowed for level_id as it is nullish
    project_url: "https://example.com/projects/ml-model",
    description:
      "An advanced project for building a machine learning model using Python.",
    student_id: "student123",
    track_id: "track456",
  },
];

export const exampleScheduleEvents: TFormSchemaDisplayScheduleEvent[] = [
  {
    id: "event1",
    title: "Team Meeting",
    type: "Meeting",
    start: "2024-12-13 14:00",
    end: "2024-12-13 16:00",
    people_invited: ["instructor1", "student1", "parent1"],
    description: "This is a scheduled team meeting to discuss project updates.",
    scheduler_id: "instructor1",
  },

  {
    id: "event2",
    title: "Project Kickoff",
    type: "Meeting",
    start: "2024-12-13 11:00",
    end: "2024-12-13 14:00",
    people_invited: ["instructor1", "student1", "parent1"],
    description: "Kickoff meeting for the new project launch.",
    scheduler_id: "instructor2",
  },

  {
    id: "event3",
    title: "Code Review",
    type: "Class Session",
    start: "2024-12-13 00:00",
    end: "2024-12-13 05:00",
    people_invited: ["instructor1", "student1", "parent1"],
    description: "Code review session for the upcoming release.",
    scheduler_id: "admin1",
  },
];

export const exampleAssignments: TFormSchemaAddAssignment[] = [
  {
    name: "Homework X",
    assignment_id: "assignment1",
    assignment_url: "www.google.com",
    assignment_duedate: new Date("2024-04-01"),
    assignment_attachment: [{ name: "requirements.docx", size: 4500000 }], // Valid file attachment under 5MB
    assignment_description:
      "Complete the essay on environmental sustainability.",
    class_id: "class1",
    sent_by: "instructor1",
    max_grade: 20,
    student_grade: 15,
    status: "reviewed",
  },
  {
    name: "Homework 1",
    assignment_id: "assignment1",
    assignment_url: "www.google.com",
    assignment_duedate: new Date("2025-04-01"),
    assignment_attachment: [{ name: "requirements.docx", size: 4500000 }], // Valid file attachment under 5MB
    assignment_description:
      "Complete the essay on environmental sustainability.",
    class_id: "class1",
    sent_by: "instructor1",
    max_grade: 40,
    student_grade: 18,
    status: "reviewed",
  },
  {
    name: "Project A",
    assignment_id: "assignment2",
    assignment_url: undefined, // Optional field left undefined
    assignment_duedate: new Date("2025-12-18"),
    assignment_attachment: [
      { name: "requirements.docx", size: 4500000 },
      { name: "assignment2.py", size: 4500000 },
    ], // Valid file attachment under 5MB
    assignment_description: "Prepare a presentation on renewable energy.",
    class_id: "class2",
    sent_by: "instructor1",
    max_grade: 20,
    status: "submitted",
  },
  {
    name: "Project BB",
    assignment_id: "assignment2",
    assignment_url: undefined, // Optional field left undefined
    assignment_duedate: new Date("2025-6-15"),
    assignment_attachment: [{ name: "assignment2.py", size: 4500000 }], // Valid file attachment under 5MB
    assignment_description: "Do homework.",
    class_id: "class1",
    sent_by: "instructor1",
    max_grade: 20,
    status: "due",
  },
  {
    name: "Assignment C",
    assignment_id: "assignment3",
    assignment_url: "www.google.com",
    assignment_duedate: new Date("2024-06-10"),
    assignment_attachment: null, // No file attached
    assignment_description: "Solve all exercises from Chapter 3.",
    class_id: "class3",
    sent_by: "instructor2",
    max_grade: 20,
    student_grade: 5,
    status: "missed",
  },
];

export type LeaderboardStudent = {
  name: string;
  pointsThisWeek: number;
  pointsThisMonth: number;
};

export const leaderboardData: LeaderboardStudent[] = [
  { name: "Alice Johnson", pointsThisWeek: 120, pointsThisMonth: 450 },
  { name: "Bob Smith", pointsThisWeek: 90, pointsThisMonth: 320 },
  { name: "Charlie Davis", pointsThisWeek: 150, pointsThisMonth: 500 },
  { name: "Diana Lewis", pointsThisWeek: 80, pointsThisMonth: 290 },
  { name: "Evan Carter", pointsThisWeek: 110, pointsThisMonth: 420 },
  { name: "Fiona Brown", pointsThisWeek: 140, pointsThisMonth: 480 },
  { name: "George Wilson", pointsThisWeek: 95, pointsThisMonth: 330 },
  { name: "Hannah Lee", pointsThisWeek: 70, pointsThisMonth: 250 },
  { name: "Irene Miller", pointsThisWeek: 60, pointsThisMonth: 220 },
  { name: "Jack Taylor", pointsThisWeek: 130, pointsThisMonth: 460 },
];

export const selectClassExampleData = [
  {
    id: "class1",
    name: "Advanced Mathematics ➗",
  },
  { id: "class2", name: "Introduction to Computer Science 🖥️" },
  { id: "class3", name: "Creative Writing Workshop ✍️" },
];

export const selectEmployeeExampleData = [
  {
    id: "employee1",
    name: "John Doe",
  },
  { id: "admin1", name: "Jane Smith" },
  { id: "instructor1", name: "Alice Johnson" },
];

export const exampleConversations = [
  {
    conversation_id: "conv1",
    conversation_name: "Intro to Robotics",
    host_id: "user123",
  },
  {
    conversation_id: "conv2",
    conversation_name: "Instructor",
    host_id: "user456",
  },
  {
    conversation_id: "conv3",
    conversation_name: "Computer Fundamentals",
    host_id: "user789",
  },
];

export const exampleConversationMapping = [
  {
    id: "1",
    conversation_id: "conv1",
    user_id: "student1",
    class_id: "class1",
  },
  {
    id: "1",
    conversation_id: "conv2",
    user_id: "instructor1",
    class_id: "class1",
  },
];

export const exampleMessages: TFormSchemaSendMessage[] = [
  {
    message_id: "msg1",
    message_text: "Hello, how are you?",
    sent_datetime: new Date("2024-12-14T15:30:00Z"),
    received_datetime: new Date("2024-12-14T15:31:00Z"),
    from_id: "student1",
    to_id: "user456",
    conversation_id: "conv1",
    contact_id: "instructor1",
  },
  {
    message_id: "msg2",
    message_text: "Don't forget our meeting at 3 PM.",
    sent_datetime: new Date("2024-12-14T12:00:00Z"),
    received_datetime: new Date("2024-12-14T12:00:30Z"),
    from_id: "user789",
    to_id: "user123",
    conversation_id: "conv1",
    contact_id: "instructor1",
  },
  {
    message_id: "msg3",
    message_text: "Can you review this document?",
    sent_datetime: new Date("2024-12-14T08:45:00Z"),
    received_datetime: new Date("2024-12-14T08:46:00Z"),
    from_id: "user456",
    to_id: "user789",
    conversation_id: "conv2",
    contact_id: "admin1",
  },
];
