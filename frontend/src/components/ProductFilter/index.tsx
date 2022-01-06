import './styles.css';
import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg';

const ProductFilter = () => {
  return (
    <div className="base-card product-filter-container">
      <form action="" className="product-filter-form">
        <div className="product-filter-name-container">
          <input
            type="text"
            className="form-control"
            placeholder="Nome do produto"
          />
          <SearchIcon />
        </div>
        <div className="product-filter-bottom-container">
          <div className="product-filter-category-container">
            <select name="" id="">
              <option value="">livros</option>
            </select>
          </div>
          <button className="btn btn-outline-secondary">limpar filtro</button>
        </div>
      </form>
    </div>
  );
};

export default ProductFilter;
