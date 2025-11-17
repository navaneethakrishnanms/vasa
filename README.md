<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# VASA Women's Connect

A platform connecting women workers with job opportunities, featuring AI-powered job matching and a learning hub.

View your app in AI Studio: https://ai.studio/apps/drive/1jw_SW4FEXa34FI9vK40oXGmWZEPQBhoz

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env.local` file and add your Gemini API key:
   ```
   VITE_GEMINI_API_KEY=your_api_key_here
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

## Deploy to Vercel

### Option 1: Deploy from GitHub (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com) and sign in with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Configure the project:
     - Framework Preset: Vite
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Add Environment Variable:
     - Name: `VITE_GEMINI_API_KEY`
     - Value: Your Gemini API key
   - Click "Deploy"

### Option 2: Deploy with Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Add environment variable:**
   ```bash
   vercel env add VITE_GEMINI_API_KEY
   ```

4. **Deploy to production:**
   ```bash
   vercel --prod
   ```

## Environment Variables

Required environment variables:
- `VITE_GEMINI_API_KEY` - Your Google Gemini API key

## Tech Stack

- React 19
- TypeScript
- Vite
- Google Gemini AI
- Vercel (deployment)
# vasa
