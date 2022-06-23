import {Routes,Route} from 'react-router-dom';
import CategoriesPreiview from '../categories-preview/categories-preview.component'
import Cateogry from '../category/category.component'
import "./shop.style.scss";
const Shop = () => {
 
  return (
     <Routes>
       <Route index element = {<CategoriesPreiview/>}/>
       <Route path = ":category" element={<Cateogry/>}/>
     </Routes>
  );
};

export default Shop;
