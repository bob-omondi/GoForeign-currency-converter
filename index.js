// to prevent automatic page reload. preventDefault() method to override the form's behavior.

const init = () => {
  const inputForm = document.querySelector('form');

  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();

  });
}

document.addEventListener('DOMContentLoaded', init);

//currencies Object:
      
const currencies ={
    AED:     "United Arab Emirates",
    AFN:     "Afghanistan",
    ALL:     "Albania",
    AMD:     "Armenia",
    ANG:     "Netherlands Antilles",
    AOA:     "Angola",
    ARS:     "Argentina",
    AUD:     "Australia",
    AWG:     "Aruba",
    AZN:     "Azerbaijan",
    BAM:     "Bosnia and Herzegovina",
    BBD:     "Barbados",
    BDT:     "Bangladesh",
    BGN:     "Bulgaria",
    BHD:     "Bahrain",
    BIF:     "Burundi",
    BMD:     "Bermuda",
    BSD:     "Bahamas",
    BND:     "Brunei",
    BWP:     "Botswana",
    BOB:     "Bolivia",
    BZD:     "Belize",
    BRL:     "Brazil",
    CDF:     "Democratic Republic of the Congo",
    BTN:     "Bhutan",
    CLP:     "Chile",
    BYN:     "Belarus",
    COP:     "Colombia",
    CAD:     "Canada",
    CHF:     "Switzerland",
    CZK:     "Czech Republic",
    CNY:     "China",
    DKK:     "Denmark",
    CRC:     "Costa Rica",
    DZD:     "Algeria",
    CVE:     "Cape Verde",
    ERN:     "Eritrea",
    DJF:     "Djibouti",
    EUR:     "European Union",
    DOP:     "Dominican Republic",
    FKP:     "Falkland Islands",
    EGP:     "Egypt",
    GBP:     "United Kingdom",
    ETB:     "Ethiopia",
    GGP:     "Guernsey",
    FJD:     "Fiji",        
    GIP:     "Gibraltar",
    FOK:     "Faroe Islands",
    GNF:     "Guinea",
    GEL:     "Georgia",
    GYD:     "Guyana",
    GHS:     "Ghana",
    HNL:     "Honduras",
    GMD:     "The Gambia",
    HTG:     "Haiti",
    GTQ:     "Guatemala",
    IDR:     "Indonesia",
    HKD:     "Hong Kong",
    IMP:     "Man",
    HRK:     "Croatia",
    IQD:     "Iraq",
    HUF:     "Hungary",
    ISK:     "Iceland",
    ILS:     "Israel",
    JMD:     "Jamaica",
    INR:     "India",
    JPY:     "Japan",
    IRR:     "Iran",
    KGS:     "Kyrgyzstan",
    JEP:     "Jersey",
    KID:     "Kiribati",
    JOD:     "Jordan",
    KRW:     "South Korea",
    KES:     "Kenya",
    KYD:     "Cayman Islands",
    KHR:     "Cambodia",
    LAK:     "Laos",
    KMF:     "Comoros",
    LKR:     "Sri Lanka",
    KWD:     "Kuwait",
    LSL:     "Lesotho",
    KZT:     "Kazakhstan",
    MAD:     "Morocco",
    LBP:     "Lebanon",
    MGA:     "Madagascar",
    LRD:     "Liberia",
    MMK:     "Myanmar",
    LYD:     "Libya",
    MOP:     "Macau",
    MDL:     "Moldova",
    MUR:     "Mauritius",
    MKD:     "North Macedonia",
    MWK:     "Malawi",
    MNT:     "Mongolia",
    MYR:     "Malaysia",
    MRU:     "Mauritania",
    NAD:     "Namibia",
    MVR:     "Maldives",
    NIO:     "Nicaragua",
    MXN:     "Mexico",
    NPR:     "Nepal",
    MZN:     "Mozambique",
    OMR:     "Oman",
    NGN:     "Nigeria",
    PEN:     "Peru",
    NOK:     "Norway",
    PHP:     "Philippines",
    NZD:     "New Zealand",
    PLN:     "Poland",
    PAB:     "Panama",
    QAR:     "Qatar",
    PGK:     "Papua New Guinea",
    RSD:     "Serbia",
    PKR:     "Pakistan",
    RWF:     "Rwanda",
    PYG:     "Paraguay",
    SBD:     "Solomon Islands",
    RON:     "Romania",
    SDG:     "Sudan",
    RUB:     "Russia",
    SGD:     "Singapore",
    SAR:     "Saudi Arabia",
    SLE:     "Sierra Leone",
    SCR:     "Seychelles",
    SRD:     "Suriname",
    SEK:     "Sweden",
    STN:     "São Tomé and Príncipe",
    SHP:     "Saint Helena",
    SZL:     "Eswatini",
    SOS:     "Somalia",
    TJS:     "Tajikistan",
    SSP:     "South Sudan",
    TND:     "Tunisia",
    SYP:     "Syria",
    TRY:     "Turkey",
    THB:     "Thailand",
    TVD:     "Tuvalu",
    TMT:     "Turkmenistan",
    TZS:     "Tanzania",
    TOP:     "Tonga",
    UGX:     "Uganda",
    TTD:   	 "Trinidad and Tobago",
    UYU:     "Uruguay",
    TWD:     "Taiwan",
    VES:     "Venezuela",
    UAH:     "Ukraine",
    VUV:     "Vanuatu",
    USD:     "United States",
    XAF:   	 "CEMAC",
    UZS:     "Uzbekistan",
    XDR:     "International Monetary Fund",
    VND:     "Vietnam",
    XPF:     "Collectivités d/Outre-Mer",
    WST:     "Samoa",
    ZAR:     "South Africa",
    XCD:     "Organisation of Eastern Caribbean States",
    ZWL:     "Zimbabwe",
    XOF:     "CFA",
    YER:     "Yemen",
    ZMW:     "Zambia",
         
};


//populating the <select> elements using innerHTML:
const fromCurrency = document.getElementById("from");
const toCurrency = document.getElementById("to");
fromCurrency.innerHTML = getOptions(currencies);
toCurrency.innerHTML = getOptions(currencies);

//Generating of the getOptions function

function getOptions(data) {
    return Object.entries(data)
      .map(([country, currency]) => `<option value="${country}">${country} | ${currency}</option>`)
      .join("");
  }
//   This loops through the currencies Object and generates the <option> elements:

//   Next adding an eventListener to detect when the button is clicked:
  
document.getElementById("btn-convert").addEventListener("click", fetchCurrencies); 

// This calls a fetchCurrencies function on click 

function fetchCurrencies() {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amount = document.getElementById("amount").value;

    // Inclusion of the exchange rate API key below inoder to fech data.
    
    fetch("https://v6.exchangerate-api.com/v6/6371558e07ce3807dc787dc5/latest/" + from)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } 
      })
      .then((data) => {
        console.log(data);
        displayCurrency(data, from, to, amount);
      })
      .catch((error) => console.error("FETCH ERROR:", error));
  }

//   Here I used the fetch method to make the API request of the primary currency selected. 
//   If the request is successful we then pass the data to a displayCurrency function:

function displayCurrency(data, from, to, amount) {
    const calculated = amount * data.conversion_rates[to];
    document.getElementById("result").setAttribute("style", "display:block");
    document.getElementById("txt-from").innerText = amount + " " + from + " = ";
    document.getElementById("txt-to").innerText = calculated + " " + to;
  }
//   This function multiples the amount that was entered into the form by the converted secondary currency.
//    We then reveal the hidden result <p> and populate it with the converted currency text.

