import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Shop from './components/Shop';
import { useState } from 'react';
import { data } from './components/data';
import Item from './components/Item';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Swal from 'sweetalert2';
import Contact from './components/Contact';
import MyFavourites from './components/MyFavourites';
import Checkout from './components/Checkout';


function App() {

  const [shop, setShop] = useState(data)
  const [cart, setCart] = useState(localStorage.cart ? JSON.parse(localStorage.cart) :[]);
  const [size, setSize] = useState('')

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addSize = (s) => {
      setSize(s)
  }

  const addToCart = (item, size) => {
    if (size) {
      const existingItemIndex = cart.findIndex(
        (cartItem) => cartItem.id === item.id && cartItem.size === size
      );

      if (existingItemIndex !== -1) {
        Swal.fire({
          position:"top",
          text:"This item  is already in the cart.",
          confirmButtonColor:"#F5B9C3",
        })
      } 
      else {
        Swal.fire({
          position: "top",
          icon: "success",
          iconColor:"#c34466",
          text: "Item is added to the cart",
          showConfirmButton: false,
          timer: 1500
        });
        setCart([...cart, { ...item, qty:1, size}]);
        setSize('');
      }
    } 
    else {
      Swal.fire({
        position:"top",
        icon:"warning",
        iconColor:"#c34466",
        confirmButtonColor:"#F5B9C3",
        text:"Please select a size before adding to the cart."
      })
    }
  }

  const clearCart = () => {
    setCart([])
  }

 const [favorites, setFavorites] = useState(localStorage.favorites ? JSON.parse(localStorage.favorites) : []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
    const favoritesIds = favorites.map((fav) => fav.id)
    setShop((currValue) => currValue.map((item) =>
     ({...item, liked: favoritesIds.includes(item.id)  
    })))
  
  }, [favorites]); 


  const handleToggleLike = (item) => {
    if (item.liked) {
      setFavorites(favorites.filter((i) => i.id !== item.id));
    } else {
      setFavorites([...favorites, item]);
    }
  };

 const [notes, setNotes] = useState(localStorage.notes ? JSON.parse(localStorage.notes) : (''))

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleNoteChange = (itemId, event) => {
    const updatedNotes = { ...notes, [itemId]: event.target.value };
    setNotes(updatedNotes);
  };

  const handleRemove = (index) => {
    const removedItem = favorites[index];
    const updatedFavorites = favorites.filter((_, i) => i !== index);
    const updatedNotes = { ...notes };
    delete updatedNotes[removedItem.id];
    setFavorites(updatedFavorites);
    setNotes(updatedNotes);
  };

  const handleClearAll = () => {
    setFavorites([]);
  };


  return (

    <Router>
      <Navbar count={cart.length}/>
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" 
        element={<Shop 
        data={data} 
        shop={shop} 
        setShop={setShop}
        handleToggleLike ={handleToggleLike }
        />}/>
        <Route path="/item" 
           element={<Item 
           data={data} 
           addToCart={addToCart} 
           cart={cart} 
           addSize={addSize}
           setSize={setSize}
           size={size}
           />}>
          <Route path=":itemId" element={<Item data={data}/>} />
        </Route>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} clearCart={clearCart}/> } />
        <Route path="/checkout" element={<Checkout/> } />
        <Route path="/contact" element={<Contact /> } />
        <Route path="/myfavorites" 
        element={<MyFavourites favorites={favorites} handleRemove={handleRemove} handleClearAll={handleClearAll} notes={notes} handleNoteChange={handleNoteChange}
        /> } />
            
      </Routes>   

      <Footer/>

    </Router>


    
 
    
  );
}

export default App;
