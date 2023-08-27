import { useContext } from 'react';
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/Shop-context'
import CartItem from './cart-item';
import './cart.css'

import {useHistory} from 'react-router-dom'

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext)
  const navigate = useHistory()
  
  return ( 
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] != 0) {
            return <CartItem data={product} key={ product.id} />
          }
        })}
      </div>
      {getTotalCartAmount > 0 ?
        <div className="checkout">
          <p>Subtotal: ${getTotalCartAmount()}</p>
          <button onClick={() => navigate.push('/')}>Continue Shopping</button>
          <button>Checkout</button>
        </div> :
        <h1>Your cart is empty</h1>}
    </div>
    );
}
 
export default Cart;