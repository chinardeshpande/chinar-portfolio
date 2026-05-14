#!/bin/bash

# Fix port 80/443 conflict on VPS
# Run this on the VPS before deploying portfolio

echo "🔍 Checking what's using ports 80 and 443..."

# Check what's using port 80
echo ""
echo "Port 80:"
sudo lsof -i :80 || echo "Nothing found with lsof"
sudo netstat -tlnp | grep :80 || echo "Nothing found with netstat"

echo ""
echo "Port 443:"
sudo lsof -i :443 || echo "Nothing found with lsof"
sudo netstat -tlnp | grep :443 || echo "Nothing found with netstat"

echo ""
echo "🐳 Docker containers:"
docker ps

echo ""
echo "📋 To fix, you can:"
echo "1. Stop HRMS nginx: cd /var/www/hrms-app && docker-compose -f docker-compose.production.yml stop nginx"
echo "2. OR use different ports for portfolio (temporary)"
echo ""
echo "Choose option 1 if HRMS doesn't need to be accessible right now"
echo "Choose option 2 to run both on different ports"
