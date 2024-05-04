import {Route, Routes} from "react-router-dom"
import Home from "../pages/Home"
import BitcoinRates from "../pages/BitcoinRates"
import Login from "../pages/Login"
import PostList from "../pages/PostList"

function AppRoutes(props){

    return (
        <Routes>
         <Route path='/home' element={ <Home {...props}/> } />
         <Route path='/login' element={ <Login {...props}/> } /> 
         <Route path='/bitcoin-rates' element={<BitcoinRates {...props} /> } /> 
         <Route path='/posts' element={ <PostList {...props}/> } />  
        </Routes>
    )
}

export default AppRoutes;