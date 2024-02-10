import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Homepage/Home"
import Shop from './components/Shop/Shop';
import { useState } from 'react';
import Item from './components/SelectedItem/Item';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import MyFavourites from './components/Favourites/MyFavourites';
import Checkout from './components/Checkout/Checkout';
import { FavouritesContext } from './Context';
import { CartContext } from './Context';


function App() {

  const [cart, setCart] = useState(localStorage.cart ? JSON.parse(localStorage.cart) :[]);
  const [favorites, setFavorites] = useState(localStorage.favorites ? JSON.parse(localStorage.favorites) : []);

 
  return (
    <FavouritesContext.Provider value={[favorites, setFavorites]}>
    <CartContext.Provider value={[cart, setCart]}>

    <Router>
      <Navbar count={cart.length}/>
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" 
        element={<Shop />}/>
        <Route path="/item" 
           element={<Item 
           />}>
          <Route path=":itemId" element={<Item/>} />
        </Route>
        <Route path="/cart" element={<Cart/> } />
        <Route path="/checkout" element={<Checkout/> } />
        <Route path="/contact" element={<Contact /> } />
        <Route path="/myfavorites" 
        element={<MyFavourites/> } />
            
      </Routes>   

      <Footer/>

    </Router>

    </CartContext.Provider>
    </FavouritesContext.Provider>
  );
}

export default App;
