import './styles.css';

import ProductIgm from 'assets/images/product.png';

const ProductCard = () => {
    return (
        <div className="base-card product-card">
            <div className="card-top-container">
                <img src={ProductIgm} alt="Nome do produto" />
            </div>
            <div className="card-bottom-container">
                <h6>Nome do Produto</h6>
                <p>2345.67</p>
            </div>
        </div>
    );
}

export default ProductCard;