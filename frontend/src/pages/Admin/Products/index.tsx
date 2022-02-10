import { Route, Switch } from 'react-router-dom';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

const Products = () => {
  return (
    <Switch>
      <Route path="/admin/products" exact>
        <ProductList />
      </Route>
      <Route path="/admin/products/:productId">
        <ProductForm />
      </Route>
    </Switch>
  );
};

export default Products;
