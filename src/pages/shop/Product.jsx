import { useContext } from "react";
import { ShopContext } from "../../context/Shop-context";

const Product = ({ data }) => {

  const { id, productName, price, productImage } = data;
  const {addToCart, cartItems} = useContext(ShopContext)
  const cartItemsAmount = cartItems[id]
  return (  
    <div className="product">
      <img src={productImage} alt="product" />
      <div className="description">
        <p><b>{productName}</b></p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>Add To Cart {cartItemsAmount > 0 && <>({ cartItemsAmount })</>}</button>
    </div>
  );
}
 
export default Product;