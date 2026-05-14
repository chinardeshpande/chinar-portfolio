# Portfolio VPS Deployment - Quick Start

Get deployed in 30 minutes (same infrastructure as HRMS MVP)

## ✅ Prerequisites Checklist

Before starting, you need:

- [ ] VPS server (can use same one as HRMS!)
- [ ] Domain pointing to VPS IP: `chinardeshpande.tech -> YOUR_IP`
- [ ] SSH access to VPS: `ssh root@YOUR_VPS_IP`
- [ ] Docker installed on VPS
- [ ] All Google Analytics credentials ready

## 🚀 30-Minute Setup

### **Step 1: VPS Preparation (10 min)**

```bash
# SSH into your VPS
ssh root@YOUR_VPS_IP

# Create directory
mkdir -p /var/www/portfolio
cd /var/www/portfolio

# Verify Docker is installed
docker --version
docker-compose --version

# If not installed:
curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh
apt install docker-compose -y
```

### **Step 2: Get SSL Certificate (10 min)**

```bash
cd /var/www/portfolio
mkdir -p certbot/conf certbot/www docker/nginx

# Create temp nginx for SSL challenge
cat > docker/nginx/temp.conf << 'EOF'
server {
    listen 80;
    server_name chinardeshpande.tech www.chinardeshpande.tech;
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }
    location / {
        return 200 'Ready for SSL';
    }
}
EOF

# Start temp nginx
docker run -d --name nginx-temp -p 80:80 \
  -v $(pwd)/docker/nginx/temp.conf:/etc/nginx/conf.d/default.conf:ro \
  -v $(pwd)/certbot/www:/var/www/certbot:ro \
  nginx:alpine

# Get SSL certificate (REPLACE YOUR_EMAIL)
docker run -it --rm \
  -v $(pwd)/certbot/conf:/etc/letsencrypt \
  -v $(pwd)/certbot/www:/var/www/certbot \
  certbot/certbot certonly --webroot \
  --webroot-path=/var/www/certbot \
  --email YOUR_EMAIL@example.com \
  --agree-tos --no-eff-email \
  -d chinardeshpande.tech \
  -d www.chinardeshpande.tech

# Cleanup
docker stop nginx-temp && docker rm nginx-temp
```

### **Step 3: GitHub Secrets (10 min)**

Go to: https://github.com/YOUR_USERNAME/chinar-portfolio/settings/secrets/actions

Click **"New repository secret"** for each:

**Required Secrets:**

| Name | Value | How to Get |
|------|-------|------------|
| `PRODUCTION_SSH_KEY` | Your SSH private key | `cat ~/.ssh/id_rsa` |
| `PRODUCTION_SERVER_IP` | Your VPS IP address | From hosting provider |
| `NEXTAUTH_URL` | https://chinardeshpande.tech | Your domain |
| `NEXTAUTH_SECRET` | Random 32-char string | `openssl rand -base64 32` |
| `ADMIN_EMAIL` | admin@example.com | Your admin email |
| `ADMIN_PASSWORD` | SecurePassword123 | Create strong password |
| `GOOGLE_CLIENT_ID` | (from OAuth setup) | From earlier setup |
| `GOOGLE_CLIENT_SECRET` | (from OAuth setup) | From earlier setup |
| `GOOGLE_REFRESH_TOKEN` | (from OAuth setup) | From earlier setup |
| `GA4_PROPERTY_ID` | Your GA4 property ID | From earlier setup |
| `SEARCH_CONSOLE_SITE_URL` | https://chinardeshpande.tech | Your domain |

**Getting SSH Key:**
```bash
# On your local machine
cat ~/.ssh/id_rsa

# If you don't have one, create it:
ssh-keygen -t rsa -b 4096
ssh-copy-id root@YOUR_VPS_IP
cat ~/.ssh/id_rsa  # Then copy this
```

### **Step 4: Deploy! (Automatic)**

```bash
# On your local machine
cd /Users/chinar.deshpande06/CD-THG/2025/THG-AI/MyCodingJourney/current-projects/chinar-portfolio

# Commit and push
git add .
git commit -m "Add VPS deployment infrastructure 🚀"
git push origin main
```

**Watch it deploy:**
1. Go to GitHub → Actions tab
2. Click the running workflow
3. Watch the magic happen! ✨

**After 2-3 minutes:**
- ✅ Visit: https://chinardeshpande.tech
- ✅ Test: https://chinardeshpande.tech/api/health
- ✅ Admin: https://chinardeshpande.tech/admin/analytics

## 🎉 You're Done!

Every `git push` to `main` now auto-deploys in ~30 seconds!

## 🛠️ Common Commands

**Check deployment status:**
```bash
# Watch GitHub Actions
# Go to: https://github.com/YOUR_USERNAME/chinar-portfolio/actions
```

**View server logs:**
```bash
ssh root@YOUR_VPS_IP
cd /var/www/portfolio/current
docker-compose -f docker-compose.production.yml logs -f portfolio
```

**Restart if needed:**
```bash
ssh root@YOUR_VPS_IP
cd /var/www/portfolio/current
docker-compose -f docker-compose.production.yml restart
```

**Manual deployment:**
1. GitHub → Actions → Deploy to Production
2. Click "Run workflow"

## ❌ Troubleshooting

**SSL certificate failed?**
- Check DNS: `dig chinardeshpande.tech` (must point to VPS)
- Wait 5 minutes for DNS propagation
- Try SSL setup again

**GitHub Actions failing?**
- Check all secrets are added
- Verify SSH key is correct (copy entire content including BEGIN/END)
- Check VPS is accessible: `ssh root@YOUR_VPS_IP`

**Can't SSH from GitHub Actions?**
```bash
# On VPS, check authorized_keys
cat ~/.ssh/authorized_keys

# Re-add your public key
ssh-copy-id root@YOUR_VPS_IP
```

**Deployment successful but site not loading?**
```bash
# Check containers
ssh root@YOUR_VPS_IP
docker ps

# Check nginx
docker exec portfolio-nginx-prod nginx -t

# Restart everything
cd /var/www/portfolio/current
docker-compose -f docker-compose.production.yml restart
```

## 📚 Full Documentation

See [DEPLOYMENT-VPS-SETUP.md](./DEPLOYMENT-VPS-SETUP.md) for complete guide.

## 💡 What You Just Built

✅ Auto-deployment on every push
✅ Automatic SSL certificate renewal
✅ Health checks & auto-rollback
✅ Unlimited deployments (no Netlify limits!)
✅ Nginx caching & compression
✅ Docker containerization
✅ Production-ready infrastructure

**Same setup as HRMS MVP - proven and reliable!** 🎯
