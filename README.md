# Ethan Desilets — Portfolio

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Structure

```
src/
├── data/
│   └── projects.ts          # All project content — edit here
├── layouts/
│   └── Base.astro           # HTML shell, fonts, Tailwind config
├── components/
│   ├── Nav.astro            # Sticky nav bar
│   └── ProjectCard.astro    # Card used on homepage
└── pages/
    ├── index.astro          # Main single-page site
    └── projects/
        └── [slug].astro     # Dynamic project detail pages
```

## Adding a hero photo

In `src/pages/index.astro`, find the `<!-- Swap <img> in here once hero photo is ready -->` comment
and replace the `<span>` initials with:

```html
<img src="/hero.jpg" alt="Ethan Desilets" class="w-full h-full object-cover" />
```

Drop the photo at `public/hero.jpg`.

## Adding project detail content

Each project page at `/projects/[slug]` has a "Full case study coming soon" placeholder.
Open `src/pages/projects/[slug].astro` to add sections, images, and metrics when ready.

## Future scope (tracked, not in this build)

- Strava / Garmin live activity feed in hobbies section
- Hike locations map
- Project grouping / filtering on the projects index
- Full case study pages per project

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                           | Action                                           |
| :-------------------------------- | :----------------------------------------------- |
| `npm install`                     | Installs dependencies                            |
| `npm run dev`                     | Starts local dev server at `localhost:4321`      |
| `npm run build`                   | Build your production site to `./dist/`          |
| `npm run preview`                 | Preview your build locally, before deploying     |
| `npm run astro ...`               | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help`         | Get help using the Astro CLI                     |
| `npm run build && npm run deploy` | Deploy your production site to Cloudflare        |
| `npm wrangler tail`               | View real-time logs for all Workers              |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build)
