import { relations } from "drizzle-orm";
import { pgTable, uuid } from "drizzle-orm/pg-core";
import { classes } from "./classes";
import { program_stages } from "./programs";

export const stagesRelations = relations(program_stages, ({ many }) => ({
  map_classes_stages: many(map_classes_stages),
}));

export const classesRelations = relations(classes, ({ many }) => ({
  map_classes_stages: many(map_classes_stages),
}));

export const map_classes_stages = pgTable(
  "map_classes_stages",
  {
    stageId: uuid("stage_id")
      .notNull()
      .references(() => program_stages.id),
    classId: uuid("class_id")
      .notNull()
      .references(() => classes.id),
  },
  (t) => [t.stageId, t.classId]
);

export const stagesToClassesRelations = relations(
  map_classes_stages,
  ({ one }) => ({
    class: one(classes, {
      fields: [map_classes_stages.classId],
      references: [classes.id],
    }),
    stage: one(program_stages, {
      fields: [map_classes_stages.stageId],
      references: [program_stages.id],
    }),
  })
);
