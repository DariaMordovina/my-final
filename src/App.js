
import './App.css';
import React from 'react';
import NavCart from './navBar/NavCart';
import NavSale from './navBar/NavSale';
import Home from './Home';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";


function App() {
  return (<Router>
    <nav>
        <Link to="/" className='link '><img  src="https://static.tildacdn.com/tild3635-3834-4838-b364-646465626161/sdgsdg-2.png" alt="cart" width="42px"/><br></br>Магазин</Link>
        <Link to="/NavSale" className='link'><img  src="https://www.vorota-dcj.ru/system/ckeditor_assets/pictures/264942/content_490-4905915_discount-comments-discount-icon-png.png" alt="cart" width="35px"/><br></br>Распродажа</Link>
        <Link to="/NavCart" className='link '><img src="https://ledoarena.ru/image_template/full-cart-light.png" alt="cart" width="35px"/><br></br>корзина</Link>
      
    </nav>
    <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/NavSale" element={<NavSale/>}/>
<Route path="/NavCart" element={<NavCart/>}/>
    </Routes>
  </Router>
   
  )
}
export default App;