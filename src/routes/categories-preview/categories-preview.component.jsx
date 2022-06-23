import { useContext} from "react";
import { CategoriesContext } from "../../Context/categories.contex";
import CategoryPreview from "../../components/category-preview/category-preview.component";
const CategoriesPreiview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const product = categoriesMap[title];
        return <CategoryPreview key={title} title={title} products={product} />;
      })}
      ;
    </>
  );
};

export default CategoriesPreiview;
