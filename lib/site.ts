/**
 * Single source of truth for site content.
 * Edit copy, services, projects and industries here — the pages read from it.
 */

export const site = {
  name: "Carmo Technology",
  tagline: "Smart technology, real results.",
  description:
    "Carmo Technology is an AI and software company based in Nairobi, Kenya — helping businesses across East Africa automate with AI, build software and websites, and train their teams to use AI well.",
  email: "carmotechnology1@gmail.com",
  location: "Nairobi, Kenya",
  region: "East Africa",
  // Set to the production domain before launch — used for canonical URLs,
  // Open Graph tags and the sitemap.
  url: "https://www.carmotechnology.com",
} as const;

/**
 * WhatsApp contact. `number` is digits-only in full international format —
 * that is what wa.me expects. `display` is what users read.
 */
export const whatsapp = {
  number: "254183422320",
  display: "+254 183 422320",
  message: "Hello Carmo Technology — I'd like to talk about a project.",
} as const;

/** A wa.me link that opens WhatsApp with `message` already typed. */
export function whatsappLink(message: string = whatsapp.message) {
  return `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export const whatsappHref = whatsappLink();

/** The primary call to action everywhere on the site. */
export const strategyCallHref = whatsappLink(
  "Hello Carmo Technology — I'd like to book a free strategy call.",
);

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/services/ai-automation", label: "AI Solutions" },
  { href: "/training", label: "Training" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

/** Footer "Company" column — a little wider than the header nav. */
export const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Case studies" },
  { href: "/industries", label: "Industries" },
  { href: "/training", label: "Training" },
  { href: "/contact", label: "Contact" },
] as const;

/** Social profiles — replace the placeholder hrefs when accounts are live. */
export const socials = [
  { label: "LinkedIn", href: "#", handle: "Carmo Technology" },
  { label: "X", href: "#", handle: "@carmotech" },
  { label: "Instagram", href: "#", handle: "@carmotechnology" },
  { label: "Facebook", href: "#", handle: "Carmo Technology" },
] as const;

/** Countries we take work in. Kenya is home; the rest we serve on-site or remotely. */
export const countries = [
  { name: "Kenya", note: "Headquarters · Nairobi" },
  { name: "Uganda" },
  { name: "Tanzania" },
  { name: "Rwanda" },
  { name: "Ethiopia" },
  { name: "Somalia", note: "Where Carmo began" },
] as const;

/* ------------------------------------------------------------------------- */
/* Services                                                                  */
/* ------------------------------------------------------------------------- */

export type Offering = { title: string; description: string };
export type Faq = { q: string; a: string };
export type Cta = { label: string; message: string };

export type ServiceIcon = "ai" | "software" | "web" | "training" | "advisory" | "design";

export type Service = {
  slug: string;
  /** Where the service's own page lives. */
  href: string;
  title: string;
  icon: ServiceIcon;
  /** Phrased as the visitor's goal, for the "What are you trying to do?" cards. */
  goal: string;
  short: string;
  headline: string;
  intro: string;
  /** "Sound familiar?" — the problems that bring people to this service. */
  problems: string[];
  offeringsTitle?: string;
  offerings: Offering[];
  audiences: string[];
  /** Training only: what a workshop covers, and what to expect on the day. */
  topics?: Offering[];
  expect?: string[];
  faqs: Faq[];
  /** Slugs of other services to cross-link. */
  related: string[];
  /** Names of projects in `projects` that show this service in practice. */
  work?: string[];
  cta: Cta;
  secondaryCta?: Cta;
};

export const services: Service[] = [
  {
    slug: "ai-automation",
    href: "/services/ai-automation",
    title: "AI & Automation",
    icon: "ai",
    goal: "Automate my business",
    short:
      "AI receptionists, WhatsApp assistants and automations that answer customers, follow up every lead and take repetitive admin off your team.",
    headline: "AI that answers, follows up and does the admin — so your team doesn't have to.",
    intro:
      "Missed calls, slow replies and hours of copy-and-paste quietly cost businesses money every week. We put practical AI to work on exactly those problems — built around the tools you already use, and in the languages your customers speak.",
    problems: [
      "Calls and WhatsApp messages go unanswered when the team is busy or the office is closed.",
      "Enquiries go cold because nobody had time to follow up.",
      "Staff re-type the same details between WhatsApp, email, spreadsheets and the accounts system.",
      "Customers ask the same ten questions every single day.",
    ],
    offeringsTitle: "What we can build",
    offerings: [
      {
        title: "AI voice receptionist",
        description:
          "Answers every call, day or night — takes the caller's details, books appointments and passes urgent calls to a person.",
      },
      {
        title: "WhatsApp & website assistants",
        description:
          "Customer-support assistants that reply instantly using your own prices, policies and FAQs — in English, Swahili, Somali or Arabic.",
      },
      {
        title: "Lead follow-up",
        description:
          "Every enquiry gets a fast reply and a reminder sequence, so no potential customer slips through the cracks.",
      },
      {
        title: "Workflow automation",
        description:
          "Connect WhatsApp, email, M-Pesa, your CRM and spreadsheets so information moves on its own instead of by hand.",
      },
      {
        title: "Internal AI tools",
        description:
          "Assistants that help your staff draft, summarise, search company documents and find answers faster.",
      },
      {
        title: "AI integrations",
        description:
          "Add AI to the systems you already run — your website, app or back office — instead of replacing them.",
      },
      {
        title: "Data analytics & dashboards",
        description:
          "Turn the data you already collect into dashboards and reports that show what is working and what isn't.",
      },
      {
        title: "Document digitisation & search",
        description:
          "Scan, sort and search paper records and PDFs, with the key details pulled out automatically.",
      },
      {
        title: "Forecasting models",
        description:
          "Predict demand, stock and cash flow from your own history, so you plan with numbers instead of guesses.",
      },
    ],
    audiences: [
      "Service businesses that win work by phone and WhatsApp",
      "Clinics, salons and practices with a busy front desk",
      "Teams losing hours every week to admin and data entry",
      "Organisations sitting on data they never get to use",
    ],
    faqs: [
      {
        q: "Do we have to change the tools we already use?",
        a: "Usually not. We connect AI to what you already run — WhatsApp, email, spreadsheets, your accounting or booking software — and only suggest replacing something when it is genuinely holding you back.",
      },
      {
        q: "Will customers know they're talking to AI?",
        a: "We recommend being open about it, and every assistant we build hands over to a person whenever a customer asks, or the question needs one. Done well, what customers notice is that they got a fast, correct answer.",
      },
      {
        q: "Can it work in Swahili and other local languages?",
        a: "Yes. Assistants can reply in English, Swahili, Somali and Arabic, and we test them with real customer questions in each language before they go live.",
      },
      {
        q: "How do we know it's worth it?",
        a: "We agree what success looks like before we build — calls answered, leads followed up, hours saved — and measure it after launch. If something isn't paying for itself, we'll tell you.",
      },
      {
        q: "What happens to our customers' data?",
        a: "We design with Kenya's Data Protection Act and good practice in mind: collect only what is needed, control who can see it, and use AI services on business terms that don't train on your data.",
      },
    ],
    related: ["software-saas", "web-digital", "ai-training"],
    cta: {
      label: "Book a free strategy call",
      message: "Hello Carmo Technology — I'd like to talk about AI and automation for my business.",
    },
  },
  {
    slug: "software-saas",
    href: "/services/software-saas",
    title: "Software, SaaS & Mobile Apps",
    icon: "software",
    goal: "Turn my idea into software",
    short:
      "SaaS products, mobile apps, management systems and client portals — from first idea to software people use every day.",
    headline: "Turn your idea — or your spreadsheet — into software that runs the business.",
    intro:
      "Whether you're a founder with a product idea or a business that has outgrown paper and spreadsheets, we design and build the software, web and mobile, and stay to support it. We've done it for our own products, which are live and in daily use.",
    problems: [
      "You have an app or SaaS idea but no technical co-founder or engineering team.",
      "Off-the-shelf software doesn't fit how your business actually works.",
      "Key processes live in spreadsheets, notebooks or one person's head.",
      "You want a first version in front of real customers before investing more.",
    ],
    offeringsTitle: "What we can build",
    offerings: [
      {
        title: "Product discovery",
        description:
          "Turn the idea into a clear scope — what to build first, what can wait, and what it will take.",
      },
      {
        title: "Prototypes & MVPs",
        description:
          "A working first version you can put in front of real users quickly, then improve from what you learn.",
      },
      {
        title: "SaaS products",
        description:
          "Multi-customer platforms with accounts, roles, subscriptions and billing — M-Pesa included.",
      },
      {
        title: "Mobile apps",
        description:
          "iOS and Android apps that work well on the phones your customers and staff actually carry.",
      },
      {
        title: "Management systems",
        description:
          "Software shaped around your operations — records, inventory, scheduling, compliance and reporting.",
      },
      {
        title: "Client portals",
        description:
          "One place for customers to log in, check status, pay and get things done.",
      },
      {
        title: "Custom industry software",
        description:
          "Purpose-built tools for sectors where nothing off the shelf fits the way you work.",
      },
      {
        title: "Integrations & APIs",
        description:
          "Connect your systems to M-Pesa, WhatsApp Business, accounting tools and partner platforms.",
      },
      {
        title: "Maintenance & support",
        description:
          "Hosting, updates, fixes and staff training after launch. We don't disappear when the invoice clears.",
      },
    ],
    audiences: [
      "Founders with an app or SaaS idea",
      "Businesses that have outgrown spreadsheets and paper",
      "Schools, clinics and operators with specific workflow or compliance needs",
      "Organisations replacing a system that no longer fits",
    ],
    faqs: [
      {
        q: "I'm not technical. Can I still build software?",
        a: "Yes — most of our clients aren't. We turn the idea into a plain-language scope, show you working screens early, and make the technical decisions with you rather than for you.",
      },
      {
        q: "Who owns the code?",
        a: "For custom software we build for you, you own the code and the data, and the accounts it runs on are in your name. We document it so another team could take it over.",
      },
      {
        q: "Do we have to build everything at once?",
        a: "No. We usually recommend starting with the smallest version that solves the main problem, getting it in front of users, and building the rest from what you learn.",
      },
      {
        q: "Can customers pay with M-Pesa?",
        a: "Yes. We integrate M-Pesa, other mobile money and card payments, so customers pay the way they already do.",
      },
      {
        q: "Can you take over or improve an existing system?",
        a: "Often, yes. We start with a short review of what you have, then tell you honestly whether it's worth improving or replacing.",
      },
    ],
    related: ["ai-automation", "web-digital", "design-branding"],
    work: ["Smart Kindergarten (SmartKGMS)", "SmartLaundry"],
    cta: {
      label: "Book a free strategy call",
      message: "Hello Carmo Technology — I have a software / app idea I'd like to talk through.",
    },
  },
  {
    slug: "web-digital",
    href: "/services/web-digital",
    title: "Web & Digital",
    icon: "web",
    goal: "Build or improve my website",
    short:
      "Websites, landing pages, online shops and booking flows built to turn visitors into customers — and to be found on Google and in AI answers.",
    headline: "A website built around what your customers need to do.",
    intro:
      "Your website should bring in calls, bookings and WhatsApp messages — not just sit there. We build fast, mobile-first sites that explain what you do clearly, make it easy to act, and help you show up when people search, on Google and in AI assistants.",
    problems: [
      "Your website looks dated or is hard to use on a phone.",
      "People visit, but don't call, book or send a message.",
      "You don't appear on Google — or when someone asks an AI assistant.",
      "Updating the site is slow, costly or depends on one person.",
    ],
    offeringsTitle: "What we can build",
    offerings: [
      {
        title: "Business websites",
        description:
          "A clear, fast site that explains what you do and brings in enquiries.",
      },
      {
        title: "Website redesigns",
        description:
          "Modernise an existing site without throwing away the search ranking you've already earned.",
      },
      {
        title: "Landing pages",
        description: "Focused pages for a single offer, campaign or launch.",
      },
      {
        title: "Booking & payments",
        description:
          "Let customers book appointments and pay — by M-Pesa or card — straight from your site.",
      },
      {
        title: "Online shops",
        description:
          "E-commerce with mobile-money checkout, WhatsApp ordering and stock that stays in sync.",
      },
      {
        title: "Search & AI visibility",
        description:
          "Technical SEO, Google Business Profile and answer-engine optimisation, so you're found in search and in AI answers.",
      },
    ],
    audiences: [
      "Local businesses — clinics, salons, schools, restaurants, shops",
      "Businesses with an outdated or under-performing website",
      "Teams launching a new product, service or campaign",
    ],
    faqs: [
      {
        q: "How long does a website take?",
        a: "A focused business site or landing page usually takes a couple of weeks once we have your content. Shops, portals and larger sites take longer — you get a real timeline before you commit.",
      },
      {
        q: "Who owns the domain and the site?",
        a: "You do. The domain and hosting are registered in your name, and you get full access to everything.",
      },
      {
        q: "Can you improve my current site instead of rebuilding it?",
        a: "Yes. If the foundations are sound, a targeted redesign and SEO fix is often faster and cheaper than starting again. We'll tell you which makes sense.",
      },
      {
        q: "Will I be able to update it myself?",
        a: "Yes. We set up simple editing for the parts that change often, and show your team how to use it.",
      },
    ],
    related: ["design-branding", "ai-automation", "software-saas"],
    cta: {
      label: "Book a free strategy call",
      message: "Hello Carmo Technology — I'd like to talk about a new or improved website.",
    },
  },
  {
    slug: "ai-training",
    href: "/training",
    title: "AI Training & Workshops",
    icon: "training",
    goal: "Learn how to use AI",
    short:
      "Hands-on AI workshops for individuals, teams and business owners — practical skills you'll use the next morning.",
    headline: "Learn to use AI properly — hands-on, practical, no coding.",
    intro:
      "Most people use AI like a search box and get average results. Our workshops teach individuals and teams to use tools like ChatGPT, Claude and Gemini for real work — writing, research, documents and planning — and to check what AI tells them.",
    problems: [
      "You use AI now and then, but the answers feel generic or unreliable.",
      "Your team is experimenting with AI with no shared approach or guardrails.",
      "You know AI could save time, but don't know where to start.",
      "You worry about staff pasting sensitive information into AI tools.",
    ],
    offeringsTitle: "Ways to learn",
    offerings: [
      {
        title: "AI Fundamentals Workshop",
        description:
          "Our beginner-friendly public workshop in Nairobi. Bring a laptop and learn by doing — you leave with a workflow you built yourself and can reuse the next day.",
      },
      {
        title: "Team & company training",
        description:
          "Private sessions for your staff, on-site in Nairobi or online anywhere in East Africa, built around the tools and tasks your team uses every day.",
      },
      {
        title: "Leadership AI briefing",
        description:
          "A focused session for owners and managers: where AI fits in your business, what it costs, the risks, and where to start.",
      },
    ],
    topics: [
      {
        title: "Better prompting",
        description: "How to ask so you get a useful answer the first time.",
      },
      {
        title: "Giving AI context",
        description: "Sharing the right background so the results fit your work.",
      },
      {
        title: "Working with documents",
        description: "Summarising, comparing and pulling answers out of files.",
      },
      {
        title: "Research, writing & planning",
        description: "The everyday tasks where AI saves the most time.",
      },
      {
        title: "Reusable workflows",
        description: "Turning what works into repeatable steps for you and your team.",
      },
      {
        title: "Checking AI's answers",
        description:
          "Spotting mistakes and made-up facts, and using AI responsibly with sensitive data.",
      },
    ],
    expect: [
      "Beginner-friendly — no coding required",
      "Bring your own laptop and work hands-on throughout",
      "Exercises based on your own work, not toy examples",
      "Take-home guides and prompt templates",
      "Certificate of completion from Carmo Technology",
      "Time to meet and learn alongside other professionals",
    ],
    audiences: [
      "Complete beginners and casual AI users",
      "Professionals and employees",
      "Business owners and managers",
      "Teams that want a shared, safe way to use AI",
    ],
    faqs: [
      {
        q: "Do I need a technical background?",
        a: "No. The workshops are designed for people who have never written a line of code.",
      },
      {
        q: "When is the next public workshop?",
        a: "Dates and venues in Nairobi go to the waitlist first. Message us on WhatsApp to join it — there's no cost to join.",
      },
      {
        q: "Can you train our team at our office?",
        a: "Yes. We run private sessions on-site in Nairobi and online for teams anywhere in East Africa, tailored to your tools and your work.",
      },
      {
        q: "Which AI tools do you cover?",
        a: "Mainly ChatGPT, Claude and Gemini, plus Microsoft Copilot or Google Workspace AI if your team uses them. The skills carry over between tools.",
      },
    ],
    related: ["ai-automation", "advisory"],
    cta: {
      label: "Join the workshop waitlist",
      message:
        "Hello Carmo Technology — please add me to the waitlist for the AI Fundamentals workshop.",
    },
    secondaryCta: {
      label: "Ask about team training",
      message: "Hello Carmo Technology — I'd like to ask about AI training for my team.",
    },
  },
  {
    slug: "advisory",
    href: "/services/advisory",
    title: "Technology & AI Advisory",
    icon: "advisory",
    goal: "Plan my technology & AI strategy",
    short:
      "Independent advice on what to build, buy or retire — AI readiness, digital roadmaps, vendor selection and data protection.",
    headline: "Know what to build, what to buy — and what to skip.",
    intro:
      "Advice is more useful from people who also deliver. We help businesses and institutions decide where technology and AI will actually pay off, then define the requirements clearly enough that whoever builds it — us or another vendor — can succeed.",
    problems: [
      "You're under pressure to “do something with AI” but unsure where it really helps.",
      "You've been quoted wildly different prices for what sounds like the same system.",
      "Your systems don't talk to each other, and nobody owns the big picture.",
      "You're not sure customer data is handled the way the law requires.",
    ],
    offeringsTitle: "How we help",
    offerings: [
      {
        title: "AI readiness assessment",
        description:
          "Where AI can save time or money in your business, what it would take, and what to do first.",
      },
      {
        title: "Digital transformation roadmaps",
        description:
          "A practical, phased plan for moving from paper and spreadsheets to systems that scale.",
      },
      {
        title: "Systems review & requirements",
        description:
          "An honest look at what you have, and a written specification for what you need.",
      },
      {
        title: "Vendor evaluation & procurement",
        description:
          "Help comparing proposals and choosing a supplier — even when the right answer isn't us.",
      },
      {
        title: "Cloud strategy & migration",
        description: "Choosing, moving to and keeping control of the cost of cloud hosting.",
      },
      {
        title: "Data protection & security",
        description:
          "Practical guidance on securing systems and handling personal data in line with Kenya's Data Protection Act and regional equivalents.",
      },
    ],
    audiences: [
      "Owners and managers planning a major technology investment",
      "NGOs and institutions preparing a tender or procurement",
      "Organisations running several systems with no clear plan",
    ],
    faqs: [
      {
        q: "Will you just recommend your own services?",
        a: "No. Sometimes the right answer is an off-the-shelf tool, another vendor, or waiting. We say so — the advice is only worth something if it's honest.",
      },
      {
        q: "What do we get at the end?",
        a: "A written, plain-language report or roadmap with priorities, rough costs and next steps your team can act on.",
      },
      {
        q: "Can you help us write a tender or terms of reference?",
        a: "Yes. We can define the requirements, draft the technical sections and help you evaluate the responses.",
      },
    ],
    related: ["ai-automation", "software-saas", "ai-training"],
    cta: {
      label: "Book a free strategy call",
      message: "Hello Carmo Technology — I'd like advice on our technology / AI strategy.",
    },
  },
  {
    slug: "design-branding",
    href: "/services/design-branding",
    title: "Design & Branding",
    icon: "design",
    goal: "Build or refresh my brand",
    short:
      "Brand identity, UI/UX, marketing material, social content and video that hold up in print and on screen.",
    headline: "A brand that looks as good as the work behind it.",
    intro:
      "Our design studio works on its own and alongside our engineers — so your logo, website, app and pitch deck all look like they came from the same company.",
    problems: [
      "Your logo and materials look different everywhere they appear.",
      "Your product works, but it doesn't look trustworthy or easy to use.",
      "You need a pitch deck, company profile or report that does the business justice.",
      "Your social media content is irregular and off-brand.",
    ],
    offeringsTitle: "What we design",
    offerings: [
      {
        title: "Brand identity",
        description: "Logos, colour, typography and guidelines your whole team can follow.",
      },
      {
        title: "UI/UX design",
        description:
          "Interfaces for apps and websites that are clear, accessible and easy to use.",
      },
      {
        title: "Marketing material",
        description: "Company profiles, brochures, pitch decks and presentations.",
      },
      {
        title: "Reports & publications",
        description: "Annual reports and long documents laid out to actually be read.",
      },
      {
        title: "Social media content",
        description: "Campaign graphics and content calendars that stay on-brand.",
      },
      {
        title: "Video & motion graphics",
        description: "Short brand films, explainers and animated content for social and web.",
      },
    ],
    audiences: [
      "New businesses that need a professional identity from day one",
      "Established companies refreshing an outdated brand",
      "Product teams that need UI/UX alongside development",
    ],
    faqs: [
      {
        q: "Do we get the source files?",
        a: "Yes. You receive final artwork for print and web, plus the editable source files and brand guidelines.",
      },
      {
        q: "Can you design and build our website too?",
        a: "Yes — it's one of the main reasons clients come to us. The same team designs the brand and builds the site, so nothing gets lost in the hand-over.",
      },
      {
        q: "How many rounds of changes are included?",
        a: "We agree the number of revision rounds up front for each project, so there are no surprises.",
      },
    ],
    related: ["web-digital", "software-saas", "advisory"],
    cta: {
      label: "Book a free strategy call",
      message: "Hello Carmo Technology — I'd like to talk about design and branding.",
    },
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

/** How every engagement runs, whatever the service. */
export const processSteps = [
  {
    title: "Discover",
    description:
      "We learn the problem, how your team works today, and what a good result would look like.",
  },
  {
    title: "Plan",
    description:
      "We recommend what to build — and just as importantly, what not to — with a clear timeline and cost.",
  },
  {
    title: "Build",
    description:
      "We build the AI, software or website, and show you working progress early and often.",
  },
  {
    title: "Improve",
    description:
      "After launch we measure what's working, support your team and keep making it better.",
  },
] as const;

/** Questions that apply whatever the service — shown on /services. */
export const generalFaqs: Faq[] = [
  {
    q: "How do we get started?",
    a: "Book a free, no-obligation strategy call on WhatsApp, or send us a message. Tell us the problem; we'll tell you honestly what we think it takes.",
  },
  {
    q: "Where do you work?",
    a: "We're based in Nairobi, Kenya, and work with clients across East Africa — Kenya, Uganda, Tanzania, Rwanda, Ethiopia, Somalia and beyond — on-site where it helps and remotely everywhere else.",
  },
  {
    q: "How long does a typical project take?",
    a: "A landing page can take days, a website a few weeks, and a custom system or app a few months. You get a real timeline before you commit, not a guess.",
  },
  {
    q: "Do you work with small businesses and solo founders?",
    a: "Yes — much of our work is with SMEs and founders. We size the solution to the business; starting small is often the smartest move.",
  },
  {
    q: "Isn't AI overkill for a business our size?",
    a: "Often it's the opposite. Small teams feel the benefit fastest — one assistant answering WhatsApp messages, or one automation removing data entry, frees up a real share of the week. If it doesn't fit, we'll say so.",
  },
  {
    q: "What does support after launch cover?",
    a: "Hosting, monitoring, security updates, fixes and small improvements, plus training for your team. We agree the scope in writing, so you know exactly what's included.",
  },
  {
    q: "Can you hand over to our own IT team later?",
    a: "Yes. We document what we build and hand over the code, accounts and know-how so your team — or another provider — can take over.",
  },
  {
    q: "What happens if we just wait?",
    a: "Nothing breaks — but missed calls, slow replies and manual work keep costing you, and competitors who automate get faster. A strategy call is free and tells you whether it's worth acting now.",
  },
];

/** Shown under the AI section on the home page. Names only — no endorsement implied. */
export const aiTools = [
  "WhatsApp Business",
  "M-Pesa",
  "OpenAI",
  "Claude",
  "Gemini",
  "Google Workspace",
  "Microsoft 365",
  "Your CRM & spreadsheets",
] as const;

/* ------------------------------------------------------------------------- */
/* Work                                                                      */
/* ------------------------------------------------------------------------- */

export type Project = {
  name: string;
  category: string;
  summary: string;
  detail: string;
  highlights: string[];
  href?: string;
  linkLabel?: string;
  /** Link text — defaults to "Visit site". */
  linkText?: string;
};

export const projects: Project[] = [
  {
    name: "Smart Kindergarten (SmartKGMS)",
    category: "SaaS Product · Education",
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
    name: "SmartLaundry",
    category: "SaaS Product · Operations",
    summary:
      "A laundry management system for tracking orders, customers and the day's work.",
    detail:
      "SmartLaundry replaces paper tickets with one clear view of the day's work. It covers the full order lifecycle — intake, customer records, item tracking, status and collection — so owners always know what's in, what's ready and what's owed. Access is by invitation, with secure Google sign-in.",
    highlights: [
      "Order intake & lifecycle tracking",
      "Customer records",
      "Item & status tracking",
      "Collection & daily operations view",
      "Invitation-only Google sign-in",
    ],
    href: "https://smartlaundry-seven.vercel.app/app",
    linkLabel: "smartlaundry-seven.vercel.app",
    linkText: "Open the app",
  },
];

/* ------------------------------------------------------------------------- */
/* Industries, values, team                                                  */
/* ------------------------------------------------------------------------- */

export const industries = [
  {
    name: "Healthcare & clinics",
    description:
      "AI receptionists, patient booking, reminders and records for clinics, dental and specialist practices.",
  },
  {
    name: "Education",
    description:
      "School management, admissions, fees and parent communication — from kindergarten to college.",
  },
  {
    name: "Retail & e-commerce",
    description:
      "Online shops, M-Pesa checkout, stock control and WhatsApp ordering.",
  },
  {
    name: "Hospitality & restaurants",
    description:
      "Bookings, ordering, guest messaging and review requests for hotels, restaurants and tour operators.",
  },
  {
    name: "Financial services & SACCOs",
    description:
      "Member portals, loan workflows, secure integrations and reporting for institutions handling money.",
  },
  {
    name: "Logistics & transport",
    description:
      "Dispatch, fleet and delivery tracking, and the integrations that connect operations end to end.",
  },
  {
    name: "Real estate & property",
    description:
      "Tenant portals, rent collection, maintenance requests and lead follow-up for agents and managers.",
  },
  {
    name: "Local service businesses",
    description:
      "Order tracking, bookings and customer follow-up for laundries, salons, repair shops and more.",
  },
  {
    name: "Professional services",
    description:
      "AI assistants, client portals and document automation for law firms, accountants and consultancies.",
  },
  {
    name: "NGOs & development partners",
    description:
      "Programme monitoring, beneficiary data, field reporting and donor-ready dashboards.",
  },
  {
    name: "Government & public sector",
    description:
      "Registries, licensing, records and public-facing digital services built to institutional standards.",
  },
  {
    name: "Startups & SMEs",
    description:
      "MVPs, brand identity and the technical foundations to launch and grow.",
  },
] as const;

export const values = [
  {
    name: "Integrity",
    description:
      "We say what a project will take, and we tell clients when they don't need what they asked for.",
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
      "Customer, health and financial data carries obligations. We treat it that way from day one.",
  },
  {
    name: "Local roots, global standards",
    description:
      "Built in East Africa, held to the same engineering bar as anywhere else in the world.",
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
      "Our own products are live and in daily use — SmartKGMS runs schools, and SmartLaundry runs laundry operations.",
  },
  {
    title: "One partner, full stack",
    description:
      "AI, software, web, training, strategy and design under one roof. No juggling three vendors who blame each other.",
  },
  {
    title: "Built for East African realities",
    description:
      "M-Pesa, WhatsApp-first customers, patchy connectivity, mixed devices and several languages — designed in, not patched on.",
  },
  {
    title: "Local presence, global standards",
    description:
      "A team you can meet in Nairobi, working to the engineering, security and data-protection practices you'd expect anywhere.",
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
    role: "Software & AI",
    bio: "Placeholder bio — replace with experience across platform architecture, AI delivery and team leadership.",
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
    label: "Products live in production",
  },
  {
    value: services.length,
    suffix: "",
    label: "Service lines under one roof",
  },
  {
    value: industries.length,
    suffix: "",
    label: "Sectors we build for",
  },
  {
    value: 24,
    suffix: "/7",
    label: "AI that answers your customers",
  },
] as const;

export const serviceOptions = [
  ...services.map((service) => service.title),
  "Something else",
] as const;
