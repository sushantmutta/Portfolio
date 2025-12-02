---
description: How to deploy the portfolio to Vercel
---

# Deploying to Vercel

The easiest way to deploy your Next.js application is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## Prerequisites
- A GitHub account
- A Vercel account (you can sign up with GitHub)
- Your project pushed to a GitHub repository

## Steps

1.  **Push to GitHub**
    - Initialize git if you haven't: `git init`
    - Add files: `git add .`
    - Commit: `git commit -m "Initial commit"`
    - Create a new repository on GitHub.
    - Link it: `git remote add origin <your-repo-url>`
    - Push: `git push -u origin main`

2.  **Deploy on Vercel**
    - Go to [Vercel Dashboard](https://vercel.com/dashboard).
    - Click **"Add New..."** -> **"Project"**.
    - Import your GitHub repository.
    - Vercel will automatically detect that it's a Next.js project.
    - Click **"Deploy"**.

## Post-Deployment
- Vercel will provide you with a live URL (e.g., `portfolio-name.vercel.app`).
- Any changes you push to the `main` branch on GitHub will automatically trigger a new deployment.
