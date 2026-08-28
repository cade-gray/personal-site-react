export const STACK_FILTERS = [
  { id: "all", label: "All" },
  { id: "lang", label: "Languages" },
  { id: "front", label: "Frontend" },
  { id: "back", label: "Backend & Data" },
  { id: "ops", label: "Ops" },
];

export const STACK = [
  { name: "TypeScript", group: "lang" },
  { name: "JavaScript", group: "lang" },
  { name: "Go", group: "lang" },
  { name: "SQL", group: "lang" },
  { name: "Java", group: "lang" },
  { name: "PowerShell", group: "lang" },
  { name: "Bash", group: "lang" },
  { name: "React", group: "front" },
  { name: "Svelte / SvelteKit", group: "front" },
  { name: "Node.js", group: "back" },
  { name: "Express", group: "back" },
  { name: "RESTful API design", group: "back" },
  { name: "Oracle", group: "back" },
  { name: "SQL Server / SSIS", group: "back" },
  { name: "MySQL", group: "back" },
  { name: "ODBC", group: "back" },
  { name: "Docker", group: "ops" },
  { name: "PM2", group: "ops" },
  { name: "Linux & Windows deploys", group: "ops" },
  { name: "DigitalOcean", group: "ops" },
];

export const BEYOND_CODE = [
  "Business Analysis",
  "Project Management",
  "Process Improvement",
  "Team Leadership",
  "Training",
  "Public Speaking",
  "Customer Service",
];

export const CAPABILITIES = [
  {
    num: "01",
    title: "Financial systems",
    body: "I support the core applications a credit union runs on (Fiserv, MeridianLink, Jack Henry) and build the integrations that move data between them.",
  },
  {
    num: "02",
    title: "Internal tooling",
    body: "Admin sites, dashboards, and automation that take manual work off people's desks and give teams the data they need to make decisions.",
  },
  {
    num: "03",
    title: "Full-stack web",
    body: "Web apps and RESTful APIs, plus the containers and servers they run on. I handle the deployment and the upkeep, on both Linux and Windows.",
  },
];
