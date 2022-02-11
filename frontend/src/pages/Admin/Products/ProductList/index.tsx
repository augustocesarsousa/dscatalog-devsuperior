import { AxiosRequestConfig } from 'axios';
import DotsLoader from 'components/DotsLoader';
import Pagination from 'components/Pagination';
import ProductFilter, { ProductFilterData } from 'components/ProductFilter';
import ProductCrudCard from 'pages/Admin/Products/ProductCrudCard';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from 'types/product';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
import './styles.css';

type ControlComponentsData = {
  activePage: number;
  filterData: ProductFilterData;
};

const ProductList = () => {
  const [page, setPage] = useState<SpringPage<Product>>();
  const [isLoading, setIsLoading] = useState(false);

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: { name: '', category: null },
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
      filterData: controlComponentsData.filterData,
    });
  };

  const handleSubmitFilter = (data: ProductFilterData) => {
    setControlComponentsData({
      activePage: 0,
      filterData: data,
    });
  };

  const getProducts = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: `/products`,
      params: {
        page: controlComponentsData.activePage,
        size: 3,
        name: controlComponentsData.filterData.name,
        categoryId: controlComponentsData.filterData.category?.id,
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
    getProducts();
  }, [getProducts]);

  return (
    <div className="product-crud-container">
      <div className="product-crud-bar-container">
        <Link to="/admin/products/create" className="btn-crud-add-link">
          <button className="btn btn-primary text-white btn-crud-add">
            adicionar
          </button>
        </Link>
        <ProductFilter onSubmitFilter={handleSubmitFilter} />
      </div>
      <div className="row">
        {isLoading ? (
          <div className="loader-posicion">
            <DotsLoader />
          </div>
        ) : (
          page?.content.map((product) => (
            <div className="col-sm-6 col-md-12" key={product.id}>
              <ProductCrudCard product={product} onDelete={getProducts} />
            </div>
          ))
        )}
      </div>
      <Pagination
        forcePage={page?.number}
        pageCount={page ? page?.totalPages : 0}
        range={3}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default ProductList;
