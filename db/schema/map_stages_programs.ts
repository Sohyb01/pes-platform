import { relations } from "drizzle-orm";
import { pgTable, uuid } from "drizzle-orm/pg-core";
import { programs } from "./programs";
import { program_stages } from "./programs";

export const StagesProgramsRelations = relations(
  program_stages,
  ({ many }) => ({
    map_programs_stages: many(map_programs_stages),
  })
);

export const ProgramsStagesRelations = relations(programs, ({ many }) => ({
  map_programs_stages: many(map_programs_stages),
}));

export const map_programs_stages = pgTable(
  "map_programs_stages",
  {
    stage_id: uuid("stage_id")
      .notNull()
      .references(() => program_stages.id),
    program_id: uuid("program_id")
      .notNull()
      .references(() => programs.id),
  },
  (t) => [t.stage_id, t.program_id]
);

export const stagesToProgramsRelations = relations(
  map_programs_stages,
  ({ one }) => ({
    program: one(programs, {
      fields: [map_programs_stages.program_id],
      references: [programs.id],
    }),
    stage: one(program_stages, {
      fields: [map_programs_stages.stage_id],
      references: [program_stages.id],
    }),
  })
);
