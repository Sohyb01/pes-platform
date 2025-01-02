import { pgTable, uuid, varchar, timestamp } from "drizzle-orm/pg-core";

import {instructors} from './users';
import {classes} from "./classes"

export const news = pgTable('news', {
    id: uuid('id').notNull().primaryKey(),
    news_media: varchar('news_media', { length: 255 }).notNull(), 
    news_content: varchar('news_content', { length: 1000 }).notNull(), 
    is_published: varchar('is_published', { length: 5 }).notNull(), // "true" or "false"
});


export const newsletter = pgTable('newsletter', {
    id: uuid('id').notNull().primaryKey(), 
    sub_email: varchar('sub_email', { length: 255 }).notNull(), 
});


export const announcements = pgTable('announcements', {
    id: uuid('id').notNull().primaryKey(),
    announcement_content: varchar('announcement_content', { length: 1000 }).notNull(), 
    announcement_date: timestamp('announcement_date', { withTimezone: true }).notNull(),
    
    id_class: uuid('id_class').notNull().references(() => classes.id), // Foreign key to the class receiving the announcement
    id_instructor: uuid('id_instructor').notNull().references(() => instructors.id), // Foreign key to the instructor sending the announcement
});
