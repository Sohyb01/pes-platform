import { relations } from "drizzle-orm";
import { pgTable, uuid } from "drizzle-orm/pg-core";
import { subjects } from "./subjects";
import { program_stages } from "./programs";

export const stagesRelations = relations(program_stages, ({ many }) => ({
  map_subjects_stages: many(map_subjects_stages),
}));

export const subjectsRelations = relations(subjects, ({ many }) => ({
  map_subjects_stages: many(map_subjects_stages),
}));

export const map_subjects_stages = pgTable(
  "map_subjects_stages",
  {
    stageId: uuid("stage_id")
      .notNull()
      .references(() => program_stages.id),
    subjectId: uuid("subject_id")
      .notNull()
      .references(() => subjects.id),
  },
  (t) => [t.stageId, t.subjectId]
);

export const stagesToSubjectsRelations = relations(
  map_subjects_stages,
  ({ one }) => ({
    subject: one(subjects, {
      fields: [map_subjects_stages.subjectId],
      references: [subjects.id],
    }),
    stage: one(program_stages, {
      fields: [map_subjects_stages.stageId],
      references: [program_stages.id],
    }),
  })
);
