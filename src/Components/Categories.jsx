import { getCategories } from "../api";

function Categories() {
  const categories = getCategories();
  return (
    <div className="container">
      <h2>Session Categories: </h2>
      <ul>
        {categories.map((cat) => (
          <li key={cat.id}>{cat.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;