import { useContext } from "react";
import { ProductsContext } from "../../Context/products.contex";
import ProdcutCard from "../../components/product.card/product-cad.component";
import './shop.style.scss'
const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProdcutCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
