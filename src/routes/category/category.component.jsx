import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../Context/categories.contex";
import ProductCard from "../../components/product.card/product-cad.component";
import "./category.style.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="cateogry-container">
        {products &&
          products.map((products) => (
            <ProductCard key={products.id} product={products} />
          ))}
      </div>
    </>
  );
};

export default Category;
