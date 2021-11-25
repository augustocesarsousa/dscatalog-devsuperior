import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import axios from 'axios';
import ProductPrice from 'components/ProductPrice';
import { Link } from 'react-router-dom';
import { Product } from 'types/product';
import { BASE_URL } from 'util/requests';

import './styles.css';

export default function ProductDetails() {

  let product : Product;

  axios.get(BASE_URL + "/products/2")
  .then(response => {
    console.log(response.data)
  });

  return (
    <div className="product-details-container">
      <div className="base-card product-details-card">
        <Link to="/products">
          <div className="goback-container">
            <ArrowIcon />
            <p>Voltar</p>
          </div>
        </Link>
        <div className="row">
          <div className="col-xl-6">
            <div className="img-container">
              <img
                src="https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg"
                alt="Descrição da imagem"
              />
            </div>
            <div className="name-price-container">
              <h1>Nome do produto</h1>
              <ProductPrice price={1234.56} />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="description-container">
              <h2>Descrição do produto</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus, hic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
