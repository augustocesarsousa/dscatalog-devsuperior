import { AxiosRequestConfig } from 'axios';
import Pagination from 'components/Pagination';
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Category } from 'types/catecory';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
import CategoryCrudCard from '../CategoryCrudCard';
import CategoryFilter, { CategoryFilterData } from '../CategoryFilter';
import './styles.css';

type ControlComponentsData = {
  activePage: number;
  filterData: CategoryFilterData;
};

function CategoryList() {
  const [page, setPage] = useState<SpringPage<Category>>();

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: { name: '' },
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
      filterData: controlComponentsData.filterData,
    });
  };

  const handleSubmitFilter = (data: CategoryFilterData) => {
    setControlComponentsData({
      activePage: 0,
      filterData: data,
    });
  };

  const getCategories = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/categories',
      withCredentials: true,
      params: {
        page: controlComponentsData.activePage,
        size: 6,
        name: controlComponentsData.filterData.name,
      },
    };
    console.log(controlComponentsData.filterData.name);
    requestBackend(config).then((response) => {
      setPage(response.data);
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <div className="category-crud-container">
      <div className="category-crud-bar-container">
        <Link to="/admin/categories/create" className="btn-crud-add-link">
          <button className="btn btn-primary text-white btn-crud-add">
            adicionar
          </button>
        </Link>
        <CategoryFilter onSubmitFilter={handleSubmitFilter} />
      </div>
      {page?.content.map((category) => (
        <div key={category.id}>
          <CategoryCrudCard category={category} onDelete={() => {}} />
        </div>
      ))}
      <div className="row">
        <Pagination
          pageCount={page ? page?.totalPages : 0}
          range={3}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default CategoryList;
