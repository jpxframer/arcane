export type Plan = {
  name: string;
  tagline: string;
  /** Rendered large. "Free Plan" stands in for a figure on the Starter tier. */
  price: string;
  /** Omitted on Starter, which has no billing period. */
  period?: string;
  icon: string;
  features: string[];
};

export const PLANS: Plan[] = [
  {
    name: "Starter",
    tagline: "Perfect for small teams getting started.",
    price: "Free Plan",
    icon: "/icons/icon-plan-starter.svg",
    features: [
      "Up to 5 team members",
      "Basic task management",
      "Kanban boards",
      "Project templates",
    ],
  },
  {
    name: "Individual",
    tagline: "For growing teams that need more control.",
    price: "$12",
    period: "/Month",
    icon: "/icons/icon-plan-individual.svg",
    features: [
      "Unlimited projects",
      "Workflow automation",
      "Timeline planning",
      "Advanced collaboration tools",
    ],
  },
  {
    name: "Team",
    tagline: "For organizations with advanced needs.",
    price: "$48",
    period: "/Month",
    icon: "/icons/icon-plan-team.svg",
    features: [
      "Unlimited team members",
      "Advanced security controls",
      "Custom integrations",
      "Team onboarding assistance",
    ],
  },
];
