import { relations } from "drizzle-orm";
import { pgTable, uuid } from "drizzle-orm/pg-core";
import { classes } from "./classes";
import { program_stages } from "./programs";

export const stagesClassesRelations = relations(program_stages, ({ many }) => ({
  map_classes_stages: many(map_classes_stages),
}));

export const classesStagesRelations = relations(classes, ({ many }) => ({
  map_classes_stages: many(map_classes_stages),
}));

export const map_classes_stages = pgTable(
  "map_classes_stages",
  {
    stage_id: uuid("stage_id")
      .notNull()
      .references(() => program_stages.id),
    class_id: uuid("class_id")
      .notNull()
      .references(() => classes.id),
  },
  (t) => [t.stage_id, t.class_id]
);

export const stagesToClassesRelations = relations(
  map_classes_stages,
  ({ one }) => ({
    class: one(classes, {
      fields: [map_classes_stages.class_id],
      references: [classes.id],
    }),
    stage: one(program_stages, {
      fields: [map_classes_stages.stage_id],
      references: [program_stages.id],
    }),
  })
);
