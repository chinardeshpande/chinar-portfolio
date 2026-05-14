# Portfolio Deployment - VPS Setup

**Same proven infrastructure as HRMS MVP** - Docker + GitHub Actions + VPS

## 📁 Deployment Files

```
chinar-portfolio/
├── Dockerfile                          # Next.js Docker build
├── .dockerignore                       # Exclude unnecessary files
├── docker-compose.production.yml       # Production orchestration
├── .github/workflows/
│   └── deploy-production.yml          # Auto-deployment pipeline
├── docker/
│   └── nginx/
│       └── nginx.conf                 # Reverse proxy config
├── app/api/health/                    # Health check endpoint
├── .env.example                       # Environment variables template
├── DEPLOYMENT-QUICKSTART.md           # 30-minute setup guide ⭐
└── DEPLOYMENT-VPS-SETUP.md            # Complete documentation
```

## 🚀 Quick Start

**Follow this order:**

1. **Read**: [DEPLOYMENT-QUICKSTART.md](./DEPLOYMENT-QUICKSTART.md) (30 min setup)
2. **Setup VPS**: Prepare server & get SSL
3. **Configure GitHub**: Add secrets
4. **Deploy**: `git push origin main`
5. **Celebrate**: Visit https://chinardeshpande.tech 🎉

## ✨ Features

- ✅ **Zero deployment limits** (no more Netlify credit issues!)
- ✅ **30-second deploys** (vs 2-3 min on Netlify)
- ✅ **Automatic rollback** on failure
- ✅ **SSL auto-renewal** via Let's Encrypt
- ✅ **Health checks** before going live
- ✅ **Backup system** (last 3 versions saved)
- ✅ **Nginx caching** for performance
- ✅ **Full control** via SSH

## 🔄 Deployment Flow

```
git push main
    ↓
GitHub Actions triggered
    ↓
1. Build Next.js app
2. Run tests
3. Create deployment archive
4. SSH to VPS
5. Backup current version
6. Deploy new version
7. Health check
    ↓
    Success → Live!
    Failure → Auto-rollback
```

## 💰 Cost

**Current (Netlify):**
- Free tier → ❌ Hit limits → Deployments paused

**New (VPS):**
- $5-12/month total (shared with HRMS MVP)
- ✅ Unlimited deployments
- ✅ Unlimited bandwidth
- ✅ No build minute limits

## 📊 Comparison

| Feature | Netlify | VPS Setup |
|---------|---------|-----------|
| Monthly Cost | Free → $19+ | $5-12 (shared) |
| Deploy Speed | 2-3 min | 30-60 sec |
| Deploy Limits | ❌ Hit | ✅ None |
| Bandwidth | ❌ Hit | ✅ Unlimited |
| Control | Limited | Full SSH |
| Rollback | Manual | Auto |
| SSL | Auto | Auto |

## 🎯 Same as HRMS MVP

This uses **identical infrastructure** to your HRMS deployment:

- ✅ Same Docker approach
- ✅ Same GitHub Actions pattern
- ✅ Same backup strategy
- ✅ Same rollback mechanism
- ✅ Same health checks
- ✅ **Proven and reliable!**

## 📚 Documentation

- **[DEPLOYMENT-QUICKSTART.md](./DEPLOYMENT-QUICKSTART.md)** - Start here! 30-min setup
- **[DEPLOYMENT-VPS-SETUP.md](./DEPLOYMENT-VPS-SETUP.md)** - Complete guide
- **[.env.example](./.env.example)** - Environment variables needed

## 🆘 Support

**Common Issues:**

1. **SSL not working?** → Check DNS points to VPS IP
2. **GitHub Actions failing?** → Verify all secrets added
3. **Can't SSH?** → Check SSH key in GitHub secrets
4. **Site not loading?** → Check containers: `docker ps`

**Get Help:**
- Check GitHub Actions logs
- SSH to VPS: `ssh root@YOUR_VPS_IP`
- View container logs: `docker-compose logs`

## 🎉 Benefits

Moving from Netlify to VPS gives you:

1. **No more credit limits** - deploy 1000x/day if you want
2. **Faster deployments** - 30 seconds vs 2-3 minutes
3. **Full control** - your server, your rules
4. **Cost effective** - share server with HRMS (~$0 extra)
5. **Auto rollback** - safe deployments
6. **Professional setup** - same as enterprise apps

## 🚀 Ready to Deploy?

1. Open [DEPLOYMENT-QUICKSTART.md](./DEPLOYMENT-QUICKSTART.md)
2. Follow the 30-minute guide
3. Push code → Auto-deploy!
4. Test your GA4 analytics fix immediately!

**No more waiting for Netlify to unpause deployments!** 🎯
