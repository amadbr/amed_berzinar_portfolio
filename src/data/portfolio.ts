import type { IconType } from "react-icons";
import { FaReact, FaNodeJs, FaGitAlt, FaFigma, FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiTailwindcss,
  SiFlutter,
  SiDart,
  SiFirebase,
  SiPrisma,
  SiVercel,
  SiFramer,
  SiSqlite,
  SiZod,
  SiMediapipe,
  SiSupabase,
  SiMysql,
} from "react-icons/si";

export const personalInfo = {
  name: "Amed Berzinar",
  title: "Full Stack Developer | Freelancer",
  tagline:
    "Full Stack Developer from Iraq, building web & mobile applications for clients across the Middle East and Scandinavia.",
  about: `I'm a 23-year-old Full Stack Developer from Duhok, Iraq with a Computer Science degree. While university taught me the fundamentals, I spent every summer break learning on my own, pushing beyond the curriculum to master real-world development.

I build with React, Next.js, Node.js, and Flutter. I'm known for delivering quality work fast, and I use AI as a tool to write cleaner code, but every line I ship is something I fully understand.

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
  { name: "Python", icon: FaPython, category: "Backend" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "Backend" },
  { name: "Prisma", icon: SiPrisma, category: "Backend" },
  { name: "Firebase", icon: SiFirebase, category: "Backend" },
  { name: "Git", icon: FaGitAlt, category: "Tools" },
  { name: "Vercel", icon: SiVercel, category: "Tools" },
  { name: "Figma", icon: FaFigma, category: "Tools" },
];

export const techIcons: Record<string, IconType> = {
  ...Object.fromEntries(skills.map((skill) => [skill.name, skill.icon])),
  "Framer Motion": SiFramer,
  SQLite: SiSqlite,
  Zod: SiZod,
  MediaPipe: SiMediapipe,
  Supabase: SiSupabase,
  MySQL: SiMysql,
};

export interface Project {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  highlights?: { label: string; text: string }[];
  tags: string[];
  image: string;
  images?: string[];
  imageGroups?: { label: string; images: string[]; orientation?: "landscape" | "portrait" }[];
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
    title: "Next Burger - Digital Restaurant Menu",
    slug: "next-burger",
    description:
      "A modern, professionally designed digital menu for a burger restaurant, with full English, Arabic, and Kurdish support and both dark and light themes. Live at next-burger.com.",
    longDescription:
      "Next Burger needed a digital menu that actually matched the quality of their food: bold, modern, and fast, instead of a generic PDF or a clunky template. I designed and built a full menu experience: a hero landing page with the brand front and center, a searchable menu organized into categories (Burgers, Sandwiches, Sides, Rezo, Special Meals, Drinks), and a focused detail view for every item with its photo, description, and price.\n\nSince the restaurant's customers aren't all English speakers, the whole menu is available in English, Arabic, and Kurdish, with a proper language switcher rather than a machine-translated afterthought. It also supports both dark and light themes, so it looks intentional at any time of day. The site is live and running in production at next-burger.com.",
    highlights: [
      {
        label: "What is it?",
        text: "A fully designed digital menu website for a burger restaurant, built to replace a plain PDF or generic template menu.",
      },
      {
        label: "The problem",
        text: "The restaurant needed a menu that felt as premium as its food, was easy to browse on a phone, and worked for customers in more than one language.",
      },
      {
        label: "The benefit",
        text: "A fast, searchable, categorized menu with full English, Arabic, and Kurdish support and both dark and light themes, live at next-burger.com.",
      },
      {
        label: "Who it's for",
        text: "Restaurant customers browsing the menu on their phone, and the restaurant itself, which gets a modern digital presence instead of a static menu.",
      },
    ],
    tags: [],
    image:
      "https://ik.imagekit.io/i0dqqmt1a/portfolio/Next-burger/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2012.54.19.png",
    imageGroups: [
      {
        label: "Digital Menu",
        orientation: "portrait",
        images: [
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Next-burger/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2012.54.19.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Next-burger/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2012.55.39.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Next-burger/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2012.54.39.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Next-burger/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2012.54.50.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Next-burger/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2012.55.13.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Next-burger/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2012.55.03.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Next-burger/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2012.55.28.png",
        ],
      },
    ],
    liveUrl: "https://next-burger.com",
    githubUrl: "#",
    category: "Web App",
    features: [
      "Bold, modern landing page introducing the restaurant's brand and a direct link into the menu",
      "Searchable menu organized into categories: Burgers, Sandwiches, Sides, Rezo, Special Meals, and Drinks",
      "Dedicated detail view for every item with its photo, full description, and price",
      "Full English, Arabic, and Kurdish language support with a proper language switcher",
      "Dark and light theme support so the menu looks right at any time of day",
      "Fully responsive design built mobile-first, since most customers browse the menu on their phone",
    ],
    techDetails:
      "Next Burger is a fully custom-built digital menu, designed and developed end-to-end rather than assembled from a template. The focus was on presentation: large food photography, a bold typographic brand identity, and a fast, app-like browsing experience across categories, languages, and themes.",
    challenges:
      "The main challenge was making a menu that browses like a native app while still being a website anyone can open with a link, no install required. Supporting three languages (including right-to-left Arabic) alongside a full dark/light theme meant every layout had to hold up under both text direction and color scheme changes, not just look right in one default configuration.",
    role: "Full-Stack Developer",
    duration: "Completed",
    status: "Completed",
  },
  {
    title: "Omer eSIM - International eSIM Marketplace",
    slug: "omer-esim",
    description:
      "A mobile app for buying international travel eSIMs instantly, covering 178+ destinations with secure in-app payments through Iraq's FIB bank, backed by a full admin platform I built to manage plans, pricing, and customers.",
    longDescription:
      "Omer eSIM lets travelers buy a data eSIM for almost any country in the world straight from their phone, no physical SIM card, no roaming fees, and no waiting. The mobile app is built with Flutter and Dart so it runs natively on iOS and Android from one codebase, and it covers 178+ destinations with local and regional data plans.\n\nBehind the app is an admin platform I built with Next.js and Node.js, backed by Supabase and deployed on Vercel. It handles everything the business side needs: syncing eSIM plans and live pricing from the provider, applying a configurable markup on top of provider cost, managing coupons, tracking every transaction and customer, and customizing what shows up on the app's home screen (banners and popular destinations).\n\nPayments run through FIB (First Iraq Bank), so customers in Iraq can pay directly and securely without needing an international card. Every payment callback from FIB is logged in the admin dashboard so I can track paid, unpaid, and declined orders in real time and debug issues fast.",
    highlights: [
      {
        label: "What is it?",
        text: "A Flutter mobile app for buying international eSIMs, paired with a Next.js admin platform to manage plans, pricing, coupons, and customers.",
      },
      {
        label: "The problem",
        text: "Travelers pay high roaming fees or waste time hunting for a local SIM card, and there was no simple way for Iraqi customers to pay for an eSIM using a local bank.",
      },
      {
        label: "The benefit",
        text: "Instant eSIM activation across 178+ destinations, paid for securely through FIB, with an admin dashboard that gives full control over pricing, plans, and orders.",
      },
      {
        label: "Who it's for",
        text: "Travelers who want data the moment they land, and the business side that needs to manage catalog, pricing, and customers without touching code.",
      },
    ],
    tags: ["Flutter", "Dart", "Next.js", "Node.js", "Supabase", "Vercel", "FIB Payment Gateway"],
    image:
      "https://ik.imagekit.io/i0dqqmt1a/portfolio/Omer-eSIM/Omer-eSIM-Cover.png?updatedAt=1785651907186",
    imageGroups: [
      {
        label: "Admin Dashboard",
        images: [
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Omer-eSIM/Admin%20Dashboard%20images/Screenshot%202026-08-02%20at%209.35.22%E2%80%AFAM.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Omer-eSIM/Admin%20Dashboard%20images/Screenshot%202026-08-02%20at%209.35.30%E2%80%AFAM.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Omer-eSIM/Admin%20Dashboard%20images/Screenshot%202026-08-02%20at%209.35.38%E2%80%AFAM.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Omer-eSIM/Admin%20Dashboard%20images/Screenshot%202026-08-02%20at%209.35.46%E2%80%AFAM.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Omer-eSIM/Admin%20Dashboard%20images/Screenshot%202026-08-02%20at%209.35.54%E2%80%AFAM.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Omer-eSIM/Admin%20Dashboard%20images/Screenshot%202026-08-02%20at%209.36.01%E2%80%AFAM.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Omer-eSIM/Admin%20Dashboard%20images/Screenshot%202026-08-02%20at%209.36.09%E2%80%AFAM.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Omer-eSIM/Admin%20Dashboard%20images/Screenshot%202026-08-02%20at%209.36.16%E2%80%AFAM.png",
        ],
      },
      {
        label: "App Screens",
        orientation: "portrait",
        images: [
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Omer-eSIM/Simulator%20Screenshot%20-%20iPhone%20Air%20-%202026-08-02%20at%2009.08.39.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Omer-eSIM/Simulator%20Screenshot%20-%20iPhone%20Air%20-%202026-08-02%20at%2009.08.45.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Omer-eSIM/Simulator%20Screenshot%20-%20iPhone%20Air%20-%202026-08-02%20at%2009.11.08.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Omer-eSIM/Simulator%20Screenshot%20-%20iPhone%20Air%20-%202026-08-02%20at%2009.11.16.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Omer-eSIM/Simulator%20Screenshot%20-%20iPhone%20Air%20-%202026-08-02%20at%2009.11.38.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Omer-eSIM/Simulator%20Screenshot%20-%20iPhone%20Air%20-%202026-08-02%20at%2009.11.46.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Omer-eSIM/Simulator%20Screenshot%20-%20iPhone%20Air%20-%202026-08-02%20at%2009.11.52.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Omer-eSIM/Simulator%20Screenshot%20-%20iPhone%20Air%20-%202026-08-02%20at%2009.11.57.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Omer-eSIM/Simulator%20Screenshot%20-%20iPhone%20Air%20-%202026-08-02%20at%2009.12.10.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Omer-eSIM/Simulator%20Screenshot%20-%20iPhone%20Air%20-%202026-08-02%20at%2009.12.15.png",
        ],
      },
    ],
    liveUrl: "#",
    githubUrl: "#",
    category: "Mobile App",
    features: [
      "Browse and buy eSIMs for 178+ destinations with local and regional data plans",
      "In-app checkout powered by FIB (First Iraq Bank), with real-time payment callbacks logged for every order",
      "Admin dashboard with live overview stats: eSIMs sold, active plans, 30-day revenue, and registered customers",
      "Provider sync to pull live eSIM plans and pricing automatically instead of managing them by hand",
      "Configurable pricing markup applied on top of provider cost to set the customer-facing price across the whole catalog",
      "Coupon system for percentage discounts scoped to specific countries or plans, validated server-side at checkout",
      "Customer and transaction management with searchable order history and status tracking (paid, unpaid, declined, cancelled)",
      "App home screen customization: banner carousel and curated Popular Destinations, editable without redeploying the app",
      "WhatsApp support contact configurable from the admin dashboard",
    ],
    techDetails:
      "The customer-facing app is built with Flutter and Dart, giving one codebase for both iOS and Android. The admin platform and backend run on Next.js and Node.js, deployed on Vercel, with Supabase handling the database and auth. Payments go through FIB's API, and every callback FIB sends is recorded permanently in the admin dashboard so payment status is always traceable. The admin side also drives the app's content, like home banners and popular destinations, without needing an app update.",
    challenges:
      "Integrating FIB as a payment provider meant handling asynchronous callbacks correctly, an order can come back as paid, unpaid, or declined well after the request is made, so I built a callback log in the admin dashboard to keep every status update traceable and debuggable. Keeping 178+ destinations worth of eSIM plans and pricing in sync with the provider while still letting me apply my own markup on top was another challenge, solved with a dedicated Provider Sync flow and a single configurable markup percentage instead of manually pricing every plan.",
    role: "Full-Stack & Mobile Developer",
    duration: "Ongoing",
    status: "Live",
  },
  {
    title: "Z-Exchange - Money Exchange Platform",
    slug: "z-exchange",
    description:
      "A mobile app for exchanging money between banks, cards, and digital wallets in Iraq (Qi Card, FIB, Zain Cash, PayPal, and more), with a companion app for exchange offices to review, confirm, and pay out every request.",
    longDescription:
      "Z-Exchange solves a very local problem: moving money between different banks and digital wallets in Iraq usually means physically going to an exchange office. If you have money on a Qi Card and need it on FIB, or you're holding Zain Cash and need PayPal, someone has to manually handle that swap in person.\n\nWith Z-Exchange, a customer opens the app, picks a sending source and a receiving destination (Qi Card, FIB, Zain Cash, PayPal, Payoneer, NassPay, NassWallet, Mastercard, Visa, and more), enters an amount like 10,000 IQD, and submits the request with payment proof. On the other side, an exchange office runs its own app: an Overview screen shows volume, profit, pending queue, and customer counts, and staff can confirm payment, send the payout, reject a request, or resolve a dispute directly from their phone.\n\nOffice owners can add sub-admins with granular permissions (who can view requests, confirm payments, send payouts, manage banks, or manage exchange rates), so a small exchange business can run its whole request queue without a physical counter. The app also supports English, Arabic, and both Kurdish dialects (Badini and Sorani), since that's who's actually using it day to day.",
    highlights: [
      {
        label: "What is it?",
        text: "A Flutter app pair: a customer app for requesting money exchanges between banks and wallets, and an office app for exchange businesses to process those requests.",
      },
      {
        label: "The problem",
        text: "Moving money between different Iraqi banks and digital wallets (Qi Card, FIB, Zain Cash, and others) normally means visiting an exchange office in person.",
      },
      {
        label: "The benefit",
        text: "Request an exchange from your phone in seconds, and exchange offices get a full queue, permissions, and reporting system instead of handling everything by hand.",
      },
      {
        label: "Who it's for",
        text: "Anyone who needs to move money between incompatible banks or wallets, and exchange offices that want to run their business through an app instead of a counter.",
      },
    ],
    tags: ["Flutter", "Dart", "Node.js", "MySQL"],
    image: "https://ik.imagekit.io/i0dqqmt1a/portfolio/Z-Exchange/4fc1e7da-03e9-438b-b75d-1c36bdc1b3aa.png",
    imageGroups: [
      {
        label: "Customer App",
        orientation: "portrait",
        images: [
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Z-Exchange/Customer%20App/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2010.54.58.png?updatedAt=1785657520187",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Z-Exchange/Customer%20App/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2010.55.04.png?updatedAt=1785657520108",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Z-Exchange/Customer%20App/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2010.55.09.png?updatedAt=1785657519990",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Z-Exchange/Customer%20App/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2010.55.29.png?updatedAt=1785657520097",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Z-Exchange/Customer%20App/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2010.55.38.png?updatedAt=1785657520084",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Z-Exchange/Customer%20App/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2010.55.52.png?updatedAt=1785657520194",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Z-Exchange/Customer%20App/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2010.56.29.png?updatedAt=1785657520337",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Z-Exchange/Customer%20App/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2010.56.36.png?updatedAt=1785657520386",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Z-Exchange/Customer%20App/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2010.56.48.png?updatedAt=1785657520745",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Z-Exchange/Customer%20App/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2010.56.59.png?updatedAt=1785657519956",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Z-Exchange/Customer%20App/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2010.57.07.png?updatedAt=1785657520515",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Z-Exchange/Customer%20App/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2010.57.15.png?updatedAt=1785657520623",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Z-Exchange/Customer%20App/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2010.57.20.png?updatedAt=1785657520281",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Z-Exchange/Customer%20App/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2010.57.29.png?updatedAt=1785657520271",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Z-Exchange/Customer%20App/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2010.57.34.png?updatedAt=1785657520221",
        ],
      },
      {
        label: "Admin App",
        orientation: "portrait",
        images: [
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Z-Exchange/admin%20app%20dashboard/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2010.59.23.png?updatedAt=1785657718648",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Z-Exchange/admin%20app%20dashboard/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2010.59.31.png?updatedAt=1785657719422",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Z-Exchange/admin%20app%20dashboard/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2010.59.37.png?updatedAt=1785657719323",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Z-Exchange/admin%20app%20dashboard/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2010.59.45.png?updatedAt=1785657719282",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Z-Exchange/admin%20app%20dashboard/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2010.59.50.png?updatedAt=1785657719331",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Z-Exchange/admin%20app%20dashboard/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2011.00.04.png?updatedAt=1785657719221",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Z-Exchange/admin%20app%20dashboard/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2011.00.15.png?updatedAt=1785657719382",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Z-Exchange/admin%20app%20dashboard/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2011.00.22.png?updatedAt=1785657719020",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Z-Exchange/admin%20app%20dashboard/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2011.00.32.png?updatedAt=1785657719144",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Z-Exchange/admin%20app%20dashboard/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2011.00.40.png?updatedAt=1785657718931",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Z-Exchange/admin%20app%20dashboard/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2011.00.49.png?updatedAt=1785657719014",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Z-Exchange/admin%20app%20dashboard/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2011.00.56.png?updatedAt=1785657718984",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Z-Exchange/admin%20app%20dashboard/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2011.01.01.png?updatedAt=1785657718857",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Z-Exchange/admin%20app%20dashboard/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2011.01.07.png?updatedAt=1785657718887",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/Z-Exchange/admin%20app%20dashboard/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-08-02%20at%2011.01.14.png?updatedAt=1785657718724",
        ],
      },
    ],
    liveUrl: "#",
    githubUrl: "#",
    category: "Mobile App",
    features: [
      "Request money exchanges between banks, cards, and digital wallets (Qi Card, FIB, Zain Cash, PayPal, Payoneer, NassPay, NassWallet, Mastercard, Visa, and more)",
      "Pick a sending source and receiving destination, enter an amount, and submit payment proof for the office to verify",
      "Notifications for request status: expired requests, returned requests needing new proof, and completed exchanges",
      "Office app with a live Overview: exchange volume, profit, pending queue, and total customers",
      "Request queue management for office staff: confirm payment, send payout, reject a request, or resolve a dispute",
      "Role-based sub-admin permissions covering requests, banks and office accounts, and exchange/currency rates, toggled per admin",
      "Multi-language support: English, Arabic, Kurdish Badini, and Kurdish Sorani",
      "Secure onboarding with phone verification via WhatsApp or SMS and enforced password strength rules",
    ],
    techDetails:
      "Both the customer app and the exchange office app are built with Flutter and Dart from a single codebase, covering iOS and Android. The backend runs on Node.js with a MySQL database handling users, exchange requests, permissions, and rates. Office staff permissions are stored per sub-admin and checked on every action (confirming payment, sending payout, managing rates), so an office owner can safely delegate work without giving full access.",
    challenges:
      "The core challenge was modeling the exchange request lifecycle correctly: a request can expire before payment is confirmed, get returned to the customer for new proof, get rejected, or end in a dispute, and every one of those states needed its own notification and queue behavior so nothing silently falls through. Building a real permissions system for office sub-admins was another one, since one office can have multiple staff members who should only be able to do part of the job (like confirming payments but not managing currency rates), so permissions had to be enforced on the backend, not just hidden in the UI.",
    role: "Full-Stack & Mobile Developer",
    duration: "Ongoing",
    status: "Live",
  },
  {
    title: "Luxury In Motion Dubai",
    slug: "luxury-in-motion-dubai",
    description:
      "A live production website for a luxury car rental company in Dubai, assigned to me by my manager while working at a company. Customers can browse 20+ brands, view pricing, and book via WhatsApp or call.",
    longDescription:
      "This project was assigned to me by my manager while I was working at a company. One of our clients was a Dubai-based luxury car rental company, and the project had already been started by another developer who didn't have enough time to continue.\n\nI took over and worked on it for 3-4 months, adding major features, rebuilding sections, and doing deep SEO work to make the site visible on Google in Dubai's competitive rental market. The site showcases 20+ luxury brands (Ferrari, Rolls-Royce, Lamborghini, Mercedes, and more), lets customers filter by category or brand, see daily/weekly/monthly pricing, and book via WhatsApp or phone call.\n\nWe had weekly meetings every Saturday throughout the 3-4 months to review progress and plan next steps. The client was very happy with the result: they told my manager that I delivered honest, professional work.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "https://ik.imagekit.io/i0dqqmt1a/portfolio/luxury%20in%20motion%20cover.png",
    images: [
      "https://ik.imagekit.io/i0dqqmt1a/portfolio/luxury-1_4tEG9xd_B.png",
      "https://ik.imagekit.io/i0dqqmt1a/portfolio/luxury-2_5s6s4S0f1.png",
      "https://ik.imagekit.io/i0dqqmt1a/portfolio/luxury-3_lF-o2uwAK.png",
      "https://ik.imagekit.io/i0dqqmt1a/portfolio/luxury-4_9UygdA2B8.png",
      "https://ik.imagekit.io/i0dqqmt1a/portfolio/luxury-5_jjesVj9f2.png",
      "https://ik.imagekit.io/i0dqqmt1a/portfolio/luxury-6_qWL2wmn0V.png",
    ],
    liveUrl: "#",
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
      "The site uses Next.js with static site generation because SEO is everything for a car rental business in Dubai's competitive market. Tailwind CSS handles the responsive styling, and Framer Motion powers the scroll-triggered animations that give the site a premium feel.\n\nThe entire site is exported as static HTML, so it loads instantly with no server costs. I did deep SEO work: static generation, dynamic metadata for every vehicle page, semantic HTML, and structured content to help the site rank on Google.",
    challenges:
      "Taking over a project that someone else started meant I had to understand the existing code before I could build on it. The main challenge was making the site feel premium while keeping it fast: high-resolution car images are heavy, so I implemented lazy loading and optimized every image.\n\nThe booking flow needed to work just as well on a phone as on desktop since most Dubai customers browse on mobile. SEO was the biggest focus too, since the client competes with dozens of other rental companies, so I did deep work on static generation, dynamic metadata for every vehicle page, and structured content to help them rank on Google.",
    role: "Full Stack Developer",
    duration: "3 - 4 months",
    status: "Completed",
  },
  {
    title: "Worker Activity Monitor",
    slug: "worker-activity-monitor",
    description:
      "A desktop app that tracks employee productivity using AI eye-tracking, mouse/keyboard analytics, and generates PDF reports. Runs fully offline.",
    longDescription:
      "I built this because of a real problem I saw at a company I used to work at: lazy workers who weren't doing their job, and managers who had no way to see what was actually happening. I wanted to give managers a clear picture of their team's productivity so they could make their business successful. The app tracks everything: mouse and keyboard activity, which apps are being used, what websites are open, and even uses AI eye-tracking through the camera to detect if someone is paying attention or not. It runs fully offline with no cloud dependency, and generates daily PDF reports for each worker. I built the whole thing in about one week using Flutter for the UI and Python for the AI eye-tracking side.",
    tags: ["Flutter", "Dart", "Python", "MediaPipe", "Win32 FFI", "SQLite"],
    image: "https://ik.imagekit.io/i0dqqmt1a/portfolio/Worker%20Monitor%20Activity%20Cover.png",
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
      "Flutter Desktop handles the UI with Provider for state management, fl_chart for activity visualizations, and PDF generation for daily reports. The AI side runs as a separate Python process using MediaPipe Face Mesh for eye-tracking and head pose estimation. It communicates with Flutter through JSON streaming. I used Win32 FFI to track mouse movement, keyboard input, and detect which app is in the foreground. Browser URL tracking works through COM automation across 6 browsers (Chrome, Edge, Firefox, Brave, Opera, Vivaldi). SQLite stores all data locally with per-second granularity. The app has 9 screens including a live dashboard, report viewer, app usage breakdown, and settings.",
    challenges:
      "The current limitation I'm working on is multi-monitor support. Right now the app uses the laptop camera, so if a worker has multiple monitors and looks at a second screen, the system marks them as suspicious or idle, even though they're actually working. I'm exploring solutions for this. Another challenge was making Flutter and Python work together smoothly. The Python process runs MediaPipe at ~5 FPS and streams results to Flutter without blocking the UI. Each browser also exposes accessibility data differently, so URL tracking needed custom handling per browser.",
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
      "A client asked me to build a POS system, and after using it in production, I turned it into a product I now sell. I already have my first paying customer and they're happy with it. I built this because most POS systems I've seen have real problems: refunding is overcomplicated, and if a customer steps away, you can't hold their cart and serve the next person. I fixed both of those. The system supports three roles (Admin, Cashier, Seller) with a multi-tenant setup so one seller can manage multiple stores, each with its own settings and currency. Right now I'm building the most exciting feature: local network sync. The admin laptop runs as a server, cashier devices connect to it, data syncs instantly, and if WiFi drops, cashiers keep working on their local database and sync back when reconnected.",
    tags: ["Flutter", "Dart", "SQLite", "ESC/POS", "PDF", "fl_chart"],
    image: "https://ik.imagekit.io/i0dqqmt1a/portfolio/POS%20system%20cover.png?updatedAt=1785333145815",
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
      "Local network sync: admin laptop as server, cashier devices sync instantly, offline fallback with auto-resync (in development)",
    ],
    techDetails:
      "Built with Flutter targeting Windows, Linux, and macOS. I chose SQLite because the system needs to work offline. It now has 18 schema versions with an incremental migration system that preserves all data when updating. fl_chart powers the admin dashboard charts. For printing, I wrote low-level ESC/POS commands with bitmap conversion to talk directly to thermal printers, and built a drag-and-drop barcode label editor. Reports export to CSV and Excel. The new local network sync feature uses the admin laptop as a server: cashier devices connect over WiFi and fall back to local storage when disconnected.",
    challenges:
      "The barcode scanner detection was a fun problem: scanners send characters in rapid bursts while humans type slowly, so I used a 50ms timing threshold to tell them apart. The thermal printer integration required low-level binary protocol work because different printer models behave differently with bitmap conversion. The database migration system across 18 versions was tricky: every update has to preserve existing data perfectly since real businesses depend on it. The current challenge is the local network sync: handling data conflicts when a cashier works offline and then reconnects to the admin server.",
    role: "Solo Developer & Product Owner",
    duration: "20 days (core build) + ongoing development",
    status: "In Production (1 paying customer)",
  },
  {
    title: "MEDKRD - Multi-Branch Clinic Operating System",
    slug: "medkrd",
    description:
      "A clinic management system that covers the whole patient visit, from booking to picking up medicine. Built for MEDICO, the largest health exhibition in Iraq & Kurdistan.",
    longDescription:
      "MEDKRD helps clinics manage patients from booking to pickup, all in one place.",
    highlights: [
      {
        label: "What is it?",
        text: "A system that helps clinics manage a patient's entire visit in one place, from booking an appointment to picking up medicine.",
      },
      {
        label: "The problem",
        text: "Clinics usually rely on separate tools that don't talk to each other, like a paper queue and a pharmacy notebook. Patients wait around with no idea how long is left.",
      },
      {
        label: "The benefit",
        text: "Patients can book online and see exactly where they are in line. Doctors, lab staff, and pharmacists all work from the same system, so nothing gets lost or repeated.",
      },
      {
        label: "Who it's for",
        text: "Hospitals and clinic networks with multiple branches, doctors, and departments.",
      },
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "PostgreSQL", "Prisma", "NextAuth.js", "Zod"],
    image: "https://ik.imagekit.io/i0dqqmt1a/portfolio/Banner%20MEDKRD%20to%20MEDICO.png?tr=ar-3-2,w-1536",
    imageGroups: [
      {
        label: "Hospital Dashboard",
        images: [
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/MEDKRD%20-%20images/hospital%20dashboard/Screenshot%202026-07-29%20at%205.19.50%E2%80%AFPM.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/MEDKRD%20-%20images/hospital%20dashboard/Screenshot%202026-07-29%20at%205.20.00%E2%80%AFPM.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/MEDKRD%20-%20images/hospital%20dashboard/Screenshot%202026-07-29%20at%205.20.25%E2%80%AFPM.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/MEDKRD%20-%20images/hospital%20dashboard/Screenshot%202026-07-29%20at%205.20.40%E2%80%AFPM.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/MEDKRD%20-%20images/hospital%20dashboard/Screenshot%202026-07-29%20at%205.20.12%E2%80%AFPM.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/MEDKRD%20-%20images/hospital%20dashboard/Screenshot%202026-07-29%20at%205.21.05%E2%80%AFPM.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/MEDKRD%20-%20images/hospital%20dashboard/Screenshot%202026-07-29%20at%205.20.52%E2%80%AFPM.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/MEDKRD%20-%20images/hospital%20dashboard/Screenshot%202026-07-29%20at%205.27.26%E2%80%AFPM.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/MEDKRD%20-%20images/hospital%20dashboard/Screenshot%202026-07-29%20at%205.27.08%E2%80%AFPM.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/MEDKRD%20-%20images/hospital%20dashboard/Screenshot%202026-07-29%20at%205.27.16%E2%80%AFPM.png",
        ],
      },
      {
        label: "Patient App",
        orientation: "portrait",
        images: [
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/MEDKRD%20-%20images/patient%20side/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-07-29%20at%2017.51.30.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/MEDKRD%20-%20images/patient%20side/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-07-29%20at%2017.52.00.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/MEDKRD%20-%20images/patient%20side/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-07-29%20at%2017.52.30.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/MEDKRD%20-%20images/patient%20side/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-07-29%20at%2017.52.20.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/MEDKRD%20-%20images/patient%20side/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-07-29%20at%2017.52.47.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/MEDKRD%20-%20images/patient%20side/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-07-29%20at%2017.52.35.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/MEDKRD%20-%20images/patient%20side/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-07-29%20at%2017.52.25.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/MEDKRD%20-%20images/patient%20side/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-07-29%20at%2017.52.57.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/MEDKRD%20-%20images/patient%20side/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-07-29%20at%2017.53.03.png",
          "https://ik.imagekit.io/i0dqqmt1a/portfolio/MEDKRD%20-%20images/patient%20side/Simulator%20Screenshot%20-%20iPhone%2017%20Pro%20Max%20-%202026-07-29%20at%2017.51.47.png",
        ],
      },
    ],
    liveUrl: "#",
    githubUrl: "#",
    category: "Web App",
    features: [
      "Book an appointment online in a few taps",
      "See your live position in the queue",
      "Doctors can see patient history and order tests instantly",
      "Lab results and prescriptions are tracked automatically",
      "Each staff role only sees what they need",
      "Clinics can build their own website without coding",
    ],
    techDetails:
      "Built with Next.js, React, and TypeScript, with PostgreSQL as the database. Patients, doctors, and staff all get a real-time experience, and clinics can turn features on or off depending on what they need.",
    challenges:
      "The hardest part was making sure two staff members can never overwrite each other by accident, like two people trying to help the same patient at once. I also made sure permissions stay clear, so only the right person can approve or cancel each step.\n\nA couple of small features, like analytics charts and after-visit feedback, are still being finished.",
    role: "Solo Developer & Product Owner",
    duration: "Ongoing",
    status: "In Development (preparing for launch)",
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
