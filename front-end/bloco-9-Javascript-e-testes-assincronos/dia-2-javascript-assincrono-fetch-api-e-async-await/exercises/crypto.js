window.onload = () => fetcher();

async function fetcher() {
    const url = 'https://api.coincap.io/v2/assets';
    const apiConvert = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json'
    const cryptoDiv = document.querySelector('#cryptoContainer');

    try {
        const usd = await (await fetch(apiConvert)).json();
        const { usd: { brl }} = await usd;
    
        const response = await fetch(url);
        const { data } = await response.json();
        const list = data.filter(({ rank }) => rank <= 10 );
        list.forEach(({ id, symbol, priceUsd }) => {
            const newLi = document.createElement('li');
            newLi.innerText = `${id} (${symbol}): R$ ${(parseFloat(priceUsd) * brl).toFixed(2)}`;
            cryptoDiv.appendChild(newLi);
        });
    }
    catch (error) {
        const newLi = document.createElement('li');
            newLi.innerText = error;
            cryptoDiv.appendChild(newLi);
    }

    
}