import { relations } from "drizzle-orm";
import { pgTable, uuid } from "drizzle-orm/pg-core";
import { programs } from "./programs";
import { program_stages } from "./programs";

export const stagesRelations = relations(program_stages, ({ many }) => ({
  map_programs_stages: many(map_programs_stages),
}));

export const programsRelations = relations(programs, ({ many }) => ({
  map_programs_stages: many(map_programs_stages),
}));

export const map_programs_stages = pgTable(
  "map_programs_stages",
  {
    stageId: uuid("stage_id")
      .notNull()
      .references(() => program_stages.id),
    programId: uuid("program_id")
      .notNull()
      .references(() => programs.id),
  },
  (t) => [t.stageId, t.programId]
);

export const stagesToProgramsRelations = relations(
  map_programs_stages,
  ({ one }) => ({
    program: one(programs, {
      fields: [map_programs_stages.programId],
      references: [programs.id],
    }),
    stage: one(program_stages, {
      fields: [map_programs_stages.stageId],
      references: [program_stages.id],
    }),
  })
);
