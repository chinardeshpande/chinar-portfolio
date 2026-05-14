# Deploy Portfolio to VPS - 3 Simple Steps

Your VPS deployment is ready! Just follow these 3 steps.

## Step 1: Run Setup on VPS (5 minutes)

**On your VPS server:**

```bash
# SSH into your VPS (same one as HRMS)
ssh root@YOUR_VPS_IP

# Download and run the setup script
curl -fsSL https://raw.githubusercontent.com/chinardeshpande/chinar-portfolio/main/setup-vps.sh -o setup-vps.sh

# Run it (replace with your email)
bash setup-vps.sh your@email.com
```

**What it does:**
- ✅ Creates directories
- ✅ Checks Docker is installed
- ✅ Gets SSL certificate for chinardeshpande.tech
- ✅ Configures firewall
- ✅ Shows you the server IP

**After it completes**, it will display your `PRODUCTION_SERVER_IP`. **Copy this value!**

---

## Step 2: Add GitHub Secrets (10 minutes)

**On your local machine:**

```bash
cd /Users/chinar.deshpande06/CD-THG/2025/THG-AI/MyCodingJourney/current-projects/chinar-portfolio

# Run the secrets preparation script
bash prepare-github-secrets.sh
```

This will show you all the values you need.

**Then go to GitHub:**
1. Open: https://github.com/chinardeshpande/chinar-portfolio/settings/secrets/actions
2. Click **"New repository secret"**
3. Add each secret from the script output

**Secrets to add (11 total):**
1. `PRODUCTION_SSH_KEY` - Your SSH private key
2. `PRODUCTION_SERVER_IP` - From Step 1
3. `NEXTAUTH_URL` - https://chinardeshpande.tech
4. `NEXTAUTH_SECRET` - Generate with `openssl rand -base64 32`
5. `ADMIN_EMAIL` - Your admin email
6. `ADMIN_PASSWORD` - Your admin password
7. `GOOGLE_CLIENT_ID` - From Netlify or .env.local
8. `GOOGLE_CLIENT_SECRET` - From Netlify or .env.local
9. `GOOGLE_REFRESH_TOKEN` - From Netlify or .env.local
10. `GA4_PROPERTY_ID` - From Netlify or .env.local
11. `SEARCH_CONSOLE_SITE_URL` - https://chinardeshpande.tech

**Quick copy from Netlify:**
- Go to: https://app.netlify.com/ → Your site → Site configuration → Environment variables
- Copy values for items 7-10

---

## Step 3: Deploy! (30 seconds)

**On your local machine:**

```bash
cd /Users/chinar.deshpande06/CD-THG/2025/THG-AI/MyCodingJourney/current-projects/chinar-portfolio

# Push to deploy
git push origin main
```

**Watch it deploy:**
1. Go to: https://github.com/chinardeshpande/chinar-portfolio/actions
2. Click the running workflow
3. Watch the deployment happen in real-time!

**After 2-3 minutes:**
- ✅ Visit: https://chinardeshpande.tech
- ✅ Test: https://chinardeshpande.tech/api/health
- ✅ Admin: https://chinardeshpande.tech/admin/analytics

---

## ✅ That's It!

From now on, every time you push to `main`, it automatically deploys in ~30 seconds!

**No more Netlify credit limits!** 🎉

---

## 🆘 Troubleshooting

**Step 1 fails with "SSL certificate error":**
- Check DNS: `dig chinardeshpande.tech` must show your VPS IP
- Wait 5 minutes for DNS propagation
- Try again

**Step 2: Can't find SSH key:**
```bash
# Generate new SSH key
ssh-keygen -t rsa -b 4096

# Copy to VPS
ssh-copy-id root@YOUR_VPS_IP

# Then display it for GitHub
cat ~/.ssh/id_rsa
```

**Step 3: GitHub Actions fails:**
- Check all 11 secrets are added
- Verify SSH key is complete (includes BEGIN/END lines)
- Check VPS is accessible: `ssh root@YOUR_VPS_IP`

**Site not loading after deployment:**
```bash
# SSH to VPS
ssh root@YOUR_VPS_IP

# Check containers
cd /var/www/portfolio/current
docker-compose -f docker-compose.production.yml ps

# View logs
docker-compose -f docker-compose.production.yml logs -f
```

---

## 🎯 What You Get

- ✅ **Unlimited deployments** (no credit limits!)
- ✅ **30-second deploys** (auto on every push)
- ✅ **Auto-rollback** (if deployment fails)
- ✅ **SSL auto-renewal** (every 90 days)
- ✅ **Professional setup** (same as HRMS MVP)
- ✅ **Full control** (SSH access)
- 💰 **Cost effective** ($0 extra - shared with HRMS)

---

**Ready?** Start with Step 1! 🚀
