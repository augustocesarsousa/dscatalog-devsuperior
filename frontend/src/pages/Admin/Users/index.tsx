import { Route, Switch } from 'react-router-dom';
import UserForm from './UserForm';
import UserList from './UserList';

const Users = () => {
  return (
    <Switch>
      <Route path="/admin/users" exact>
        <UserList />
      </Route>
      <Route path="/admin/users/:userId">
        <UserForm />
      </Route>
    </Switch>
  );
};

export default Users;
