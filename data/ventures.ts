type Venture = {
  slug: string;
  name: string;
  category: string;
  status: string;
  stage: string;
  url: string;
  description: string;
  role: string;
  tagline: string;
  focus?: string[];
};

export const Ventures: Venture[] = [
  {
    slug: "example-venture",
    name: "Example Venture",
    category: "Technology",
    status: "Active",
    stage: "Seed",
    url: "https://example.com",
    description: "An example venture description",
    role: "Founder",
    tagline: "Revolutionizing the example industry",
    focus: ["AI", "SaaS"]
  },
  {
    slug: "another-venture",
    name: "Another Venture",
    category: "Fintech",
    status: "Active",
    stage: "Series A",
    url: "https://another.com",
    description: "Another venture description",
    role: "Investor",
    tagline: "Innovating financial solutions"
  }
];
