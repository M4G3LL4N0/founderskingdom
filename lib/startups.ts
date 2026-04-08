export type StartupStage = "idea" | "building" | "live" | "scaling";

export type Startup = {
  id: string;
  name: string;
  stage: StartupStage;
  score: number;
  momentum: number;
  category: string;
  description: string;
  createdAt: string;
};

export const mockStartups: readonly Startup[] = [
  {
    id: "fk",
    name: "FoundersKingdom",
    stage: "building",
    score: 92,
    momentum: 84,
    category: "Founder Software",
    description:
      "The startup operating system for founders building multiple ventures.",
    createdAt: "2026-03-01T00:00:00.000Z",
  },
  {
    id: "redwoud",
    name: "Redwoud",
    stage: "live",
    score: 86,
    momentum: 73,
    category: "Intelligence Platform",
    description:
      "A strategic intelligence layer that strengthens founder narrative and ecosystem visibility.",
    createdAt: "2026-03-02T00:00:00.000Z",
  },
  {
    id: "noaerth",
    name: "Noaerth",
    stage: "scaling",
    score: 79,
    momentum: 68,
    category: "Holding Company",
    description:
      "The parent layer that organizes ventures, proof, and portfolio direction.",
    createdAt: "2026-03-03T00:00:00.000Z",
  },
  {
    id: "studio",
    name: "Studio OS",
    stage: "idea",
    score: 71,
    momentum: 44,
    category: "Venture Studio Tools",
    description:
      "A future expansion path for multi-company teams and internal startup systems.",
    createdAt: "2026-03-04T00:00:00.000Z",
  },
  {
    id: "signal",
    name: "Signal Layer",
    stage: "idea",
    score: 67,
    momentum: 39,
    category: "Data Layer",
    description:
      "A future product direction for startup signals, scoring inputs, and venture intelligence.",
    createdAt: "2026-03-05T00:00:00.000Z",
  },
  {
    id: "launch",
    name: "Launch Infrastructure",
    stage: "building",
    score: 74,
    momentum: 52,
    category: "Automation Layer",
    description:
      "A future system for startup generation, workflows, and execution support.",
    createdAt: "2026-03-06T00:00:00.000Z",
  },
];
