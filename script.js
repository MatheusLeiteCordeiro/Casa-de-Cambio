window.onload = () => {
    setupHtmlElements();
};

const setupHtmlElements = () => {
    const searchButton = document.getElementById('search-button');
    searchButton.addEventListener('click', handleSearchEvent);
};

const handleSearchEvent = async () => {
    const currencyElement = document.getElementById('currency-input');
    const currencyValue = currencyElement.value;

    const object = await fetchCurrency(currencyValue);

    cleanList();

    handleBaseCurrency(object.base);
    handleRates(object.rates);

    console.log(object.rates);

    cleanInput();

};

const cleanInput = () => {
    const currencyElement = document.getElementById('currency-input');
    currencyElement.value = '';
};

const cleanList = () => {
    const currencyList = document.getElementById('currency-list');
    currencyList.innerHTML = '';
};

const handleBaseCurrency = (base) => {
    const baseTitle = document.getElementById('base');
    baseTitle.innerHTML = `Valores referentes à 1 ${base}`
};

const handleRates = (rates) => {
    const ratesEntries = Object.entries(rates) 
    console.log(ratesEntries);

    ratesEntries.forEach((entry) => {
        const [ currency, rate ] = entry;
        // console.log(entry);
        renderRate(currency, rate);
    });
};

const renderRate = (currency, rate) => {
    const currencyList = document.getElementById('currency-list');
    const li = document.createElement('li');
    const fixedRate = rate.toFixed(2);

    li.innerHTML = `<strong>${currency}:</strong> ${fixedRate}`;
    currencyList.appendChild(li);
};