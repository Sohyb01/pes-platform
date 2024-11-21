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
  TFormSchemaAddMeeting,
  TFormSchemaAddParent,
  TFormSchemaAddProgram,
  TFormSchemaAddProject,
  TFormSchemaAddReview,
  TFormSchemaAddSchedule,
  TFormSchemaAddStudent,
  TFormSchemaPendingFranchise,
  TFormSchemaPendingPartnership,
  TFormSchemaSolvedExam,
} from "./types-forms";

export const exampleEmployees: TFormSchemaAddEmployee[] = [
  {
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
    id: "1",
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
    timezone: "UTC+1",
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
    id: "2",
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
];

export const exampleStudents: TFormSchemaAddStudent[] = [
  {
    id: "1",
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
    student_familyid: "FAM456",
  },
];

export const exampleParents: TFormSchemaAddParent[] = [
  {
    id: "1",
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
    id: "2",
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
    id: "3",
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
    id: "1", // Optional field
    class_name: "Advanced Mathematics", //
    class_fees: 150.0, //
    program_id: "prog1234abcd5678", // Represents foreign key to Programs
    instructor_id: "instr9876efgh4321", // Optional UUID for instructor
    classbegindate: new Date("2024-01-10"),
    classenddate: new Date("2024-06-10"),
  },
  {
    id: "2",
    class_name: "Introduction to Computer Science",
    class_fees: 200.0,
    program_id: "prog5678ijkl9012",
    instructor_id: "instr1234mnop5678",
    classbegindate: new Date("2024-02-01"),
    classenddate: new Date("2024-07-01"),
  },
  {
    id: "3",
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
    assignment_id: "1",
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
    assignment_id: "2",
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

export const exampleExams: TFormSchemaAddExam[] = [
  {
    id: "exam1",
    quizname: "Midterm A",
    quiz_type: "Type B",
    class_field: "abc",
    instructor_id: "123",
    questions: [
      {
        id: "q1",
        type: "mcq",
        questionText: "What is the capital of France?",
        options: ["Madrid", "Berlin", "Paris", "Rome"],
        correctAnswer: "Paris",
      },
      {
        id: "q2",
        type: "essay",
        questionText: "Explain the theory of relativity.",
        wordLimit: 500,
      },
      {
        id: "q3",
        type: "true_false",
        questionText: "The Earth is flat.",
        correctAnswer: false,
      },
    ],
    duration: 120,
  },
];

// Exam solutions
export const exampleSolvedExams: TFormSchemaSolvedExam[] = [
  {
    id: "exam1",
    quizname: "Midterm A",
    quiz_type: "Type B",
    class_field: "abc",
    instructor_id: "123",
    timestamp: new Date("2024-11-01T11:00:00Z"),
    questions: [
      {
        id: "q1",
        type: "mcq",
        questionText: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris",
        studentAnswer: "Berlin",
      },
      {
        id: "q2",
        type: "essay",
        questionText: "Explain the theory of relativity.",
        wordLimit: 500,
        studentAnswer: "Good morning 123",
      },
      {
        id: "q3",
        type: "true_false",
        questionText: "The Earth is flat.",
        correctAnswer: false,
        studentAnswer: false,
      },
    ],
    duration: 120,
    student_id: "123",
  },
];

export const exampleCertificates: TFormSchemaAddCertificate[] = [
  {
    certificate_id: "cert-20241101-001", // Unique certificate ID
    serial_number: "SN123456789",
    certificate_type: "Completion",
    class_id: "class-4567-e89b-12d3", // Reference to a specific class
    student_name: "Alice Johnson",
    student_id: "stu-1234-e56b-78a9", // Reference to a specific student
  },
  {
    certificate_id: "cert-20241102-002",
    serial_number: "SN987654321",
    certificate_type: "Excellence in Science",
    class_id: "class-1234-f67c-89a0",
    student_name: "Michael Smith",
    student_id: "stu-5678-d90e-12b3",
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

export const exampleMaterials: TFormSchemaAddMaterial[] = [
  {
    id: "material-1234-f67c-89a0",
    attachment: [{ name: "lesson1.py", size: 4500000 }], // Example file within 5MB limit
    session_id: "123e4567-e89b-12d3-a456-426614174000",
    class_field: "Math101",
    instructor_id: "123e4567-e89b-12d3-a456-426614174001",
  },
  {
    id: "material-1234-f67c-89a0",
    attachment: [{ name: "example.js", size: 3000000 }], // Another valid file within 5MB limit
    session_id: "123e4567-e89b-12d3-a456-426614174002",
    class_field: "Physics202",
    instructor_id: "123e4567-e89b-12d3-a456-426614174003",
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

export const exampleMeetings: TFormSchemaAddMeeting[] = [
  {
    sessionid: "session123",
    playback_start_time: "2024-11-01T10:00:00Z",
    playback_end_timestamp: "2024-11-01T11:00:00Z",
    session_time: "2024-11-01T09:00:00Z",
    deviceid: "device456",
    admin_id: "admin789",
    user_id: "user012",
  },
  {
    sessionid: "session124",
    playback_start_time: "2024-12-02T10:00:00Z",
    playback_end_timestamp: "2024-12-02T10:00:00Z",
    session_time: "2024-11-02T15:30:00Z",
    deviceid: "device456",
    admin_id: "admin789",
    user_id: "user345",
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

export const exampleSchedules: TFormSchemaAddSchedule[] = [
  {
    id: "schedule123", // Optional ID, included here
    schedule_name: "Math Class Schedule",
    schedule_type: "Class Session",
    url: "https://example.com/schedules/math", // Valid URL format
    timestamp: new Date("2024-10-30T09:00:00"), // Valid date object
    instructor_id: "instructor456",
    class_field: "class789",
  },
  {
    id: "schedule456", // Optional ID, included here
    schedule_name: "Parent Meeting",
    schedule_type: "Meeting",
    url: undefined, // Optional field not provided
    timestamp: new Date("2024-11-01T14:00:00"), // Valid date object
    instructor_id: "instructor123",
    class_field: "class456",
  },
];

export const examplePrograms: TFormSchemaAddProgram[] = [
  {
    program_id: "program123", // Optional, included
    program_name: "Advanced Programming Bootcamp",
    program_levels: [
      {
        level_id: "level1", // Optional, included
        level_name: "Beginner Level",
        description: "Introduction to programming fundamentals",
        subjects: ["Variables", "Loops", "Conditionals"],
        sessions: [
          {
            id: "schedule1",
            schedule_name: "Introduction to Variables",
            schedule_type: "Classroom",
            url: "https://example.com/schedules/variables",
            timestamp: new Date("2024-11-01T10:00:00"), // Valid date object
            instructor_id: "instructor456",
            class_field: "class123",
          },
        ],
      },
      {
        level_id: "level2",
        level_name: "Intermediate Level",
        description: "In-depth exploration of data structures",
        subjects: ["Arrays", "Linked Lists", "Trees"],
        sessions: [
          {
            id: "schedule2",
            schedule_name: "Data Structures Workshop",
            schedule_type: "Online",
            url: "https://example.com/schedules/ds-workshop",
            timestamp: new Date("2024-12-01T15:00:00"),
            instructor_id: "instructor789",
            class_field: "class456",
          },
        ],
      },
    ],
    program_price: "500 USD",
    description: "A comprehensive bootcamp for aspiring developers.",
    duration: "6 months",
    start_date: new Date("2024-11-01"),
  },
  {
    program_id: "program456", // Optional, included
    program_name: "Data Science Essentials",
    program_levels: [
      {
        // level_id is optional and omitted
        level_name: "Fundamentals of Data Science",
        description: "Learn the basics of data analysis and visualization",
        subjects: ["Statistics", "Data Cleaning", "Visualization"],
        sessions: [
          {
            id: "schedule3",
            schedule_name: "Statistics Introduction",
            schedule_type: "Classroom",
            url: "https://example.com/schedules/stats",
            timestamp: new Date("2024-11-05T09:00:00"),
            instructor_id: "instructor321",
            class_field: "class789",
          },
        ],
      },
    ],
    program_price: "3000 EGP",
    description: "A beginner-friendly introduction to data science concepts.",
    duration: "3 months",
    start_date: new Date("2024-11-05"),
  },
];
