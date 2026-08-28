/*
 * The site's projects. These used to be fetched from api.cadegray.dev, but the
 * list is short and does not change much, so it lives here now. `lead` is what
 * a card shows collapsed and `detail` is what the toggle reveals, so WorkRow
 * does not have to guess where to split one blob of prose.
 */
export const PROJECTS = [
  {
    id: "platefind",
    name: "PlateFind",
    tech: "React 19 · Vite · Tailwind v4 · Go API",
    site: "https://platefind.app",
    repo: "https://github.com/cade-gray/platefind",
    image: "platefind",
    lead: "A browser based license plate game for road trips. The idea is to spot a plate from every state before the trip is over, and PlateFind keeps score for you. It covers all fifty states plus D.C., shows what is printed on each plate, and tracks how far along you are. I built it because the versions I found online and in the app stores were not great.",
    detail:
      "The main thing I wanted was for it to keep working on a bad signal, which is pretty common on a road trip. The plate list is cached in localStorage and rendered right away on load, before any network request happens. A background refresh updates it once the API answers, and if that refresh fails the app keeps showing what it already had. A service worker caches the app shell and the fonts so it will open with no signal at all, and the header tells you which of six connection states you are in. The Nearby feature checks your location against rough state outlines to work out what state you are in, then lists that state and the ones it borders. All of that runs on the device, so it works offline too. Progress is saved under the same key the first version used, so nobody loses a trip.",
  },
  {
    id: "jokedle",
    name: "Jokedle",
    tech: "React · TypeScript",
    site: "https://jokedle.com",
    repo: "https://github.com/cade-gray/jokedle-web",
    image: "jokedle",
    lead: "A daily riddle game where you guess the punchline to a joke. You get one random joke a day. You start by picking five random letters, with a limit of two vowels, then guess a letter each turn. You can also go for the whole punchline if you think you have it.",
    detail:
      "A wrong letter costs you a life, and so does a wrong guess at the punchline. Lose them all and the game is over. Reveal every letter and you win. Most of the work went into handling state: there is a loading state, a how to play state, and the in game state that has stages of its own, and all of it drives what gets rendered and the feedback the player sees. I gave each state its own component so the flow stays easy to follow as I add to the game.",
  },
  {
    id: "go-api-template",
    name: "Go API Template",
    tech: "Go · Gin · GORM · PostgreSQL · Docker",
    repo: "https://github.com/cade-gray/docker-go-demo",
    image: "pipeline",
    lead: "A Dockerized Go API you can clone and have running on a VPS the same day. It uses Gin for routing, GORM with PostgreSQL, environment based config for dev and prod, and a GitHub Actions pipeline that builds the image, pushes it to the GitHub Container Registry, and deploys it to the server over SSH.",
    detail:
      "I built it so I would stop wiring up the same plumbing every time I start a new API. It is also doing real work, since it is the service behind the plate data in PlateFind and the daily joke in Jokedle. Push to main and the workflow handles the rest: build, tag, push to ghcr.io, then pull and restart on the VPS with docker compose.",
  },
];
