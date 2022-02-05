import { AxiosRequestConfig } from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Category } from 'types/catecory';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
import CategoryCrudCard from '../CategoryCrudCard';
import CategoryFilter from '../CategoryFilter';
import './styles.css';

function CategoryList() {
  const [page, setPage] = useState<SpringPage<Category>>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: '/categories',
      withCredentials: true,
      params: {
        page: 0,
        size: 12,
      },
    };

    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  }, []);

  return (
    <div className="category-crud-container">
      <div className="category-crud-bar-container">
        <Link to="/admin/categories/create" className="btn-crud-add-link">
          <button className="btn btn-primary text-white btn-crud-add">
            adicionar
          </button>
        </Link>
        <CategoryFilter />
      </div>
      {page?.content.map((category) => (
        <div key={category.id}>
          <CategoryCrudCard category={category} onDelete={() => {}} />
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
