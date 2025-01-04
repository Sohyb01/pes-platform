import { relations } from "drizzle-orm";
import { pgTable, uuid } from "drizzle-orm/pg-core";
import { subjects } from "./subjects";
import { program_stages } from "./programs";

export const stagesSubjectsRelations = relations(
  program_stages,
  ({ many }) => ({
    map_subjects_stages: many(map_subjects_stages),
  })
);

export const subjectsStagesRelations = relations(subjects, ({ many }) => ({
  map_subjects_stages: many(map_subjects_stages),
}));

export const map_subjects_stages = pgTable(
  "map_subjects_stages",
  {
    stage_id: uuid("stage_id")
      .notNull()
      .references(() => program_stages.id),
    subject_id: uuid("subject_id")
      .notNull()
      .references(() => subjects.id),
  },
  (t) => [t.stage_id, t.subject_id]
);

export const stagesToSubjectsRelations = relations(
  map_subjects_stages,
  ({ one }) => ({
    subject: one(subjects, {
      fields: [map_subjects_stages.subject_id],
      references: [subjects.id],
    }),
    stage: one(program_stages, {
      fields: [map_subjects_stages.stage_id],
      references: [program_stages.id],
    }),
  })
);
