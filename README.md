# cadegray.dev

Personal site. React 16 + react-router, built with create-react-app, served
from nginx in a container.

```bash
npm install
npm start        # dev server on :3000
npm run build    # production build into build/
```

## How it hangs together

- **Design tokens** live in `src/styles/tokens.css`. Colours, radii, fonts and
  motion are all custom properties; changing `--accent` recolours the site,
  including the header/footer tint, which is mixed from it.
- **The wave background** (`src/components/WaveField`) is one continuous SVG
  layer, not a repeating background-image. A tiled pattern rasterises each tile
  separately, so strokes crossing a tile edge get antialiased twice and never
  meet. One row path is defined once, repeated vertically with `<use>`, and the
  group drifts by exactly one period so the loop point is invisible. It is
  fixed to the viewport, so it stays viewport-sized however long the page grows.
- **Reveals** (`src/components/Reveal`) fade-and-rise on scroll via
  IntersectionObserver. All motion is cut by `prefers-reduced-motion`.
- **Projects** are a hardcoded list in `src/data/projects.js`. `lead` is what a
  card shows collapsed, `detail` is behind the toggle. Screenshots are keyed by
  a project's `image` field through `src/images/shots.js`; a project with no
  matching key renders without one.
- **The favicon** is generated from the site's own wave maths with a CG
  monogram taken from the Dimitri Swank outlines in `src/DIMIS___.TTF`.

## Deployment

Push-button, matching the setup on `platefind` and `docker-go-demo`: merging a
PR to `master` builds a Docker image, pushes it to GHCR, and restarts the
container on the VPS over SSH. `.github/workflows/deploy.yml` also accepts a
manual `workflow_dispatch` run.

`.github/workflows/ci.yml` runs on every PR and push to `master`: `npm ci`, a
production build, and a Docker build to catch a broken image before deploy.

### One-time setup on the VPS

```bash
mkdir -p /srv/personal-site
cd /srv/personal-site
# copy this repo's docker-compose.yml here
docker compose pull && docker compose up -d
```

The container listens on **:3006** on the host (platefind is on 3005). Point
the reverse proxy for the domain at that port.

### Repository secrets

| Secret | What it is |
| --- | --- |
| `GH_TOKEN` | PAT with `write:packages`, for pushing to ghcr.io |
| `VPS_HOST` | VPS hostname or IP |
| `VPS_USER` | SSH user |
| `VPS_SSH_KEY` | Private key for that user |
| `VPS_PORT` | SSH port, optional, defaults to 22 |

The image is published as `ghcr.io/cade-gray/personal-site-react`. Note the
repo's canonical name is `personal-site-react`; `personal-site-v2` is an
old-name redirect.

### Running the container locally

```bash
docker build -t personal-site .
docker run --rm -p 3099:80 personal-site
```
