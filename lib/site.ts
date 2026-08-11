/**
 * Single source of truth for site content.
 * Edit copy, services, projects and industries here — the pages read from it.
 */

export const site = {
  name: "Carmo Technology",
  tagline: "Smart technology, real results.",
  description:
    "Carmo Technology is a software, AI and design company rooted in Mogadishu, Somalia — building systems for clients across the Horn of Africa and beyond.",
  email: "carmotechnology1@gmail.com",
  location: "Mogadishu, Somalia",
  // Set to the production domain before launch — used for canonical URLs,
  // Open Graph tags and the sitemap.
  url: "https://www.carmotechnology.com",
} as const;

/**
 * WhatsApp contact. `number` is digits-only in full international format —
 * that is what wa.me expects. `display` is what users read.
 */
export const whatsapp = {
  number: "254729292631",
  display: "+254 729 292 631",
  message:
    "Hello Carmo Technology — I'd like to talk about a project.",
} as const;

export const whatsappHref = `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(
  whatsapp.message,
)}`;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact" },
] as const;

/** Social profiles — replace the placeholder hrefs when accounts are live. */
export const socials = [
  { label: "LinkedIn", href: "#", handle: "Carmo Technology" },
  { label: "X", href: "#", handle: "@carmotech" },
  { label: "Instagram", href: "#", handle: "@carmotechnology" },
  { label: "Facebook", href: "#", handle: "Carmo Technology" },
] as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  capabilities: string[];
};

export const services: Service[] = [
  {
    slug: "software-development",
    title: "Software Development & Mobile Apps",
    short:
      "Custom platforms, mobile apps and management systems built to run real operations, every day.",
    intro:
      "We build the systems organisations actually run on — registries, portals, admin platforms and the mobile apps that sit alongside them. Everything is designed for the conditions our clients work in: intermittent connectivity, mixed devices, multilingual users, and staff who need software that is obvious rather than clever.",
    capabilities: [
      "Custom web applications and business platforms",
      "iOS & Android mobile apps",
      "Management information systems — registries, records, inventory, licensing",
      "E-commerce and online service portals",
      "Database design, migration, and system integration / APIs",
      "SaaS product development",
      "Maintenance, support, and training",
    ],
  },
  {
    slug: "ai-automation",
    title: "Artificial Intelligence & Automation",
    short:
      "Automation, analytics and AI assistants that remove manual work and put data to use.",
    intro:
      "AI is only worth deploying where it removes real work. We start from the process — the forms being re-keyed, the reports being assembled by hand, the questions staff answer a hundred times a week — and automate from there. Somali-language support is a first-class concern, not an afterthought.",
    capabilities: [
      "Business process automation",
      "Data analytics, dashboards, and decision-support",
      "AI chatbots and virtual assistants, including Somali-language support",
      "Predictive and forecasting models",
      "Document digitization, classification, and intelligent search",
      "AI readiness assessment and roadmaps",
    ],
  },
  {
    slug: "advisory",
    title: "Advisory & Consultation",
    short:
      "Strategy, architecture and procurement guidance from a team that also ships the work.",
    intro:
      "Advice is more useful from people who have delivered. We help institutions decide what to build, what to buy, and what to retire — then define the requirements clearly enough that whoever implements them, including another vendor, can succeed.",
    capabilities: [
      "Technology strategy and digital transformation roadmaps",
      "Systems assessment and requirements definition",
      "Vendor evaluation and procurement support",
      "Cloud strategy, architecture, and migration",
      "Information security and data-protection guidance",
      "Capacity building and technical training",
    ],
  },
  {
    slug: "design",
    title: "Design & Graphics Packages",
    short:
      "Brand identity, product UI and publication design that hold up in print and on screen.",
    intro:
      "Our design studio works both on its own and alongside our engineering teams. That means a brand system and the product it ends up living inside can be designed by the same people — and an annual report, a licence certificate and a mobile app can all look like they came from one organisation.",
    capabilities: [
      "Brand identity — logos, visual systems, guidelines",
      "UI/UX design for apps and websites",
      "Marketing material, pitch decks, and presentations",
      "Report, publication, and annual-report layout",
      "Social media content and campaigns",
      "Photography, video, and motion graphics",
    ],
  },
];

export type Project = {
  name: string;
  category: string;
  summary: string;
  detail: string;
  highlights: string[];
  href?: string;
  linkLabel?: string;
};

export const projects: Project[] = [
  {
    name: "Smart Kindergarten (SmartKGMS)",
    category: "SaaS Product · Software",
    summary:
      "An all-in-one kindergarten management system already in use by schools.",
    detail:
      "SmartKGMS runs an entire small school from a phone: student records and allergies, a one-handed register, daily reports to parents, fees, admissions and assessment. It is fully multilingual — English, Somali and Arabic, with complete right-to-left support.",
    highlights: [
      "Student records & allergy tracking",
      "One-handed daily register",
      "Daily reports to parents",
      "Fees, admissions & assessment",
      "English · Somali · Arabic with full RTL",
    ],
    href: "https://www.smartkgms.com",
    linkLabel: "smartkgms.com",
  },
  {
    name: "National Health Professionals Council (NHPC)",
    category: "Government · Software & Design",
    summary:
      "Digital systems and website for Somalia's statutory health-workforce regulator.",
    detail:
      "Carmo Technology developed the digital systems and website for Somalia's National Health Professionals Council — the statutory regulator that registers and licenses health professionals, accredits facilities and approves training institutions under Act Lr.31. The build includes public licence verification and registration workflows. Carmo also provides ongoing graphic design services for the Council.",
    highlights: [
      "Registration & licensing workflows",
      "Public licence verification",
      "Facility accreditation records",
      "Institutional website",
      "Ongoing graphic design services",
    ],
    href: "https://nhpc.gov.so",
    linkLabel: "nhpc.gov.so",
  },
  {
    name: "Laundry Management System",
    category: "Software",
    summary:
      "A custom system for tracking laundry orders, customers and daily operations.",
    detail:
      "A purpose-built operations tool covering the full order lifecycle — intake, customer records, item tracking, status and collection — designed to replace paper tickets and give owners a clear view of the day's work.",
    highlights: [
      "Order intake & lifecycle tracking",
      "Customer records",
      "Operational status views",
    ],
    href: "https://beechage.vercel.app",
    linkLabel: "beechage.vercel.app",
  },
];

export const industries = [
  {
    name: "Government & public sector",
    description:
      "Regulatory systems, registries, licensing and public-facing services built to institutional standards.",
  },
  {
    name: "Healthcare",
    description:
      "Professional registration, facility accreditation, records and clinical support tools.",
  },
  {
    name: "Finance & banking",
    description:
      "Secure platforms, integrations and reporting for institutions handling money and sensitive data.",
  },
  {
    name: "Education",
    description:
      "School management, admissions, assessment and parent communication — from nursery to tertiary.",
  },
  {
    name: "NGOs & development partners",
    description:
      "Programme monitoring, beneficiary data, field reporting and donor-ready dashboards.",
  },
  {
    name: "Logistics & trade",
    description:
      "Inventory, dispatch, tracking and the integrations that connect operations end to end.",
  },
  {
    name: "Startups & SMEs",
    description:
      "Product development, brand identity and the technical foundations to launch and grow.",
  },
] as const;

export const values = [
  {
    name: "Integrity",
    description:
      "We say what a project will take, and we tell clients when they do not need what they asked for.",
  },
  {
    name: "Engineering excellence",
    description:
      "Systems that are maintainable, documented and handed over properly — not dependent on us forever.",
  },
  {
    name: "Client-centred design",
    description:
      "We design for the person doing the work, in the conditions they actually work in.",
  },
  {
    name: "Data stewardship",
    description:
      "Health, financial and citizen data carries obligations. We treat it that way from day one.",
  },
  {
    name: "Local roots, global standards",
    description:
      "Built in Mogadishu, held to the same engineering bar as anywhere else in the world.",
  },
  {
    name: "Partnership",
    description:
      "We stay after launch. Support, training and iteration are part of the work, not an upsell.",
  },
] as const;

export const whyCarmo = [
  {
    title: "Proven delivery",
    description:
      "Live systems in production — a SaaS product serving schools and national regulatory infrastructure for the Somali health sector.",
  },
  {
    title: "One partner, full stack",
    description:
      "Strategy, software, AI and design under one roof. No coordinating three vendors who blame each other.",
  },
  {
    title: "Built for real conditions",
    description:
      "Intermittent connectivity, mixed devices, multiple languages and right-to-left scripts — designed in, not patched on.",
  },
  {
    title: "Local presence, global standards",
    description:
      "A team you can meet in Mogadishu, working to the engineering and security practices you would expect anywhere.",
  },
] as const;

/** Placeholder team — swap in real names, roles, photos and bios. */
export const team = [
  {
    name: "Founder & Managing Director",
    role: "Strategy & Engineering",
    bio: "Placeholder bio — replace with the founder's background, focus areas and a short note on why Carmo was started.",
  },
  {
    name: "Head of Engineering",
    role: "Software & Platforms",
    bio: "Placeholder bio — replace with experience across platform architecture, delivery and team leadership.",
  },
  {
    name: "Head of Design",
    role: "Brand & Product Design",
    bio: "Placeholder bio — replace with background in identity systems, publication design and product UI.",
  },
] as const;

/**
 * Home-page proof band. Counts are derived from the data above so they cannot
 * drift out of sync when a project, service or sector is added.
 */
export const stats = [
  {
    value: projects.length,
    suffix: "",
    label: "Systems live in production",
  },
  {
    value: services.length,
    suffix: "",
    label: "Capabilities under one roof",
  },
  {
    value: industries.length,
    suffix: "",
    label: "Sectors we build for",
  },
  {
    value: 3,
    suffix: "",
    label: "Languages shipped — EN · SO · AR",
  },
] as const;

export const serviceOptions = [
  "Software Development & Mobile Apps",
  "Artificial Intelligence & Automation",
  "Advisory & Consultation",
  "Design & Graphics Packages",
  "Something else",
] as const;
