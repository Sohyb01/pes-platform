import { relations } from "drizzle-orm";
import { pgTable, uuid } from "drizzle-orm/pg-core";
import { instructors } from "./users";
import { programs } from "./programs";

export const instructorsRelations = relations(instructors, ({ many }) => ({
  map_programs_instructors: many(map_programs_instructors),
}));

export const programsRelations = relations(programs, ({ many }) => ({
  map_programs_instructors: many(map_programs_instructors),
}));

export const map_programs_instructors = pgTable(
  "map_programs_instructors",
  {
    instructorId: uuid("instructor_id")
      .notNull()
      .references(() => instructors.id),
    programId: uuid("program_id")
      .notNull()
      .references(() => programs.id),
  },
  (t) => [t.instructorId, t.programId]
);

export const instructorsToProgramsRelations = relations(
  map_programs_instructors,
  ({ one }) => ({
    program: one(programs, {
      fields: [map_programs_instructors.programId],
      references: [programs.id],
    }),
    instructor: one(instructors, {
      fields: [map_programs_instructors.instructorId],
      references: [instructors.id],
    }),
  })
);
