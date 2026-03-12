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

doc.font("Helvetica").fontSize(12).fillColor(NAVY).text("Full Stack Developer  |  Iraq  |  Available Worldwide", L, 80);

doc.moveDown(0.5);
let y = doc.y + 4;

// Contact line 1
doc.font("Helvetica").fontSize(9).fillColor(GRAY);
doc.text("amadbarznar123@gmail.com", L, y, { continued: true });
doc.text("    |    ", { continued: true });
doc.text("+964 0751 840 5161 (WhatsApp)", { continued: false });
y = doc.y + 3;

// Contact line 2
doc.text("amedberzinar.com", L, y, { continued: true });
doc.text("    |    ", { continued: true });
doc.text("linkedin.com/in/amed-berzinar", { continued: true });
doc.text("    |    ", { continued: true });
doc.text("github.com/amadbr", { continued: false });

y = doc.y + 12;
doc.moveTo(L, y).lineTo(L + W, y).strokeColor(NAVY).lineWidth(1.2).stroke();
y += 16;

// ═══════════════════════════════════════════════════════
// SUMMARY
// ═══════════════════════════════════════════════════════

y = sectionHeading("Summary", y);

doc.font("Helvetica").fontSize(9.5).fillColor(DARK).text(
  "I'm a Full Stack Developer from Iraq with a CS degree (top 10 in my class) and 4+ years of coding experience. " +
  "I freelance for international clients in Dubai and Scandinavia \u2014 my first client came through a referral because of the quality of my work. " +
  "I also build and sell my own products: my POS system already has a paying customer using it daily. " +
  "I work with React, Next.js, Node.js, and Flutter. I deliver fast and I write clean code.",
  L, y, { width: W, lineGap: 3 }
);

y = doc.y + 16;

// ═══════════════════════════════════════════════════════
// SKILLS
// ═══════════════════════════════════════════════════════

y = sectionHeading("Technical Skills", y);

const skills = [
  ["Frontend", "React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Framer Motion, Shadcn/ui"],
  ["Backend & Database", "Node.js, Express.js, PostgreSQL, MongoDB, Prisma ORM, Firebase, NextAuth.js, REST APIs"],
  ["Mobile & Desktop", "Flutter, Dart, SQLite, Win32 FFI, COM Automation, ESC/POS thermal printing"],
  ["AI / ML", "Python, MediaPipe Face Mesh, real-time eye tracking, head pose estimation"],
  ["Tools & Design", "Git, Docker, Vercel, Netlify, Figma, UI/UX Design"],
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

// ═══════════════════════════════════════════════════════
// FREELANCE EXPERIENCE
// ═══════════════════════════════════════════════════════

y = sectionHeading("Freelance Experience", y);

// Luxury In Motion Dubai
doc.font("Helvetica-Bold").fontSize(10.5).fillColor(BLACK).text("Luxury In Motion Dubai", L, y);
y = doc.y + 3;
doc.font("Helvetica-Oblique").fontSize(9).fillColor(GRAY).text("Freelance Developer (Referral)  |  Next.js, React, TypeScript, Tailwind CSS  |  3\u20134 months  |  Completed", L, y, { width: W });
y = doc.y + 6;
y = bullet("Got this client through a referral from my former manager. Took over an existing project and worked on it for 3\u20134 months \u2014 adding major features, rebuilding sections, and doing deep SEO work", y);
y = bullet("Weekly Saturday meetings with the client throughout the project to review progress and plan next steps", y);
y = bullet("Car rental showcase with 20+ luxury brand filtering, daily/weekly/monthly pricing, booking via WhatsApp and call. Live at luxuryinmotiondubai.com", y);
y = bullet("Client feedback: \"very honest and very good work, we are very happy with this guy\"", y);

y += 8;

// Scandinavia
doc.font("Helvetica-Bold").fontSize(10.5).fillColor(BLACK).text("Two Freelance Clients in Scandinavia", L, y);
y = doc.y + 3;
doc.font("Helvetica-Oblique").fontSize(9).fillColor(GRAY).text("Freelance Developer  |  Norway & Sweden  |  Ongoing (under NDA)", L, y, { width: W });
y = doc.y + 6;
y = bullet("Currently working with two clients in Norway and Sweden. Details are confidential until the projects are deployed", y);

y += 12;

// ═══════════════════════════════════════════════════════
// PRODUCTS & PROJECTS
// ═══════════════════════════════════════════════════════

y = sectionHeading("Products & Projects", y);

const projects = [
  {
    name: "Point of Sale (POS) System",
    meta: "In Production (1 paying customer)  |  Flutter, Dart, SQLite, ESC/POS  |  Core built in 20 days",
    bullets: [
      "A client asked me to build this, and after using it I turned it into a product I now sell. My first customer is actively using it in their store",
      "I fixed problems I saw in other POS systems: refunding is too complicated, you can't hold a cart when a customer steps away, and managing multiple stores is a pain",
      "18-version database migration system that never loses data \u2014 real businesses depend on it, so I can't afford bugs here",
      "Barcode scanner detection using a 50ms timing trick: scanners send characters in fast bursts, humans type slowly. That's how I tell them apart",
      "Currently building local network sync: the admin laptop runs as a server, cashier devices connect over WiFi, and if WiFi drops they work offline and resync later",
    ],
  },
  {
    name: "Worker Activity Monitor",
    meta: "AI Desktop App  |  Flutter, Dart, Python, MediaPipe, Win32 FFI, SQLite  |  Core built in 1 week",
    bullets: [
      "I built this because at a previous company I saw workers doing nothing while managers had no way to know. I wanted to fix that",
      "Flutter handles the UI, Python runs MediaPipe Face Mesh for eye-tracking and head pose detection at ~5 FPS. They talk through JSON streaming",
      "Tracks mouse, keyboard, active apps, and browser URLs across 6 browsers. Generates daily PDF reports. Everything runs offline",
      "Four attention states (Active, Watching, Suspicious, Idle) combining physical activity with what the camera sees",
    ],
  },
  {
    name: "TicketFlow \u2014 Queue & Appointment SaaS",
    meta: "Preparing for Launch  |  Next.js, TypeScript, PostgreSQL, Prisma, NextAuth.js",
    bullets: [
      "I saw the same problem in hospitals, clinics, and government offices: people waiting in disorganized queues. I built a system to fix that",
      "Multi-tenant setup (Organization > Branch > Counter) with 65+ API endpoints, 5 user roles, and a 452-line Prisma schema",
      "Built a drag-and-drop homepage builder with 19+ section types so admins can update their customer page themselves, no developer needed",
      "QR-based appointment confirmation and real-time queue display boards for branch waiting areas",
    ],
  },
];

projects.forEach((proj, i) => {
  y = checkPage(y, 70);

  doc.font("Helvetica-Bold").fontSize(10.5).fillColor(BLACK).text(proj.name, L, y);
  y = doc.y + 3;

  doc.font("Helvetica-Oblique").fontSize(9).fillColor(GRAY).text(proj.meta, L, y, { width: W });
  y = doc.y + 6;

  proj.bullets.forEach((b) => {
    y = bullet(b, y);
  });

  if (i < projects.length - 1) {
    y += 6;
  }
});

y += 12;

// ═══════════════════════════════════════════════════════
// EDUCATION
// ═══════════════════════════════════════════════════════

y = sectionHeading("Education", y);

doc.font("Helvetica-Bold").fontSize(10).fillColor(BLACK).text("Bachelor of Science in Computer Science", L, y);
y = doc.y + 3;
doc.font("Helvetica-Oblique").fontSize(9).fillColor(GRAY).text("Graduated 2025  |  Top 10 in class  |  Ranked 1st in coding among year group", L, y);
y = doc.y + 6;
y = bullet("Got 10/10 on every programming course. Spent every summer break teaching myself new technologies outside the university curriculum", y);
y = bullet("Also completed The Complete Web Development Bootcamp and Flutter Bootcamp with Dart on Udemy", y);

y += 12;

// ═══════════════════════════════════════════════════════
// LANGUAGES
// ═══════════════════════════════════════════════════════

y = sectionHeading("Languages", y);

doc.font("Helvetica").fontSize(9.5).fillColor(DARK);
doc.font("Helvetica-Bold").text("Kurdish", L, y, { continued: true });
doc.font("Helvetica").text("  —  Native", { continued: false });
y = doc.y + 4;
doc.font("Helvetica-Bold").text("English", L, y, { continued: true });
doc.font("Helvetica").text("  —  Professional working proficiency", { continued: false });
y = doc.y + 4;
doc.font("Helvetica-Bold").text("Arabic", L, y, { continued: true });
doc.font("Helvetica").text("  —  Reading and listening comprehension", { continued: false });

y = doc.y + 12;

// ═══════════════════════════════════════════════════════
// HOW I WORK
// ═══════════════════════════════════════════════════════

y = sectionHeading("How I Work", y);

y = bullet("I plan before I code. I think through the architecture and break tasks down before writing a single line", y);
y = bullet("I deliver fast — I built a full POS system core in 20 days and an AI desktop app in 1 week", y);
y = bullet("I use AI as a tool to write cleaner code, but I understand every line I ship. No copy-pasting", y);
y = bullet("I design my own UIs — I don't need a separate designer to deliver a polished product", y);
y = bullet("I communicate clearly and work well across timezones. My clients are in Dubai, Norway, and Sweden", y);

// ═══════════════════════════════════════════════════════

doc.end();
console.log("Resume generated:", output);
