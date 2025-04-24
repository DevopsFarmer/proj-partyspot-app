import { pgTable, text, serial, integer, timestamp, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  address: text("address"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  category: text("category").notNull(), // wedding, birthday, etc.
  eventType: text("event_type").notNull(), // sangeet, engagement, etc.
  date: text("date").notNull(),
  invitees: integer("invitees").notNull(),
  venueType: text("venue_type").notNull(),
  foodPreferences: jsonb("food_preferences").notNull(),
  specialInstructions: text("special_instructions"),
  status: text("status").notNull().default("pending"), // pending, confirmed, completed
  bookingReference: text("booking_reference").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
});

export const insertEventSchema = createInsertSchema(events).omit({
  id: true,
  createdAt: true,
  status: true,
  bookingReference: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertEvent = z.infer<typeof insertEventSchema>;
export type Event = typeof events.$inferSelect;
