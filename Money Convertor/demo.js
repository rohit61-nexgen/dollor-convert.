const countries = [
    { 
        name: "Japan", flag: "🇯🇵", avgBudget: "$2000", midBudget: "$1400", highBudget: "$3000", 
        attractions: ["⛩️ Fushimi Inari Shrine", "🗻 Mount Fuji", "🎎 Gion District, Kyoto"],
        currency: "💴 Yen (JPY)",
        tip: "💡 Tip: Carry cash for small shops",
        atm: "🏧 7-Bank ATMs accept foreign cards"
    },
    { 
        name: "United States", flag: "🇺🇸", avgBudget: "$2500", midBudget: "$1800", highBudget: "$5000", 
        attractions: ["🗽 Statue of Liberty", "🎢 Disneyland", "🏝️ Miami Beach"],
        currency: "💵 Dollar (USD)",
        tip: "💡 Tip: Credit cards are widely accepted",
        atm: "🏧 ATMs available in most convenience stores"
    },
    { 
        name: "India", flag: "🇮🇳", avgBudget: "$500", midBudget: "$300", highBudget: "$1200", 
        attractions: ["🕌 Taj Mahal", "🌿 Kerala Backwaters", "🛕 Jaipur's Amer Fort"],
        currency: "💵 Indian Rupee (INR)",
        tip: "💡 Tip: Bargain at local markets, Tipping is common, especially for hotel staff and taxi drivers",
        atm: "🏧 ATMs are available but carry some cash"
    },
    { 
        name: "France", flag: "🇫🇷", avgBudget: "$1500", midBudget: "$1000", highBudget: "$2500", 
        attractions: ["🗼 Eiffel Tower", "🎭 Louvre Museum", "🏰 Palace of Versailles"],
        currency: "💶 Euro (EUR)",
        tip: "💡 Tip: Contactless payment is common",
        atm: "🏧 Most ATMs accept international cards"
    },
    { 
        name: "Australia", flag: "🇦🇺", avgBudget: "$2200", midBudget: "$1500", highBudget: "$4000", 
        attractions: ["🏖️ Bondi Beach", "🦘 Great Barrier Reef", "🏜️ Uluru"],
        currency: "💵 Australian Dollar (AUD)",
        tip: "💡 Tip: Tipping is not mandatory",
        atm: "🏧 ATMs widely available in cities"
    },
    {
        "name": "Afghanistan",
        "flag": "🇦🇫",
        "avgBudget": "$50",
        "midBudget": "$35",
        "highBudget": "$100",
        "attractions": ["🕌 Blue Mosque in Mazar-i-Sharif", "🏞️ Band-e Amir National Park", "🏰 Herat Citadel"],
        "currency": "Afghan Afghani (AFN)",
        "tip": "Carry cash as credit cards are rarely accepted.",
        "atm": "ATMs are limited; withdraw cash in major cities."
    },
    {
        "name": "Albania",
        "flag": "🇦🇱",
        "avgBudget": "$60",
        "midBudget": "$40",
        "highBudget": "$120",
        "attractions": ["🏰 Berat Castle", "🏖️ Ksamil Beaches", "⛰️ Llogara Pass"],
        "currency": "Albanian Lek (ALL)",
        "tip": "Cash is preferred; some places accept euros.",
        "atm": "ATMs are widely available in cities."
    },
    {
        "name": "Algeria",
        "flag": "🇩🇿",
        "avgBudget": "$70",
        "midBudget": "$50",
        "highBudget": "$150",
        "attractions": ["🏜️ Tassili n'Ajjer", "🏰 Kasbah of Algiers", "🏖️ Oran's Beaches"],
        "currency": "Algerian Dinar (DZD)",
        "tip": "Carry cash; credit cards are not commonly used.",
        "atm": "ATMs available in urban areas; less so in rural regions."
    },
    {
        "name": "Andorra",
        "flag": "🇦🇩",
        "avgBudget": "$100",
        "midBudget": "$70",
        "highBudget": "$200",
        "attractions": ["⛷️ Vallnord Ski Resort", "🏰 Casa de la Vall", "🏞️ Madriu-Perafita-Claror Valley"],
        "currency": "Euro (EUR)",
        "tip": "Credit cards are widely accepted.",
        "atm": "ATMs are readily available."
    },
    {
        "name": "Angola",
        "flag": "🇦🇴",
        "avgBudget": "$80",
        "midBudget": "$60",
        "highBudget": "$160",
        "attractions": ["🏞️ Kalandula Falls", "🏖️ Mussulo Island", "🏰 Fortress of São Miguel"],
        "currency": "Angolan Kwanza (AOA)",
        "tip": "Cash is essential; few places accept credit cards.",
        "atm": "ATMs are scarce; withdraw cash in major cities."
    },
    {
        "name": "Antigua and Barbuda",
        "flag": "🇦🇬",
        "avgBudget": "$150",
        "midBudget": "$100",
        "highBudget": "$250",
        "attractions": ["🏖️ Dickenson Bay", "🏰 Nelson's Dockyard", "🏝️ Half Moon Bay"],
        "currency": "East Caribbean Dollar (XCD)",
        "tip": "US dollars are widely accepted.",
        "atm": "ATMs are available in main towns."
    },
    {
        "name": "Argentina",
        "flag": "🇦🇷",
        "avgBudget": "$90",
        "midBudget": "$60",
        "highBudget": "$180",
        "attractions": ["🏞️ Iguazu Falls", "🏔️ Perito Moreno Glacier", "🏙️ Buenos Aires' Tango Shows"],
        "currency": "Argentine Peso (ARS)",
        "tip": "Cash is preferred; inflation affects prices.",
        "atm": "ATMs are common but may have withdrawal limits."
    },
    {
        "name": "Armenia",
        "flag": "🇦🇲",
        "avgBudget": "$50",
        "midBudget": "$35",
        "highBudget": "$100",
        "attractions": ["⛪ Geghard Monastery", "🏞️ Lake Sevan", "🏰 Garni Temple"],
        "currency": "Armenian Dram (AMD)",
        "tip": "Carry cash; cards accepted in larger establishments.",
        "atm": "ATMs available in cities; less so in rural areas."
    },
    {
        "name": "Australia",
        "flag": "🇦🇺",
        "avgBudget": "$150",
        "midBudget": "$100",
        "highBudget": "$250",
        "attractions": ["🏖️ Great Barrier Reef", "🏞️ Uluru", "🏙️ Sydney Opera House"],
        "currency": "Australian Dollar (AUD)",
        "tip": "Credit cards widely accepted; contactless payments popular.",
        "atm": "ATMs are widely available."
    },
    {
        "name": "Austria",
        "flag": "🇦🇹",
        "avgBudget": "$120",
        "midBudget": "$80",
        "highBudget": "$200",
        "attractions": ["🏰 Schönbrunn Palace", "⛷️ Austrian Alps", "🎼 Vienna State Opera"],
        "currency": "Euro (EUR)",
        "tip": "Cash preferred in smaller establishments.",
        "atm": "ATMs are readily available."
    },
    {
        "name": "Azerbaijan",
        "flag": "🇦🇿",
        "avgBudget": "$70",
        "midBudget": "$50",
        "highBudget": "$140",
        "attractions": ["🏙️ Baku Old City", "🔥 Yanar Dag", "🏞️ Gobustan National Park"],
        "currency": "Azerbaijani Manat (AZN)",
        "tip": "Cash is widely used; cards accepted in larger venues.",
        "atm": "ATMs available in cities; limited in rural areas."
    },
  
   
    
    { 
        name: "Bahamas", flag: "🇧🇸", avgBudget: "$2500", midBudget: "$2000", highBudget: "$4000", 
        attractions: ["🏖️ Nassau Beaches", "🏝️ Exuma Cays", "🌊 Blue Hole"],
        currency: "💵 Bahamian Dollar (BSD)",
        tip: "💡 Tip: Tipping is common, around 15-20% in restaurants.",
        atm: "🏧 ATMs are widely available in Nassau and Freeport."
    },
    { 
        name: "Bahrain", flag: "🇧🇭", avgBudget: "$1500", midBudget: "$1200", highBudget: "$2500", 
        attractions: ["🕌 Al Fateh Grand Mosque", "🏙️ Bahrain World Trade Center", "🏖️ Manama Beaches"],
        currency: "💵 Bahraini Dinar (BHD)",
        tip: "💡 Tip: Tipping is not mandatory, but a 10% tip is appreciated.",
        atm: "🏧 ATMs are readily available in most areas, especially in Manama."
    },
    { 
        name: "Bangladesh", flag: "🇧🇩", avgBudget: "$400", midBudget: "$300", highBudget: "$800", 
        attractions: ["🏰 Lalbagh Fort", "🏞️ Sundarbans", "🏙️ Dhaka"],
        currency: "💵 Taka (BDT)",
        tip: "💡 Tip: Tipping is not expected, but small tips are appreciated in restaurants.",
        atm: "🏧 ATMs are available in larger cities, but not as widespread in rural areas."
    },
    { 
        name: "Barbados", flag: "🇧🇧", avgBudget: "$2000", midBudget: "$1500", highBudget: "$3500", 
        attractions: ["🏖️ Crane Beach", "🌊 Harrison’s Cave", "🏙️ Bridgetown"],
        currency: "💵 Barbadian Dollar (BBD)",
        tip: "💡 Tip: Tipping is customary, 10-15% in restaurants.",
        atm: "🏧 ATMs are widely available in Bridgetown and major tourist areas."
    },
    { 
        name: "Belarus", flag: "🇧🇾", avgBudget: "$600", midBudget: "$450", highBudget: "$1200", 
        attractions: ["🏰 Brest Fortress", "🏞️ Belovezhskaya Pushcha National Park", "🎨 National Art Museum of Belarus"],
        currency: "💵 Ruble (BYN)",
        tip: "💡 Tip: Tipping is not mandatory, but 10% is appreciated in restaurants.",
        atm: "🏧 ATMs are available in cities like Minsk, but limited in rural areas."
    },
    { 
        name: "Belgium", flag: "🇧🇪", avgBudget: "$1500", midBudget: "$1200", highBudget: "$3000", 
        attractions: ["🏰 Atomium", "🎨 Museum of Fine Arts", "🏙️ Grand Place"],
        currency: "💵 Euro (EUR)",
        tip: "💡 Tip: Tipping is not obligatory, but leaving small change or 5-10% is appreciated.",
        atm: "🏧 ATMs are widely available in major cities like Brussels and Antwerp."
    },
    { 
        name: "Belize", flag: "🇧🇿", avgBudget: "$1000", midBudget: "$800", highBudget: "$2000", 
        attractions: ["🏝️ Ambergris Caye", "🏰 Mayan Ruins of Xunantunich", "🐠 Hol Chan Marine Reserve"],
        currency: "💵 Belize Dollar (BZD)",
        tip: "💡 Tip: Tipping is common in Belize, usually around 10-15% in restaurants.",
        atm: "🏧 ATMs are available in Belize City and major tourist spots."
    },
    { 
        name: "Benin", flag: "🇧🇯", avgBudget: "$400", midBudget: "$300", highBudget: "$800", 
        attractions: ["🏰 Abomey Royal Palaces", "🏝️ Ouidah Beach", "🎭 Benin Museum of Contemporary Art"],
        currency: "💵 CFA Franc (XOF)",
        tip: "💡 Tip: Tipping is not required but appreciated for services.",
        atm: "🏧 ATMs are available in Cotonou and major towns."
    },
    { 
        name: "Bermuda", flag: "🇧🇲", avgBudget: "$3000", midBudget: "$2500", highBudget: "$6000", 
        attractions: ["🏖️ Horseshoe Bay", "🏙️ Hamilton", "🏝️ Crystal Caves"],
        currency: "💵 Bermudian Dollar (BMD)",
        tip: "💡 Tip: Tipping is common, around 10-15% in restaurants.",
        atm: "🏧 ATMs are widely available throughout Bermuda."
    },
    { 
        name: "Bhutan", flag: "🇧🇹", avgBudget: "$1500", midBudget: "$1000", highBudget: "$2500", 
        attractions: ["🏰 Paro Taktsang", "⛰️ Tiger’s Nest Monastery", "🏞️ Phobjikha Valley"],
        currency: "💵 Ngultrum (BTN)",
        tip: "💡 Tip: Tipping is not customary but appreciated in higher-end establishments.",
        atm: "🏧 ATMs are available in Thimphu and Paro."
    },
    { 
        name: "Bolivia", flag: "🇧🇴", avgBudget: "$600", midBudget: "$450", highBudget: "$1200", 
        attractions: ["🏞️ Uyuni Salt Flats", "🏰 La Paz", "⛰️ Death Road"],
        currency: "💵 Bolivian Boliviano (BOB)",
        tip: "💡 Tip: Tipping is not compulsory, but small tips are appreciated in restaurants.",
        atm: "🏧 ATMs are available in La Paz and other major cities."
    },
    { 
        name: "Bosnia and Herzegovina", flag: "🇧🇦", avgBudget: "$700", midBudget: "$500", highBudget: "$1500", 
        attractions: ["🏰 Old Bridge", "🏞️ Kravice Waterfalls", "🏙️ Sarajevo"],
        currency: "💵 Convertible Mark (BAM)",
        tip: "💡 Tip: Tipping is appreciated, usually around 10% in restaurants.",
        atm: "🏧 ATMs are available in Sarajevo and other cities."
    },
    { 
        name: "Botswana", flag: "🇧🇼", avgBudget: "$1500", midBudget: "$1200", highBudget: "$3000", 
        attractions: ["🏞️ Okavango Delta", "🦁 Chobe National Park", "🏜️ Makgadikgadi Salt Pans"],
        currency: "💵 Pula (BWP)",
        tip: "💡 Tip: Tipping is common in Botswana, typically around 10% in restaurants.",
        atm: "🏧 ATMs are available in major cities like Gaborone."
    },
    { 
        name: "Brazil", flag: "🇧🇷", avgBudget: "$1200", midBudget: "$900", highBudget: "$2500", 
        attractions: ["🎉 Rio Carnival", "🏖️ Copacabana Beach", "🏞️ Amazon Rainforest"],
        currency: "💵 Real (BRL)",
        tip: "💡 Tip: Tipping is not mandatory but appreciated, usually around 10%.",
        atm: "🏧 ATMs are available in cities and tourist centers."
    },
    
        { 
            name: "Cambodia", flag: "🇰🇭", avgBudget: "$600", midBudget: "$400", highBudget: "$1000", 
            attractions: ["🏰 Angkor Wat", "🏞️ Tonle Sap Lake", "🏖️ Sihanoukville Beaches"],
            currency: "💵 Riel (KHR)",
            tip: "💡 Tip: Tipping is not expected, but small tips are appreciated for services.",
            atm: "🏧 ATMs are available in Phnom Penh and Siem Reap."
        },
        { 
            name: "Cameroon", flag: "🇨🇲", avgBudget: "$500", midBudget: "$350", highBudget: "$800", 
            attractions: ["🏞️ Mount Cameroon", "🏰 Foumban Royal Palace", "🦁 Waza National Park"],
            currency: "💵 CFA Franc (XAF)",
            tip: "💡 Tip: Tipping is not common but appreciated in tourist areas.",
            atm: "🏧 ATMs are available in Yaoundé and Douala."
        },
        { 
            name: "Canada", flag: "🇨🇦", avgBudget: "$2000", midBudget: "$1500", highBudget: "$4000", 
            attractions: ["🍁 Niagara Falls", "🏞️ Banff National Park", "🏙️ Toronto CN Tower"],
            currency: "💵 Canadian Dollar (CAD)",
            tip: "💡 Tip: Tipping is customary, typically 10-15% in restaurants.",
            atm: "🏧 ATMs are widely available in cities across Canada."
        },
        { 
            name: "Cape Verde", flag: "🇨🇻", avgBudget: "$1000", midBudget: "$800", highBudget: "$2000", 
            attractions: ["🏝️ Sal Island Beaches", "🌋 Fogo Volcano", "🏙️ Praia"],
            currency: "💵 Cape Verdean Escudo (CVE)",
            tip: "💡 Tip: Tipping is not mandatory, but small tips are appreciated.",
            atm: "🏧 ATMs are available in major cities like Praia."
        },
        { 
            name: "Caribbean Netherlands", flag: "🇧🇶", avgBudget: "$2000", midBudget: "$1500", highBudget: "$4000", 
            attractions: ["🏝️ Bonaire Beaches", "🌞 Flamingo Sanctuary", "🏙️ Kralendijk"],
            currency: "💵 US Dollar (USD)",
            tip: "💡 Tip: Tipping is common, usually around 10-15% in restaurants.",
            atm: "🏧 ATMs are available in Bonaire and other main islands."
        },
        { 
            name: "Cayman Islands", flag: "🇰🇾", avgBudget: "$2500", midBudget: "$2000", highBudget: "$5000", 
            attractions: ["🏖️ Seven Mile Beach", "🐢 Stingray City", "🏙️ George Town"],
            currency: "💵 Cayman Islands Dollar (KYD)",
            tip: "💡 Tip: Tipping is customary, around 15-20% in restaurants.",
            atm: "🏧 ATMs are available in George Town and other tourist areas."
        },
        { 
            name: "Central African Republic", flag: "🇨🇫", avgBudget: "$400", midBudget: "$300", highBudget: "$700", 
            attractions: ["🐒 Dzanga-Sangha National Park", "🏞️ Manovo-Gounda St Floris National Park"],
            currency: "💵 CFA Franc (XAF)",
            tip: "💡 Tip: Tipping is not a widespread custom but appreciated for services.",
            atm: "🏧 ATMs are very limited outside of the capital, Bangui."
        },
        { 
            name: "Chad", flag: "🇹🇩", avgBudget: "$600", midBudget: "$450", highBudget: "$1000", 
            attractions: ["🏞️ Zakouma National Park", "🏜️ Tibesti Mountains", "🏙️ N'Djamena"],
            currency: "💵 CFA Franc (XAF)",
            tip: "💡 Tip: Tipping is not common, but small tips are appreciated.",
            atm: "🏧 ATMs are available in N'Djamena and major towns."
        },
        { 
            name: "Chile", flag: "🇨🇱", avgBudget: "$1500", midBudget: "$1200", highBudget: "$3000", 
            attractions: ["🏔️ Torres del Paine", "🏝️ Easter Island", "🏙️ Santiago"],
            currency: "💵 Chilean Peso (CLP)",
            tip: "💡 Tip: Tipping is generally 10% in restaurants.",
            atm: "🏧 ATMs are widely available in cities and towns across Chile."
        },
        { 
            name: "China", flag: "🇨🇳", avgBudget: "$1000", midBudget: "$800", highBudget: "$2000", 
            attractions: ["🏯 Great Wall of China", "🏙️ Forbidden City", "🏞️ Zhangjiajie National Forest Park"],
            currency: "💵 Renminbi (CNY)",
            tip: "💡 Tip: Tipping is not customary but appreciated in touristy areas.",
            atm: "🏧 ATMs are widely available in major cities."
        },
        { 
            name: "Christmas Island", flag: "🇨🇽", avgBudget: "$1500", midBudget: "$1200", highBudget: "$2500", 
            attractions: ["🐢 Christmas Island National Park", "🏝️ Ethel Beach"],
            currency: "💵 Australian Dollar (AUD)",
            tip: "💡 Tip: Tipping is not expected but appreciated for good service.",
            atm: "🏧 ATMs are available in the main town, Flying Fish Cove."
        },
        { 
            name: "Cocos (Keeling) Islands", flag: "🇨🇨", avgBudget: "$2000", midBudget: "$1500", highBudget: "$3500", 
            attractions: ["🏝️ Cocos Islands Beaches", "🐢 Coral Reefs", "🏖️ Lagoon Diving"],
            currency: "💵 Australian Dollar (AUD)",
            tip: "💡 Tip: Tipping is not common in Cocos Islands, but appreciated in high-end establishments.",
            atm: "🏧 ATMs are available in the main town on West Island."
        },
        { 
            name: "Colombia", flag: "🇨🇴", avgBudget: "$1000", midBudget: "$800", highBudget: "$2000", 
            attractions: ["🏖️ Cartagena Beaches", "🏞️ Cocora Valley", "🏙️ Bogotá"],
            currency: "💵 Colombian Peso (COP)",
            tip: "💡 Tip: Tipping is optional but 10-15% is appreciated in restaurants.",
            atm: "🏧 ATMs are widely available in cities and tourist areas."
        },
        { 
            name: "Comoros", flag: "🇰🇲", avgBudget: "$700", midBudget: "$500", highBudget: "$1200", 
            attractions: ["🏝️ Mohéli Marine Park", "🌊 Grande Comore Beaches", "🏙️ Moroni"],
            currency: "💵 Comorian Franc (KMF)",
            tip: "💡 Tip: Tipping is not common but appreciated for good service.",
            atm: "🏧 ATMs are limited, mainly available in Moroni."
        },
        { 
            name: "Cook Islands", flag: "🇨🇰", avgBudget: "$2500", midBudget: "$2000", highBudget: "$5000", 
            attractions: ["🏖️ Aitutaki Lagoon", "🏝️ Rarotonga", "🏙️ Muri Beach"],
            currency: "💵 New Zealand Dollar (NZD)",
            tip: "💡 Tip: Tipping is not expected, but appreciated for great service.",
            atm: "🏧 ATMs are available in Rarotonga and Aitutaki."
        },
        { 
            name: "Costa Rica", flag: "🇨🇷", avgBudget: "$1200", midBudget: "$900", highBudget: "$2500", 
            attractions: ["🏞️ Arenal Volcano", "🏖️ Manuel Antonio National Park", "🌲 Monteverde Cloud Forest"],
            currency: "💵 Costa Rican Colón (CRC)",
            tip: "💡 Tip: Tipping is common, usually around 10% in restaurants.",
            atm: "🏧 ATMs are available in San José and major tourist areas."
        },
        { 
            name: "Croatia", flag: "🇭🇷", avgBudget: "$1200", midBudget: "$900", highBudget: "$2500", 
            attractions: ["🏰 Dubrovnik Old Town", "🏖️ Plitvice Lakes", "🏙️ Split"],
            currency: "💵 Croatian Kuna (HRK)",
            tip: "💡 Tip: Tipping is generally 10% in restaurants.",
            atm: "🏧 ATMs are widely available in cities like Dubrovnik and Split."
        },
        
            // D
            { 
                name: "Denmark", flag: "🇩🇰", avgBudget: "$1500", midBudget: "$1200", highBudget: "$3000", 
                attractions: ["🏰 Nyhavn", "🏞️ Tivoli Gardens", "🏙️ Copenhagen City Centre"],
                currency: "💵 Danish Krone (DKK)",
                tip: "💡 Tip: Tipping is not expected but 5-10% is appreciated for great service.",
                atm: "🏧 ATMs are widely available in major cities like Copenhagen."
            },
            { 
                name: "Djibouti", flag: "🇩🇯", avgBudget: "$800", midBudget: "$600", highBudget: "$1500", 
                attractions: ["🏜️ Lake Assal", "🏝️ Moucha Island", "🏙️ Djibouti City"],
                currency: "💵 Djiboutian Franc (DJF)",
                tip: "💡 Tip: Tipping is not mandatory, but appreciated for good service.",
                atm: "🏧 ATMs are available in the capital, Djibouti City."
            },
            { 
                name: "Dominica", flag: "🇩🇲", avgBudget: "$1200", midBudget: "$1000", highBudget: "$2500", 
                attractions: ["🏞️ Boiling Lake", "🏝️ Champagne Reef", "🏙️ Roseau"],
                currency: "💵 East Caribbean Dollar (XCD)",
                tip: "💡 Tip: Tipping is optional, but appreciated for services.",
                atm: "🏧 ATMs are available in Roseau and some other towns."
            },
            { 
                name: "Dominican Republic", flag: "🇩🇴", avgBudget: "$1500", midBudget: "$1200", highBudget: "$3000", 
                attractions: ["🏖️ Punta Cana Beaches", "🏰 Alcázar de Colón", "🏞️ Jarabacoa"],
                currency: "💵 Dominican Peso (DOP)",
                tip: "💡 Tip: Tipping is expected in restaurants and for service providers.",
                atm: "🏧 ATMs are widely available in major cities and tourist areas."
            },
        
            // E
            { 
                name: "Ecuador", flag: "🇪🇨", avgBudget: "$1000", midBudget: "$800", highBudget: "$2000", 
                attractions: ["🏞️ Galápagos Islands", "🏙️ Quito Old Town", "🏞️ Cotopaxi National Park"],
                currency: "💵 US Dollar (USD)",
                tip: "💡 Tip: Tipping is not expected but appreciated, usually around 10%.",
                atm: "🏧 ATMs are available in major cities like Quito and Guayaquil."
            },
            { 
                name: "Egypt", flag: "🇪🇬", avgBudget: "$1000", midBudget: "$800", highBudget: "$2000", 
                attractions: ["🏰 Pyramids of Giza", "🏞️ Nile River Cruise", "🏙️ Cairo"],
                currency: "💵 Egyptian Pound (EGP)",
                tip: "💡 Tip: Tipping is a common practice, around 10-15% in restaurants.",
                atm: "🏧 ATMs are widely available in major cities and tourist destinations."
            },
            { 
                name: "El Salvador", flag: "🇸🇻", avgBudget: "$800", midBudget: "$600", highBudget: "$1500", 
                attractions: ["🏝️ El Tunco Beach", "🏞️ Cerro Verde National Park", "🏙️ San Salvador"],
                currency: "💵 United States Dollar (USD)",
                tip: "💡 Tip: Tipping is not mandatory but appreciated, especially in tourist areas.",
                atm: "🏧 ATMs are available in San Salvador and other major cities."
            },
            { 
                name: "Equatorial Guinea", flag: "🇬🇶", avgBudget: "$1200", midBudget: "$900", highBudget: "$2000", 
                attractions: ["🏞️ Malabo", "🏖️ Playa de Arena", "🏙️ Bata"],
                currency: "💵 Central African CFA Franc (XAF)",
                tip: "💡 Tip: Tipping is not expected but appreciated for services.",
                atm: "🏧 ATMs are available in the capital, Malabo."
            },
            { 
                name: "Eritrea", flag: "🇪🇷", avgBudget: "$700", midBudget: "$500", highBudget: "$1200", 
                attractions: ["🏝️ Dahlak Archipelago", "🏞️ Asmara", "🏖️ Massawa Beaches"],
                currency: "💵 Nakfa (ERN)",
                tip: "💡 Tip: Tipping is appreciated for good service but not customary.",
                atm: "🏧 ATMs are limited and only available in Asmara."
            },
            { 
                name: "Estonia", flag: "🇪🇪", avgBudget: "$1000", midBudget: "$800", highBudget: "$2000", 
                attractions: ["🏰 Tallinn Old Town", "🏖️ Pärnu Beach", "🏞️ Lahemaa National Park"],
                currency: "💵 Euro (EUR)",
                tip: "💡 Tip: Tipping is not common but appreciated for great service.",
                atm: "🏧 ATMs are widely available in cities like Tallinn."
            },
            { 
                name: "Eswatini", flag: "🇸🇿", avgBudget: "$600", midBudget: "$400", highBudget: "$1000", 
                attractions: ["🏞️ Malolotja Nature Reserve", "🏰 Mantenga Cultural Village", "🏙️ Mbabane"],
                currency: "💵 Lilangeni (SZL)",
                tip: "💡 Tip: Tipping is not mandatory but appreciated for good service.",
                atm: "🏧 ATMs are available in Mbabane and other major towns."
            },
            { 
                name: "Ethiopia", flag: "🇪🇹", avgBudget: "$600", midBudget: "$500", highBudget: "$1200", 
                attractions: ["🏞️ Simien Mountains", "🏰 Lalibela Rock-Hewn Churches", "🏙️ Addis Ababa"],
                currency: "💵 Ethiopian Birr (ETB)",
                tip: "💡 Tip: Tipping is appreciated but not obligatory, typically 10% in restaurants.",
                atm: "🏧 ATMs are widely available in Addis Ababa and larger cities."
            },
        
            // F
            { 
                name: "Falkland Islands", flag: "🇫🇰", avgBudget: "$2500", midBudget: "$2000", highBudget: "$5000", 
                attractions: ["🏞️ Falkland Islands Wildlife", "🏖️ Sea Lion Island", "🏙️ Stanley"],
                currency: "💵 Falkland Islands Pound (FKP)",
                tip: "💡 Tip: Tipping is not mandatory but appreciated in high-end restaurants.",
                atm: "🏧 ATMs are available in Stanley."
            },
            { 
                name: "Faroe Islands", flag: "🇫🇴", avgBudget: "$1200", midBudget: "$900", highBudget: "$2000", 
                attractions: ["🏞️ Faroe Islands Scenery", "🏙️ Torshavn", "🌊 Lake Sørvágsvatn"],
                currency: "💵 Danish Krone (DKK)",
                tip: "💡 Tip: Tipping is not expected but appreciated for services.",
                atm: "🏧 ATMs are available in Torshavn and other towns."
            },
            { 
                name: "Fiji", flag: "🇫🇯", avgBudget: "$2000", midBudget: "$1500", highBudget: "$4000", 
                attractions: ["🏖️ Coral Coast", "🏝️ Yasawa Islands", "🏙️ Suva"],
                currency: "💵 Fijian Dollar (FJD)",
                tip: "💡 Tip: Tipping is not common but appreciated in high-end resorts.",
                atm: "🏧 ATMs are available in Suva and Nadi."
            },
            { 
                name: "Finland", flag: "🇫🇮", avgBudget: "$1300", midBudget: "$1000", highBudget: "$2500", 
                attractions: ["🏞️ Lapland", "🏙️ Helsinki", "🏰 Suomenlinna Fortress"],
                currency: "💵 Euro (EUR)",
                tip: "💡 Tip: Tipping is not expected, but rounding up the bill is appreciated.",
                atm: "🏧 ATMs are widely available in Finnish cities."
            },
            { 
                name: "France", flag: "🇫🇷", avgBudget: "$2500", midBudget: "$2000", highBudget: "$5000", 
                attractions: ["🏰 Eiffel Tower", "🏖️ French Riviera", "🏙️ Paris Louvre Museum"],
                currency: "💵 Euro (EUR)",
                tip: "💡 Tip: Tipping is common, typically 5-10% in restaurants.",
                atm: "🏧 ATMs are widely available throughout France."
            },
        
            // G
            { 
                name: "Gabon", flag: "🇬🇦", avgBudget: "$1500", midBudget: "$1200", highBudget: "$3000", 
                attractions: ["🏞️ Loango National Park", "🏙️ Libreville", "🏖️ Pongara National Park"],
                currency: "💵 Central African CFA Franc (XAF)",
                tip: "💡 Tip: Tipping is appreciated but not expected.",
                atm: "🏧 ATMs are available in Libreville and some other towns."
            },
            { 
                name: "Gambia", flag: "🇬🇲", avgBudget: "$800", midBudget: "$600", highBudget: "$1500", 
                attractions: ["🏞️ Kachikally Crocodile Pool", "🏖️ Kololi Beach", "🏙️ Banjul"],
                currency: "💵 Dalasi (GMD)",
                tip: "💡 Tip: Tipping is common, especially in tourist areas.",
                atm: "🏧 ATMs are available in Banjul and major towns."
            },
            { 
                name: "Georgia", flag: "🇬🇪", avgBudget: "$1000", midBudget: "$800", highBudget: "$2000", 
                attractions: ["🏰 Tbilisi", "🏞️ Uplistsikhe Cave Town", "🏖️ Batumi"],
                currency: "💵 Georgian Lari (GEL)",
                tip: "💡 Tip: Tipping is not expected but appreciated for great service.",
                atm: "🏧 ATMs are available in Tbilisi and other major cities."
            },
            { 
                name: "Germany", flag: "🇩🇪", avgBudget: "$2200", midBudget: "$1800", highBudget: "$4000", 
                attractions: ["🏰 Neuschwanstein Castle", "🏖️ Bavarian Alps", "🏙️ Berlin Wall"],
                currency: "💵 Euro (EUR)",
                tip: "💡 Tip: Tipping is common, typically 5-10% in restaurants.",
                atm: "🏧 ATMs are widely available in cities like Berlin and Munich."
            },
        
            // H
            { 
                name: "Haiti", flag: "🇭🇹", avgBudget: "$600", midBudget: "$400", highBudget: "$1000", 
                attractions: ["🏝️ Labadee Beach", "🏞️ Citadelle Laferrière", "🏙️ Port-au-Prince"],
                currency: "💵 Haitian Gourde (HTG)",
                tip: "💡 Tip: Tipping is appreciated but not obligatory.",
                atm: "🏧 ATMs are available in Port-au-Prince and other larger towns."
            },
            { 
                name: "Honduras", flag: "🇭🇳", avgBudget: "$800", midBudget: "$600", highBudget: "$1500", 
                attractions: ["🏝️ Roatán", "🏞️ Copán Ruins", "🏙️ Tegucigalpa"],
                currency: "💵 Lempira (HNL)",
                tip: "💡 Tip: Tipping is not mandatory but appreciated, especially in tourist areas.",
                atm: "🏧 ATMs are available in Tegucigalpa and San Pedro Sula."
            },
            { 
                name: "Hong Kong", flag: "🇭🇰", avgBudget: "$2500", midBudget: "$2000", highBudget: "$4000", 
                attractions: ["🗼 Victoria Peak", "🏙️ Hong Kong Disneyland", "🏞️ Lantau Island"],
                currency: "💵 Hong Kong Dollar (HKD)",
                tip: "💡 Tip: Tipping is not mandatory but appreciated for good service.",
                atm: "🏧 ATMs are widely available throughout Hong Kong."
            },
        
            // I
            { 
                name: "Iceland", flag: "🇮🇸", avgBudget: "$2000", midBudget: "$1500", highBudget: "$4000", 
                attractions: ["🏞️ Blue Lagoon", "🏙️ Reykjavik", "🏞️ Golden Circle"],
                currency: "💵 Icelandic Króna (ISK)",
                tip: "💡 Tip: Tipping is not expected, but rounding up the bill is appreciated.",
                atm: "🏧 ATMs are widely available in Reykjavik and major tourist areas."
            },
            
            
                // J
                { 
                    name: "Jamaica", flag: "🇯🇲", avgBudget: "$1200", midBudget: "$900", highBudget: "$2500", 
                    attractions: ["🏖️ Negril Beach", "🏞️ Blue Mountains", "🏙️ Kingston"],
                    currency: "💵 Jamaican Dollar (JMD)",
                    tip: "💡 Tip: Tipping is common, usually around 10% in restaurants.",
                    atm: "🏧 ATMs are widely available in Kingston and tourist areas."
                },
                { 
                    name: "Japan", flag: "🇯🇵", avgBudget: "$2500", midBudget: "$2000", highBudget: "$5000", 
                    attractions: ["🏯 Kyoto", "🗼 Tokyo Tower", "🏞️ Mount Fuji"],
                    currency: "💵 Japanese Yen (JPY)",
                    tip: "💡 Tip: Tipping is not a custom in Japan, and it can be considered rude.",
                    atm: "🏧 ATMs are available in cities, but international ATMs are limited."
                },
                { 
                    name: "Jordan", flag: "🇯🇴", avgBudget: "$1500", midBudget: "$1200", highBudget: "$3000", 
                    attractions: ["🏰 Petra", "🏖️ Dead Sea", "🏙️ Amman"],
                    currency: "💵 Jordanian Dinar (JOD)",
                    tip: "💡 Tip: Tipping is customary, around 10-15% in restaurants.",
                    atm: "🏧 ATMs are widely available in major cities."
                },
            
                // K
                { 
                    name: "Kazakhstan", flag: "🇰🇿", avgBudget: "$1000", midBudget: "$800", highBudget: "$2000", 
                    attractions: ["🏞️ Charyn Canyon", "🏙️ Almaty", "🏰 Mausoleum of Khoja Ahmed Yasawi"],
                    currency: "💵 Kazakhstani Tenge (KZT)",
                    tip: "💡 Tip: Tipping is not mandatory but appreciated for good service.",
                    atm: "🏧 ATMs are available in Almaty and other major cities."
                },
                { 
                    name: "Kenya", flag: "🇰🇪", avgBudget: "$1500", midBudget: "$1200", highBudget: "$3000", 
                    attractions: ["🏞️ Maasai Mara", "🏖️ Diani Beach", "🏙️ Nairobi"],
                    currency: "💵 Kenyan Shilling (KES)",
                    tip: "💡 Tip: Tipping is appreciated, especially in restaurants (10-15%).",
                    atm: "🏧 ATMs are available in major cities and tourist spots."
                },
                { 
                    name: "Kiribati", flag: "🇰🇮", avgBudget: "$2000", midBudget: "$1500", highBudget: "$4000", 
                    attractions: ["🏝️ Tarawa Atoll", "🏞️ Christmas Island", "🏖️ Betio Beach"],
                    currency: "💵 Australian Dollar (AUD)",
                    tip: "💡 Tip: Tipping is not a common practice in Kiribati.",
                    atm: "🏧 ATMs are limited and available only in the capital."
                },
            
                // L
                { 
                    name: "Laos", flag: "🇱🇦", avgBudget: "$800", midBudget: "$600", highBudget: "$1500", 
                    attractions: ["🏞️ Luang Prabang", "🏰 Plain of Jars", "🏖️ Vang Vien"],
                    currency: "💵 Lao Kip (LAK)",
                    tip: "💡 Tip: Tipping is not mandatory, but it is appreciated in restaurants.",
                    atm: "🏧 ATMs are available in Vientiane and Luang Prabang."
                },
                { 
                    name: "Latvia", flag: "🇱🇻", avgBudget: "$1200", midBudget: "$900", highBudget: "$2000", 
                    attractions: ["🏰 Riga Old Town", "🏞️ Gauja National Park", "🏖️ Jurmala Beach"],
                    currency: "💵 Euro (EUR)",
                    tip: "💡 Tip: Tipping is appreciated but not obligatory, usually around 10%.",
                    atm: "🏧 ATMs are available in Riga and other major cities."
                },
                { 
                    name: "Lebanon", flag: "🇱🇧", avgBudget: "$1500", midBudget: "$1200", highBudget: "$3000", 
                    attractions: ["🏰 Baalbek", "🏖️ Beirut Corniche", "🏙️ Byblos"],
                    currency: "💵 Lebanese Pound (LBP)",
                    tip: "💡 Tip: Tipping is customary, around 10-15% in restaurants.",
                    atm: "🏧 ATMs are widely available in Beirut and other major cities."
                },
            
                // M
                { 
                    name: "Malawi", flag: "🇲🇼", avgBudget: "$800", midBudget: "$600", highBudget: "$1500", 
                    attractions: ["🏞️ Lake Malawi", "🏙️ Lilongwe", "🏞️ Liwonde National Park"],
                    currency: "💵 Malawian Kwacha (MWK)",
                    tip: "💡 Tip: Tipping is appreciated but not mandatory.",
                    atm: "🏧 ATMs are available in Lilongwe and major towns."
                },
                { 
                    name: "Malaysia", flag: "🇲🇾", avgBudget: "$1500", midBudget: "$1200", highBudget: "$3000", 
                    attractions: ["🏙️ Kuala Lumpur", "🏖️ Langkawi", "🏞️ Batu Caves"],
                    currency: "💵 Malaysian Ringgit (MYR)",
                    tip: "💡 Tip: Tipping is not mandatory, but appreciated (around 5-10%).",
                    atm: "🏧 ATMs are widely available in cities like Kuala Lumpur."
                },
                { 
                    name: "Maldives", flag: "🇲🇻", avgBudget: "$2500", midBudget: "$2000", highBudget: "$5000", 
                    attractions: ["🏝️ Private Resorts", "🏖️ Coral Reefs", "🏙️ Malé"],
                    currency: "💵 Maldivian Rufiyaa (MVR)",
                    tip: "💡 Tip: Tipping is usually included in resort prices, but an additional tip is appreciated.",
                    atm: "🏧 ATMs are available in Malé and some larger islands."
                },
                { 
                    name: "Mali", flag: "🇲🇱", avgBudget: "$1000", midBudget: "$800", highBudget: "$2000", 
                    attractions: ["🏰 Timbuktu", "🏞️ Dogon Country", "🏙️ Bamako"],
                    currency: "💵 West African CFA Franc (XOF)",
                    tip: "💡 Tip: Tipping is appreciated, usually around 10% in restaurants.",
                    atm: "🏧 ATMs are available in Bamako and other larger towns."
                },
                { 
                    name: "Malta", flag: "🇲🇹", avgBudget: "$1500", midBudget: "$1200", highBudget: "$3000", 
                    attractions: ["🏰 Valletta", "🏖️ Blue Lagoon", "🏙️ Mdina"],
                    currency: "💵 Euro (EUR)",
                    tip: "💡 Tip: Tipping is common, usually around 10% in restaurants.",
                    atm: "🏧 ATMs are widely available in major cities like Valletta."
                },
            
                // N
                { 
                    name: "Namibia", flag: "🇳🇦", avgBudget: "$2000", midBudget: "$1500", highBudget: "$4000", 
                    attractions: ["🏞️ Sossusvlei", "🏖️ Swakopmund", "🏙️ Windhoek"],
                    currency: "💵 Namibian Dollar (NAD)",
                    tip: "💡 Tip: Tipping is appreciated, typically 10-15% in restaurants.",
                    atm: "🏧 ATMs are available in Windhoek and other major towns."
                },
                { 
                    name: "Nauru", flag: "🇳🇷", avgBudget: "$1500", midBudget: "$1200", highBudget: "$2500", 
                    attractions: ["🏝️ Anibare Bay", "🏞️ Moqua Well", "🏙️ Nauru"],
                    currency: "💵 Australian Dollar (AUD)",
                    tip: "💡 Tip: Tipping is not a common practice in Nauru.",
                    atm: "🏧 ATMs are available in the capital."
                },
                { 
                    name: "Nepal", flag: "🇳🇵", avgBudget: "$600", midBudget: "$500", highBudget: "$1200", 
                    attractions: ["🏞️ Mount Everest", "🏰 Kathmandu Durbar Square", "🏞️ Pokhara"],
                    currency: "💵 Nepalese Rupee (NPR)",
                    tip: "💡 Tip: Tipping is common, especially for guides and porters.",
                    atm: "🏧 ATMs are available in Kathmandu and other major cities."
                },
            
                // O
                { 
                    name: "Oman", flag: "🇴🇲", avgBudget: "$1500", midBudget: "$1200", highBudget: "$3000", 
                    attractions: ["🏰 Sultan Qaboos Grand Mosque", "🏖️ Muscat", "🏞️ Wahiba Sands"],
                    currency: "💵 Omani Rial (OMR)",
                    tip: "💡 Tip: Tipping is not mandatory but appreciated (around 10%).",
                    atm: "🏧 ATMs are available in Muscat and other cities."
                },
            
                // P
                { 
                    name: "Pakistan", flag: "🇵🇰", avgBudget: "$800", midBudget: "$600", highBudget: "$1500", 
                    attractions: ["🏰 Lahore Fort", "🏞️ Hunza Valley", "🏙️ Karachi"],
                    currency: "💵 Pakistani Rupee (PKR)",
                    tip: "💡 Tip: Tipping is common, typically around 10-15%.",
                    atm: "🏧 ATMs are available in major cities like Karachi and Lahore."
                },
                { 
                    name: "Palau", flag: "🇵🇼", avgBudget: "$2000", midBudget: "$1500", highBudget: "$3000", 
                    attractions: ["🏝️ Jellyfish Lake", "🏖️ Rock Islands", "🏞️ Koror"],
                    currency: "💵 United States Dollar (USD)",
                    tip: "💡 Tip: Tipping is not mandatory but appreciated.",
                    atm: "🏧 ATMs are available in Koror."
                },
                { 
                    name: "Panama", flag: "🇵🇦", avgBudget: "$1500", midBudget: "$1200", highBudget: "$3000", 
                    attractions: ["🌉 Panama Canal", "🏖️ San Blas Islands", "🏙️ Panama City"],
                    currency: "💵 Balboa (PAB)",
                    tip: "💡 Tip: Tipping is common, typically 10-15% in restaurants.",
                    atm: "🏧 ATMs are widely available in Panama City and tourist spots."
                },
            
                // Q
                { 
                    name: "Qatar", flag: "🇶🇦", avgBudget: "$3500", midBudget: "$3000", highBudget: "$6000", 
                    attractions: ["🏙️ Doha", "🏖️ The Pearl", "🏰 Museum of Islamic Art"],
                    currency: "💵 Qatari Riyal (QAR)",
                    tip: "💡 Tip: Tipping is appreciated, around 10-15%.",
                    atm: "🏧 ATMs are available in Doha and other cities."
                },
            
                // R
                { 
                    name: "Romania", flag: "🇷🇴", avgBudget: "$1200", midBudget: "$1000", highBudget: "$2500", 
                    attractions: ["🏰 Bran Castle", "🏞️ Transfagarasan Highway", "🏙️ Bucharest"],
                    currency: "💵 Romanian Leu (RON)",
                    tip: "💡 Tip: Tipping is appreciated, around 10-15%.",
                    atm: "🏧 ATMs are available in major cities like Bucharest."
                },
                { 
                    name: "Russia", flag: "🇷🇺", avgBudget: "$2000", midBudget: "$1500", highBudget: "$4000", 
                    attractions: ["🏰 Red Square", "🏰 Kremlin", "🏖️ Lake Baikal"],
                    currency: "💵 Russian Ruble (RUB)",
                    tip: "💡 Tip: Tipping is optional but appreciated (around 10%).",
                    atm: "🏧 ATMs are available in Moscow and St. Petersburg."
                },
            
                // S
                { 
                    name: "Seychelles", flag: "🇸🇨", avgBudget: "$2500", midBudget: "$2000", highBudget: "$5000", 
                    attractions: ["🏖️ Anse Source d'Argent", "🏝️ Mahé Island", "🏞️ Vallée de Mai"],
                    currency: "💵 Seychellois Rupee (SCR)",
                    tip: "💡 Tip: Tipping is not mandatory, but appreciated in restaurants.",
                    atm: "🏧 ATMs are available in Victoria and other tourist areas."
                },
                { 
                    name: "Singapore", flag: "🇸🇬", avgBudget: "$2500", midBudget: "$2000", highBudget: "$5000", 
                    attractions: ["🏙️ Marina Bay Sands", "🌳 Gardens by the Bay", "🏰 Sentosa Island"],
                    currency: "💵 Singapore Dollar (SGD)",
                    tip: "💡 Tip: Tipping is not customary, but rounding up bills is appreciated.",
                    atm: "🏧 ATMs are widely available throughout the city."
                },
            
                // T
                { 
                    name: "Thailand", flag: "🇹🇭", avgBudget: "$1000", midBudget: "$800", highBudget: "$2500", 
                    attractions: ["🏖️ Phuket", "🏰 Grand Palace", "🏝️ Krabi"],
                    currency: "💵 Thai Baht (THB)",
                    tip: "💡 Tip: Tipping is not mandatory but appreciated (around 10%).",
                    atm: "🏧 ATMs are widely available in Bangkok and tourist areas."
                },
                { 
                    name: "Tunisia", flag: "🇹🇳", avgBudget: "$800", midBudget: "$600", highBudget: "$1500", 
                    attractions: ["🏰 Carthage", "🏖️ Djerba", "🏙️ Tunis"],
                    currency: "💵 Tunisian Dinar (TND)",
                    tip: "💡 Tip: Tipping is appreciated, especially in restaurants (10-15%).",
                    atm: "🏧 ATMs are available in major cities like Tunis."
                },
            
                // U
            
            
                // V
                { 
                    name: "Venezuela", flag: "🇻🇪", avgBudget: "$800", midBudget: "$600", highBudget: "$1500", 
                    attractions: ["🏞️ Angel Falls", "🏖️ Morrocoy National Park", "🏙️ Caracas"],
                    currency: "💵 Bolívar (VES)",
                    tip: "💡 Tip: Tipping is not obligatory but appreciated.",
                    atm: "🏧 ATMs are available in Caracas and larger cities."
                },
            
                // W
                { 
                    name: "Wales", flag: "🏴", avgBudget: "$1200", midBudget: "$900", highBudget: "$2000", 
                    attractions: ["🏰 Caernarfon Castle", "🏞️ Snowdonia National Park", "🏖️ Pembrokeshire Coast"],
                    currency: "💵 Pound Sterling (GBP)",
                    tip: "💡 Tip: Tipping is common, usually 10-15% in restaurants.",
                    atm: "🏧 ATMs are available in cities like Cardiff."
                },
            
                // X
                { 
                    name: "No Country Starts With X",
                    flag: "❓", avgBudget: "N/A", midBudget: "N/A", highBudget: "N/A", 
                    attractions: ["❓ None"],
                    currency: "N/A",
                    tip: "N/A",
                    atm: "N/A"
                },
            
                // Y
                { 
                    name: "Yemen", flag: "🇾🇪", avgBudget: "$600", midBudget: "$400", highBudget: "$1000", 
                    attractions: ["🏰 Old Sana'a", "🏖️ Socotra Island", "🏙️ Taiz"],
                    currency: "💵 Yemeni Rial (YER)",
                    tip: "💡 Tip: Tipping is appreciated but not mandatory.",
                    atm: "🏧 ATMs are available in Sana'a and larger towns."
                },
            
                // Z
                { 
                    name: "Zambia", flag: "🇿🇲", avgBudget: "$1000", midBudget: "$800", highBudget: "$2000", 
                    attractions: ["🏞️ Victoria Falls", "🏙️ Lusaka", "🏞️ South Luangwa National Park"],
                    currency: "💵 Zambian Kwacha (ZMW)",
                    tip: "💡 Tip: Tipping is appreciated, usually around 10% in restaurants.",
                    atm: "🏧 ATMs are available in Lusaka and major towns."
                }
            
            
        
        
    
    


];

function renderCountries() {
    const list = document.getElementById('countries-list');
    list.innerHTML = ""; 
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country-card');
        div.innerHTML = `
            <h3>${country.flag} ${country.name}</h3>
            <p><strong>💰 Average Budget:</strong> ${country.avgBudget}</p>
            <p><strong>🔹 Medium Budget:</strong> ${country.midBudget}</p>
            <p><strong>🔺 Highest Budget:</strong> ${country.highBudget}</p>
            <hr>
            <h5>✈️ Top Attractions</h5>
            <ul>${country.attractions.map(attraction => `<li>${attraction}</li>`).join('')}</ul>
            <hr>
            <h5>💵 Currency Information</h5>
            <p><strong>Currency:</strong> ${country.currency}</p>
            <p>${country.tip}</p>
            <p>${country.atm}</p>
        `;
        list.appendChild(div);
    });
}

function filterCountries() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const filtered = countries.filter(country => country.name.toLowerCase().includes(searchValue));
    document.getElementById('countries-list').innerHTML = "";
    filtered.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country-card');
        div.innerHTML = `
            <h3>${country.flag} ${country.name}</h3>
            <p><strong>💰 Average Budget:</strong> ${country.avgBudget}</p>
            <p><strong>🔹 Medium Budget:</strong> ${country.midBudget}</p>
            <p><strong>🔺 Highest Budget:</strong> ${country.highBudget}</p>
            <hr>
            <h5>✈️ Top Attractions</h5>
            <ul>${country.attractions.map(attraction => `<li>${attraction}</li>`).join('')}</ul>
            <hr>
            <h5>💵 Currency Information</h5>
            <p><strong>Currency:</strong> ${country.currency}</p>
            <p>${country.tip}</p>
            <p>${country.atm}</p>
        `;
        document.getElementById('countries-list').appendChild(div);
    });
}

renderCountries();
