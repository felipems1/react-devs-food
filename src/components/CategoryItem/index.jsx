import * as C from "./style";

const CategoryItem = ({ data, activeCategory, setActiveCategory }) => {
  const handleCategoryClick = () => {
    setActiveCategory(data.id);
  };

  return (
    <C.Container
      active={activeCategory}
      id={data.id}
      onClick={handleCategoryClick}
    >
      <C.CategoryImage src={data.image} />
    </C.Container>
  );
};

export default CategoryItem;
