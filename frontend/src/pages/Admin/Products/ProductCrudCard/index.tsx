import './styles.css';

import ProductPrice from 'components/ProductPrice';
import { Product } from 'types/product';
import CategoryBadge from '../CategoryBadge';
import { Link } from 'react-router-dom';

type Props = {
  product: Product;
};

const ProductCrudCard = ({ product }: Props) => {
  return (
    <div className="base-card product-crud-card">
      <div className="product-crud-card-top-container">
        <img src={product.imgUrl} alt={product.name} />
      </div>
      <div className="product-crud-card-description">
        <div className="product-crud-card-bottom-container">
          <h6>{product.name}</h6>
          <ProductPrice price={product.price} />
        </div>
        <div className="product-crud-categories-container">
          {product.categories.map((categorie) => (
            <CategoryBadge name={categorie.name} key={categorie.id} />
          ))}
        </div>
      </div>
      <div className="product-crud-card-buttons-container">
        <div className="btn btn-outline-danger product-crud-card-button product-crud-card-button-first">
          excluir
        </div>
        <Link to={`/admin/products/${product.id}`}>
          <div className="btn btn-outline-secondary product-crud-card-button">
            editar
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCrudCard;
