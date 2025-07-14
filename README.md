# 🌍 Timezone Alignment Tool

**Find the perfect countries for remote work based on timezone compatibility with US business hours.**

## What does this tool do?

This tool helps **remote workers, digital nomads, and freelancers** find countries where the local working hours align well with US Eastern Time business schedules.

### 🎯 **Perfect for:**
- **Remote employees** working for US companies while traveling/living abroad
- **Freelancers** who need to collaborate with US clients during business hours
- **Digital nomads** planning their next destination based on work schedule compatibility
- **Consultants** who want to maintain US business hour availability

### 📊 **How it works:**
1. **Set your US working hours** (default: 12 PM - 5 PM ET)
2. **View the global map** where cities are color-coded by timezone alignment:
   - � **Perfect** = 80%+ of your work hours fall within 4 AM - 9 PM local time
   - 🟡 **Good** = 50%+ overlap with reasonable local hours
   - ⚪ **Fair** = Some overlap with local business hours
   - 🔴 **Poor** = Most work happens during local night hours
3. **Browse the detailed table** to see exact local working hours for each city
4. **Check meal costs** to help with budget planning

### 💡 **Key Insight:**
Working 12 PM - 5 PM ET means:
- **Americas** (Mexico, Brazil, Argentina) = Perfect timing!
- **Europe** (London, Berlin, Paris) = Good morning hours (5-10 PM local)
- **Asia** (Tokyo, Bangkok, Mumbai) = Late night/early morning local hours

## 🚀 Features

- 🗺️ **Interactive world map** with 120+ countries
- ⚙️ **Customizable working hours** (any US Eastern Time schedule)
- 📍 **Auto-detect your location** and current time
- 🎯 **Smart filtering** (show only good matches)
- 💰 **Meal cost data** from Numbeo for budget planning
- ⏰ **Real-time timezone calculations** with DST support
- 📱 **Beautiful responsive design**

## 🛠️ Quick Start

### Local Development
```bash
# Clone or download the files
# Start a local server (required for JSON loading)
python -m http.server 8000
# Open http://localhost:8000
```

### Deploy to Cloudflare Pages
1. Upload all files to your repository
2. Set build command: (none needed - static files)
3. Set output directory: `/` (root)
4. Deploy!

---

**Perfect for remote work planning! 🏖️💻**