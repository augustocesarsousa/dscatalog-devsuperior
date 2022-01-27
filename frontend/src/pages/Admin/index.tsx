import PrivateRoute from 'components/PrivateRoute';
import { Switch } from 'react-router';
import Categoies from './Categories';
import Navbar from './Navbar';
import Products from './Products';
import './styles.css';
import Users from './Users';


const Admin = () => {
  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-content">
        <Switch>
          <PrivateRoute path="/admin/products">
            <Products />
          </PrivateRoute>
          <PrivateRoute path="/admin/categories">
            <Categoies />
          </PrivateRoute>
          <PrivateRoute path="/admin/users" roles={['ROLE_ADMIN']}>
            <Users />
          </PrivateRoute>
        </Switch>
      </div>
    </div>
  );
};

export default Admin;
