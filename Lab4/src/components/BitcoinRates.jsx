import { useState} from "react";
import { useUserContext } from "../context/EmojiContext";
import { useData } from "../hooks/useData";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
        
const [currency, setCurrency] = useState(currencies[0]);

const {currentEmoji} = useUserContext();

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
        <div><strong>Bitcoin Rates:</strong>{rate}{currentEmoji.emoji}</div>
</div>
)
}

export default BitcoinRates;

// import { useState} from "react";
// import { useReducerData } from "../hooks/useReducerData";

// const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

// function BitcoinRates() {

// const [currency, setCurrency] = useState(currencies[0]);

// const data = useReducerData(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);


// const rate = data.bitcoin[currency.toLowerCase()]


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
// </div>
// )
// }

// export default BitcoinRates;