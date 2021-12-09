import { Switch } from 'react-router';
import Navbar from './Navbar';
import Users from './User';
import PrivateRoute from 'components/PrivateRoute';

import './styles.css';

const Admin = () => {
    return(
        <div className="admin-container">
            <Navbar />
            <div className="admin-content">
                <Switch>
                    <PrivateRoute path="/admin/products">
                        <h1>Product CRUD</h1>
                    </PrivateRoute>
                    <PrivateRoute path="/admin/categories">
                        <h1>Categorie CRUD</h1>
                    </PrivateRoute>
                    <PrivateRoute path="/admin/users">
                        <Users />
                    </PrivateRoute>
                </Switch>
            </div>
        </div>
    );
}

export default Admin;