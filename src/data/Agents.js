export const agents = [
  {
    id: "DU03-M01",
    name: "Developer Agent",
    status: "Active",
    users: 412,
    version: "v3.2",
    team: "McLaren",

    // 🔥 NEW DETAILS
    problem: "Helps developers write, debug, and optimize code faster.",
    howItWorks:
      "Uses AI models trained on large codebases to suggest fixes, generate code, and detect bugs.",
    developedBy: "McLaren AI Engineering Team",
    usage: "Used in internal dev tools and CI/CD pipelines",
    impact: "Reduces development time by 35%",
    metrics: {
      users: "412 active users",
      tasks: "18,000+ code suggestions generated",
      accuracy: "95.4%",
    },
  },

  {
    id: "DU03-M02",
    name: "Testing Agent",
    status: "Active",
    users: 289,
    version: "v1.9",
    team: "Challengers",

    problem: "Automates software testing and bug detection.",
    howItWorks:
      "Runs automated test cases and uses AI to detect edge-case failures.",
    developedBy: "QA Automation Team",
    usage: "Used in CI pipelines for regression testing",
    impact: "Reduces manual testing effort by 60%",
    metrics: {
      users: "289 active users",
      tasks: "9,500+ test cases executed",
      accuracy: "93.8%",
    },
  },

  {
    id: "DU03-M03",
    name: "Performance Agent",
    status: "Active",
    users: 580,
    version: "v2.1",
    team: "McLaren",

    problem: "Monitors system performance and detects bottlenecks.",
    howItWorks:
      "Continuously tracks system metrics like CPU, memory, and latency.",
    developedBy: "Infrastructure Team",
    usage: "Used in production monitoring dashboards",
    impact: "Improves system uptime by 25%",
    metrics: {
      users: "580 active users",
      tasks: "2M+ metrics analyzed daily",
      accuracy: "97.1%",
    },
  },

  {
    id: "DU03-M04",
    name: "PR Agent",
    status: "Under Development",
    users: 0,
    version: "v0.4",
    team: "Challengers",

    problem: "Automatically reviews pull requests and suggests improvements.",
    howItWorks:
      "Analyzes code diffs and applies static + AI-based review rules.",
    developedBy: "Dev Productivity Team",
    usage: "Planned for Git-based workflows",
    impact: "Expected to reduce review time by 50%",
    metrics: {
      users: "0 (not released)",
      tasks: "Prototype stage",
      accuracy: "N/A",
    },
  },
];