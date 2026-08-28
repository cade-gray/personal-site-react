export const STACK_FILTERS = [
  { id: "all", label: "All" },
  { id: "lang", label: "Languages" },
  { id: "front", label: "Frontend" },
  { id: "back", label: "Backend & Data" },
  { id: "ops", label: "Ops" },
];

export const STACK = [
  { name: "TypeScript/Javascript", group: "lang" },
  { name: "Go", group: "lang" },
  { name: "SQL (PLSQL, TSQL, and PGSQL)", group: "lang" },
  { name: "Java", group: "lang" },
  { name: "PowerShell", group: "lang" },
  { name: "Bash", group: "lang" },
  { name: "React", group: "front" },
  { name: "Svelte / SvelteKit", group: "front" },
  { name: "Node.js", group: "back" },
  { name: "Express", group: "back" },
  { name: "MuleSoft", group: "back" },
  { name: "Oracle", group: "back" },
  { name: "SQL Server / SSIS", group: "back" },
  { name: "MySQL", group: "back" },
  { name: "Postgres", group: "back" },
  { name: "Docker", group: "ops" },
  { name: "PM2", group: "ops" },
  { name: "DigitalOcean", group: "ops" },
  { name: "Automic/Appworx for Batch Processing", group: "ops" },
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
    body: "I support the core applications a credit union runs on (Fiserv DNA and CCM, MeridianLink, Visa) and build the integrations that move data between them.",
  },
  {
    num: "02",
    title: "Internal tooling",
    body: "Admin platforms, dashboards and automation that take manual work off people's desks and let a team make decisions from data instead of spreadsheets.",
  },
  {
    num: "03",
    title: "Full-stack web",
    body: "Apps, RESTful APIs and the containers and Linux boxes they run on. Deployed, monitored and maintained by me, on both Linux and Windows.",
  },
];
