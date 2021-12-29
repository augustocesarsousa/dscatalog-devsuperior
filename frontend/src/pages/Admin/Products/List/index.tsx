import './styles.css';
import ProductCrudCard from 'pages/Admin/Products/ProductCrudCard';
import { Link } from 'react-router-dom';

const List = () => {
  const product = {
    id: 1,
    name: 'The Lord of the Rings',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    price: 90.5,
    imgUrl:
      'https://a-static.mlcdn.com.br/1500x1500/adesivo-80x58cm-poker-face-meme-ref-ade3052-nebula-decor/nebuladecor/2ae93b42966811eb824f4201ac1850e0/981aba7963fc15af115b7a313aa14e6d.jpg',
    date: '2020-07-13T20:50:07.123450Z',
    categories: [
      {
        id: 3,
        name: 'Celulares',
      },
      {
        id: 2,
        name: 'Eletrônicos',
      },
      {
        id: 1,
        name: 'Computadores',
      },
    ],
  };

  return (
    <>
      <div className="product-crud-bar-container">
        <Link to="/admin/products/create">
          <button className="btn btn-primary text-white btn-crud-add">
            adicionar
          </button>
        </Link>
        <div className="base-card product-filter-container">Search bar</div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-12">
          <ProductCrudCard product={product} />
        </div>
        <div className="col-sm-6 col-md-12">
          <ProductCrudCard product={product} />
        </div>
        <div className="col-sm-6 col-md-12">
          <ProductCrudCard product={product} />
        </div>
        <div className="col-sm-6 col-md-12">
          <ProductCrudCard product={product} />
        </div>
      </div>
    </>
  );
};

export default List;
