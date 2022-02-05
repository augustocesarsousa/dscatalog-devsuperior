import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from 'types/catecory';
import './styles.css';

type Props = {
  category: Category;
  onDelete: Function;
};

function CategoryCrudCard({ category, onDelete }: Props) {
  return (
    <div className="category-crud-card-container base-card">
      <div className="category-crud-card-text-content">
        <h6 className="category-crud-card-text">{category.name}</h6>
      </div>
      <div className="category-crud-card-buttons-content">
        <Link to={`/admin/categories/${category.id}`}>
          <button className="btn btn-outline-secondary category-crud-card-button">
            editar
          </button>
        </Link>
        <button className="btn btn-outline-danger category-crud-card-button category-crud-card-button-first">
          excluir
        </button>
      </div>
    </div>
  );
}

export default CategoryCrudCard;
