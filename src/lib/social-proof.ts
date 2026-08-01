export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

/** The lead testimonial — rendered large on the indigo card, with a rating. */
export const FEATURED_TESTIMONIAL: Testimonial = {
  quote:
    "Arcane gave our team the structure we were missing. Tasks, discussions, and deadlines finally live in one place, and our product team moves faster because of it.",
  name: "Daniel Hart",
  role: "Head of Product, NovaLabs",
  avatar: "/avatars/daniel-hart.png",
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We replaced three different tools with Arcane. Our team finally has visibility into every project without the chaos.",
    name: "Maya Chen",
    role: "Operations Lead, CloudForge",
    avatar: "/avatars/maya-chen.png",
  },
  {
    quote:
      "Clean interface, powerful workflows, and zero learning curve. Arcane became part of our daily workflow almost instantly.",
    name: "Leo Martinez",
    role: "Startup Founder, Sprintbase",
    avatar: "/avatars/leo-martinez.png",
  },
];

export const STATS = [
  { value: "120K+", label: "Projects Managed" },
  { value: "5M+", label: "Tasks Completed" },
  { value: "10,000+", label: "Teams Using Arcane" },
];

/** Widths and heights are the exact Figma frame sizes for each logo. */
export const COMPANY_LOGOS = [
  { name: "Trello", src: "/logos/trello.svg", width: 100, height: 20 },
  { name: "Dropbox", src: "/logos/dropbox.svg", width: 100, height: 20 },
  { name: "Notion", src: "/logos/notion.svg", width: 77.916, height: 27.011 },
  { name: "Zoom", src: "/logos/zoom.svg", width: 100, height: 22.667 },
  { name: "Framer", src: null, width: 100, height: 22.667 },
  { name: "Figma", src: "/logos/figma.svg", width: 100, height: 37 },
];
