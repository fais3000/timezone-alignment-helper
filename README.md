# Timezone Alignment Tool

A client-side web application that helps digital nomads and remote workers find countries with working hours that align well with US East Coast business hours.

## Features

- 🌍 Interactive world map with real country boundaries
- 🕐 Customizable working hours (default: 12 PM - 8 PM ET)
- 📍 Automatic location detection
- 🔍 Search and filter countries by alignment quality
- 💰 Meal cost information for budget planning
- ⏰ Real-time timezone conversions
- 📱 Responsive design for all devices

## Deployment

### Cloudflare Pages
1. Upload all files to your Cloudflare Pages repository
2. Set build command: (none needed - static files)
3. Set output directory: `/` (root)
4. Deploy!

### Local Development
Simply open `index.html` in your browser or use a local server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .