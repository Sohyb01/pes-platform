// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type CoreUser = {
  id: string;
  nid: string;
  family_id?: string; //FK
  //
  name: string;
  gender: string;
  date_of_birth: string;
  parent_name: string;
  //
  email: string;
  mobile_number: string;
  whatsapp_number: string;
  address: string;
  //
  religion?: string;
  blood_group?: "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB";
  diseases?: string;
  //
  date_of_join: string;
  is_active: string;
  promo_code?: string;
  referral_code?: string;
  currency: string;
  //
  theme?: string;
  image?: string;
  timezone?: string;
  language?: string;
  //
  username: string;
  password: string;
};

export type exampleObject = {
  one: string;
  two: string;
  three: number;
  four: string;
  five: number;
};

export type News = {
  id: string;
  media: string;
  content: string;
};

export type Partnership = {
  id: string;
  partner_name: string;
  partner_logo: string;
};

export type Review = {
  id: string;
  full_name: string;
  email: string;
  job: string;
  rating: string;
  description: string;
  status: string;
};

export type SchoolApplication = {
  id: string;
  school_name: string;
  contact_person: string;
  mobile_number: string;
  plans: string;
  proficiency_level: string;
  budget: string;
  grades: string;
  capacity: string;
  expectations: string;
};

export type ContactApplication = {
  id: string;
  name: string;
  mobile_number: string;
  email: string;
  subject: string;
  city: string;
  street: string;
  postcode: string;
  idea: string;
};

export type NewsletterSubscription = {
  id: string;
  email: string;
};

export type Franchise = {
  id: string;
  name: string;
  owner_profession: string;
  location: string;
  budget: string;
  motivation: string;
  expectations: string;
  connection_type: string;
  requirement_stage: string;
  comments: string;
  email: string;
  mobile_number: string;
  city: string;
  country: string;
};

export type Branch = {
  id: string;
  name: string;
  logo: string;
  email: string;
  address: string;
  mobile_number: string;
  website_url: string;
  target_line: string;
  country: string;
  institute_id: string;
};

export type PendingInstructor = CoreUser & {
  faculty: string;
  cv: string;
  experience: string;
  major: string;
};

export type Admin = CoreUser & {
  role: string;
  branch_id: string;
};

export type Student = CoreUser & {
  discount: string;
  siblings: Student[];
  notes: string;
  registration_num: string;
  previous_school: string;
  has_laptop: boolean;
  is_orphan: boolean;
};

export type Parent = CoreUser & {
  education: string;
  profession: string;
  occupation: string;
  monthly_income: string;
  children: Student[];
};

export type Instructor = CoreUser & {
  faculty: string;
  cv: string;
  experience: string;
  major: string;
};

export type Employee = CoreUser & {
  salary: number;
  experience: string;
  education: string;
  role: string;
};

export type Family = {
  id: string;
  father_id: string;
  mother_id: string;
  student_id: string;
};

export type Roles = {
  id: string;
  name: string;
};

export type UserRoleMapping = {
  user_id: string;
  role_id: string;
};

export type Program = {
  id: string;
  name: string;
  levels: string;
  price: string;
  description: string;
};

export type Subject = {
  id: string;
  name: string;
  mark: string;
  track_id: string;
  program_id: string;
};

export type Track = {
  id: string;
  name: string;
};

export type Grade = {
  id: string;
  symbol: string;
  status: string;
  min_age: string;
  max_age: string;
};

export type Assignment = {
  id: string;
  url: string;
  due_date: string;
  attachments: string;
  description: string;
  subject_id: string;
  sender_id: string;
  class_id: string;
};

export type AssignmentSubmission = {
  id: string;
  url: string;
  timestamp: string;
  evaluation: string;
  attachment: string;
  subject_id: string;
  sender_id: string;
  student_id: string;
  class_id: string;
};

export type Class = {
  id: string;
  name: string;
  fees: string;
  begin_date: string;
  end_date: string;
  program_id: string;
  instructor_id: string;
};

export type ClassMapping = {
  id: string;
  name: string;
  program_id: string;
  student_id: string;
  instructor_id: string;
};

export type Booking = {
  id: string;
  type: string;
  timestamp: string;
  booker: string;
};

export type Subscription = {
  id: string;
  type: string;
  class_id: string;
  transaction_id: string;
  screenshot: string;
  begin_date: string;
  end_date: string;
  paid_by: string;
  student_id: string;
};

export type Attendance = {
  id: string;
  status: string;
  date: string;
  day: string;
  class_id: string;
  student_Id: string;
};

export type EmployeeAttendance = {
  id: string;
  role: string;
  status: string;
  date: string;
  day: string;
  check_in: string;
  check_out: string;
  duration: string;
  employee_id: string;
};

export type FreeSession = {
  id: string;
  name: string;
  url: string;
  timestamp: string;
  class_id: string;
  instructor_id: string;
};

export type AssignedFreeSession = {
  id: string;
  whatsapp: string;
  grade: string;
  has_laptop: boolean;
  mobile_number: string;
  timestamp: string;
  session_id: string;
  parent_id: string;
  class_id: string;
  student_id: string;
};

export type AttendedFreeSession = {
  id: string;
  name: string;
  status: string;
  timestamp: string;
  session_id: string;
  parent_id: string;
  class_id: string;
  student_id: string;
};

export type Fee = {
  id: string;
  type: string;
  target_role: string;
  amount: string;
};

export type Contact = {
  id: string;
  mobile_number: string;
  name: string;
  image: string;
  host_id: string;
};

export type Card = {
  id: string;
  number: string;
  holder: string;
  expiration_date: string;
  cvv: string;
  user_id: string;
};

export type Schedules = {
  id: string;
  name: string;
  type: string;
  url: string;
  timestamp: string;
  instructor_id: string;
  class_id: string;
};

export type InstructorCalled = {
  id: string;
  url: string;
  timestamp: string;
  parent_id: string;
  student_id: string;
  instructor_id: string;
  class_id: string;
};

export type Conversation = {
  id: string;
  name: string;
};

export type Message = {
  id: string;
  text: string;
  media: string;
  sent_timestamp: string;
  receieved_timestamp: string;
  sender: string;
  receiever: string;
  conversation_id: string;
  contact_id: string;
};

export type MaterialsAttachment = {
  id: string;
  attachment: string;
  session_id: string;
  class_id: string;
  instructor_id: string;
};

export type ChartsAccount = {
  id: string;
  name: string;
  type: string;
};

export type Balance = {
  id: string;
  timestamp: string;
  type: string;
  amount: string;
  description: string;
  chart_id: string;
};

export type MessageAttachment = {
  id: string;
  attachment: string;
  description: string;
  sender_id: string;
  receiver_id: string;
  conversation_id: string;
};

export type Exam = {
  id: string;
  name: string;
  type: string;
  question: string;
  answer: string;
  class_id: string;
  instructor_id: string;
};

export type SolvedExam = {
  id: string;
  name: string;
  type: string;
  question: string;
  answer: string;
  student_answer: string;
  grade: string;
  class_id: string;
  student_id: string;
};

export type SubjectMapping = {
  class_id: string;
  subject_id: string;
};

export type Feedback = {
  id: string;
  rating: string;
  description: string;
  assignment_handed_id: string;
  student_id: string;
  assignment_attachment: string;
  class_id: string;
  instructor_id: string;
};

export type ProgramEnrolled = {
  id: string;
  student_id: string;
  program_id: string;
};

export type AvailableToCall = {
  id: string;
  timestamp: string;
  url: string;
  class_id: string;
  instructor_id: string;
};

export type InviteAndEarn = {
  id: string;
  timestamp: string;
  subscription_id: string;
  guest_id: string;
  referral_code: string;
  host_id: string;
};

export type Session = {
  id: string;
  playback_start_timestamp: string;
  playback_end_timestamp: string;
  session_time: string;
  device_id: string;
  user_id: string;
  admin_id: string;
};

export type Certificate = {
  id: string;
  serial_number: string;
  type: string;
  class_id: string;
  student_name: string;
  student_id: string;
};

export type ProgramLevel = {
  id: string;
  number_of_sessions: string;
  duration: string;
  price: string;
  program_id: string;
};

export type Evaluation = {
  id: string;
  timestamp: string;
  points: string;
  class_id: string;
  student_id: string;
};

export type LogHistory = {
  id: string;
  action: string;
  timestamp: string;
  user_id: string;
  victim_id: string;
};

export type AppliedFreeSession = {
  id: string;
  timestamp: string;
  user_id: string;
};

export type ConversationMapping = {
  id: string;
  user_id: string;
};

export type ProgramLevelMapping = {
  id: string;
  program_id: string;
  level_id: string;
};

export type LevelsProject = {
  project_id: string;
  project_name: string;
  level_id: string;
};

export type ProgramLevelMap = {
  project_id: string;
  project_name: string;
  project_url: string;
  description: string;
  student_id: string;
  track_id: string;
};
