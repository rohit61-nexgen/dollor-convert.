const API_KEY = '47ff11da71a7460a887afddd'; // Replace with your API key
let countries = [];

// Starfield initialization
function createStars() {
    const starsContainer = document.querySelector('.stars');
    for(let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.style.cssText = `
            position: absolute;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            width: ${Math.random() * 2}px;
            height: ${Math.random() * 2}px;
            background: var(--star-color);
            border-radius: 50%;
            animation: twinkle ${Math.random() * 3 + 2}s infinite;
        `;
        starsContainer.appendChild(star);
    }
}

// Country data handling
async function fetchCountries() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        
        countries = data
            .filter(country => country.currencies)
            .map(country => {
                const currencyCode = Object.keys(country.currencies)[0];
                return {
                    name: country.name.common,
                    code: country.cca2,
                    currency: currencyCode,
                    symbol: country.currencies[currencyCode].symbol,
                    currencyName: country.currencies[currencyCode].name
                };
            })
            .sort((a, b) => a.name.localeCompare(b.name));

        renderCountries();
        populateCurrencyDropdowns();
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to load country data. Please refresh.');
    }
}

function populateCurrencyDropdowns() {
    const source = document.getElementById('sourceCurrency');
    const target = document.getElementById('targetCurrency');
    
    // Get unique currencies
    const currencies = [...new Set(countries.map(c => c.currency))];
    
    currencies.forEach(currency => {
        const country = countries.find(c => c.currency === currency);
        const option = document.createElement('option');
        option.value = currency;
        option.textContent = `${currency} (${country.symbol}) - ${country.currencyName}`;
        source.appendChild(option.cloneNode(true));
        target.appendChild(option);
    });
    
    // Set default values
    source.value = 'USD';
    target.value = 'INR';
}

function renderCountries(filter = '') {
    const container = document.getElementById('countryList');
    container.innerHTML = '';
    
    countries
        .filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))
        .forEach(country => {
            const item = document.createElement('div');
            item.className = 'col-12 col-md-6 col-lg-4 country-item';
            item.innerHTML = `
                <div class="p-3 rounded shadow-sm d-flex justify-content-between align-items-center">
                    <div>
                        <span class="emoji-flag">${getEmojiFlag(country.code)}</span>
                        <span>${country.name}</span>
                    </div>
                    <button class="btn btn-sm btn-outline-primary" 
                            onclick="showBlog('${country.name}')">📝 Blog</button>
                </div>
            `;
            item.onclick = () => {
                document.getElementById('targetCurrency').value = country.currency;
                convertCurrency();
            };
            container.appendChild(item);
        });
}

function redirectToPage() {
    // Close modal
    // window.location.href will redirect to the desired page
    window.location.href = "demo.html";
  }

// Conversion functionality
async function convertCurrency() {
    const source = document.getElementById('sourceCurrency').value;
    const target = document.getElementById('targetCurrency').value;
    const amount = document.getElementById('amount').value;

    if (!amount || amount < 1) {
        alert('Please enter a valid amount');
        return;
    }

    try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${source}`);
        const data = await response.json();
        
        if (data.result === 'error') {
            throw new Error(data['error-type']);
        }

        const rate = data.conversion_rates[target];
        const result = (amount * rate).toFixed(2);
        
        document.getElementById('conversionResult').style.display = 'block';
        document.getElementById('resultText').innerHTML = `
            <div class="fs-5">
                💸 ${amount} ${source} = <span class="text-primary">${result} ${target}</span>
            </div>
            <div class="text-muted mt-2">
                📊 1 ${source} = ${rate.toFixed(4)} ${target}
            </div>
        `;
    } catch (error) {
        alert('Error converting currency. Please check your inputs and try again.');
    }
}

// Utility functions
function swapCurrencies() {
    const source = document.getElementById('sourceCurrency');
    const target = document.getElementById('targetCurrency');
    const temp = source.value;
    source.value = target.value;
    target.value = temp;
    convertCurrency();
}

function filterCountries() {
    const searchValue = document.getElementById('search').value;
    renderCountries(searchValue);
}

function showBlog(country) {
    document.getElementById('blogTitle').textContent = `${country} Travel Guide`;
    document.getElementById('blogContent').innerHTML = `
        <h5>✈️ Top Attractions</h5>
        <p>Discover the best places to visit in ${country}...</p>
        <h5>💵 Currency Information</h5>
        <p>Local currency tips and exchange advice...</p>
    `;
    new bootstrap.Modal(document.getElementById('blogModal')).show();
}

function getEmojiFlag(code) {
    return code.toUpperCase().replace(/./g, char => 
        String.fromCodePoint(127397 + char.charCodeAt())
    );
}

// Initialization
createStars();
fetchCountries();