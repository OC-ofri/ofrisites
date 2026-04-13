# Deployment Guide - ofrisites.com

**Status:** ✅ Ready to deploy  
**Environment:** Vercel  
**Domain:** ofrisites.com  

---

## Quick Start (1 Click)

### Option 1: Automatic Deployment (Recommended)
Since the repository is already connected to Vercel:

1. **Push to GitHub:**
   ```bash
   git push origin main
   ```
   Vercel automatically detects the push and deploys!

2. **Monitor Deployment:**
   - Visit Vercel Dashboard: https://vercel.com/dashboard
   - Check deployment status
   - Wait for "Ready" status (usually 1-2 minutes)

### Option 2: Manual Vercel Deploy
```bash
# Install Vercel CLI if not installed
npm i -g vercel

# Deploy from project directory
cd /root/.openclaw/workspace/ofrisites
vercel

# Follow prompts:
# - Confirm project name
# - Select production deployment
# - Wait for deployment to complete
```

---

## Pre-Deployment Checklist

Before deploying, verify everything locally:

```bash
cd /root/.openclaw/workspace/ofrisites

# 1. Install dependencies (if needed)
npm install

# 2. Test build
npm run build
# Expected output: ✓ Compiled successfully

# 3. Test locally
npm run dev
# Visit http://localhost:3000
# Test: Home page loads
# Test: Deals page loads
# Test: Mobile responsiveness (browser DevTools)

# 4. Check Git status
git status
# Expected: Everything committed
```

---

## After Deployment

### 1. Verify Deployment
```bash
# Your site will be at:
https://ofrisites.vercel.app

# Check:
- [ ] Home page loads
- [ ] Deals page accessible at /deals
- [ ] Hero section displays
- [ ] Mobile menu works
- [ ] No console errors (DevTools)
```

### 2. Configure Custom Domain
If not already configured:

1. Go to Vercel Dashboard → Project → Settings → Domains
2. Add custom domain: `ofrisites.com`
3. Vercel will provide DNS records
4. Update your domain registrar DNS settings
5. Wait 24 hours for DNS propagation
6. Enable automatic SSL/HTTPS (Vercel handles this)

### 3. Test Domain
```bash
# After DNS propagates (24h):
curl https://ofrisites.com

# Open in browser:
https://ofrisites.com
```

---

## Environment Variables

If needed for future features:

```bash
# .env.local (local development)
NEXT_PUBLIC_SITE_URL=https://ofrisites.com

# Set in Vercel Dashboard:
# Settings → Environment Variables
```

---

## Performance Optimization

After deployment, check:

### Lighthouse Score
1. Open your site in Chrome
2. Press F12 → Lighthouse tab
3. Click "Analyze page load"
4. Target scores: 80+ across all metrics

### Web Vitals
Monitor at: Vercel Dashboard → Analytics → Web Vitals

Targets:
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1

---

## Analytics Setup (Optional)

### Google Analytics
1. Create property at: https://analytics.google.com
2. Add measurement ID to HTML `<head>`
3. Or use Next.js plugin: `@next/third-parties`

### Vercel Analytics
1. Vercel Dashboard → Analytics
2. Enable Web Analytics
3. No extra setup needed!

---

## Monitoring & Alerts

### Vercel Built-in Monitoring
- Automatic error tracking
- Performance monitoring
- Deployment notifications

### Enable Alerts
1. Vercel Dashboard → Settings → Alerts
2. Configure notification emails
3. Monitor key metrics

---

## Rollback (If Needed)

If deployment has issues:

```bash
# View all deployments
vercel list

# Rollback to previous
vercel rollback

# Or manually promote older build:
# Vercel Dashboard → Deployments → Click previous → Promote
```

---

## Continuous Deployment

Future updates are automatic:

```bash
# Make changes locally
git add .
git commit -m "Update message"
git push origin main

# Vercel automatically:
# 1. Detects the push
# 2. Runs npm run build
# 3. Deploys if successful
# 4. Notifies on completion
```

---

## Common Issues & Solutions

### Build Fails
```bash
# Check build locally first
npm run build

# If error, debug:
npm run dev

# Then commit fix
git push origin main
```

### Styles Not Loading
- Clear browser cache: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Check if globals.css is imported in layout.tsx
- Verify Tailwind config in tailwind.config.js

### Images Not Showing
- Ensure images in public/ folder
- Use relative paths: /image.png
- Not /public/image.png

### Hebrew RTL Issues
- Already configured in layout.tsx: `lang="he" dir="rtl"`
- If issues persist, check CSS property order

---

## File Structure on Vercel

After deployment, your site structure:

```
ofrisites.vercel.app/
├── /                    (Home page)
├── /deals              (Deals page)
├── /_next              (Next.js internals)
└── /public             (Static assets)
```

---

## Update Procedure

For future updates:

1. **Make changes** in your local repo
2. **Test locally:** `npm run dev`
3. **Build test:** `npm run build`
4. **Commit:** `git add . && git commit -m "msg"`
5. **Push:** `git push origin main`
6. **Vercel deploys automatically**

---

## Support & Help

### Documentation
- Next.js: https://nextjs.org/docs
- Vercel: https://vercel.com/docs
- Tailwind: https://tailwindcss.com/docs

### Monitoring Deployment
- Vercel Dashboard: https://vercel.com/dashboard
- GitHub Repo: https://github.com/OC-ofri/ofrisites
- Local: `npm run dev`

---

## Summary

✅ **Before Deploying:**
- [x] Build passes locally
- [x] All pages load
- [x] Mobile responsive
- [x] Committed to git

✅ **Deploy:**
- Push to main branch
- Vercel auto-deploys
- Wait for "Ready" status

✅ **After Deploying:**
- Test live site
- Configure domain (if needed)
- Monitor Lighthouse
- Enable analytics

✅ **Maintenance:**
- Make changes → Push → Auto-deploy
- Monitor performance
- Check alerts

---

## Quick Links

| Resource | URL |
|----------|-----|
| Live Site | https://ofrisites.vercel.app |
| Vercel Dashboard | https://vercel.com/dashboard |
| GitHub Repo | https://github.com/OC-ofri/ofrisites |
| Local Dev | `npm run dev` → localhost:3000 |
| Build | `npm run build` |

---

**Last Updated:** 2026-03-18  
**Status:** ✅ Ready for Production  

🚀 **Deploy Now!**
