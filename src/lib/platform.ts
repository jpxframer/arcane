export type PlatformCard = {
  title: string;
  body: string;
  image: { src: string; alt: string; width: number; height: number };
  /** Desktop only: puts the screenshot above the copy, for the checkerboard. */
  imageFirst?: boolean;
};

export const PLATFORM_CARDS: PlatformCard[] = [
  {
    title: "Real-time project tracking",
    body: "Monitor progress across tasks, projects, and teams with powerful visual dashboards.",
    image: {
      src: "/images/built-tracking.png",
      alt: "An Arcane tasks panel marked Live, with completion bars for Landing Page, API Setup, and User Testing.",
      width: 1024,
      height: 698,
    },
  },
  {
    title: "Smart workflow automation",
    body: "Monitor progress across tasks, projects, and teams with powerful visual dashboards.",
    image: {
      src: "/images/built-automation.png",
      alt: "An Arcane board where a teammate's uploaded wireframes sit beside an Ideas column of queued tasks.",
      width: 1024,
      height: 699,
    },
    imageFirst: true,
  },
  {
    title: "Flexible project views",
    body: "Switch between Kanban boards, lists, and timeline views to match your workflow.",
    image: {
      src: "/images/built-views.png",
      alt: "An Arcane project view listing Design, Landing page design, and Wireframes beside detailed task cards.",
      width: 1024,
      height: 685,
    },
    imageFirst: true,
  },
  {
    title: "Advanced productivity insights",
    body: "Analyze team performance and project health with detailed reports and analytics.",
    image: {
      src: "/images/built-insights.png",
      alt: "An Arcane analytics panel showing team performance, tasks completed, and average completion time.",
      width: 1024,
      height: 701,
    },
  },
];
