import "./CategoryFilter.css";

const CategoryFilter = ({ categories, activeCategory, onSelect }) => {
  return (
    <div className="category-filter" role="group" aria-label="Filter by category">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`cat-btn ${activeCategory === cat ? "cat-btn-active" : ""}`}
          onClick={() => onSelect(cat)}
          aria-pressed={activeCategory === cat}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;