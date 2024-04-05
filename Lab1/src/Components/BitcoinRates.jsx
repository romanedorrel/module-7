import { useState, useEffect } from "react";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
const [currency, setCurrency] = useState(currencies[0]);
const [rate, setRate] = useState('');

useEffect(()=> {
        
        let ignore = false;
        //fetch URL: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}
        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
        .then(response => response.json())
        //fetches bitcoin from a list of rates, in the selected currency, adjusted to lower case for exact match.
        .then(json => { setRate(json.bitcoin[currency.toLowerCase()]);});  
        
        },[currency]);


const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);

return (
<div className="BitcoinRates componentBox">
        <h3>Bitcoin Exchange Rate</h3>
        <label>Choose currency:
                <select value={currency} onChange={e => setCurrency(e.target.value)}>
                        {options}
                </select>
        </label>
        <div><strong>Bitcoin Rates:</strong>{rate}</div>
</div>
)
}

export default BitcoinRates;