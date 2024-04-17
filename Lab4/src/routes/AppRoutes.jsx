import {Route, Routes} from "react-router-dom"
import Home from "../pages/Home"
import BitcoinRates from "../pages/BitcoinRates"
import Login from "../pages/Login"

function AppRoutes(props){

    return (
        <Routes>
         <Route index element={ <Home {...props}/> } />
         <Route path='/login' element={ <Login {...props}/> } /> 
         <Route path='/bitcoin-rates' element={<BitcoinRates {...props} /> } />  
        </Routes>
    )
}

export default AppRoutes;