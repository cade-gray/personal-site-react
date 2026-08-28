/*
 * The site's projects. Previously fetched from api.cadegray.dev; hardcoded now
 * that the list is short and stable. `lead` is what a card shows collapsed and
 * `detail` is revealed by the toggle, so WorkRow no longer has to guess where to
 * split a single blob of prose.
 */
export const PROJECTS = [
  {
    id: "platefind",
    name: "PlateFind",
    tech: "React 19 · Vite · Tailwind v4 · Go API",
    site: "https://platefind.app",
    repo: "https://github.com/cade-gray/platefind",
    image: "platefind",
    lead:
      "A browser based license plate road trip game that works better than the ones you find on Google or in the app stores. On a road trip the game is to spot a plate from every US state before the trip ends, and PlateFind is the scorecard: all fifty states plus D.C., what is printed on each plate, and how far you have got.",
    detail:
      "The part I care about most is that it keeps working when the signal does not, which is exactly when you are on a road trip. The plate list is cached in localStorage and rendered immediately on load, before and without any network; a background refresh replaces it when the API answers, and a failed refresh never clears what is already there. A service worker caches the app shell and the webfonts so the app can be opened with no signal at all, and the header tells you which of six connection states you are in. Nearby watches the device's location and works out which state you are in by point-in-polygon against coarse state outlines, then lists that state and everything it borders, all on-device, so it keeps working out of signal too. Progress is stored under the same key the first version of the app used, so nobody loses a trip.",
  },
  {
    id: "jokedle",
    name: "Jokedle",
    tech: "React · TypeScript",
    site: "https://jokedle.com",
    repo: "https://github.com/cade-gray/jokedle-web",
    image: "jokedle",
    lead:
      "A riddle game played daily where you guess the punchline to a joke. One random joke a day: you start by picking five random letters, limited to two vowels, then guess a letter each turn, or swing for the whole punchline if you think you have it.",
    detail:
      "A wrong letter costs a life, and so does a wrong guess at the full punchline; lose them all and the game is over, reveal every letter and you win. The interesting part is the state: loading, how-to, and an in-game state with stages of its own, all driving conditional rendering and a live feedback system that tells you where you stand. I gave each state its own component so the flow stays readable as the game grows.",
  },
  {
    id: "go-api-template",
    name: "Go API Template",
    tech: "Go · Gin · GORM · PostgreSQL · Docker",
    repo: "https://github.com/cade-gray/docker-go-demo",
    image: "pipeline",
    lead:
      "A Dockerized Go API you can clone and have running on a VPS in an afternoon. Gin for routing, GORM over PostgreSQL, environment-based configuration for dev and prod, and a GitHub Actions pipeline that builds the image, pushes it to the GitHub Container Registry, and deploys it to the box over SSH.",
    detail:
      "I built it as the foundation I reach for whenever I want a new API, rather than wiring the same plumbing together every time. It is also doing real work: it is the service behind the plate data in PlateFind and the daily joke in Jokedle, so the template gets tested by the things that depend on it. Push to main and the workflow takes it from there: build, tag, push to ghcr.io, pull and restart on the VPS with docker compose.",
  },
];
