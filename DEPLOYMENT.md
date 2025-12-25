# 🚀 Kingdom Commerce - Deployment Guide

## Day 7: Netlify Launch

This guide will walk you through deploying Kingdom Commerce to Netlify.

## Prerequisites

✅ Git repository initialized  
✅ All code committed  
✅ Netlify account (free tier works perfectly)

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name it: `kingdom-commerce` (or your preferred name)
4. **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

## Step 2: Push Code to GitHub

Run these commands in your terminal (refresh PATH first if needed):

```powershell
# Refresh PATH (if needed)
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

# Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/kingdom-commerce.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Note:** You may be prompted for GitHub credentials. Use a Personal Access Token if 2FA is enabled.

## Step 3: Deploy to Netlify

### Option A: Deploy via Netlify UI (Recommended)

1. Go to [Netlify.com](https://www.netlify.com) and sign in
2. Click "Add new site" → "Import an existing project"
3. Choose "Deploy with GitHub"
4. Authorize Netlify to access your GitHub account
5. Select your `kingdom-commerce` repository
6. Netlify will auto-detect Next.js settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Node version:** 18
7. Click "Deploy site"
8. Wait 2-3 minutes for the build to complete
9. Your site will be live at: `https://random-name-123456.netlify.app`

### Option B: Deploy via Netlify CLI

```powershell
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
netlify init
netlify deploy --prod
```

## Step 4: Customize Your Domain

1. In Netlify dashboard, go to "Site settings" → "Domain management"
2. Click "Add custom domain" or "Options" → "Edit site name"
3. Change to: `kingdom-commerce` (or your preferred name)
4. Your site will be available at: `https://kingdom-commerce.netlify.app`

## Step 5: Environment Variables (If Needed Later)

If you add environment variables in the future:
1. Go to "Site settings" → "Environment variables"
2. Add variables like `NEXT_PUBLIC_API_URL`, etc.
3. Redeploy the site

## Build Settings Summary

- **Framework:** Next.js
- **Build command:** `npm run build`
- **Publish directory:** `.next`
- **Node version:** 18
- **Plugin:** @netlify/plugin-nextjs (auto-installed)

## Troubleshooting

### Build Fails
- Check build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Verify Node version is 18+

### Site Not Loading
- Wait a few minutes after deployment
- Check "Deploys" tab for build status
- Clear browser cache

### Git Push Issues
- Use Personal Access Token instead of password
- Ensure repository exists on GitHub first

## Success! 🎉

Your Kingdom Commerce marketplace is now live! Share the URL with:
- Investors
- Potential vendors
- Beta testers
- Your team

**Next Steps:**
- Add custom domain (optional)
- Set up analytics
- Configure environment variables
- Continue building features (Phase 2: Supabase backend)

---

**Live URL:** `https://your-site-name.netlify.app`

