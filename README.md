# Daksh Verma — Portfolio

A single-page personal portfolio for Daksh Verma, a first-year B.Tech CSE student at GGSIPU specialising in Cybersecurity. The site presents his background, certifications, learning focus, and ways to collaborate in a dark, glassmorphism card-based layout.

**Live site**: https://dakshverma.lovable.app

## Tech Stack

- **Framework** — React 19 with TanStack Start (file-based routing, SSR)
- **Build tool** — Vite
- **Styling** — Tailwind CSS v4 with custom semantic design tokens
- **Components** — shadcn/ui primitives on Radix UI
- **Icons** — lucide-react
- **Testing** — Vitest with React Testing Library
- **Quality** — ESLint and Prettier

## Key Features

- **Pull-cord lamp entrance** — the landing screen shows a pendant lamp; pulling its cord lights the room and reveals the portfolio.
- **Interactive hero lamp** — the lamp in the hero toggles on and off, with a soft light cone and glow.
- **Responsive by design** — card grids reflow for tablet and phone widths; in portrait view the hero lamp hangs centred from the top.
- **Credential cards** — all six certifications (IBM Cybersecurity, Cisco Data Science, and four Google Cloud badges) open their verification pages in a new tab.
- **Direct contact actions** — "Let's talk" opens Instagram, "Let's build something" and the envelope icon start an email, and GitHub/LinkedIn buttons link out.
- **Animated greeting robot** — "Say hello" summons a small SVG robot that waves and greets with an animated "Hello World".
- **Accessible motion** — reduced-motion preferences disable the robot and other animations; the entrance screen is hidden from assistive tech until entered.

## Project Structure

```text
src/
  assets/            generated artwork
  components/        portfolio lamp, greeting robot, UI primitives
  hooks/             small utilities (mobile breakpoint)
  routes/            index page, root layout, API routes
  styles.css         design tokens and portfolio styles
```

## Development

Requires Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

Then open http://localhost:8080.

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build |
| `npm run test` | Run the test suite |
| `npm run lint` | Check code with ESLint |
| `npm run format` | Format files with Prettier |

## Built with Lovable

This project is developed in the [Lovable editor](https://lovable.dev/projects/a35ed754-adee-4098-8a61-95db196e6d36). Changes made there are committed to this repository, and pushes to `main` sync back into Lovable.

## Contact

- Email — contact.vermadaksh@gmail.com
- GitHub — https://github.com/vermadevx
- LinkedIn — https://www.linkedin.com/in/daksh-verma-978a99405
- Instagram — https://www.instagram.com/vermadevx
