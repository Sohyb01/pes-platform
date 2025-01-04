import { relations } from "drizzle-orm";
import { pgTable, uuid } from "drizzle-orm/pg-core";
import { instructors } from "./users";
import { programs } from "./programs";

export const instructorsProgramsRelations = relations(
  instructors,
  ({ many }) => ({
    map_programs_instructors: many(map_programs_instructors),
  })
);

export const programsInstructorsRelations = relations(programs, ({ many }) => ({
  map_programs_instructors: many(map_programs_instructors),
}));

export const map_programs_instructors = pgTable(
  "map_programs_instructors",
  {
    instructor_id: uuid("instructor_id")
      .notNull()
      .references(() => instructors.id),
    program_id: uuid("program_id")
      .notNull()
      .references(() => programs.id),
  },
  (t) => [t.instructor_id, t.program_id]
);

export const instructorsToProgramsRelations = relations(
  map_programs_instructors,
  ({ one }) => ({
    program: one(programs, {
      fields: [map_programs_instructors.program_id],
      references: [programs.id],
    }),
    instructor: one(instructors, {
      fields: [map_programs_instructors.instructor_id],
      references: [instructors.id],
    }),
  })
);
