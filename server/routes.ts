import type { Express } from "express";
import { createServer, type Server } from "http";
import { db } from "@db";
import { contacts } from "@db/schema";
import { eq } from "drizzle-orm";

export function registerRoutes(app: Express): Server {
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      const result = await db.insert(contacts).values({
        name,
        email,
        message
      }).returning();

      res.json(result[0]);
    } catch (error) {
      res.status(500).json({ error: "Failed to submit contact form" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
