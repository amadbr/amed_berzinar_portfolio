import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaFigma, FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiFlutter,
  SiDart,
  SiFirebase,
  SiPrisma,
  SiExpress,
  SiVercel,
} from "react-icons/si";

export const personalInfo = {
  name: "Amed Berzinar",
  title: "Full Stack Developer | Freelancer",
  tagline:
    "Full Stack Developer from Iraq, building web & mobile applications for clients across the Middle East and Scandinavia.",
  about: `I'm a 23-year-old Full Stack Developer from Iraq with a Computer Science degree — graduated in the top 10 of my class, and ranked first in coding among my year. While university taught me the fundamentals, I spent every summer break learning on my own, pushing beyond the curriculum to master real-world development.

Today I work as a freelance developer with clients in Dubai and Scandinavia. My first major project, Luxury In Motion Dubai, is live and serving customers. I build with React, Next.js, Node.js, and Flutter — and I'm known for delivering quality work fast. I use AI as a tool to write cleaner code, but every line I ship is something I fully understand.

Currently available for freelance projects worldwide. Let's build something together.`,
  email: "amadbarznar123@gmail.com",
  socials: {
    github: "https://github.com/amadbr",
    linkedin: "https://www.linkedin.com/in/amed-berzinar/",
    instagram: "https://instagram.com/amed_berzinar",
  },
};

export const skills = [
  { name: "Flutter", icon: SiFlutter, category: "Mobile & Desktop" },
  { name: "Dart", icon: SiDart, category: "Mobile & Desktop" },
  { name: "HTML5", icon: FaHtml5, category: "Frontend" },
  { name: "CSS3", icon: FaCss3Alt, category: "Frontend" },
  { name: "JavaScript", icon: SiJavascript, category: "Frontend" },
  { name: "TypeScript", icon: SiTypescript, category: "Frontend" },
  { name: "React", icon: FaReact, category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend" },
  { name: "Node.js", icon: FaNodeJs, category: "Backend" },
  { name: "Express.js", icon: SiExpress, category: "Backend" },
  { name: "Python", icon: FaPython, category: "Backend" },
  { name: "MongoDB", icon: SiMongodb, category: "Backend" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "Backend" },
  { name: "Prisma", icon: SiPrisma, category: "Backend" },
  { name: "Firebase", icon: SiFirebase, category: "Backend" },
  { name: "Git", icon: FaGitAlt, category: "Tools" },
  { name: "Docker", icon: FaDocker, category: "Tools" },
  { name: "Vercel", icon: SiVercel, category: "Tools" },
  { name: "Figma", icon: FaFigma, category: "Tools" },
];

export interface Project {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  images?: string[];
  imageGroups?: { label: string; images: string[] }[];
  liveUrl: string;
  githubUrl: string;
  category: string;
  features: string[];
  techDetails: string;
  challenges: string;
  role: string;
  duration: string;
  status: string;
}

export const projects: Project[] = [
  {
    title: "Luxury In Motion Dubai",
    slug: "luxury-in-motion-dubai",
    description:
      "A live production website I built for a luxury car rental company in Dubai. Customers can browse 20+ brands, view pricing, and book via WhatsApp or call.",
    longDescription:
      "A Dubai-based luxury car rental company was referred to me through a former manager. The project was already started by another developer, but they didn't have enough time to continue. I took over and worked on it for 3-4 months — adding major features, rebuilding sections, and doing deep SEO work to make the site visible on Google in Dubai's competitive rental market. The site showcases 20+ luxury brands (Ferrari, Rolls-Royce, Lamborghini, Mercedes, and more), lets customers filter by category or brand, see daily/weekly/monthly pricing, and book via WhatsApp or phone call. We had weekly meetings every Saturday throughout the 3-4 months to review progress and plan next steps. The client was very happy with the result — they told my former manager that I delivered honest, professional work.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "https://ik.imagekit.io/i0dqqmt1a/portfolio/luxury-1_4tEG9xd_B.png",
    images: [
      "https://ik.imagekit.io/i0dqqmt1a/portfolio/luxury-1_4tEG9xd_B.png",
      "https://ik.imagekit.io/i0dqqmt1a/portfolio/luxury-2_5s6s4S0f1.png",
      "https://ik.imagekit.io/i0dqqmt1a/portfolio/luxury-3_lF-o2uwAK.png",
      "https://ik.imagekit.io/i0dqqmt1a/portfolio/luxury-4_9UygdA2B8.png",
      "https://ik.imagekit.io/i0dqqmt1a/portfolio/luxury-5_jjesVj9f2.png",
      "https://ik.imagekit.io/i0dqqmt1a/portfolio/luxury-6_qWL2wmn0V.png",
    ],
    liveUrl: "https://www.luxuryinmotiondubai.com/",
    githubUrl: "#",
    category: "Web App",
    features: [
      "Fleet showcase with filtering by category (luxury, sports, SUV, sedan, convertible, economy) and by brand across 20+ manufacturers",
      "Booking via WhatsApp and direct call with daily, weekly, and monthly rental pricing displayed",
      "Multiple payment methods accepted (Visa, Mastercard, Google Pay, cryptocurrency)",
      "Detailed vehicle pages with specifications, pricing, and availability",
      "SEO-optimized static generation for fast loads and search engine ranking",
      "Customer testimonials with Trustpilot and Google review integration",
      "Fully responsive design with scroll-triggered animations",
    ],
    techDetails:
      "The site uses Next.js with static site generation because SEO is everything for a car rental business in Dubai's competitive market. Tailwind CSS handles the responsive styling and Framer Motion powers the scroll-triggered animations that give the site a premium feel. The entire site is exported as static HTML, so it loads instantly with no server costs. I did deep SEO work — static generation, dynamic metadata for every vehicle page, semantic HTML, and structured content to help the site rank on Google.",
    challenges:
      "Taking over a project that someone else started meant I had to understand the existing code before I could build on it. The main challenge was making the site feel premium while keeping it fast — high-resolution car images are heavy, so I implemented lazy loading and optimized every image. The booking flow needed to work just as well on a phone as on desktop since most Dubai customers browse on mobile. SEO was the biggest focus — the client competes with dozens of other rental companies, so I did deep work on static generation, dynamic metadata for every vehicle page, and structured content to help them rank on Google.",
    role: "Freelance Developer",
    duration: "3 - 4 months",
    status: "Completed",
  },
  {
    title: "Worker Activity Monitor",
    slug: "worker-activity-monitor",
    description:
      "A desktop app that tracks employee productivity using AI eye-tracking, mouse/keyboard analytics, and generates PDF reports. Runs fully offline.",
    longDescription:
      "I built this because of a real problem I saw at a company I used to work at — lazy workers who weren't doing their job, and managers who had no way to see what was actually happening. I wanted to give managers a clear picture of their team's productivity so they could make their business successful. The app tracks everything: mouse and keyboard activity, which apps are being used, what websites are open, and even uses AI eye-tracking through the camera to detect if someone is paying attention or not. It runs fully offline with no cloud dependency, and generates daily PDF reports for each worker. I built the whole thing in about one week using Flutter for the UI and Python for the AI eye-tracking side.",
    tags: ["Flutter", "Dart", "Python", "MediaPipe", "Win32 FFI", "SQLite"],
    image: "https://ik.imagekit.io/i0dqqmt1a/portfolio/worker-1_1YCm1AysbY.png",
    images: [
      "https://ik.imagekit.io/i0dqqmt1a/portfolio/worker-1_1YCm1AysbY.png",
      "https://ik.imagekit.io/i0dqqmt1a/portfolio/worker-2_UGySskm-l.png",
      "https://ik.imagekit.io/i0dqqmt1a/portfolio/worker-3_lFF4E5koN.png",
      "https://ik.imagekit.io/i0dqqmt1a/portfolio/worker-4_f5UdFdsXt.png",
      "https://ik.imagekit.io/i0dqqmt1a/portfolio/worker-5_-WUeu_Osg.png",
    ],
    liveUrl: "#",
    githubUrl: "#",
    category: "Desktop App",
    features: [
      "Real-time mouse movement and keyboard input tracking via Win32 FFI with configurable idle thresholds (10-60s)",
      "Application usage analytics with foreground app detection and friendly name mapping for 25+ applications",
      "AI-powered eye tracking using local MediaPipe Face Mesh (468-point landmarks) at ~5 FPS for EAR, head pose, iris gaze, and face occlusion detection",
      "Combined attention status merging physical activity + eye tracking into 4 states: Active, Watching, Suspicious, Idle",
      "Smart video content detection classifying watching as productive or idle across 30+ streaming/educational platforms",
      "Typing quality analysis with per-minute keystroke metrics, burst patterns, key ratios, and suspicious activity detection",
      "Shift lifecycle management with crash-resilient resume, timeline reconstruction, and auto-end at configured time",
      "Professional PDF reports with shift summary, activity timeline charts, app usage breakdown, and attention metrics",
      "System tray integration with minimal footprint and full shift control from the taskbar notification area",
      "Browser URL tracking via COM automation supporting Chrome, Edge, Firefox, Brave, Opera, and Vivaldi",
    ],
    techDetails:
      "Flutter Desktop handles the UI with Provider for state management, fl_chart for activity visualizations, and PDF generation for daily reports. The AI side runs as a separate Python process using MediaPipe Face Mesh for eye-tracking and head pose estimation — it communicates with Flutter through JSON streaming. I used Win32 FFI to track mouse movement, keyboard input, and detect which app is in the foreground. Browser URL tracking works through COM automation across 6 browsers (Chrome, Edge, Firefox, Brave, Opera, Vivaldi). SQLite stores all data locally with per-second granularity. The app has 9 screens including a live dashboard, report viewer, app usage breakdown, and settings.",
    challenges:
      "The current limitation I'm working on is multi-monitor support. Right now the app uses the laptop camera, so if a worker has multiple monitors and looks at a second screen, the system marks them as suspicious or idle — even though they're actually working. I'm exploring solutions for this. Another challenge was making Flutter and Python work together smoothly — the Python process runs MediaPipe at ~5 FPS and streams results to Flutter without blocking the UI. Each browser also exposes accessibility data differently, so URL tracking needed custom handling per browser.",
    role: "Solo Developer",
    duration: "1 week (core build) + ongoing improvements",
    status: "In Development",
  },
  {
    title: "Point of Sale (POS) System",
    slug: "pos-system",
    description:
      "A cross-platform POS desktop app for retail businesses. Supports barcode scanning, thermal printing, real-time analytics, and manages multiple stores from one account.",
    longDescription:
      "A client asked me to build a POS system, and after using it in production, I turned it into a product I now sell. I already have my first paying customer and they're happy with it. I built this because most POS systems I've seen have real problems — refunding is overcomplicated, and if a customer steps away, you can't hold their cart and serve the next person. I fixed both of those. The system supports three roles (Admin, Cashier, Seller) with a multi-tenant setup so one seller can manage multiple stores, each with its own settings and currency. Right now I'm building the most exciting feature: local network sync — the admin laptop runs as a server, cashier devices connect to it, data syncs instantly, and if WiFi drops, cashiers keep working on their local database and sync back when reconnected.",
    tags: ["Flutter", "Dart", "SQLite", "ESC/POS", "PDF", "fl_chart"],
    image: "https://ik.imagekit.io/i0dqqmt1a/portfolio/pos-admin-1_zwGU9bfpX.png",
    imageGroups: [
      {
        label: "Admin Panel",
        images: [
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/pos-admin-1_zwGU9bfpX.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/pos-admin-2_fI4KjBkni.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/pos-admin-3_0XCBG2hGF.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/pos-admin-4_4jj5QegW0.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/pos-admin-5_ZEpObccn6.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/pos-admin-6_SSQ_1lWvW.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/pos-admin-7_sOPqgajPr.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/pos-admin-8_1kXvLQTbP.png",
        ],
      },
      {
        label: "Cashier",
        images: [
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/pos-cashier-1_OVcX4kVg6.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/pos-cashier-2_2EaG-f5nb.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/pos-cashier-3_msgAffoyz.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/pos-cashier-4_y07n6j_BuL.png",
        ],
      },
    ],
    liveUrl: "#",
    githubUrl: "#",
    category: "Desktop App",
    features: [
      "POS interface with product browsing, cart management, barcode scanner auto-detection, discounts, held orders, and refunds",
      "Shift management with opening/closing cash reconciliation and discrepancy tracking",
      "Real-time admin dashboard with interactive charts (sales trends, hourly performance, payment breakdown, top products)",
      "Inventory management with product CRUD, barcode generation, stock tracking, and bulk import/export",
      "Customer & loyalty system with purchase history, loyalty points, and tier progression (Member/Bronze/Silver/Gold)",
      "Role-based access control with fine-grained dot-notation sub-permissions and guard widgets",
      "Multi-tenant architecture for sellers managing multiple client accounts with per-client feature restrictions",
      "ESC/POS thermal receipt printing, PDF receipts, and visual drag-and-drop barcode label layout editor",
      "Sales and shift reports with date filtering, exportable to CSV and Excel formats",
      "Local network sync — admin laptop as server, cashier devices sync instantly, offline fallback with auto-resync (in development)",
    ],
    techDetails:
      "Built with Flutter targeting Windows, Linux, and macOS. I chose SQLite because the system needs to work offline — it now has 18 schema versions with an incremental migration system that preserves all data when updating. fl_chart powers the admin dashboard charts. For printing, I wrote low-level ESC/POS commands with bitmap conversion to talk directly to thermal printers, and built a drag-and-drop barcode label editor. Reports export to CSV and Excel. The new local network sync feature uses the admin laptop as a server — cashier devices connect over WiFi and fall back to local storage when disconnected.",
    challenges:
      "The barcode scanner detection was a fun problem — scanners send characters in rapid bursts while humans type slowly, so I used a 50ms timing threshold to tell them apart. The thermal printer integration required low-level binary protocol work because different printer models behave differently with bitmap conversion. The database migration system across 18 versions was tricky — every update has to preserve existing data perfectly since real businesses depend on it. The current challenge is the local network sync: handling data conflicts when a cashier works offline and then reconnects to the admin server.",
    role: "Solo Developer & Product Owner",
    duration: "20 days (core build) + ongoing development",
    status: "In Production — 1 paying customer",
  },
  {
    title: "TicketFlow - Queue & Appointment SaaS",
    slug: "ticketflow",
    description:
      "A SaaS platform for hospitals and service centers to manage queues and book appointments with QR confirmation. Built with 65+ API endpoints.",
    longDescription:
      "I built TicketFlow because I saw the same problem everywhere — hospitals, clinics, and government offices where people wait in long disorganized queues with no system to manage them. TicketFlow lets organizations manage queues in real-time and book appointments with QR confirmation. One feature I'm really proud of is the homepage builder — instead of calling a developer every time the hospital wants to show something new to their customers, the organization admin can visually edit the customer-facing homepage with 19+ section types using drag-and-drop. No code needed. The platform supports multiple branches and counters, 5 user roles, and 65+ secured API endpoints. I've tested it deeply and it works as a professional system — I'm still developing it before I start selling.",
    tags: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "NextAuth.js", "Zod"],
    image: "https://ik.imagekit.io/i0dqqmt1a/portfolio/ticketflow-1_Jmlrc46U5.png",
    images: [
      "https://ik.imagekit.io/i0dqqmt1a/portfolio/ticketflow-1_Jmlrc46U5.png",
      "https://ik.imagekit.io/i0dqqmt1a/portfolio/ticketflow-2_cJ_663k95.png",
      "https://ik.imagekit.io/i0dqqmt1a/portfolio/ticketflow-3_ECttY3U11Z.png",
      "https://ik.imagekit.io/i0dqqmt1a/portfolio/ticketflow-4_9ePJ5Zy-c.png",
      "https://ik.imagekit.io/i0dqqmt1a/portfolio/ticketflow-5_ukwb3X8LV.png",
      "https://ik.imagekit.io/i0dqqmt1a/portfolio/ticketflow-6_eoYR1eNmv.png",
      "https://ik.imagekit.io/i0dqqmt1a/portfolio/ticketflow-7_p3RwNbz0T.png",
      "https://ik.imagekit.io/i0dqqmt1a/portfolio/ticketflow-8_mHV9PBgmh.png",
      "https://ik.imagekit.io/i0dqqmt1a/portfolio/ticketflow-9_d6YXLSuN6.png",
      "https://ik.imagekit.io/i0dqqmt1a/portfolio/ticketflow-10_et0kfL7bA.png",
      "https://ik.imagekit.io/i0dqqmt1a/portfolio/ticketflow-11_ii22YunTx.png",
      "https://ik.imagekit.io/i0dqqmt1a/portfolio/ticketflow-12_MVMDt33Hs.png",
    ],
    liveUrl: "#",
    githubUrl: "#",
    category: "Web App",
    features: [
      "Real-time queue management with call-next, skip, transfer, no-show operations and sound notifications",
      "Multi-step appointment booking wizard (service > date/time > review > QR confirmation)",
      "Multi-tenant architecture with Organization > Branch > Counter hierarchy and data isolation",
      "Role-based access control with 5 roles (Super Admin, Org Admin, Branch Admin, Staff, Customer)",
      "Drag-and-drop homepage builder with 19+ section types, per-section styling, gradients, and layout presets",
      "Template system with professional starter templates, save/load/activate, and variable substitution",
      "QR-based appointment confirmation and camera check-in at branches",
      "Large-screen real-time queue display board for branches",
      "RSA-2048 license management with domain binding",
      "65+ REST API endpoints with consistent error handling and Zod schema validation",
    ],
    techDetails:
      "Next.js 16 with App Router handles both the frontend and 65+ API routes. I chose PostgreSQL with Prisma because the data model is complex — 15+ related tables (organizations, branches, counters, services, queue tickets, appointments, users) in a 452-line schema. Authentication uses NextAuth.js with JWT and bcrypt. The UI is built with Shadcn/ui, Radix UI, and Tailwind CSS 4. The homepage builder uses Tiptap Editor for rich text with a drag-and-drop system I built using discriminated union types in TypeScript — each of the 19+ section types has its own Zod validation. QR codes handle appointment confirmations and check-in via camera scanning. Every API endpoint goes through middleware that checks authentication, license validity, and role permissions.",
    challenges:
      "The multi-tenant architecture was the biggest design challenge — every query needs to be scoped to the right organization, branch, and counter while staying fast. I solved this with middleware-level tenant scoping and careful Prisma schema design. The homepage builder was complex because 19+ section types each need different configs, styling options, and validation — I used TypeScript discriminated unions with Zod schemas per section type to keep it type-safe. The real-time queue operations (call-next, skip, transfer) needed to stay consistent when multiple staff members are using it at the same time, which required optimistic UI updates with server reconciliation.",
    role: "Solo Developer & Product Owner",
    duration: "Ongoing",
    status: "In Development — preparing for launch",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
