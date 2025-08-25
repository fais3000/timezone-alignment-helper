// Global variable to store cities data
let cities = [];

// Load cities data from JSON file
async function loadCitiesData() {
    try {
        const response = await fetch('cities.json');
        const data = await response.json();
        cities = data.cities;
    } catch (error) {
        console.error('Error loading cities data:', error);
        // Fallback to empty array if loading fails
        cities = [];
    }
}

// Global state
let userLocation = { city: 'Detecting...', timezone: 'UTC', country: '' };
let workingHours = { start: 12, end: 17 }; // 12pm to 5pm ET
let currentFilter = 'all';
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
            return { quality: 'Perfect', color: '#34C759', textColor: 'text-green-600' };
        }
        // Good: 50%+ overlap with good hours
        if (overlapPercentage >= 0.5) {
            return { quality: 'Good', color: '#FF9500', textColor: 'text-orange-600' };
        }
        // Poor: less than 50% overlap with good hours (merged Fair into Poor)
        return { quality: 'Poor', color: '#FF3B30', textColor: 'text-red-500' };
    }

    // Poor: no overlap with good hours (working entirely outside 4am-9pm)
    return { quality: 'Poor', color: '#FF3B30', textColor: 'text-red-500' };
}

function getWorkingHours(timezone, startHour, endHour) {
    // DST-aware timezone calculation using Intl.DateTimeFormat
    const now = new Date();

    // Get current hour in Eastern Time
    const etFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        hour: 'numeric',
        hour12: false
    });

    // Get current hour in target timezone
    const targetFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        hour: 'numeric',
        hour12: false
    });

    const etHour = parseInt(etFormatter.format(now));
    const targetHour = parseInt(targetFormatter.format(now));

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

function getFilteredCities() {
    return cities.filter(city => {
        if (currentFilter === 'good') {
            const { alignment } = getWorkingHours(city.timezone, workingHours.start, workingHours.end);
            return (alignment.quality === 'Perfect' || alignment.quality === 'Good');
        }
        return true;
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
        const matchedCity = cities.find(city => city.timezone === userTimezone);

        if (matchedCity) {
            userLocation = {
                city: matchedCity.city,
                timezone: matchedCity.timezone,
                country: matchedCity.country
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

// Populate cities table
function populateCitiesTable() {
    const filteredCities = getFilteredCities();
    const tableBody = document.getElementById('cities-table-body');

    if (!tableBody) return;

    tableBody.innerHTML = '';

    // Sort by meal cost (lowest first)
    const sortedCities = filteredCities.sort((a, b) => {
        const costA = parseFloat(a.mealCost.replace('$', ''));
        const costB = parseFloat(b.mealCost.replace('$', ''));
        return costA - costB;
    });

    sortedCities.forEach(city => {
        const { startLocal, endLocal, alignment } = getWorkingHours(city.timezone, workingHours.start, workingHours.end);

        const row = document.createElement('tr');
        row.className = 'table-row border-b border-apple-gray-5 hover:bg-apple-blue/5 cursor-pointer transition-all duration-150';

        row.innerHTML = `
            <td class="py-4 px-3">
                <div>
                    <div class="font-medium text-gray-900">${city.city}</div>
                    <div class="text-sm text-apple-gray">${city.country}</div>
                </div>
            </td>
            <td class="py-4 px-3">
                <div class="flex items-center gap-2">
                    <div class="w-2 h-2 rounded-full" style="background-color: ${alignment.color}"></div>
                    <span class="font-medium text-sm ${alignment.textColor}">${alignment.quality}</span>
                </div>
            </td>
            <td class="py-4 px-3">
                <div class="font-mono text-sm font-medium text-gray-900">${startLocal} - ${endLocal}</div>
                <div class="text-xs text-apple-gray">${city.mealCost}</div>
            </td>
        `;

        // Add click handler to show info panel
        row.addEventListener('click', () => {
            showInfoPanel(city);
        });

        tableBody.appendChild(row);
    });
}

// Render map
function renderMap() {
    if (!worldData) return;

    const svg = d3.select('#map-svg');
    svg.selectAll('*').remove();

    const width = 1000;
    const height = 600;

    // Set the SVG dimensions
    svg.attr('width', width).attr('height', height);

    // Create projection
    const projection = d3.geoNaturalEarth1()
        .scale(180)
        .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    // Draw countries
    svg.selectAll('.country')
        .data(worldData.features || [])
        .enter().append('path')
        .attr('class', 'country')
        .attr('d', path)
        .attr('fill', '#F2F2F7')
        .attr('stroke', '#ffffff')
        .attr('stroke-width', 0.5)
        .on('mouseover', function() {
            d3.select(this).attr('fill', '#E5E5EA');
        })
        .on('mouseout', function() {
            d3.select(this).attr('fill', '#F2F2F7');
        });

    // Add cities
    const filteredCities = getFilteredCities();

    const cityGroup = svg.selectAll('.city')
        .data(filteredCities)
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

    populateCitiesTable();
}

// Show info panel
function showInfoPanel(city) {
    const panel = document.getElementById('info-panel');
    const { startLocal, endLocal, alignment, currentTime } = getWorkingHours(city.timezone, workingHours.start, workingHours.end);

    panel.innerHTML = `        <div class="space-y-5">
            <div>
                <div class="text-xl font-semibold text-gray-900">${city.city}</div>
                <div class="text-base text-apple-gray font-medium">${city.country}</div>
            </div>
            
            <div class="flex items-center gap-3 ${alignment.textColor}">
                <div class="w-3 h-3 rounded-full shadow-apple" style="background-color: ${alignment.color}"></div>
                <span class="font-medium text-base">${alignment.quality} Alignment</span>
            </div>

            <div class="bg-apple-gray-6 rounded-apple-lg p-4 border border-apple-gray-5">
                <div class="text-sm font-medium text-apple-gray mb-2">Working Hours (Local)</div>
                <div class="text-lg font-mono font-medium text-gray-900">
                    ${startLocal} - ${endLocal}
                </div>
            </div>

            <div class="grid grid-cols-2 gap-3 text-sm">
                <div>
                    <div class="text-gray-600 font-medium">Current Time</div>
                    <div class="font-mono font-bold text-gray-900">${currentTime}</div>
                </div>
                <div>
                    <div class="text-gray-600 font-medium">Meal Cost</div>
                    <div class="font-bold text-emerald-700 text-lg">${city.mealCost}</div>
                </div>
            </div>
        </div>
    `;

    panel.classList.remove('hidden');

    // Hide panel after 5 seconds
    setTimeout(() => {
        panel.classList.add('hidden');
    }, 5000);
}

// DST verification function
// To test DST functionality, open browser console and run: verifyDSTFunctionality()
function verifyDSTFunctionality() {
    console.log("=== DST Verification Test ===");
    console.log(`Test Date: ${new Date().toDateString()}`);

    // Test current DST status for different timezones
    const testTimezones = [
        { name: "London", timezone: "Europe/London" },
        { name: "New York", timezone: "America/New_York" },
        { name: "Los Angeles", timezone: "America/Los_Angeles" },
        { name: "Sydney", timezone: "Australia/Sydney" },
        { name: "Phoenix (No DST)", timezone: "America/Phoenix" }
    ];

    const now = new Date();
    const etFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/New_York',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });

    const etTime = etFormatter.format(now);
    console.log(`Current Eastern Time: ${etTime}`);

    testTimezones.forEach(location => {
        // Get current time in the timezone
        const formatter = new Intl.DateTimeFormat('en-US', {
            timeZone: location.timezone,
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZoneName: 'short'
        });

        const timeInZone = formatter.format(now);

        // Test working hours calculation (12 PM - 5 PM ET)
        const workingHoursResult = getWorkingHours(location.timezone, 12, 17);

        // Check if DST is being applied correctly by comparing offset
        const etDate = new Date(now.toLocaleString("en-US", {timeZone: "America/New_York"}));
        const localDate = new Date(now.toLocaleString("en-US", {timeZone: location.timezone}));
        const offsetHours = (localDate.getTime() - etDate.getTime()) / (1000 * 60 * 60);

        console.log(`${location.name}:`);
        console.log(`  Current time: ${timeInZone}`);
        console.log(`  Offset from ET: ${offsetHours.toFixed(1)} hours`);
        console.log(`  12-5 PM ET becomes: ${workingHoursResult.startLocal} - ${workingHoursResult.endLocal}`);
        console.log(`  Alignment: ${workingHoursResult.alignment.quality}`);
        console.log("---");
    });

    // Test specific DST scenario
    console.log("Testing DST calculations:");
    console.log("The system uses Intl.DateTimeFormat which automatically handles DST transitions.");
    console.log("This means timezone offsets are always current and accurate.");
    console.log("=== DST Test Complete ===");
}

// Event listeners
document.addEventListener('DOMContentLoaded', async function() {
    // Load cities data first
    await loadCitiesData();

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

    // Filters
    document.getElementById('filter-all').addEventListener('click', (e) => {
        currentFilter = 'all';
        e.target.classList.add('bg-gradient-to-r', 'from-primary-500', 'to-accent-500', 'text-white');
        e.target.classList.remove('text-gray-700', 'hover:bg-white/50');

        document.getElementById('filter-good').classList.remove('bg-gradient-to-r', 'from-primary-500', 'to-accent-500', 'text-white');
        document.getElementById('filter-good').classList.add('text-gray-700', 'hover:bg-white/50');

        renderMap();
    });

    document.getElementById('filter-good').addEventListener('click', (e) => {
        currentFilter = 'good';
        e.target.classList.add('bg-gradient-to-r', 'from-primary-500', 'to-accent-500', 'text-white');
        e.target.classList.remove('text-gray-700', 'hover:bg-white/50');

        document.getElementById('filter-all').classList.remove('bg-gradient-to-r', 'from-primary-500', 'to-accent-500', 'text-white');
        document.getElementById('filter-all').classList.add('text-gray-700', 'hover:bg-white/50');

        renderMap();
    });
});