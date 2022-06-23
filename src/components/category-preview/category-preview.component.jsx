
import{CategoryContainer,Title,Preview} from './category-preview.style.jsx'
import ProdcutCard from '../product.card/product-cad.component';

const CategoryPreview = ({title,products}) =>{
      return (
          <CategoryContainer>
                <h2>
                    <Title  to={title}>{title.toUpperCase()}</Title>
                </h2>
                <Preview>
                    {products
                    .filter((_,idx)=>idx<4)
                    .map((product)=>
                       <ProdcutCard key={product.id} product={product}/>
                     )
                    }
                </Preview>
          </CategoryContainer>
      )
}

export default CategoryPreview;