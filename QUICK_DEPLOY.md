# 🚀 Quick Deploy Guide

## Step 1: Create GitHub Repository ✅

1. Go to [github.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository name: `kingdom-commerce`
4. **DO NOT** check "Add a README file" (we already have one)
5. Click **"Create repository"**

## Step 2: Push Code to GitHub

### Option A: Use the PowerShell Script (Easiest)

1. Open `push-to-github.ps1` in a text editor
2. Replace `YOUR_USERNAME` with your actual GitHub username (line 4)
3. Save the file
4. Run in PowerShell:
   ```powershell
   .\push-to-github.ps1
   ```

### Option B: Manual Commands

Run these commands (replace `YOUR_USERNAME` with your GitHub username):

```powershell
# Refresh PATH
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

# Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/kingdom-commerce.git

# Push to GitHub
git push -u origin main
```

**Note:** You'll be prompted for credentials. If you have 2FA enabled, use a [Personal Access Token](https://github.com/settings/tokens) instead of your password.

## Step 3: Deploy to Netlify

1. Go to [netlify.com](https://www.netlify.com) and sign in
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **"Deploy with GitHub"**
4. Authorize Netlify to access your GitHub account
5. Select your `kingdom-commerce` repository
6. Netlify will auto-detect Next.js settings (no changes needed)
7. Click **"Deploy site"**
8. Wait 2-3 minutes for the build to complete
9. **🎉 Your site is live!**

## Your Live URL

After deployment, your site will be available at:
- `https://random-name-123456.netlify.app` (auto-generated)
- Or customize it to: `https://kingdom-commerce.netlify.app`

## Troubleshooting

### Git Push Fails
- Ensure the GitHub repository exists first
- Use Personal Access Token if 2FA is enabled
- Check that you have push access to the repository

### Netlify Build Fails
- Check build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Verify Node version is 18+

### Need Help?
Check the detailed guide in [DEPLOYMENT.md](./DEPLOYMENT.md)

