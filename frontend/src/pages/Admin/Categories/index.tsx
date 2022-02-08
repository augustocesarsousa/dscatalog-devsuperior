import { Route, Switch } from 'react-router-dom';
import CategoryForm from './CategoryForm';
import CategoryList from './CategoryList';

const Categories = () => {
  return (
    <Switch>
      <Route path="/admin/categories" exact>
        <CategoryList />
      </Route>
      <Route path="/admin/categories/:categoryId">
        <CategoryForm />
      </Route>
    </Switch>
  );
};

export default Categories;
