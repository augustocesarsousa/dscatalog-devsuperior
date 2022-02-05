import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg';
import React from 'react';
import './styles.css';

function CategoryFilter() {
  return (
    <div className="base-card category-filter-container">
      <form className="category-filter-form">
        <div className="category-filter-input-container">
          <input
            type="text"
            className="form-control"
            placeholder="Nome da categoria"
          />
          <button className="category-filter-button-searth-icon">
            <SearchIcon />
          </button>
        </div>
        <button className="btn btn-outline-secondary category-filter-button-clean">
          limpar filtro
        </button>
      </form>
    </div>
  );
}

export default CategoryFilter;
