import { PRODUCTS } from "../../products";
import Product from "./Product";
import './shop.css';

const Shop = () => {
  return ( 
    <div className="shop">
      <div className="shopTitle">
        <h1>TobiTec Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data = {product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
 
export default Shop;