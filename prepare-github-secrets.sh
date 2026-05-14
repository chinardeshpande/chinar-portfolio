#!/bin/bash

# ===========================================
# GitHub Secrets Preparation Script
# ===========================================
# Run this on your LOCAL machine
# It will show you exactly what to add to GitHub
# ===========================================

echo "╔════════════════════════════════════════════════════════════╗"
echo "║  GitHub Secrets for Portfolio Deployment                   ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo "Go to: https://github.com/chinardeshpande/chinar-portfolio/settings/secrets/actions"
echo "Click: 'New repository secret' for each of these"
echo ""
echo "═══════════════════════════════════════════════════════════"
echo ""

# Check if .env.local exists
if [ -f ".env.local" ]; then
    echo "✅ Found .env.local - reading values..."
    source .env.local
else
    echo "⚠️  .env.local not found"
    echo "   Using Netlify environment variables as reference"
fi

echo "1️⃣  PRODUCTION_SSH_KEY"
echo "─────────────────────────────────────────────────────────"
if [ -f "$HOME/.ssh/id_rsa" ]; then
    echo "Value: (Copy the entire output below)"
    echo ""
    cat "$HOME/.ssh/id_rsa"
    echo ""
else
    echo "❌ No SSH key found at ~/.ssh/id_rsa"
    echo "Generate one with: ssh-keygen -t rsa -b 4096"
    echo "Then copy it to VPS: ssh-copy-id root@YOUR_VPS_IP"
fi
echo ""

echo "2️⃣  PRODUCTION_SERVER_IP"
echo "─────────────────────────────────────────────────────────"
echo "Value: (Get from your VPS provider or run on VPS: curl ifconfig.me)"
echo ""

echo "3️⃣  NEXTAUTH_URL"
echo "─────────────────────────────────────────────────────────"
echo "Value: https://chinardeshpande.tech"
echo ""

echo "4️⃣  NEXTAUTH_SECRET"
echo "─────────────────────────────────────────────────────────"
if [ -n "$NEXTAUTH_SECRET" ]; then
    echo "Value: $NEXTAUTH_SECRET"
else
    echo "Value: (Generate new one below)"
    openssl rand -base64 32
fi
echo ""

echo "5️⃣  ADMIN_EMAIL"
echo "─────────────────────────────────────────────────────────"
if [ -n "$ADMIN_EMAIL" ]; then
    echo "Value: $ADMIN_EMAIL"
else
    echo "Value: (Your admin email address)"
fi
echo ""

echo "6️⃣  ADMIN_PASSWORD"
echo "─────────────────────────────────────────────────────────"
if [ -n "$ADMIN_PASSWORD" ]; then
    echo "Value: $ADMIN_PASSWORD"
else
    echo "Value: (Your admin password)"
fi
echo ""

echo "7️⃣  GOOGLE_CLIENT_ID"
echo "─────────────────────────────────────────────────────────"
if [ -n "$GOOGLE_CLIENT_ID" ]; then
    echo "Value: $GOOGLE_CLIENT_ID"
else
    echo "Value: (From your Google OAuth setup)"
fi
echo ""

echo "8️⃣  GOOGLE_CLIENT_SECRET"
echo "─────────────────────────────────────────────────────────"
if [ -n "$GOOGLE_CLIENT_SECRET" ]; then
    echo "Value: $GOOGLE_CLIENT_SECRET"
else
    echo "Value: (From your Google OAuth setup)"
fi
echo ""

echo "9️⃣  GOOGLE_REFRESH_TOKEN"
echo "─────────────────────────────────────────────────────────"
if [ -n "$GOOGLE_REFRESH_TOKEN" ]; then
    echo "Value: $GOOGLE_REFRESH_TOKEN"
else
    echo "Value: (From your Google OAuth setup)"
fi
echo ""

echo "🔟 GA4_PROPERTY_ID"
echo "─────────────────────────────────────────────────────────"
if [ -n "$GA4_PROPERTY_ID" ]; then
    echo "Value: $GA4_PROPERTY_ID"
else
    echo "Value: (Your GA4 Property ID)"
fi
echo ""

echo "1️⃣1️⃣ SEARCH_CONSOLE_SITE_URL"
echo "─────────────────────────────────────────────────────────"
if [ -n "$SEARCH_CONSOLE_SITE_URL" ]; then
    echo "Value: $SEARCH_CONSOLE_SITE_URL"
else
    echo "Value: https://chinardeshpande.tech"
fi
echo ""

echo "═══════════════════════════════════════════════════════════"
echo "✅ Copy each value to GitHub Secrets"
echo ""
echo "After adding all secrets:"
echo "  git push origin main"
echo "  → Automatic deployment will start!"
echo "═══════════════════════════════════════════════════════════"
