export type Feature = {
  title: string;
  body: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  /** Desktop only: puts the illustration on the left and the copy on the right. */
  reversed?: boolean;
};

export const FEATURES: Feature[] = [
  {
    title: "Plan projects with total visibility",
    body: "Create projects, organize tasks, assign responsibilities, and track deadlines with complete clarity. Arcane gives teams full visibility into their workflow so everyone knows what needs to happen next.",
    image: {
      src: "/images/feature-plan-projects.png",
      alt: "An Arcane project board branching from Planning through Design, Development, and Launch into columns of task cards.",
      width: 988,
      height: 804,
    },
  },
  {
    title: "Collaborate without the chaos",
    body: "Comment on tasks, share files, tag teammates, and track updates in real time. Arcane keeps conversations and work connected so your team stays aligned.",
    image: {
      src: "/images/feature-collaborate.png",
      alt: "An Arcane task card with a threaded comment, an assignment to a teammate, and an activity trail below it.",
      width: 1028,
      height: 620,
    },
    reversed: true,
  },
];
