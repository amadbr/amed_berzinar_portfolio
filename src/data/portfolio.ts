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
  { name: "React", icon: FaReact, category: "Frontend" },
  { name: "Next.js", icon: SiNextdotjs, category: "Frontend" },
  { name: "TypeScript", icon: SiTypescript, category: "Frontend" },
  { name: "JavaScript", icon: SiJavascript, category: "Frontend" },
  { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend" },
  { name: "Flutter", icon: SiFlutter, category: "Mobile" },
  { name: "Dart", icon: SiDart, category: "Mobile" },
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
    image: "/projects/luxury-in-motion.png",
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
    image: "/projects/worker-monitor.png",
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
    image: "/projects/pos.png",
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
    image: "/projects/ticketflow.png",
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
  {
    title: "E-Commerce Platform",
    slug: "e-commerce-platform",
    description:
      "A full-stack e-commerce application with product management, cart functionality, payment integration, and admin dashboard.",
    longDescription:
      "A comprehensive e-commerce solution built from the ground up with Next.js and TypeScript. The platform features a complete product catalog with search and filtering, a shopping cart with persistent state, Stripe payment integration for secure checkout, and a full admin dashboard for managing products, orders, and customers. The application uses MongoDB for flexible product data storage and Tailwind CSS for a responsive, modern UI.",
    tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "Stripe"],
    image: "/projects/ecommerce.png",
    liveUrl: "#",
    githubUrl: "#",
    category: "Web App",
    features: [
      "Product catalog with search, filtering, and pagination",
      "Shopping cart with persistent state management",
      "Secure checkout with Stripe payment integration",
      "Admin dashboard for products, orders, and customers",
      "User authentication and profile management",
      "Responsive design optimized for all devices",
    ],
    techDetails:
      "Built with Next.js App Router for server-side rendering and optimal SEO. Uses MongoDB with Mongoose for flexible product schemas. State management handled with React Context and useReducer. Stripe webhooks ensure reliable payment processing. Image optimization through Next.js Image component with Cloudinary CDN.",
    challenges:
      "Implementing real-time inventory tracking across concurrent sessions was a key challenge. Solved this using optimistic UI updates with server-side validation to prevent overselling. Another challenge was building a flexible product variant system (sizes, colors) that scales without schema changes, achieved through MongoDB's document model.",
    role: "Full Stack Developer",
    duration: "3 months",
    status: "In Development",
  },
  {
    title: "Task Management App",
    slug: "task-management-app",
    description:
      "A real-time collaborative task management tool with drag-and-drop boards, team workspaces, and activity tracking.",
    longDescription:
      "A Trello-inspired task management application that enables teams to collaborate in real-time. Features include drag-and-drop Kanban boards, team workspaces with role-based permissions, real-time updates via WebSocket connections, and comprehensive activity logging. Built with React on the frontend and Node.js with PostgreSQL on the backend for reliable data persistence.",
    tags: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    image: "/projects/taskmanager.png",
    liveUrl: "#",
    githubUrl: "#",
    category: "Web App",
    features: [
      "Drag-and-drop Kanban boards with smooth animations",
      "Real-time collaboration with live cursor presence",
      "Team workspaces with role-based access control",
      "Activity feed tracking all changes and comments",
      "Task labels, due dates, and priority levels",
      "File attachments and inline image previews",
    ],
    techDetails:
      "React frontend with react-beautiful-dnd for smooth drag-and-drop interactions. Socket.io provides bidirectional real-time communication for instant updates across all connected clients. PostgreSQL with Prisma ORM handles relational data (users, teams, boards, tasks). Redis used for caching active board states and managing WebSocket rooms.",
    challenges:
      "The biggest challenge was handling concurrent drag-and-drop operations from multiple users without conflicts. Implemented an operational transformation approach where the server acts as the source of truth, resolving conflicts and broadcasting the canonical state. Also tackled optimistic rendering to keep the UI responsive despite network latency.",
    role: "Full Stack Developer",
    duration: "2.5 months",
    status: "In Development",
  },
  {
    title: "Fitness Tracker Mobile App",
    slug: "fitness-tracker-mobile-app",
    description:
      "A cross-platform mobile application for tracking workouts, nutrition, and health metrics with beautiful charts and analytics.",
    longDescription:
      "A feature-rich fitness tracking application built with Flutter for both iOS and Android. Users can log workouts, track nutrition intake, monitor health metrics, and visualize their progress through interactive charts. The app integrates with Firebase for real-time data sync and authentication, and connects to health APIs for comprehensive fitness data.",
    tags: ["Flutter", "Dart", "Firebase", "REST API"],
    image: "/projects/fitness.png",
    liveUrl: "#",
    githubUrl: "#",
    category: "Mobile App",
    features: [
      "Workout logging with custom exercise library",
      "Nutrition tracking with barcode scanner integration",
      "Interactive charts for progress visualization",
      "Goal setting with milestone notifications",
      "Social features for sharing achievements",
      "Offline mode with automatic sync when connected",
    ],
    techDetails:
      "Built with Flutter using the BLoC pattern for state management, ensuring clean separation of concerns. Firebase Firestore provides real-time data synchronization across devices. Cloud Functions handle background processing like weekly summary generation. The charting library fl_chart renders smooth, interactive data visualizations.",
    challenges:
      "Implementing accurate calorie and macro calculations across different measurement systems required building a comprehensive food database with unit conversion logic. Offline-first architecture was challenging — used Hive for local storage with a custom sync engine that handles conflict resolution when reconnecting to Firebase.",
    role: "Mobile Developer",
    duration: "3 months",
    status: "In Development",
  },
  {
    title: "Blog & CMS Platform",
    slug: "blog-cms-platform",
    description:
      "A modern blog platform with a custom CMS, markdown support, SEO optimization, and role-based access control.",
    longDescription:
      "A full-featured blogging platform with a custom content management system. Writers can create and edit posts using a rich markdown editor with live preview, manage media assets, and schedule publications. The platform includes built-in SEO tools, analytics integration, and role-based access control for multi-author teams.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    image: "/projects/blog.png",
    liveUrl: "#",
    githubUrl: "#",
    category: "Web App",
    features: [
      "Rich markdown editor with live preview and syntax highlighting",
      "Media library with drag-and-drop upload",
      "SEO toolkit with meta tags and Open Graph optimization",
      "Scheduled publishing and draft management",
      "Role-based access: Admin, Editor, Author, Viewer",
      "Built-in analytics dashboard for content performance",
    ],
    techDetails:
      "Next.js with App Router for hybrid static/dynamic rendering — published posts are statically generated for performance while the CMS uses server components. Prisma with PostgreSQL manages relational content data. MDX processing pipeline supports custom components within markdown. Image uploads handled through presigned S3 URLs.",
    challenges:
      "Building the real-time markdown preview with custom component support required creating a custom MDX pipeline that runs in the browser. Implementing incremental static regeneration for published posts while keeping the editing experience dynamic was solved using Next.js route segment config and on-demand revalidation.",
    role: "Full Stack Developer",
    duration: "2 months",
    status: "In Development",
  },
  {
    title: "Weather & Maps App",
    slug: "weather-maps-app",
    description:
      "A Flutter-based weather application with interactive maps, location-based forecasts, and beautiful animated weather icons.",
    longDescription:
      "A visually stunning weather application that provides detailed forecasts with interactive map overlays. Users can view current conditions, hourly and 7-day forecasts, weather radar, and severe weather alerts for any location worldwide. The app features smooth animations, gesture-based map navigation, and a beautiful UI that adapts to current weather conditions.",
    tags: ["Flutter", "Dart", "OpenWeather API", "Google Maps"],
    image: "/projects/weather.png",
    liveUrl: "#",
    githubUrl: "#",
    category: "Mobile App",
    features: [
      "Real-time weather data with hourly and 7-day forecasts",
      "Interactive map with weather radar overlay",
      "Location-based automatic weather detection",
      "Severe weather alerts and notifications",
      "Animated weather icons and dynamic backgrounds",
      "Multiple saved locations with quick switching",
    ],
    techDetails:
      "Flutter app using Provider for state management and Dio for HTTP networking. OpenWeather API provides comprehensive weather data. Google Maps Flutter plugin with custom tile overlays for weather radar visualization. Lottie animations for weather condition icons. Background fetch with WorkManager for push notification alerts.",
    challenges:
      "Rendering weather radar tiles as custom overlays on Google Maps required building a tile provider that fetches, caches, and composites semi-transparent weather data onto the map in real-time. Achieving smooth 60fps animations while continuously updating weather data was solved by isolating data fetching to background isolates in Dart.",
    role: "Mobile Developer",
    duration: "2 months",
    status: "In Development",
  },
  {
    title: "REST API Microservices",
    slug: "rest-api-microservices",
    description:
      "A scalable microservices architecture with authentication, rate limiting, caching, and comprehensive API documentation.",
    longDescription:
      "A production-ready microservices backend architecture demonstrating best practices for building scalable APIs. The system includes an API gateway with rate limiting, JWT-based authentication service, individual microservices for different business domains, inter-service communication via message queues, and comprehensive Swagger documentation.",
    tags: ["Node.js", "Express", "Docker", "Redis", "MongoDB"],
    image: "/projects/api.png",
    liveUrl: "#",
    githubUrl: "#",
    category: "API",
    features: [
      "API Gateway with intelligent request routing",
      "JWT authentication with refresh token rotation",
      "Rate limiting with Redis-backed sliding window",
      "Response caching with configurable TTL",
      "Inter-service messaging with RabbitMQ",
      "Auto-generated Swagger/OpenAPI documentation",
    ],
    techDetails:
      "Each microservice runs in its own Docker container, orchestrated with Docker Compose (development) and Kubernetes manifests (production). Express.js handles HTTP routing with middleware chains for auth, validation, and error handling. MongoDB stores business data with Mongoose schemas. Redis provides caching and rate limit counters. RabbitMQ handles async inter-service communication.",
    challenges:
      "Implementing distributed tracing across microservices to debug request flows was challenging. Solved using correlation IDs propagated through HTTP headers and message queue metadata, with centralized logging via Winston and ELK stack. Handling eventual consistency in distributed transactions required implementing the Saga pattern with compensating actions.",
    role: "Backend Developer",
    duration: "2.5 months",
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
