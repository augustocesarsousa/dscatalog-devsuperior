import React from 'react';
import "./styles.css";

function CategoryForm() {
  return (
    <div className="category-form-card-container base-card">
      <form className="category-form-card-content">
        <div className="category-form-card-input-container">
          <input
            type="text"
            className="form-control base-input"
            placeholder="Categoria"
          />
        </div>
        <div className="category-form-card-buttons-container">
          <button className="btn btn-primary category-form-card-button">
            salvar
          </button>
          <button className="btn btn-outline-danger category-form-card-button">
            cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default CategoryForm;
