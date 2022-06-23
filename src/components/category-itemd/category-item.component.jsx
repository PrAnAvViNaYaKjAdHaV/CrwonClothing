import { useNavigate} from "react-router-dom";
import {Body,DirectoryItemContainer,BackgroundImage,} from "./category-item.styles.jsx";

const CategoryItem = ({ category }) => {
    const {imageUrl,title,route} = category;
    const navigate = useNavigate();
    const onNavigateHandler = ()=> navigate(route);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage
        imageUrl={imageUrl}
      />
      <Body>
        <h2>{title}</h2>
        <p>shop now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default CategoryItem;