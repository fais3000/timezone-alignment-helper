// Countries data with coordinates and Numbeo meal costs
const countries = [
    // North America
    { name: 'United States', city: 'New York', timezone: 'America/New_York', mealCost: '$18', lat: 40.7128, lng: -74.0060 },
    { name: 'United States', city: 'Los Angeles', timezone: 'America/Los_Angeles', mealCost: '$20', lat: 34.0522, lng: -118.2437 },
    { name: 'United States', city: 'Chicago', timezone: 'America/Chicago', mealCost: '$16', lat: 41.8781, lng: -87.6298 },
    { name: 'United States', city: 'San Francisco', timezone: 'America/Los_Angeles', mealCost: '$25', lat: 37.7749, lng: -122.4194 },
    { name: 'United States', city: 'Seattle', timezone: 'America/Los_Angeles', mealCost: '$18', lat: 47.6062, lng: -122.3321 },
    { name: 'Canada', city: 'Toronto', timezone: 'America/Toronto', mealCost: '$15', lat: 43.6532, lng: -79.3832 },
    { name: 'Canada', city: 'Vancouver', timezone: 'America/Vancouver', mealCost: '$16', lat: 49.2827, lng: -123.1207 },
    { name: 'Canada', city: 'Montreal', timezone: 'America/Montreal', mealCost: '$14', lat: 45.5017, lng: -73.5673 },
    { name: 'Mexico', city: 'Mexico City', timezone: 'America/Mexico_City', mealCost: '$6', lat: 19.4326, lng: -99.1332 },
    { name: 'Mexico', city: 'Guadalajara', timezone: 'America/Mexico_City', mealCost: '$5', lat: 20.6597, lng: -103.3496 },

    // South America
    { name: 'Brazil', city: 'São Paulo', timezone: 'America/Sao_Paulo', mealCost: '$7', lat: -23.5505, lng: -46.6333 },
    { name: 'Brazil', city: 'Rio de Janeiro', timezone: 'America/Sao_Paulo', mealCost: '$8', lat: -22.9068, lng: -43.1729 },
    { name: 'Argentina', city: 'Buenos Aires', timezone: 'America/Argentina/Buenos_Aires', mealCost: '$12', lat: -34.6118, lng: -58.3960 },
    { name: 'Chile', city: 'Santiago', timezone: 'America/Santiago', mealCost: '$10', lat: -33.4489, lng: -70.6693 },
    { name: 'Colombia', city: 'Bogotá', timezone: 'America/Bogota', mealCost: '$5', lat: 4.7110, lng: -74.0721 },
    { name: 'Peru', city: 'Lima', timezone: 'America/Lima', mealCost: '$6', lat: -12.0464, lng: -77.0428 },

    // Europe
    { name: 'UK', city: 'London', timezone: 'Europe/London', mealCost: '$18', lat: 51.5074, lng: -0.1278 },
    { name: 'Germany', city: 'Berlin', timezone: 'Europe/Berlin', mealCost: '$12', lat: 52.5200, lng: 13.4050 },
    { name: 'Germany', city: 'Munich', timezone: 'Europe/Berlin', mealCost: '$14', lat: 48.1351, lng: 11.5820 },
    { name: 'France', city: 'Paris', timezone: 'Europe/Paris', mealCost: '$16', lat: 48.8566, lng: 2.3522 },
    { name: 'Netherlands', city: 'Amsterdam', timezone: 'Europe/Amsterdam', mealCost: '$18', lat: 52.3676, lng: 4.9041 },
    { name: 'Spain', city: 'Madrid', timezone: 'Europe/Madrid', mealCost: '$12', lat: 40.4168, lng: -3.7038 },
    { name: 'Spain', city: 'Barcelona', timezone: 'Europe/Madrid', mealCost: '$13', lat: 41.3851, lng: 2.1734 },
    { name: 'Italy', city: 'Rome', timezone: 'Europe/Rome', mealCost: '$14', lat: 41.9028, lng: 12.4964 },
    { name: 'Italy', city: 'Milan', timezone: 'Europe/Rome', mealCost: '$15', lat: 45.4642, lng: 9.1900 },
    { name: 'Switzerland', city: 'Zurich', timezone: 'Europe/Zurich', mealCost: '$25', lat: 47.3769, lng: 8.5417 },
    { name: 'Austria', city: 'Vienna', timezone: 'Europe/Vienna', mealCost: '$12', lat: 48.2082, lng: 16.3738 },
    { name: 'Poland', city: 'Warsaw', timezone: 'Europe/Warsaw', mealCost: '$8', lat: 52.2297, lng: 21.0122 },
    { name: 'Sweden', city: 'Stockholm', timezone: 'Europe/Stockholm', mealCost: '$15', lat: 59.3293, lng: 18.0686 },
    { name: 'Norway', city: 'Oslo', timezone: 'Europe/Oslo', mealCost: '$20', lat: 59.9139, lng: 10.7522 },
    { name: 'Denmark', city: 'Copenhagen', timezone: 'Europe/Copenhagen', mealCost: '$17', lat: 55.6761, lng: 12.5683 },
    { name: 'Finland', city: 'Helsinki', timezone: 'Europe/Helsinki', mealCost: '$14', lat: 60.1699, lng: 24.9384 },
    { name: 'Ireland', city: 'Dublin', timezone: 'Europe/Dublin', mealCost: '$16', lat: 53.3498, lng: -6.2603 },
    { name: 'Belgium', city: 'Brussels', timezone: 'Europe/Brussels', mealCost: '$15', lat: 50.8503, lng: 4.3517 },
    { name: 'Portugal', city: 'Lisbon', timezone: 'Europe/Lisbon', mealCost: '$11', lat: 38.7223, lng: -9.1393 },
    { name: 'Czech Republic', city: 'Prague', timezone: 'Europe/Prague', mealCost: '$9', lat: 50.0755, lng: 14.4378 },
    { name: 'Hungary', city: 'Budapest', timezone: 'Europe/Budapest', mealCost: '$8', lat: 47.4979, lng: 19.0402 },
    { name: 'Greece', city: 'Athens', timezone: 'Europe/Athens', mealCost: '$12', lat: 37.9838, lng: 23.7275 },
    { name: 'Turkey', city: 'Istanbul', timezone: 'Europe/Istanbul', mealCost: '$6', lat: 41.0082, lng: 28.9784 },

    // Asia
    { name: 'Japan', city: 'Tokyo', timezone: 'Asia/Tokyo', mealCost: '$8', lat: 35.6762, lng: 139.6503 },
    { name: 'Japan', city: 'Osaka', timezone: 'Asia/Tokyo', mealCost: '$7', lat: 34.6937, lng: 135.5023 },
    { name: 'South Korea', city: 'Seoul', timezone: 'Asia/Seoul', mealCost: '$8', lat: 37.5665, lng: 126.9780 },
    { name: 'China', city: 'Shanghai', timezone: 'Asia/Shanghai', mealCost: '$5', lat: 31.2304, lng: 121.4737 },
    { name: 'China', city: 'Beijing', timezone: 'Asia/Shanghai', mealCost: '$5', lat: 39.9042, lng: 116.4074 },
    { name: 'China', city: 'Shenzhen', timezone: 'Asia/Shanghai', mealCost: '$6', lat: 22.5431, lng: 114.0579 },
    { name: 'Hong Kong', city: 'Hong Kong', timezone: 'Asia/Hong_Kong', mealCost: '$12', lat: 22.3193, lng: 114.1694 },
    { name: 'Taiwan', city: 'Taipei', timezone: 'Asia/Taipei', mealCost: '$6', lat: 25.0330, lng: 121.5654 },
    { name: 'Singapore', city: 'Singapore', timezone: 'Asia/Singapore', mealCost: '$10', lat: 1.3521, lng: 103.8198 },
    { name: 'Malaysia', city: 'Kuala Lumpur', timezone: 'Asia/Kuala_Lumpur', mealCost: '$4', lat: 3.1390, lng: 101.6869 },
    { name: 'Thailand', city: 'Bangkok', timezone: 'Asia/Bangkok', mealCost: '$3', lat: 13.7563, lng: 100.5018 },
    { name: 'Vietnam', city: 'Ho Chi Minh City', timezone: 'Asia/Ho_Chi_Minh', mealCost: '$3', lat: 10.8231, lng: 106.6297 },
    { name: 'Vietnam', city: 'Hanoi', timezone: 'Asia/Ho_Chi_Minh', mealCost: '$3', lat: 21.0285, lng: 105.8542 },
    { name: 'Philippines', city: 'Manila', timezone: 'Asia/Manila', mealCost: '$4', lat: 14.5995, lng: 120.9842 },
    { name: 'Indonesia', city: 'Jakarta', timezone: 'Asia/Jakarta', mealCost: '$3', lat: -6.2088, lng: 106.8456 },
    { name: 'Indonesia', city: 'Bali', timezone: 'Asia/Makassar', mealCost: '$4', lat: -8.3405, lng: 115.0920 },
    { name: 'India', city: 'Mumbai', timezone: 'Asia/Kolkata', mealCost: '$4', lat: 19.0760, lng: 72.8777 },
    { name: 'India', city: 'Delhi', timezone: 'Asia/Kolkata', mealCost: '$3', lat: 28.7041, lng: 77.1025 },
    { name: 'India', city: 'Bangalore', timezone: 'Asia/Kolkata', mealCost: '$4', lat: 12.9716, lng: 77.5946 },
    { name: 'India', city: 'Chennai', timezone: 'Asia/Kolkata', mealCost: '$3', lat: 13.0827, lng: 80.2707 },
    { name: 'Pakistan', city: 'Karachi', timezone: 'Asia/Karachi', mealCost: '$2', lat: 24.8607, lng: 67.0011 },
    { name: 'Bangladesh', city: 'Dhaka', timezone: 'Asia/Dhaka', mealCost: '$2', lat: 23.8103, lng: 90.4125 },
    { name: 'Sri Lanka', city: 'Colombo', timezone: 'Asia/Colombo', mealCost: '$3', lat: 6.9271, lng: 79.8612 },

    // Middle East
    { name: 'UAE', city: 'Dubai', timezone: 'Asia/Dubai', mealCost: '$10', lat: 25.2048, lng: 55.2708 },
    { name: 'UAE', city: 'Abu Dhabi', timezone: 'Asia/Dubai', mealCost: '$12', lat: 24.4539, lng: 54.3773 },
    { name: 'Saudi Arabia', city: 'Riyadh', timezone: 'Asia/Riyadh', mealCost: '$8', lat: 24.7136, lng: 46.6753 },
    { name: 'Qatar', city: 'Doha', timezone: 'Asia/Qatar', mealCost: '$12', lat: 25.2854, lng: 51.5310 },
    { name: 'Kuwait', city: 'Kuwait City', timezone: 'Asia/Kuwait', mealCost: '$10', lat: 29.3759, lng: 47.9774 },
    { name: 'Israel', city: 'Tel Aviv', timezone: 'Asia/Jerusalem', mealCost: '$18', lat: 32.0853, lng: 34.7818 },
    { name: 'Jordan', city: 'Amman', timezone: 'Asia/Amman', mealCost: '$8', lat: 31.9539, lng: 35.9106 },
    { name: 'Lebanon', city: 'Beirut', timezone: 'Asia/Beirut', mealCost: '$12', lat: 33.8938, lng: 35.5018 },

    // Africa
    { name: 'South Africa', city: 'Cape Town', timezone: 'Africa/Johannesburg', mealCost: '$8', lat: -33.9249, lng: 18.4241 },
    { name: 'South Africa', city: 'Johannesburg', timezone: 'Africa/Johannesburg', mealCost: '$7', lat: -26.2041, lng: 28.0473 },
    { name: 'Egypt', city: 'Cairo', timezone: 'Africa/Cairo', mealCost: '$3', lat: 30.0444, lng: 31.2357 },
    { name: 'Morocco', city: 'Casablanca', timezone: 'Africa/Casablanca', mealCost: '$5', lat: 33.5731, lng: -7.5898 },
    { name: 'Nigeria', city: 'Lagos', timezone: 'Africa/Lagos', mealCost: '$4', lat: 6.5244, lng: 3.3792 },
    { name: 'Kenya', city: 'Nairobi', timezone: 'Africa/Nairobi', mealCost: '$5', lat: -1.2921, lng: 36.8219 },
    { name: 'Ghana', city: 'Accra', timezone: 'Africa/Accra', mealCost: '$4', lat: 5.6037, lng: -0.1870 },

    // Oceania
    { name: 'Australia', city: 'Sydney', timezone: 'Australia/Sydney', mealCost: '$18', lat: -33.8688, lng: 151.2093 },
    { name: 'Australia', city: 'Melbourne', timezone: 'Australia/Melbourne', mealCost: '$17', lat: -37.8136, lng: 144.9631 },
    { name: 'Australia', city: 'Brisbane', timezone: 'Australia/Brisbane', mealCost: '$16', lat: -27.4698, lng: 153.0251 },
    { name: 'Australia', city: 'Perth', timezone: 'Australia/Perth', mealCost: '$16', lat: -31.9505, lng: 115.8605 },
    { name: 'New Zealand', city: 'Auckland', timezone: 'Pacific/Auckland', mealCost: '$15', lat: -36.8485, lng: 174.7633 },
    { name: 'New Zealand', city: 'Wellington', timezone: 'Pacific/Auckland', mealCost: '$14', lat: -41.2865, lng: 174.7762 },

    // Russia
    { name: 'Russia', city: 'Moscow', timezone: 'Europe/Moscow', mealCost: '$8', lat: 55.7558, lng: 37.6176 },
    { name: 'Russia', city: 'St. Petersburg', timezone: 'Europe/Moscow', mealCost: '$7', lat: 59.9311, lng: 30.3609 },
    { name: 'Russia', city: 'Novosibirsk', timezone: 'Asia/Novosibirsk', mealCost: '$6', lat: 55.0084, lng: 82.9357 },
    { name: 'Russia', city: 'Vladivostok', timezone: 'Asia/Vladivostok', mealCost: '$7', lat: 43.1056, lng: 131.8735 }
];

// Global state
let userLocation = { city: 'Detecting...', timezone: 'UTC', country: '' };
let workingHours = { start: 12, end: 17 }; // 12pm to 5pm ET
let currentFilter = 'all';
let searchTerm = '';
let worldData = null;

// Utility functions
function formatInTimeZone(date, timezone) {
    return new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    }).format(date);
}

function getCurrentTimeInTimeZone(timezone) {
    return new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    }).format(new Date());
}

function formatHour(hour) {
    if (hour === 0) return '12 AM';
    if (hour < 12) return `${hour} AM`;
    if (hour === 12) return '12 PM';
    return `${hour - 12} PM`;
}

function getAlignmentQuality(startHour, endHour) {
    // Check if working hours overlap with good local time window (4am-9pm)
    const goodStart = 4;  // 4am
    const goodEnd = 21;   // 9pm

    // Check for any overlap between working hours and good time window
    const hasOverlap = (startHour < goodEnd && endHour > goodStart);

    if (hasOverlap) {
        // Calculate how much overlap there is
        const overlapStart = Math.max(startHour, goodStart);
        const overlapEnd = Math.min(endHour, goodEnd);
        const overlapHours = overlapEnd - overlapStart;
        const totalWorkHours = endHour - startHour;
        const overlapPercentage = overlapHours / totalWorkHours;

        // Perfect: 80%+ overlap with good hours
        if (overlapPercentage >= 0.8) {
            return { quality: 'Perfect', color: '#10b981', textColor: 'text-green-600' };
        }
        // Good: 50%+ overlap with good hours
        if (overlapPercentage >= 0.5) {
            return { quality: 'Good', color: '#f59e0b', textColor: 'text-yellow-600' };
        }
        // Fair: any overlap with good hours
        return { quality: 'Fair', color: '#6b7280', textColor: 'text-gray-600' };
    }

    // Poor: no overlap with good hours (working entirely outside 4am-9pm)
    return { quality: 'Poor', color: '#ef4444', textColor: 'text-red-600' };
}

function getWorkingHours(timezone, startHour, endHour) {
    // Simple timezone offset approach
    const now = new Date();

    // Get current time in both ET and target timezone to calculate offset
    const etTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
    const targetTime = new Date().toLocaleString("en-US", {timeZone: timezone});

    // Parse the times to get hour difference
    const etHour = new Date(etTime).getHours();
    const targetHour = new Date(targetTime).getHours();

    // Calculate the offset (accounting for day wraparound)
    let offset = targetHour - etHour;

    // Handle day boundary issues
    if (offset > 12) offset -= 24;
    if (offset < -12) offset += 24;

    // Apply offset to working hours
    let localStartHour = startHour + offset;
    let localEndHour = endHour + offset;

    // Handle 24-hour wraparound
    if (localStartHour < 0) localStartHour += 24;
    if (localStartHour >= 24) localStartHour -= 24;
    if (localEndHour < 0) localEndHour += 24;
    if (localEndHour >= 24) localEndHour -= 24;

    // Format for display
    const startLocal = formatHour(localStartHour) + ':00';
    const endLocal = formatHour(localEndHour) + ':00';

    const alignment = getAlignmentQuality(localStartHour, localEndHour);

    return {
        startLocal,
        endLocal,
        alignment,
        currentTime: getCurrentTimeInTimeZone(timezone)
    };
}

function getFilteredCountries() {
    return countries.filter(country => {
        const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             country.city.toLowerCase().includes(searchTerm.toLowerCase());

        if (currentFilter === 'good') {
            const { alignment } = getWorkingHours(country.timezone, workingHours.start, workingHours.end);
            return matchesSearch && (alignment.quality === 'Perfect' || alignment.quality === 'Good');
        }

        return matchesSearch;
    });
}

function createFallbackWorldData() {
    return {
        type: "FeatureCollection",
        features: [
            // North America
            {
                type: "Feature",
                properties: { NAME: "United States" },
                geometry: {
                    type: "Polygon",
                    coordinates: [[
                        [-158, 22], [-158, 71], [-68, 71], [-68, 22], [-158, 22]
                    ]]
                }
            },
            {
                type: "Feature",
                properties: { NAME: "Canada" },
                geometry: {
                    type: "Polygon",
                    coordinates: [[
                        [-141, 42], [-52, 42], [-52, 84], [-141, 84], [-141, 42]
                    ]]
                }
            },
            {
                type: "Feature",
                properties: { NAME: "Mexico" },
                geometry: {
                    type: "Polygon",
                    coordinates: [[
                        [-117, 14], [-86, 14], [-86, 33], [-117, 33], [-117, 14]
                    ]]
                }
            },
            // South America
            {
                type: "Feature",
                properties: { NAME: "Brazil" },
                geometry: {
                    type: "Polygon",
                    coordinates: [[
                        [-74, -34], [-34, -34], [-34, 5], [-74, 5], [-74, -34]
                    ]]
                }
            },
            {
                type: "Feature",
                properties: { NAME: "Argentina" },
                geometry: {
                    type: "Polygon",
                    coordinates: [[
                        [-73, -55], [-53, -55], [-53, -22], [-73, -22], [-73, -55]
                    ]]
                }
            },
            // Europe
            {
                type: "Feature",
                properties: { NAME: "United Kingdom" },
                geometry: {
                    type: "Polygon",
                    coordinates: [[
                        [-8, 50], [2, 50], [2, 61], [-8, 61], [-8, 50]
                    ]]
                }
            },
            {
                type: "Feature",
                properties: { NAME: "Germany" },
                geometry: {
                    type: "Polygon",
                    coordinates: [[
                        [5, 47], [15, 47], [15, 55], [5, 55], [5, 47]
                    ]]
                }
            },
            {
                type: "Feature",
                properties: { NAME: "France" },
                geometry: {
                    type: "Polygon",
                    coordinates: [[
                        [-5, 42], [8, 42], [8, 51], [-5, 51], [-5, 42]
                    ]]
                }
            },
            {
                type: "Feature",
                properties: { NAME: "Spain" },
                geometry: {
                    type: "Polygon",
                    coordinates: [[
                        [-10, 36], [4, 36], [4, 44], [-10, 44], [-10, 36]
                    ]]
                }
            },
            {
                type: "Feature",
                properties: { NAME: "Italy" },
                geometry: {
                    type: "Polygon",
                    coordinates: [[
                        [6, 36], [19, 36], [19, 47], [6, 47], [6, 36]
                    ]]
                }
            },
            {
                type: "Feature",
                properties: { NAME: "Russia" },
                geometry: {
                    type: "Polygon",
                    coordinates: [[
                        [19, 41], [-170, 41], [-170, 82], [19, 82], [19, 41]
                    ]]
                }
            },
            // Asia
            {
                type: "Feature",
                properties: { NAME: "China" },
                geometry: {
                    type: "Polygon",
                    coordinates: [[
                        [73, 18], [135, 18], [135, 54], [73, 54], [73, 18]
                    ]]
                }
            },
            {
                type: "Feature",
                properties: { NAME: "India" },
                geometry: {
                    type: "Polygon",
                    coordinates: [[
                        [68, 6], [97, 6], [97, 37], [68, 37], [68, 6]
                    ]]
                }
            },
            {
                type: "Feature",
                properties: { NAME: "Japan" },
                geometry: {
                    type: "Polygon",
                    coordinates: [[
                        [129, 31], [146, 31], [146, 46], [129, 46], [129, 31]
                    ]]
                }
            },
            {
                type: "Feature",
                properties: { NAME: "Australia" },
                geometry: {
                    type: "Polygon",
                    coordinates: [[
                        [113, -44], [154, -44], [154, -10], [113, -10], [113, -44]
                    ]]
                }
            },
            // Africa
            {
                type: "Feature",
                properties: { NAME: "South Africa" },
                geometry: {
                    type: "Polygon",
                    coordinates: [[
                        [16, -35], [33, -35], [33, -22], [16, -22], [16, -35]
                    ]]
                }
            },
            // Southeast Asia
            {
                type: "Feature",
                properties: { NAME: "Indonesia" },
                geometry: {
                    type: "Polygon",
                    coordinates: [[
                        [95, -11], [141, -11], [141, 6], [95, 6], [95, -11]
                    ]]
                }
            }
        ]
    };
}

// Load world map data
async function loadWorldData() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson');
        worldData = await response.json();
    } catch (error) {
        console.error('Error loading world data:', error);
        // If the primary source fails, try topojson format
        try {
            const response = await fetch('https://raw.githubusercontent.com/topojson/world-atlas/master/world-110m.json');
            const world = await response.json();

            if (typeof topojson !== 'undefined' && topojson.feature) {
                worldData = topojson.feature(world, world.objects.countries);
            } else {
                worldData = createFallbackWorldData();
            }
        } catch (fallbackError) {
            console.error('Error loading fallback world data:', fallbackError);
            worldData = createFallbackWorldData();
        }
    }

    renderMap();
}

// Initialize user location detection
function detectLocation() {
    try {
        const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const matchedCountry = countries.find(country => country.timezone === userTimezone);

        if (matchedCountry) {
            userLocation = {
                city: matchedCountry.city,
                timezone: matchedCountry.timezone,
                country: matchedCountry.name
            };
        } else {
            const cityName = userTimezone.split('/').pop()?.replace('_', ' ') || 'Unknown';
            userLocation = {
                city: cityName,
                timezone: userTimezone,
                country: 'Unknown'
            };
        }
    } catch (error) {
        console.error('Could not detect location:', error);
        userLocation = {
            city: 'Unknown',
            timezone: 'UTC',
            country: 'Unknown'
        };
    }

    updateLocationDisplay();
}

// Update location display
function updateLocationDisplay() {
    const locationElement = document.getElementById('user-location');
    locationElement.textContent = `${userLocation.country} (${userLocation.city})`;
}

// Update time displays
function updateTimes() {
    const userTimeElement = document.getElementById('user-time');
    const easternTimeElement = document.getElementById('eastern-time');

    userTimeElement.textContent = getCurrentTimeInTimeZone(userLocation.timezone);
    easternTimeElement.textContent = getCurrentTimeInTimeZone('America/New_York');
}

// Update working hours display
function updateWorkingHoursDisplay() {
    const displayElement = document.getElementById('working-hours-display');
    displayElement.textContent = `${formatHour(workingHours.start)} - ${formatHour(workingHours.end)} ET`;
}

// Populate hour select options
function populateHourSelects() {
    const startHourSelect = document.getElementById('start-hour');
    const endHourSelect = document.getElementById('end-hour');

    startHourSelect.innerHTML = '';
    endHourSelect.innerHTML = '';

    for (let i = 0; i < 24; i++) {
        const option1 = document.createElement('option');
        option1.value = i;
        option1.textContent = formatHour(i);
        if (i === workingHours.start) option1.selected = true;
        startHourSelect.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = i;
        option2.textContent = formatHour(i);
        if (i === workingHours.end) option2.selected = true;
        endHourSelect.appendChild(option2);
    }
}

// Render map
function renderMap() {
    if (!worldData) return;

    const svg = d3.select('#map-svg');
    svg.selectAll('*').remove();

    const width = 1000;
    const height = 400;

    // Set the SVG dimensions
    svg.attr('width', width).attr('height', height);

    // Create projection
    const projection = d3.geoNaturalEarth1()
        .scale(120)
        .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    // Draw countries
    svg.selectAll('.country')
        .data(worldData.features || [])
        .enter().append('path')
        .attr('class', 'country')
        .attr('d', path)
        .attr('fill', '#e5e7eb')
        .attr('stroke', '#ffffff')
        .attr('stroke-width', 0.5)
        .on('mouseover', function() {
            d3.select(this).attr('fill', '#d1d5db');
        })
        .on('mouseout', function() {
            d3.select(this).attr('fill', '#e5e7eb');
        });

    // Add cities
    const filteredCountries = getFilteredCountries();

    const cityGroup = svg.selectAll('.city')
        .data(filteredCountries)
        .enter().append('g')
        .attr('class', 'city')
        .attr('transform', d => {
            const coords = projection([d.lng, d.lat]);
            return coords ? `translate(${coords[0]}, ${coords[1]})` : 'translate(-999, -999)';
        });

    cityGroup.append('circle')
        .attr('class', 'city-marker')
        .attr('r', 6)
        .attr('fill', d => {
            const { alignment } = getWorkingHours(d.timezone, workingHours.start, workingHours.end);
            return alignment.color;
        })
        .attr('fill-opacity', 0.8)
        .attr('stroke', '#ffffff')
        .attr('stroke-width', 2)
        .on('mouseover', function(event, d) {
            d3.select(this)
                .transition()
                .duration(200)
                .attr('r', 10)
                .attr('fill-opacity', 1);
            showInfoPanel(d);
        })
        .on('mouseout', function() {
            d3.select(this)
                .transition()
                .duration(200)
                .attr('r', 6)
                .attr('fill-opacity', 0.8);
        });

    // City labels removed - showing only on hover

    updateStats();
}

// Show info panel
function showInfoPanel(country) {
    const panel = document.getElementById('info-panel');
    const { startLocal, endLocal, alignment, currentTime } = getWorkingHours(country.timezone, workingHours.start, workingHours.end);

    panel.innerHTML = `
        <div class="font-bold text-gray-900 text-lg">${country.city}</div>
        <div class="text-sm text-gray-600 mb-3">${country.name}</div>

        <div class="space-y-3">
            <div class="flex items-center gap-2 ${alignment.textColor}">
                <div class="w-3 h-3 rounded-full" style="background-color: ${alignment.color}"></div>
                <span class="font-semibold">${alignment.quality} Alignment</span>
            </div>

            <div class="bg-gray-50 rounded-lg p-3">
                <div class="text-xs text-gray-600 mb-1">Working Hours</div>
                <div class="font-medium text-gray-900">
                    ${startLocal} - ${endLocal}
                </div>
            </div>

            <div class="text-sm text-gray-600">
                <div>Current time: <span class="font-medium text-gray-900">${currentTime}</span></div>
                <div>Meal cost: <span class="font-medium text-green-700">${country.mealCost}</span></div>
            </div>
        </div>
    `;

    panel.classList.remove('hidden');

    // Hide panel after 5 seconds
    setTimeout(() => {
        panel.classList.add('hidden');
    }, 5000);
}

// Update stats
function updateStats() {
    const filteredCountries = getFilteredCountries();
    const perfect = filteredCountries.filter(c => getWorkingHours(c.timezone, workingHours.start, workingHours.end).alignment.quality === 'Perfect').length;
    const good = filteredCountries.filter(c => getWorkingHours(c.timezone, workingHours.start, workingHours.end).alignment.quality === 'Good').length;

    document.getElementById('total-cities').textContent = filteredCountries.length;
    document.getElementById('perfect-count').textContent = perfect;
    document.getElementById('good-count').textContent = good;
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize
    detectLocation();
    populateHourSelects();
    updateWorkingHoursDisplay();
    loadWorldData();

    // Update times every second
    setInterval(updateTimes, 1000);
    updateTimes();

    // Settings modal
    document.getElementById('settings-btn').addEventListener('click', () => {
        document.getElementById('settings-modal').classList.remove('hidden');
    });

    document.getElementById('close-settings').addEventListener('click', () => {
        document.getElementById('settings-modal').classList.add('hidden');
    });

    document.getElementById('cancel-settings').addEventListener('click', () => {
        document.getElementById('settings-modal').classList.add('hidden');
        populateHourSelects(); // Reset to current values
    });

    document.getElementById('save-settings').addEventListener('click', () => {
        const newStart = parseInt(document.getElementById('start-hour').value);
        const newEnd = parseInt(document.getElementById('end-hour').value);

        workingHours = { start: newStart, end: newEnd };
        updateWorkingHoursDisplay();
        renderMap();

        document.getElementById('settings-modal').classList.add('hidden');
    });

    // Search
    document.getElementById('search-input').addEventListener('input', (e) => {
        searchTerm = e.target.value;
        renderMap();
    });

    // Filters
    document.getElementById('filter-all').addEventListener('click', (e) => {
        currentFilter = 'all';
        e.target.classList.add('bg-blue-600', 'text-white');
        e.target.classList.remove('bg-white', 'text-gray-700', 'border', 'border-gray-300');

        document.getElementById('filter-good').classList.remove('bg-blue-600', 'text-white');
        document.getElementById('filter-good').classList.add('bg-white', 'text-gray-700', 'border', 'border-gray-300');

        renderMap();
    });

    document.getElementById('filter-good').addEventListener('click', (e) => {
        currentFilter = 'good';
        e.target.classList.add('bg-blue-600', 'text-white');
        e.target.classList.remove('bg-white', 'text-gray-700', 'border', 'border-gray-300');

        document.getElementById('filter-all').classList.remove('bg-blue-600', 'text-white');
        document.getElementById('filter-all').classList.add('bg-white', 'text-gray-700', 'border', 'border-gray-300');

        renderMap();
    });
});