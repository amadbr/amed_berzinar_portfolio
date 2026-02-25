import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaFigma } from "react-icons/fa";
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
} from "react-icons/si";

export const personalInfo = {
  name: "Amed Berzinar",
  title: "Full Stack Developer",
  tagline:
    "I build modern, performant web & mobile applications with clean code and great user experiences.",
  about: `I'm a passionate Full Stack Developer who loves turning ideas into reality through code. With expertise spanning frontend, backend, and mobile development, I craft end-to-end solutions that are both beautiful and functional.

I specialize in building modern web applications using React, Next.js, and Node.js, as well as cross-platform mobile apps with Flutter. I'm always eager to learn new technologies and take on challenging projects.`,
  email: "amadbarznar123@gmail.com",
  socials: {
    github: "https://github.com/amadbr",
    linkedin: "https://www.linkedin.com/in/amed-berznar-486135237",
    instagram: "https://instagram.com/amed_berzinar",
  },
};

export const skills = [
  { name: "Flutter", icon: SiFlutter, category: "Mobile" },
  { name: "Dart", icon: SiDart, category: "Mobile" },
  { name: "React", icon: FaReact, category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, category: "Frontend" },
  { name: "TypeScript", icon: SiTypescript, category: "Frontend" },
  { name: "JavaScript", icon: SiJavascript, category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend" },
  { name: "Node.js", icon: FaNodeJs, category: "Backend" },
  { name: "Express.js", icon: SiExpress, category: "Backend" },
  { name: "MongoDB", icon: SiMongodb, category: "Backend" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "Backend" },
  { name: "Prisma", icon: SiPrisma, category: "Backend" },
  { name: "Firebase", icon: SiFirebase, category: "Backend" },
  { name: "Git", icon: FaGitAlt, category: "Tools" },
  { name: "Docker", icon: FaDocker, category: "Tools" },
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
      "A premium car rental website built for a Dubai-based luxury vehicle rental company. Features a branded fleet showcase with category/brand filtering, instant online booking, responsive design with smooth animations, and SEO-optimized static generation.",
    longDescription:
      "Luxury In Motion Dubai is a live production website built for a premium car rental company operating in Dubai, UAE. The platform showcases their exotic and luxury vehicle fleet — including Ferrari, Rolls-Royce, Lamborghini, Mercedes, and 20+ other brands — with an intuitive browsing experience. Visitors can filter vehicles by category (luxury, sports, SUV, sedan, convertible, economy) or by brand, view detailed pricing for daily, weekly, and monthly rentals, and book instantly online. The site highlights key services including door-to-door delivery, chauffeur services, airport transfers, and comprehensive insurance coverage, with secure payment options including Visa, Mastercard, Google Pay, and cryptocurrency.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/luxury-1.png",
    images: [
      "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/luxury-1.png",
      "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/luxury-2.png",
      "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/luxury-3.png",
      "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/luxury-4.png",
      "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/luxury-5.png",
      "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/luxury-6.png",
    ],
    liveUrl: "https://www.luxuryinmotiondubai.com/",
    githubUrl: "#",
    category: "Web App",
    features: [
      "Premium fleet showcase with category and brand filtering across 20+ luxury manufacturers",
      "Instant online booking system with flexible daily, weekly, and monthly rental options",
      "Responsive design optimized for all devices with smooth scroll-triggered animations",
      "SEO-optimized with static site generation for fast page loads and search engine visibility",
      "Dark/light theme toggle with smooth transitions",
      "Detailed vehicle pages with pricing, specifications, and availability",
      "Customer testimonials section with Trustpilot and Google review integration",
      "Secure payment options supporting Visa, Mastercard, Google Pay, and cryptocurrency",
      "Mobile-first design with intuitive navigation and 24/7 contact accessibility",
    ],
    techDetails:
      "Built with Next.js 16 App Router and React 19 using a component-based architecture. Tailwind CSS 4 with PostCSS handles responsive styling with utility-first classes and automatic purging for minimal bundle size. Framer Motion powers viewport-triggered animations and staggered reveal effects throughout the site. Static site generation (SSG) with generateStaticParams ensures instant page loads and optimal SEO performance. Theme switching implemented via next-themes with smooth transitions. Font optimization using next/font for consistent typography. Deployed as a static export for production hosting.",
    challenges:
      "Building a visually rich car showcase that loads fast despite featuring high-resolution vehicle imagery required careful image optimization and lazy loading strategies. Ensuring the booking flow is intuitive on mobile while displaying detailed vehicle specifications demanded a responsive layout that adapts content hierarchy across breakpoints. SEO was critical for a Dubai-based rental business competing in a saturated market — addressed through static generation, semantic HTML, dynamic metadata per vehicle page, and structured content organization.",
    role: "Full Stack Developer",
    duration: "2 weeks",
    status: "Completed",
  },
  {
    title: "Worker Activity Monitor",
    slug: "worker-activity-monitor",
    description:
      "AI-powered employee productivity tracking desktop app with real-time eye tracking via MediaPipe, Win32 FFI system integration, Python sidecar process, mouse/keyboard analytics, smart video detection, and PDF report generation.",
    longDescription:
      "Worker Activity Monitor is a production-grade desktop application built for workforce management. It provides real-time, multi-dimensional productivity analysis by combining physical input tracking, application usage analytics, AI-powered attention detection, and intelligent content classification. The system uses a dual-process architecture (Flutter + Python) with a JSON streaming protocol, where the Python sidecar runs MediaPipe Face Mesh locally for gaze detection and head pose estimation — all with zero cloud dependency. A dual-timer system provides per-second polling for real-time UI updates alongside per-minute aggregation for efficient database writes.",
    tags: ["Flutter", "Dart", "Python", "MediaPipe", "Win32 FFI", "SQLite"],
    image: "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/worker-1.png",
    images: [
      "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/worker-1.png",
      "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/worker-2.png",
      "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/worker-3.png",
      "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/worker-4.png",
      "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/worker-5.png",
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
      "Built with Flutter Desktop (Windows) using Provider state management, fl_chart for data visualization, and PDF generation for reports. The AI layer runs a Python sidecar using MediaPipe FaceLandmarker with 468-point face mesh for Eye Aspect Ratio calculation, 3D head pose estimation via solvePnP, iris gaze tracking, and distance-adaptive thresholds. System integration uses Win32 API calls via Dart FFI for mouse tracking, keyboard input detection, foreground window identification, and COM Automation for browser URL extraction. The dual-process architecture communicates over a JSON streaming protocol via stdout, enabling graceful degradation if Python is unavailable. SQLite database with 7 progressive schema migrations stores per-second granularity alongside minute aggregates. The app features 9 screens including dashboard with live status, reports with date navigation, app deep-dive, watching timeline, and settings.",
    challenges:
      "The biggest challenge was implementing reliable AI eye tracking without cloud dependencies. MediaPipe Face Mesh runs at ~5 FPS locally, requiring careful optimization of the Python sidecar and efficient JSON streaming to avoid blocking Flutter's UI thread. Combining physical activity data with eye tracking into a unified attention status required designing a state machine that handles edge cases like face occlusion and camera unavailability gracefully. Browser URL extraction via COM automation needed per-browser handling since each browser exposes accessibility differently. The 7-version database migration system had to preserve per-second data granularity while evolving the schema from basic activity logs to full attention and watching session tracking.",
    role: "Full Stack Developer",
    duration: "Ongoing",
    status: "In Development",
  },
  {
    title: "Point of Sale (POS) System",
    slug: "pos-system",
    description:
      "A comprehensive cross-platform POS desktop application using Flutter & SQLite with multi-tenant architecture, role-based access control, real-time analytics, thermal/label printing, barcode scanner integration, and full inventory management.",
    longDescription:
      "A production-ready Point of Sale system designed for retail businesses, built as a cross-platform desktop application. The system supports multi-user environments with three distinct roles (Admin, Cashier, Seller) and implements a multi-tenant architecture where sellers can manage multiple client businesses, each with independent configurations, currencies, and feature access. Features include a full POS interface with barcode scanning, shift management with cash reconciliation, real-time analytics dashboard, inventory management with bulk import/export, a customer loyalty system with tier progression, and a printing system supporting ESC/POS thermal receipts, PDF generation, and a visual drag-and-drop barcode label layout editor.",
    tags: ["Flutter", "Dart", "SQLite", "ESC/POS", "PDF", "fl_chart"],
    image: "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/pos-admin-1.png",
    imageGroups: [
      {
        label: "Admin Panel",
        images: [
          "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/pos-admin-1.png",
          "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/pos-admin-2.png",
          "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/pos-admin-3.png",
          "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/pos-admin-4.png",
          "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/pos-admin-5.png",
          "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/pos-admin-6.png",
          "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/pos-admin-7.png",
          "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/pos-admin-8.png",
        ],
      },
      {
        label: "Cashier",
        images: [
          "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/pos-cashier-1.png",
          "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/pos-cashier-2.png",
          "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/pos-cashier-3.png",
          "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/pos-cashier-4.png",
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
      "150+ selectable category icons with custom color support and light/dark/system theme",
    ],
    techDetails:
      "Built with Flutter (Dart) targeting desktop platforms (Windows, Linux, macOS). SQLite database with an incremental schema migration system spanning 18 versions with backward compatibility. Architecture follows a Singleton services and Model-View pattern with guard widgets for permission enforcement. fl_chart powers interactive data visualizations. Printing uses pdf and printing packages for receipt and label generation with ESC/POS command generation including bitmap conversion for thermal printers. Export functionality supports CSV and Excel file generation with multi-sheet workbooks. Adaptive color system ensures consistency across light and dark modes.",
    challenges:
      "Implementing barcode scanner auto-detection required input timing analysis with a 50ms threshold to distinguish scanner input from keyboard typing — scanners send characters in rapid bursts while humans type much slower. Building the incremental database migration system across 18 schema versions demanded careful handling of backward compatibility and data preservation during upgrades. The visual drag-and-drop label layout editor needed precise coordinate mapping between the on-screen editor and the actual thermal printer output resolution. Generating ESC/POS commands with bitmap conversion for thermal printers involved low-level binary protocol work to ensure consistent output across different printer models.",
    role: "Full Stack Developer",
    duration: "Ongoing",
    status: "In Development",
  },
  {
    title: "TicketFlow - Queue & Appointment SaaS",
    slug: "ticketflow",
    description:
      "Full-stack SaaS platform for queue management, appointment booking, and event ticketing with multi-tenant architecture, real-time updates, role-based access control, and a drag-and-drop homepage builder supporting 19+ customizable section types.",
    longDescription:
      "TicketFlow is a comprehensive queue management, appointment booking, and event ticketing platform designed for organizations such as hospitals, clinics, and service centers. Built with Next.js 16, React 19, TypeScript, PostgreSQL, and Prisma ORM, the platform features a multi-tenant architecture (Organization > Branch > Counter) with full data isolation, 65+ secured REST API endpoints with Zod validation, and role-based access control across 5 user roles. The system includes a drag-and-drop homepage builder with 19+ section types, a template system with variable substitution, real-time queue tracking with sound notifications, multi-step appointment booking with QR confirmation, and event ticketing with QR-based check-in.",
    tags: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS", "NextAuth.js", "Zod"],
    image: "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/ticketflow-1.png",
    images: [
      "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/ticketflow-1.png",
      "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/ticketflow-2.png",
      "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/ticketflow-3.png",
      "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/ticketflow-4.png",
      "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/ticketflow-5.png",
      "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/ticketflow-6.png",
      "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/ticketflow-7.png",
      "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/ticketflow-8.png",
      "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/ticketflow-9.png",
      "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/ticketflow-10.png",
      "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/ticketflow-11.png",
      "https://raw.githubusercontent.com/amadbr/amed_berzinar_portfolio/main/assets/images/ticketflow-12.png",
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
      "Event ticketing with ticket types, pricing, and QR-based camera check-in",
      "Large-screen real-time queue display board for branches",
      "RSA-2048 license management with domain binding",
      "65+ REST API endpoints with consistent error handling and Zod schema validation",
    ],
    techDetails:
      "Frontend built with Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS 4. UI layer uses Shadcn/ui, Radix UI, Lucide React (97+ icons), and Embla Carousel. Rich text editing powered by Tiptap Editor with colors, fonts, tables, and YouTube embeds. Backend runs on Next.js API Routes with 65+ REST endpoints. Database is PostgreSQL with Prisma ORM 7 featuring a 452-line schema with 15+ models (User, Organization, Branch, Service, Counter, QueueTicket, Event, etc.). Authentication via NextAuth.js with JWT and bcrypt password hashing. Middleware layer handles authentication, license gating, and role verification. Additional tooling includes QR code generation/scanning, DOMPurify for sanitization, date-fns for date handling, and dark mode support via next-themes.",
    challenges:
      "Designing the multi-tenant data isolation across organizations, branches, and counters while keeping query performance fast required careful Prisma schema design and middleware-level tenant scoping. The homepage builder with 19+ section types needed a flexible yet type-safe architecture — solved with a discriminated union pattern in TypeScript and Zod validation for each section config. Implementing real-time queue operations (call-next, skip, transfer) with consistent state across multiple staff screens demanded optimistic UI updates with server reconciliation. The RSA-2048 license system with domain binding required secure token generation and verification without exposing private keys to the client.",
    role: "Full Stack Developer",
    duration: "Ongoing",
    status: "In Development",
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
