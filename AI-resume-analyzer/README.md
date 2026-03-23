# AI Resume Analyzer (Resumind)

AI-powered resume analysis with ATS scoring, improvement tips, and visual previews.

Live app: https://puter.com/app/ai-powered-resume-analyzer-3

Tutorial reference: https://www.youtube.com/watch?v=iYOz165wGkQ&t=4525s

## Tech Stack

- React 19 + React Router 7
- Vite 7 + TypeScript
- Tailwind CSS v4 + tw-animate-css
- Zustand (state management)
- Puter SDK (auth, storage, AI, KV)
- PDF.js (pdfjs-dist) for PDF to image conversion
- React Dropzone for uploads

## Features

- Upload a resume (PDF) and generate ATS-style feedback
- Convert the first PDF page to a preview image
- Store resumes and results in Puter KV and filesystem
- View submission history and detailed analysis

## Prerequisites

- Node.js 18+ (recommended)
- npm (or pnpm/yarn)
- A Puter account (for auth, storage, and AI features)

## Installation (Step by Step)

1. Clone the repo
   ```bash
   git clone <your-repo-url>
   cd ai-resume-analyzer
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open the app
   - Go to http://localhost:5173
   - Sign in with your Puter account on the Auth screen

## Usage

1. Sign in with Puter
2. Go to Upload Resume
3. Provide company name, job title, and job description
4. Upload a PDF resume
5. Wait for analysis, then review the score and feedback

## Scripts

- npm run dev - start the dev server
- npm run build - build for production
- npm run start - serve the production build
- npm run typecheck - type generation + TypeScript checks

## Production Build

```bash
npm run build
npm run start
```

## Deployment

This app is already deployed on Puter:
https://puter.com/app/ai-powered-resume-analyzer-3

For other platforms, deploy the output from npm run build and run npm run start on a Node server.

## Project Structure

```
app/
  components/   # UI components
  routes/       # App routes (auth, home, upload, resume, wipe)
  lib/          # Puter store, utils, PDF conversion
constants/      # AI prompt format, sample data
public/         # static assets
```

## Notes on Puter Integration

- The Puter SDK is injected in app/root.tsx via https://js.puter.com/v2/
- Auth, file storage, and AI feedback use Puter APIs
- Resume data is saved under KV keys like resume:<id>

## Troubleshooting

- If auth does not work, make sure the Puter script loads and you are signed in.
- If PDF preview fails, confirm the file is a valid PDF and under 20 MB.
- If analysis fails, re-try after upload or sign out and sign in again.

## License

MIT (or your preferred license)
