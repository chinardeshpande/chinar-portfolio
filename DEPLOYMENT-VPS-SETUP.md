# VPS Deployment Setup - Portfolio

Automated deployment pipeline with Docker + GitHub Actions (same as HRMS MVP)

## 🎯 What You Get

- ✅ **Zero deployment limits** - deploy unlimited times
- ✅ **30-second deployments** - instant updates via SSH
- ✅ **Automatic backups** - keeps last 3 versions
- ✅ **Auto rollback** - reverts on failure
- ✅ **Free CI/CD** - GitHub Actions (2,000 minutes/month free)
- ✅ **Full control** - your server, your rules
- ✅ **SSL included** - automatic Let's Encrypt certificates

## 📋 Prerequisites

1. **VPS Server** (same one you use for HRMS is fine!)
   - Ubuntu 20.04+ or similar
   - 2GB RAM minimum (1GB works but tight)
   - Docker & Docker Compose installed
   - Root or sudo access

2. **Domain DNS**
   - Point `chinardeshpande.tech` to your VPS IP
   - Add A record: `@ -> YOUR_VPS_IP`
   - Add A record: `www -> YOUR_VPS_IP`

3. **GitHub Repository**
   - This portfolio repo (already have it!)

## 🚀 Setup Steps

### Step 1: Prepare Your VPS (5 minutes)

SSH into your VPS:
```bash
ssh root@YOUR_VPS_IP
```

Create directory structure:
```bash
mkdir -p /var/www/portfolio
cd /var/www/portfolio
```

Install Docker (if not already installed):
```bash
# Update packages
apt update && apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Install Docker Compose
apt install docker-compose -y

# Verify installation
docker --version
docker-compose --version
```

### Step 2: Get SSL Certificate (First time only - 5 minutes)

```bash
cd /var/www/portfolio

# Create directories
mkdir -p certbot/conf certbot/www docker/nginx

# Create temporary nginx config for SSL challenge
cat > docker/nginx/nginx-temp.conf << 'EOF'
server {
    listen 80;
    server_name chinardeshpande.tech www.chinardeshpande.tech;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 200 'Server is ready for SSL setup';
        add_header Content-Type text/plain;
    }
}
EOF

# Start temporary nginx
docker run -d --name nginx-temp \
  -p 80:80 \
  -v $(pwd)/docker/nginx/nginx-temp.conf:/etc/nginx/conf.d/default.conf:ro \
  -v $(pwd)/certbot/www:/var/www/certbot:ro \
  nginx:alpine

# Get SSL certificate
docker run -it --rm \
  -v $(pwd)/certbot/conf:/etc/letsencrypt \
  -v $(pwd)/certbot/www:/var/www/certbot \
  certbot/certbot certonly \
  --webroot \
  --webroot-path=/var/www/certbot \
  --email YOUR_EMAIL@example.com \
  --agree-tos \
  --no-eff-email \
  -d chinardeshpande.tech \
  -d www.chinardeshpande.tech

# Stop temporary nginx
docker stop nginx-temp
docker rm nginx-temp
```

**Replace** `YOUR_EMAIL@example.com` with your actual email.

### Step 3: Configure GitHub Secrets (5 minutes)

Go to your GitHub repository:
1. Click **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add these secrets:

**Server Access:**
```
PRODUCTION_SSH_KEY = Your private SSH key (id_rsa content)
PRODUCTION_SERVER_IP = Your VPS IP address
```

**Application Secrets:**
```
NEXTAUTH_URL = https://chinardeshpande.tech
NEXTAUTH_SECRET = (generate with: openssl rand -base64 32)
ADMIN_EMAIL = your_admin@email.com
ADMIN_PASSWORD = your_secure_password
GOOGLE_CLIENT_ID = your_google_client_id
GOOGLE_CLIENT_SECRET = your_google_client_secret
GOOGLE_REFRESH_TOKEN = your_google_refresh_token
GA4_PROPERTY_ID = your_ga4_property_id
SEARCH_CONSOLE_SITE_URL = https://chinardeshpande.tech
```

**To get your SSH private key:**
```bash
# On your local machine
cat ~/.ssh/id_rsa
```
Copy the entire content (including `-----BEGIN` and `-----END` lines).

**If you don't have an SSH key:**
```bash
# Generate new SSH key
ssh-keygen -t rsa -b 4096 -C "github-actions"

# Copy public key to VPS
ssh-copy-id root@YOUR_VPS_IP

# Then copy private key for GitHub secret
cat ~/.ssh/id_rsa
```

### Step 4: Initial Deployment (Automated!)

Simply push your code:
```bash
cd /Users/chinar.deshpande06/CD-THG/2025/THG-AI/MyCodingJourney/current-projects/chinar-portfolio

git add .
git commit -m "Add VPS deployment infrastructure"
git push origin main
```

GitHub Actions will automatically:
1. ✅ Build your Next.js app
2. ✅ Create deployment archive
3. ✅ SSH into your VPS
4. ✅ Deploy with Docker
5. ✅ Run health checks
6. ✅ Rollback if anything fails

**Watch the deployment:**
- Go to GitHub → **Actions** tab
- Click on the running workflow
- Watch it deploy in real-time!

### Step 5: Verify Deployment (1 minute)

After deployment completes (2-3 minutes):

1. Visit: https://chinardeshpande.tech
2. Check health: https://chinardeshpande.tech/api/health
3. Test admin: https://chinardeshpande.tech/admin
4. Test analytics: https://chinardeshpande.tech/admin/analytics

## 🔄 Daily Usage

**Every push to `main` automatically deploys!**

```bash
# Make changes
vim app/some-file.tsx

# Commit and push
git add .
git commit -m "Update feature"
git push origin main

# 🚀 Auto-deploys in ~2 minutes!
```

**Manual deployment trigger:**
1. Go to GitHub → **Actions**
2. Click **Deploy to Production**
3. Click **Run workflow** → **Run workflow**

## 🛠️ Server Management

**View logs:**
```bash
ssh root@YOUR_VPS_IP
cd /var/www/portfolio/current
docker-compose -f docker-compose.production.yml logs -f
```

**Restart services:**
```bash
ssh root@YOUR_VPS_IP
cd /var/www/portfolio/current
docker-compose -f docker-compose.production.yml restart
```

**Check status:**
```bash
ssh root@YOUR_VPS_IP
cd /var/www/portfolio/current
docker-compose -f docker-compose.production.yml ps
```

**Manual rollback:**
```bash
ssh root@YOUR_VPS_IP
cd /var/www/portfolio

# See backups
ls -la | grep backup_

# Restore a backup
cd current
docker-compose -f docker-compose.production.yml down
cd ..
rm -rf current
cp -r backup_YYYYMMDD_HHMMSS current
cd current
docker-compose -f docker-compose.production.yml up -d
```

## 📊 Monitoring

**Check application health:**
```bash
curl https://chinardeshpande.tech/api/health
```

**Check Docker containers:**
```bash
ssh root@YOUR_VPS_IP
docker ps
```

**View nginx logs:**
```bash
ssh root@YOUR_VPS_IP
cd /var/www/portfolio/current
tail -f logs/nginx/portfolio_access.log
tail -f logs/nginx/portfolio_error.log
```

**Check SSL certificate expiry:**
```bash
ssh root@YOUR_VPS_IP
docker exec portfolio-certbot certbot certificates
```

## 🔒 Security

**Firewall (UFW):**
```bash
ssh root@YOUR_VPS_IP

# Allow SSH, HTTP, HTTPS
ufw allow 22
ufw allow 80
ufw allow 443
ufw enable
ufw status
```

**Update SSL certificate automatically:**
The certbot container automatically renews certificates every 12 hours (runs in background).

## 💰 Cost Comparison

**Netlify (current):**
- Free tier: 100GB bandwidth, 300 build minutes/month
- **Status:** ❌ Hit limits, deployments paused

**VPS (new setup):**
- Cost: $5-12/month (shared with HRMS)
- Limits: **NONE** - unlimited everything
- **Status:** ✅ Always available

## 🆘 Troubleshooting

**Deployment failed?**
1. Check GitHub Actions logs
2. Check server logs: `docker-compose logs`
3. Rollback happens automatically
4. Fix issue and push again

**Can't access site?**
1. Check DNS: `dig chinardeshpande.tech`
2. Check if containers running: `docker ps`
3. Check nginx config: `docker exec portfolio-nginx-prod nginx -t`
4. Restart: `docker-compose restart`

**SSL certificate issues?**
```bash
# Renew manually
docker run -it --rm \
  -v /var/www/portfolio/certbot/conf:/etc/letsencrypt \
  -v /var/www/portfolio/certbot/www:/var/www/certbot \
  certbot/certbot renew
```

**Out of disk space?**
```bash
# Cleanup old Docker images
docker image prune -a

# Cleanup old backups
cd /var/www/portfolio
rm -rf backup_OLD_DATE
```

## 🎉 Benefits vs Netlify

| Feature | Netlify | VPS Setup |
|---------|---------|-----------|
| Deployment Speed | 2-3 min | 30-60 sec |
| Monthly Cost | Free (limited) → $19+ | $5-12 total |
| Build Minutes | 300/month → paused | Unlimited |
| Deployments | Limited → paused | Unlimited |
| Bandwidth | 100GB → paused | Unlimited |
| Control | Limited | Full SSH access |
| Rollback | Manual | Automatic |
| Backups | None | Last 3 auto-saved |
| CI/CD | Built-in | GitHub Actions (free) |
| SSL | Auto | Auto (Let's Encrypt) |

## 📝 Next Steps

1. ✅ Set up VPS (if not done)
2. ✅ Configure DNS
3. ✅ Get SSL certificate
4. ✅ Add GitHub secrets
5. ✅ Push code to deploy
6. ✅ Test the GA4 analytics fix!

**Ready to deploy?** Just push your code and watch the magic happen! 🚀
