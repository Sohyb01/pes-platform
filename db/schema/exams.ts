import { pgTable, uuid, varchar, numeric, boolean } from "drizzle-orm/pg-core";

import { students, instructors } from "./users";
import { classes } from "./classes";
import { timestamps } from "./common";

export const exams = pgTable("exams", {
  id: uuid("id").notNull().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  type: varchar("exam_type", { length: 100 }).notNull(),
  // created_at
  id_class: uuid("id_class")
    .notNull()
    .references(() => classes.id),
  id_instructor: uuid("id_instructor")
    .notNull()
    .references(() => instructors.id),
  ...timestamps,
});

export const mcq_questions = pgTable("mcq_questions", {
  id: uuid("id").notNull().primaryKey(),
  id_exam: uuid("id_exam")
    .notNull()
    .references(() => exams.id), // Foreign key to exams table
  question_text: varchar("question_text", { length: 255 }).notNull(),
  points: numeric("points").notNull(),
  ...timestamps,
});

export const mcq_question_options = pgTable("mcq_question_options", {
  id: uuid("id").notNull().primaryKey(),
  option: varchar("option", { length: 255 }).notNull(),
  id_mcq_question: uuid("id_mcq_question")
    .notNull()
    .references(() => mcq_questions.id),
  ...timestamps,
});

export const mcq_correct_answers = pgTable("mcq_correct_answers", {
  id: uuid("id").notNull().primaryKey(),
  answer: varchar("answer", { length: 255 }).notNull(),
  id_mcq_questions: uuid("id_mcq_questions")
    .notNull()
    .references(() => mcq_questions.id), // Foreign key to mcq_questionss table
  ...timestamps,
});

export const true_false_questions = pgTable("true_false_questions", {
  id: uuid("id").notNull().primaryKey(),
  id_exam: uuid("id_exam")
    .notNull()
    .references(() => exams.id), // Foreign key to exams table
  question_text: varchar("question_text", { length: 255 }).notNull(),
  points: numeric("points").notNull(),
  ...timestamps,
});

export const true_false_correct_answers = pgTable(
  "true_false_correct_answers",
  {
    id: uuid("id").notNull().primaryKey(),
    answer: boolean("answer").notNull(),
    id_true_false_questions: uuid("id_true_false_questions")
      .notNull()
      .references(() => true_false_questions.id), // Foreign key to exams table
    ...timestamps,
  }
);

export const essay_questions = pgTable("essay_questions", {
  id: uuid("id").notNull().primaryKey(),
  id_exam: uuid("id_exam")
    .notNull()
    .references(() => exams.id), // Foreign key to exams table
  question_text: varchar("question_text", { length: 255 }).notNull(),
  word_limit: numeric("word_limit").notNull(),
  points: numeric("points").notNull(),
  ...timestamps,
});

export const exam_submissions = pgTable("exam_submissions", {
  id: uuid("id").notNull().primaryKey(),
  status: varchar("status", { length: 100 }),

  id_class: uuid("id_class")
    .notNull()
    .references(() => classes.id),
  id_student: uuid("id_student")
    .notNull()
    .references(() => students.id),
  id_exam: uuid("id_exam")
    .notNull()
    .references(() => exams.id),
  ...timestamps,
});

// Student submission answers

export const mcq_student_answers = pgTable("mcq_student_answers", {
  id: uuid("id").notNull().primaryKey(),
  answer: varchar("answer", { length: 255 }).notNull(),
  student_points: numeric("student_points").notNull(),
  id_mcq_questions: uuid("id_mcq_questions")
    .notNull()
    .references(() => mcq_questions.id), // Foreign key to mcq_questionss table
  id_exam_submission: uuid("id_exam_submission")
    .notNull()
    .references(() => exam_submissions.id),
  ...timestamps,
});

export const true_false_student_answers = pgTable(
  "true_false_student_answers",
  {
    id: uuid("id").notNull().primaryKey(),
    answer: varchar("answer", { length: 255 }).notNull(),
    student_points: numeric("student_points").notNull(),
    id_true_false_questions: uuid("id_true_false_questions")
      .notNull()
      .references(() => true_false_questions.id), // Foreign key to mcq_questionss table
    id_exam_submission: uuid("id_exam_submission")
      .notNull()
      .references(() => exam_submissions.id),
    ...timestamps,
  }
);

export const essay_student_answers = pgTable("essay_student_answers", {
  id: uuid("id").notNull().primaryKey(),
  answer: varchar("answer", { length: 255 }).notNull(),
  student_points: numeric("student_points"),
  id_essay_questions: uuid("id_essay_questions")
    .notNull()
    .references(() => essay_questions.id), // Foreign key to mcq_questionss table
  id_exam_submission: uuid("id_exam_submission")
    .notNull()
    .references(() => exam_submissions.id),
  ...timestamps,
});
