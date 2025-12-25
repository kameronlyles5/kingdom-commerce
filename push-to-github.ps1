# Kingdom Commerce - Push to GitHub Script
# Replace YOUR_USERNAME with your actual GitHub username

$GITHUB_USERNAME = "YOUR_USERNAME"  # <-- CHANGE THIS

Write-Host "🚀 Pushing Kingdom Commerce to GitHub..." -ForegroundColor Cyan

# Refresh PATH
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

# Check if remote already exists
$remoteExists = git remote get-url origin 2>$null
if ($remoteExists) {
    Write-Host "⚠️  Remote 'origin' already exists. Removing it..." -ForegroundColor Yellow
    git remote remove origin
}

# Add GitHub remote
Write-Host "📦 Adding GitHub remote..." -ForegroundColor Cyan
git remote add origin "https://github.com/$GITHUB_USERNAME/kingdom-commerce.git"

# Verify remote
Write-Host "✅ Remote added. Verifying..." -ForegroundColor Green
git remote -v

# Push to GitHub
Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Cyan
Write-Host "You may be prompted for GitHub credentials." -ForegroundColor Yellow
Write-Host "If you have 2FA enabled, use a Personal Access Token instead of your password." -ForegroundColor Yellow
Write-Host ""

git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host "🌐 Your repository: https://github.com/$GITHUB_USERNAME/kingdom-commerce" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Next step: Deploy to Netlify (Step 3)" -ForegroundColor Yellow
} else {
    Write-Host ""
    Write-Host "❌ Push failed. Please check:" -ForegroundColor Red
    Write-Host "   1. GitHub repository exists at: https://github.com/$GITHUB_USERNAME/kingdom-commerce" -ForegroundColor Yellow
    Write-Host "   2. You have access to push to the repository" -ForegroundColor Yellow
    Write-Host "   3. Your GitHub credentials are correct" -ForegroundColor Yellow
}

