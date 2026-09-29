const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// Main API Route
app.post("/send-email", async (req, res) => {
  const { name, email, phone, projectType, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Required fields missing",
    });
  }

  try {
    // Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // =========================
    // 1. EMAIL TO YOU (ADMIN)
    // =========================
    await transporter.sendMail({
      from: `"Website Lead" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Project Request from ${name}`,
      html: `
        <div style="font-family: Arial;">
          <h2>📩 New Lead Received</h2>
          
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Project Type:</strong> ${projectType}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    // =========================
    // 2. AUTO REPLY TO USER
    // =========================
    await transporter.sendMail({
      from: `"Web Collection Technology" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank You for Contacting Web Collection Technology",
      html: `
        <div style="font-family: Arial; line-height: 1.6;">
          
          <h2 style="color:#2b6cb0;">Hello ${name}, 👋</h2>

          <p>Thank you for contacting <strong>Web Collection Technology</strong>.</p>

          <p>We have received your request and our team is currently reviewing your project details.</p>

          <h3>What we do:</h3>
          <ul>
            <li>🌍 Mapping & GIS Solutions</li>
            <li>🎨 UX/UI Design</li>
            <li>💻 Web & Software Development</li>
            <li>📊 Data & Smart Systems</li>
          </ul>

          <p>We will contact you shortly with the best solution for your project.</p>

          <br/>

          <p>
            Regards,<br/>
            <strong>Web Collection Technology Team</strong>
          </p>

          <hr/>
          <p style="font-size:12px;color:gray;">
            This is an automated message. Please do not reply.
          </p>

        </div>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.log("EMAIL ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Email sending failed",
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});