import { AxiosRequestConfig } from 'axios';
import DotsLoader from 'components/DotsLoader';
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
  const [isLoading, setIsLoading] = useState(false);

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
        sort: 'name',
        name: controlComponentsData.filterData.name,
      },
    };

    setIsLoading(true);

    requestBackend(config)
      .then((response) => {
        setPage(response.data);
      })
      .finally(() => {
        setIsLoading(false);
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
      {isLoading ? (
        <div className="loader-posicion">
          <DotsLoader />
        </div>
      ) : (
        page?.content.map((category) => (
          <div key={category.id}>
            <CategoryCrudCard category={category} onDelete={getCategories} />
          </div>
        ))
      )}
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
