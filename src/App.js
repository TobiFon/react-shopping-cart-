import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/cart";
import ShopContextProvider from "./context/Shop-context";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" > <Shop /></Route>
            <Route path = "/cart" ><Cart/></Route>
          </Switch>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
