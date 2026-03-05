const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const doc = new PDFDocument({
  size: "A4",
  margins: { top: 50, bottom: 50, left: 55, right: 55 },
});

const output = path.join(__dirname, "..", "public", "resume.pdf");
doc.pipe(fs.createWriteStream(output));

// ── Design Tokens ──
const W = 485;
const L = 55;
const NAVY = "#1e3a5f";
const BLACK = "#1a1a1a";
const DARK = "#2d2d2d";
const GRAY = "#555555";
const LIGHT_LINE = "#c8c8c8";

// ── Helpers ──
function checkPage(y, need) {
  if (y + need > 790) { doc.addPage(); return 50; }
  return y;
}

function sectionHeading(title, y) {
  y = checkPage(y, 28);
  doc.font("Helvetica-Bold").fontSize(11.5).fillColor(NAVY).text(title.toUpperCase(), L, y, { characterSpacing: 1.2 });
  y += 16;
  doc.moveTo(L, y).lineTo(L + W, y).strokeColor(LIGHT_LINE).lineWidth(0.6).stroke();
  return y + 10;
}

function bullet(text, y, indent) {
  y = checkPage(y, 22);
  const x = indent || L + 10;
  doc.font("Helvetica").fontSize(9.5).fillColor(DARK);
  doc.text("\u2022", x, y, { continued: false, lineBreak: false });
  doc.text(text, x + 10, y, { width: W - (x - L) - 12, lineGap: 2.2 });
  return doc.y + 3.5;
}

// ═══════════════════════════════════════════════════════
// HEADER
// ═══════════════════════════════════════════════════════

doc.font("Helvetica-Bold").fontSize(24).fillColor(BLACK).text("Amed Berzinar", L, 50);

doc.font("Helvetica").fontSize(12).fillColor(NAVY).text("Full Stack & Flutter Developer", L, 80);

doc.moveDown(0.5);
let y = doc.y + 4;

// Contact line
doc.font("Helvetica").fontSize(9).fillColor(GRAY);
doc.text("amadbarznar123@gmail.com", L, y, { continued: true });
doc.text("    |    ", { continued: true });
doc.text("+964 0751 840 5161", { continued: false });

y = doc.y + 12;
doc.moveTo(L, y).lineTo(L + W, y).strokeColor(NAVY).lineWidth(1.2).stroke();
y += 16;

// ═══════════════════════════════════════════════════════
// SUMMARY
// ═══════════════════════════════════════════════════════

y = sectionHeading("Summary", y);

doc.font("Helvetica").fontSize(9.5).fillColor(DARK).text(
  "Full Stack Developer with 4+ years of experience building production-grade web, desktop, and mobile applications. " +
  "Specialized in Flutter/Dart for cross-platform mobile and desktop applications with system-level integration (Win32 FFI, COM automation, ESC/POS protocols) " +
  "and AI/ML capabilities (MediaPipe). Equally proficient in React, Next.js, TypeScript, and Node.js ecosystems. " +
  "Proven ability to architect multi-tenant platforms, integrate hardware peripherals, and deliver client projects under tight deadlines.",
  L, y, { width: W, lineGap: 3 }
);

y = doc.y + 16;

// ═══════════════════════════════════════════════════════
// SKILLS
// ═══════════════════════════════════════════════════════

y = sectionHeading("Technical Skills", y);

const skills = [
  ["Flutter & Mobile/Desktop", "Flutter, Dart, Win32 FFI, COM Automation, Provider, SQLite, ESC/POS, fl_chart, PDF Generation"],
  ["Frontend", "React, Next.js, TypeScript, JavaScript, Tailwind CSS, Framer Motion, HTML5, CSS3"],
  ["Backend & Database", "Node.js, Express.js, PostgreSQL, MongoDB, Prisma ORM, Firebase, NextAuth.js, REST APIs"],
  ["AI / ML", "Python, MediaPipe Face Mesh, Eye Tracking (EAR), 3D Head Pose Estimation, Iris Gaze Detection"],
  ["Tools & DevOps", "Git, Docker, Figma, Netlify, Zod, ESC/POS Thermal Printers, Barcode Scanners"],
];

skills.forEach(([label, items]) => {
  y = checkPage(y, 16);
  doc.font("Helvetica-Bold").fontSize(9.5).fillColor(BLACK).text(label + ":  ", L, y, { continued: true });
  doc.font("Helvetica").fontSize(9.5).fillColor(GRAY).text(items);
  y = doc.y + 5;
});

y += 10;

// ═══════════════════════════════════════════════════════
// PROJECTS
// ═══════════════════════════════════════════════════════

y = sectionHeading("Projects", y);

const projects = [
  {
    name: "Point of Sale (POS) System",
    meta: "Cross-Platform Desktop App  |  Flutter, Dart, SQLite, ESC/POS, fl_chart",
    bullets: [
      "Architected a cross-platform POS desktop application (Windows, macOS, Linux) with multi-tenant architecture supporting multiple client businesses per seller account",
      "Engineered an 18-version incremental SQLite migration system with backward compatibility and zero data loss across updates",
      "Built real-time admin dashboard with interactive sales trends, hourly performance, payment breakdowns, and top product charts",
      "Implemented role-based access control (Admin, Cashier, Seller) with fine-grained dot-notation sub-permissions and UI guard widgets",
      "Integrated low-level ESC/POS thermal receipt printing with binary protocol work and bitmap conversion; built visual drag-and-drop barcode label editor",
      "Developed barcode scanner auto-detection (50ms timing threshold), customer loyalty system with tier progression, and bulk import/export (CSV, Excel)",
    ],
  },
  {
    name: "Worker Activity Monitor",
    meta: "AI-Powered Desktop App  |  Flutter, Dart, Python, MediaPipe, Win32 FFI, SQLite",
    bullets: [
      "Built a dual-process desktop app (Flutter UI + Python ML sidecar via JSON streaming) for AI-powered employee productivity tracking with zero cloud dependency",
      "Integrated MediaPipe FaceLandmarker (468-point face mesh) for real-time Eye Aspect Ratio calculation, 3D head pose estimation, and iris gaze tracking at ~5 FPS",
      "Implemented system-level mouse/keyboard tracking through Win32 FFI with per-second granularity and per-minute aggregate storage",
      "Developed combined attention state machine (Active, Watching, Suspicious, Idle) fusing physical activity data with eye-tracking signals",
      "Engineered browser URL tracking via COM automation for 6 browsers and smart video detection covering 30+ streaming platforms",
      "Built shift lifecycle management with crash-resilient resume and professional PDF report generation with activity timelines",
    ],
  },
  {
    name: "TicketFlow \u2014 Queue & Appointment SaaS",
    meta: "Multi-Tenant SaaS Platform  |  Next.js, TypeScript, PostgreSQL, Prisma, NextAuth.js",
    bullets: [
      "Designed a multi-tenant SaaS platform (Organization > Branch > Counter) with a 452-line Prisma schema and 15+ relational models",
      "Developed 65+ secured REST API endpoints with Zod validation, JWT authentication, and middleware for auth, license gating, and role verification",
      "Implemented 5 user roles with granular permissions, drag-and-drop homepage builder (19+ section types), and real-time queue management with sound notifications",
      "Integrated RSA-2048 license management with domain binding and QR-based camera check-in for events",
    ],
  },
  {
    name: "Luxury In Motion Dubai",
    meta: "Production Client Website  |  Next.js, React, TypeScript, Tailwind CSS, Framer Motion",
    bullets: [
      "Delivered a premium car rental website for a Dubai-based luxury vehicle company \u2014 designed, developed, and deployed within 2 weeks",
      "Built fleet showcase with 20+ luxury brand filtering, online booking system, SEO-optimized SSG, and mobile-first responsive design",
      "Integrated secure payment options (Visa, Mastercard, Google Pay, crypto) and Trustpilot testimonials; live at luxuryinmotiondubai.com",
    ],
  },
];

projects.forEach((proj, i) => {
  y = checkPage(y, 70);

  // Project name
  doc.font("Helvetica-Bold").fontSize(10.5).fillColor(BLACK).text(proj.name, L, y);
  y = doc.y + 3;

  // Meta line
  doc.font("Helvetica-Oblique").fontSize(9).fillColor(GRAY).text(proj.meta, L, y, { width: W });
  y = doc.y + 6;

  // Bullets
  proj.bullets.forEach((b) => {
    y = bullet(b, y);
  });

  // Separator between projects (except last)
  if (i < projects.length - 1) {
    y += 6;
  }
});

y += 12;

// ═══════════════════════════════════════════════════════
// EDUCATION
// ═══════════════════════════════════════════════════════

y = sectionHeading("Education", y);

doc.font("Helvetica-Bold").fontSize(10).fillColor(BLACK).text("Self-Taught Developer", L, y);
y = doc.y + 5;
doc.font("Helvetica").fontSize(9.5).fillColor(DARK).text(
  "Continuous learning through production project development, official framework documentation, and structured online courses. " +
  "Deep expertise built by shipping real-world applications across web, desktop, and AI/ML domains.",
  L, y, { width: W, lineGap: 2.5 }
);

// ═══════════════════════════════════════════════════════

doc.end();
console.log("Resume generated:", output);
