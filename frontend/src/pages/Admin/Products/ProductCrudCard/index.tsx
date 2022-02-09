import { AxiosRequestConfig } from 'axios';
import Badge from 'components/Badge';
import ProductPrice from 'components/ProductPrice';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Product } from 'types/product';
import { requestBackend } from 'util/requests';
import './styles.css';

type Props = {
  product: Product;
  onDelete: Function;
};

const ProductCrudCard = ({ product, onDelete }: Props) => {
  const handleDelete = (productId: number) => {
    if (!window.confirm('Você realmente quer deletar o produto?')) {
      return;
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: `/products/${productId}`,
      withCredentials: true,
    };

    requestBackend(config).then(() => {
      onDelete();
      toast.info('Categoria deletada com sucesso!');
    });
  };

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
            <Badge name={categorie.name} key={categorie.id} />
          ))}
        </div>
      </div>
      <div className="product-crud-card-buttons-container">
        <button
          onClick={() => handleDelete(product.id)}
          className="btn btn-outline-danger product-crud-card-button product-crud-card-button-first"
        >
          excluir
        </button>
        <Link to={`/admin/products/${product.id}`}>
          <button className="btn btn-outline-secondary product-crud-card-button">
            editar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCrudCard;
