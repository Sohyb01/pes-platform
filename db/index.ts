import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { student_achievements } from "./schema/achievements";
import {
  assignments,
  assignments_handed,
  feedback,
  assignmentStatusEnum,
} from "./schema/assignments";
import { branches } from "./schema/branches";
import { certificates } from "./schema/certificates";
import {
  class_sessions,
  map_class_sessions_students,
  studentsRelations,
  classSessionsRelations,
  studentsToSessionsRelations,
} from "./schema/class_sessions";
import { classes, transfer_class_applications } from "./schema/classes";
import {
  rolesEnum,
  currencyEnum,
  themeEnum,
  languageEnum,
  timezoneEnum,
  attendanceStatusEnum,
  classTransferEnum,
  franchiseApplicationStatusEnum,
  reviewStatusEnum,
  pendingInstructorStatusEnum,
  feesStatusEnum,
} from "./schema/common";
import {
  display_projects,
  display_project_images,
} from "./schema/display_projects";
import {
  instructors_attendance,
  receptionists_attendance,
} from "./schema/employee_attendance";
import {
  exams,
  mcq_questions,
  mcq_question_options,
  mcq_correct_answers,
  true_false_questions,
  true_false_correct_answers,
  essay_questions,
  exam_submissions,
  mcq_student_answers,
  true_false_student_answers,
  essay_student_answers,
} from "./schema/exams";
import { families } from "./schema/families";
import { balanceEnum, balances, chart_heads } from "./schema/finance";
import {
  instituteApplicationStatusEnum,
  institutes,
  institute_request,
} from "./schema/institutes";
import { instructor_calls } from "./schema/instructor_calls";
import {
  achievementsStudentsRelations,
  map_student_achievements_students,
  studentsAchievementsRelations,
  studentsToStudentAchievementsRelations,
} from "./schema/map_achievements_students";
import {
  map_classes_instructors,
  instructorsToClassesRelations,
  classesInstructorsRelations,
  instructorsClassesRelations,
} from "./schema/map_classes_instructors";
import {
  classesStudentsRelations,
  map_classes_students,
  studentsClassesRelations,
  studentsToClassesRelations,
} from "./schema/map_classes_students";
import {
  examsStudentsRelations,
  map_exams_students,
  studentsExamsRelations,
  studentsToExamsRelations,
} from "./schema/map_exams_students";
import {
  classSessionsMaterialsRelations,
  classSessionsToMaterialsRelations,
  map_materials_class_sessions,
  materialsClassSessionsRelations,
} from "./schema/map_materials_class_sessions";
import {
  map_materials_students,
  materialsStudentsRelations,
  studentsMaterialsRelations,
  studentsToMaterialsRelations,
} from "./schema/map_materials_students";
import {
  instructorsProgramsRelations,
  instructorsToProgramsRelations,
  map_programs_instructors,
  programsInstructorsRelations,
} from "./schema/map_programs_instructors";
import {
  classesStagesRelations,
  map_classes_stages,
  stagesClassesRelations,
  stagesToClassesRelations,
} from "./schema/map_stages_classes";
import {
  map_programs_stages,
  ProgramsStagesRelations,
  StagesProgramsRelations,
  stagesToProgramsRelations,
} from "./schema/map_stages_programs";
import {
  map_subjects_stages,
  stagesSubjectsRelations,
  stagesToSubjectsRelations,
  subjectsStagesRelations,
} from "./schema/map_stages_subjects";
import { materials } from "./schema/materials";
import { newsletter_subscription, class_announcements } from "./schema/news";
import { otp } from "./schema/otp";
import { rulesCategoryEnum, rules_and_regulations } from "./schema/policies";
import { programs, program_stages } from "./schema/programs";
import { projects } from "./schema/projects";
import { reviews } from "./schema/review";
import { students_attendances } from "./schema/student_attendance";
import { subjects } from "./schema/subjects";
import { submissions_contact_us } from "./schema/submissions_contact_us";
import { tracks } from "./schema/tracks";
import {
  instructors,
  admins_financial,
  admins_educational,
  students,
  parents,
  receptionists,
} from "./schema/users";

export const allSchema = {
  student_achievements,
  assignments,
  assignments_handed,
  feedback,
  branches,
  certificates,
  class_sessions,
  map_class_sessions_students,
  studentsRelations,
  classSessionsRelations,
  studentsToSessionsRelations,
  classes,
  transfer_class_applications,
  rolesEnum,
  assignmentStatusEnum,
  currencyEnum,
  themeEnum,
  languageEnum,
  timezoneEnum,
  attendanceStatusEnum,
  classTransferEnum,
  franchiseApplicationStatusEnum,
  reviewStatusEnum,
  pendingInstructorStatusEnum,
  feesStatusEnum,
  display_projects,
  display_project_images,
  instructors_attendance,
  receptionists_attendance,
  exams,
  mcq_questions,
  mcq_question_options,
  mcq_correct_answers,
  true_false_questions,
  true_false_correct_answers,
  essay_questions,
  exam_submissions,
  mcq_student_answers,
  true_false_student_answers,
  essay_student_answers,
  families,
  balanceEnum,
  balances,
  chart_heads,
  instituteApplicationStatusEnum,
  institutes,
  institute_request,
  instructor_calls,
  map_student_achievements_students,
  map_classes_instructors,
  map_classes_students,
  map_exams_students,
  map_materials_class_sessions,
  map_materials_students,
  map_programs_instructors,
  map_classes_stages,
  map_programs_stages,
  map_subjects_stages,
  materials,
  newsletter_subscription,
  class_announcements,
  otp,
  rulesCategoryEnum,
  rules_and_regulations,
  programs,
  program_stages,
  projects,
  reviews,
  students_attendances,
  subjects,
  submissions_contact_us,
  tracks,
  instructors,
  admins_financial,
  admins_educational,
  students,
  parents,
  receptionists,
  // Relations
  studentsAchievementsRelations,
  achievementsStudentsRelations,
  studentsToStudentAchievementsRelations,
  instructorsClassesRelations,
  classesInstructorsRelations,
  instructorsToClassesRelations,
  studentsClassesRelations,
  classesStudentsRelations,
  studentsToClassesRelations,
  studentsExamsRelations,
  examsStudentsRelations,
  studentsToExamsRelations,
  classSessionsMaterialsRelations,
  materialsClassSessionsRelations,
  classSessionsToMaterialsRelations,
  studentsMaterialsRelations,
  materialsStudentsRelations,
  studentsToMaterialsRelations,
  instructorsProgramsRelations,
  programsInstructorsRelations,
  instructorsToProgramsRelations,
  stagesClassesRelations,
  classesStagesRelations,
  stagesToClassesRelations,
  StagesProgramsRelations,
  ProgramsStagesRelations,
  stagesToProgramsRelations,
  stagesSubjectsRelations,
  subjectsStagesRelations,
  stagesToSubjectsRelations,
};

const connectionString = `${process.env.DATABASE_URL}`;

// Disable prefetch as it is not supported for "Transaction" pool mode
const client = postgres(connectionString, { prepare: false });

export const db = drizzle({ client, schema: allSchema });
