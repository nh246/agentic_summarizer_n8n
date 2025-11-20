# Welcome to Article Summarizer project

## Project info

**URL**: https://lovable.dev/projects/7f417ea5-bebc-4320-bb16-c4a519825299

# Agentic Summarizer (n8n + React)

A lightweight frontend built with Vite + React + TypeScript that works together with n8n workflows to provide fast, agentic article summarization.

Quick links

- **Google Sheet (data / project notes)**: https://docs.google.com/spreadsheets/d/1ujD5yj_fRcLNMXAxn9bMQb0My5mYB6Kqfk3syonrrbg/edit?usp=sharing
- **Backend (API)**: https://agentic-summarizer-n8n.onrender.com/
- **Frontend (live demo)**: https://summarize-it-fast.lovable.app/
- **Demo video**: https://drive.google.com/file/d/18asUjky2iduyLISVIyTOSSAeNpS26ujb/view?usp=sharing
- **n8n workflows folder (GitHub)**: https://github.com/nh246/agentic_summarizer_n8n/tree/main/n8n_file

Project structure (important files)

- `package.json` - dependencies and scripts
- `vite.config.ts` - Vite config
- `src/` - React app source
	- `src/pages/` - top-level pages (`Index.tsx`, `NotFound.tsx`)
	- `src/components/ui/` - UI building blocks (shadcn-style)
	- `src/hooks/` - custom hooks
	- `src/lib/utils.ts` - utility helpers
- `public/` - static assets

Tech stack

- Vite
- React + TypeScript
- Tailwind CSS
- shadcn/ui components
- n8n (for backend/workflows)

Quick start (local development)

1. Clone this repository:

```
git clone <YOUR_GIT_URL>
cd agentic_summarizer_n8n
```

2. Install dependencies:

```
npm install
```

3. Run the dev server:

```
npm run dev
```

4. Open the app in your browser (typically `http://localhost:5173`).

Notes about the n8n workflows

- The project integrates with n8n for automation and backend logic. Look for an `n8n/` folder in the repository (or view it on GitHub):

	- Local folder path: `./n8n/`
	- GitHub folder: https://github.com/nh246/agentic_summarizer_n8n/tree/main/n8n

- If you want to run the workflows locally with n8n, import the JSON files from the `n8n/` folder into an n8n instance (desktop or Docker). See n8n docs for import instructions: https://docs.n8n.io/getting-started/installation/

Environment / deployment

- The frontend is a static app and can be deployed to any static hosting (Vercel, Netlify, Render, Lovable, etc.). A running demo is available at the frontend link above.
- The backend/API used by the app is available at the URL above. If you run your own backend, set the `BACKEND_URL` environment variable or update the frontend config where applicable.

Contributing

- Create a feature branch and open a pull request against `main`.
- Please include a brief description and screenshots (if UI changes).

Contact / resources

- Demo video: https://drive.google.com/file/d/18asUjky2iduyLISVIyTOSSAeNpS26ujb/view?usp=sharing
- Google Sheet (project notes): https://docs.google.com/spreadsheets/d/1ujD5yj_fRcLNMXAxn9bMQb0My5mYB6Kqfk3syonrrbg/edit?usp=sharing


