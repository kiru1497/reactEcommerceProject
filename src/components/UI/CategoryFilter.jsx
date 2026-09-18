import { Button } from "react-bootstrap";

import "./CategoryFilter.css";

const categories = ["All", "Music", "Merch"];

function CategoryFilter({ selectedCategory, onCategoryChange }) {
  return (
    <div className="category-filter">
      <div>
        <span className="category-eyebrow">BROWSE</span>

        <h1>Shop the collection</h1>
      </div>

      <div className="category-buttons">
        {categories.map((category) => (
          <Button
            key={category}
            className={
              selectedCategory === category
                ? "category-button active"
                : "category-button"
            }
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;
