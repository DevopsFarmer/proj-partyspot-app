import express, { type Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserSchema, insertEventSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes
  const apiRouter = express.Router();
  app.use("/api", apiRouter);

  // User routes
  apiRouter.post("/users", async (req, res) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      const user = await storage.createUser(userData);
      res.status(201).json(user);
    } catch (error: any) {
      if (error?.name === 'ZodError' || error?.issues) {
        res.status(400).json({ message: error.message || "Validation error" });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  apiRouter.get("/users/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const user = await storage.getUser(id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Event routes
  apiRouter.post("/events", async (req, res) => {
    try {
      const eventData = insertEventSchema.parse(req.body);
      const event = await storage.createEvent(eventData);
      res.status(201).json(event);
    } catch (error: any) {
      if (error?.name === 'ZodError' || error?.issues) {
        res.status(400).json({ message: error.message || "Validation error" });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  apiRouter.get("/events/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const event = await storage.getEvent(id);
      if (!event) {
        return res.status(404).json({ message: "Event not found" });
      }
      res.json(event);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  apiRouter.get("/users/:userId/events", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const events = await storage.getEventsByUserId(userId);
      res.json(events);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });

  apiRouter.patch("/events/:id/status", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const { status } = z.object({ status: z.string() }).parse(req.body);
      const event = await storage.updateEventStatus(id, status);
      if (!event) {
        return res.status(404).json({ message: "Event not found" });
      }
      res.json(event);
    } catch (error: any) {
      if (error?.name === 'ZodError' || error?.issues) {
        res.status(400).json({ message: error.message || "Validation error" });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}