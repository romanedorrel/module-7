import { useState} from "react";
import { useData } from "../hooks/useData";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
        
const [currency, setCurrency] = useState(currencies[0]);

const data = useData(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);


const rate = data ? data.bitcoin[currency.toLowerCase()] : 'err'


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

// import { useState} from "react";
// import { useReducerData } from "../hooks/useReducerData";

// const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

// function BitcoinRates() {

// const [currency, setCurrency] = useState(currencies[0]);

// const info = useReducerData(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);


// const rate = info.data ? info.data.bitcoin[currency.toLowerCase()] : 0;


// const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);

// return (
// <div className="BitcoinRates componentBox">
//         <h3>Bitcoin Exchange Rate</h3>
//         <label>Choose currency:
//                 <select value={currency} onChange={e => setCurrency(e.target.value)}>
//                         {options}
//                 </select>
//         </label>
//         <div><strong>Bitcoin Rates:</strong>{rate}</div>
//         <div>{info.error}</div>
// </div>
// )
// }

// export default BitcoinRates;