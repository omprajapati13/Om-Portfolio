import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // 📩 CONTACT FORM ROUTE
  app.post("/api/contact", async (req, res) => {
    try {
      // 1️⃣ Validate incoming data
      const validatedData = insertContactMessageSchema.parse(req.body);

      // 2️⃣ Save to database
      const message = await storage.createContactMessage(validatedData);

      // 3️⃣ Nodemailer Gmail Transporter
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "omvariya71@gmail.com",        // Your Gmail
          pass: "clyi dprd dvth gipa",        // Your App Password
        },
      });

      // 4️⃣ Email Body Template
      const emailText = `
📬 NEW CONTACT FORM MESSAGE

👤 Name: ${message.name}
📧 Email: ${message.email}

📝 Message:
${message.message}

⏱️ Sent At: ${message.createdAt}
      `;

      // 5️⃣ Send Email to Yourself
      await transporter.sendMail({
        from: `"Portfolio Contact" <${message.email}>`,
        to: "omvariya71@gmail.com",
        subject: `New message from ${message.name}`,
        text: emailText,
      });

      console.log("📩 Email sent successfully!");

      // 6️⃣ Send Response to Frontend
      res.json({
        success: true,
        message: "Message sent successfully! Check your Gmail inbox.",
      });

    } catch (error) {
      console.error("❌ Contact form error:", error);

      res.status(400).json({
        success: false,
        message: "Failed to send message. Please try again.",
      });
    }
  });

  // 🌐 START HTTP SERVER
  const httpServer = createServer(app);
  return httpServer;
}
