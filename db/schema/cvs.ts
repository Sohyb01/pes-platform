import { pgTable, uuid, varchar, jsonb } from "drizzle-orm/pg-core";
import { students } from "./users";
import { institutes } from "./institutes";

export const cvs = pgTable('cvs', {
    id: uuid('id').notNull().primaryKey(), // Primary key
    cv_attachment: jsonb('cv_attachment').default('{}').notNull(), // JSON field for attachment metadata
    cv_file: varchar('cv_file', { length: 2048 }).notNull(), // File path or URL

    id_student: uuid('id_student').notNull().references(() => students.id), // Foreign key to `students`
    id_institute: uuid('id_institute').notNull().references(() => institutes.id), // Foreign key to `institutes`

    description: varchar('description', { length: 255 }).notNull(), 
});
