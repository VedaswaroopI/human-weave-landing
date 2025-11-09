# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/3623d2d0-8b49-4661-930d-575cca1f4c49

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/3623d2d0-8b49-4661-930d-575cca1f4c49) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/3623d2d0-8b49-4661-930d-575cca1f4c49) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Troubleshooting Preview Issues

If you encounter persistent errors in the Lovable preview (but the site works in incognito/production):

**Quick Fix:**
1. In development mode, the error screen shows a "Reset App Storage" button
2. Click it to clear all localStorage, sessionStorage, and IndexedDB
3. The page will reload with a clean state

**Toggle Component Tagger:**
If the issue persists, you can disable the dev-only component tagger:
1. Edit `.env.development`
2. Set `VITE_DISABLE_TAGGER=true`
3. Restart the dev server

**Root Causes:**
- Corrupted localStorage/sessionStorage data
- Stale Vite module cache
- Dev-only plugin conflicts

The preview environment uses additional dev tools that aren't present in production, so preview-only errors are typically not a risk to end users.
