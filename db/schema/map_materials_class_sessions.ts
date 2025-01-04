import { relations } from "drizzle-orm";
import { pgTable, uuid } from "drizzle-orm/pg-core";
import { materials } from "./materials";
import { class_sessions } from "./class_sessions";

export const classSessionsMaterialsRelations = relations(
  class_sessions,
  ({ many }) => ({
    map_materials_class_sessions: many(map_materials_class_sessions),
  })
);

export const materialsClassSessionsRelations = relations(
  materials,
  ({ many }) => ({
    map_materials_class_sessions: many(map_materials_class_sessions),
  })
);

export const map_materials_class_sessions = pgTable(
  "map_materials_class_sessions",
  {
    class_session_id: uuid("class_session_id")
      .notNull()
      .references(() => class_sessions.id),
    material_id: uuid("material_id")
      .notNull()
      .references(() => materials.id),
  },
  (t) => [t.class_session_id, t.material_id]
);

export const classSessionsToMaterialsRelations = relations(
  map_materials_class_sessions,
  ({ one }) => ({
    material: one(materials, {
      fields: [map_materials_class_sessions.material_id],
      references: [materials.id],
    }),
    class_session: one(class_sessions, {
      fields: [map_materials_class_sessions.class_session_id],
      references: [class_sessions.id],
    }),
  })
);
