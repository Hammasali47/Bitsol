import {BrowserRouter,Route,Routes,Navigate} from "react-router-dom"
import './App.css';
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Home from "./Pages/Home";
import HomeNav from "./Components/HomeNav"

function App() {
  return (
    <div>
      <BrowserRouter>
      <HomeNav/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
