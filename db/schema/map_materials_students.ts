import { relations } from "drizzle-orm";
import { pgTable, uuid } from "drizzle-orm/pg-core";
import { students } from "./users";
import { materials } from "./materials";

export const studentsMaterialsRelations = relations(students, ({ many }) => ({
  map_materials_students: many(map_materials_students),
}));

export const materialsStudentsRelations = relations(materials, ({ many }) => ({
  map_materials_students: many(map_materials_students),
}));

export const map_materials_students = pgTable(
  "map_materials_students",
  {
    student_id: uuid("student_id")
      .notNull()
      .references(() => students.id),
    material_id: uuid("material_id")
      .notNull()
      .references(() => materials.id),
  },
  (t) => [t.student_id, t.material_id]
);

export const studentsToMaterialsRelations = relations(
  map_materials_students,
  ({ one }) => ({
    material: one(materials, {
      fields: [map_materials_students.material_id],
      references: [materials.id],
    }),
    student: one(students, {
      fields: [map_materials_students.student_id],
      references: [students.id],
    }),
  })
);
