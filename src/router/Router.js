import {BrowserRouter, Route } from 'react-router-dom'
import Order_step2 from '../view/orderStep/Order_step2'
import Login from '../view/login/Login'
import Register from '../view/register/Register'
import Menyu from '../view/menyu/Menyu'
import Footer from '../view/footer/Footer'
import OrderStep1 from '../view/orderStep1/orderStep1'
import CartsPage from '../view/orderStep1/cartsPage'
import calcExcavator from '../view/calcExcavator/calcExcavator'
import Home from '../view/home/home'
import Katalog_menu from '../view/Katalog_menu/Katalog_menu'
import Success from '../view/sucses/Succes'
import Oformleniya  from '../view/oformleniya/oformleniya'
function Router(){
    return(
        <>
        <BrowserRouter>

        <Menyu/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/orderStep' component={Order_step2}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/orderStep1' component={OrderStep1}/>
        <Route exact path='/cartsPage' component={CartsPage}/>
        <Route exact path='/calcExcavator' component={calcExcavator}/>
        <Route exact path='/katalog' component={Katalog_menu}/>
        <Route exact path='/success' component={Success}/>
        <Route exact path='/oformleniya' component={Oformleniya}/>
        
        
       
        <Footer/>

        </BrowserRouter>
        

        </>
    )
}
export default Router