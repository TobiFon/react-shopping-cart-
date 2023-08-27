import { useContext } from "react";
import { ShopContext } from "../../context/Shop-context";

const CartItem = ({ data }) => {
  const { id, productName, price, productImage } = data;
  const { addToCart, removeFromCart, cartItems, updateCartItemsCount} = useContext(ShopContext)
  
  return ( 
    <div className="cartItem">
      <img src={productImage} alt="" />
      <div className="description">
        <b><p>{productName}</p></b>
        <p>{price}</p>
        <div className="countHandler">
          <button onClick={()=>removeFromCart(id)}>-</button>
          <input value={cartItems[id]} onChange={(e)=>(updateCartItemsCount(Number(e.target.value), id))} />
          <button onClick={()=>addToCart(id)}>+</button>

        </div>
      </div>
    </div>
   );
}
 
export default CartItem;