export type Capability = {
  title: string;
  body: string;
  icon: string;
};

export const CAPABILITIES: Capability[] = [
  {
    title: "Task Management",
    body: "Create tasks, assign team members, set priorities, and track progress effortlessly.",
    icon: "/icons/icon-task-management.svg",
  },
  {
    title: "Kanban Boards",
    body: "Organize work visually using drag-and-drop boards designed for clarity.",
    icon: "/icons/icon-kanban-boards.svg",
  },
  {
    title: "Timeline Planning",
    body: "Plan project milestones and dependencies with powerful timeline tools.",
    icon: "/icons/icon-timeline-planning.svg",
  },
  {
    title: "Team Collaboration",
    body: "Discuss work directly inside tasks to keep conversations organized.",
    icon: "/icons/icon-team-collaboration.svg",
  },
  {
    title: "Workflow Automation",
    body: "Track team productivity and project performance with powerful insights.",
    icon: "/icons/icon-workflow-automation.svg",
  },
  {
    title: "Project Analytics",
    body: "Track team productivity and project performance with powerful insights.",
    icon: "/icons/icon-project-analytics.svg",
  },
];
