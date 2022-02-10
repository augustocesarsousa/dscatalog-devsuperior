import { AxiosRequestConfig } from 'axios';
import Badge from 'components/Badge';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { User } from 'types/user';
import { formatRole } from 'util/formatters';
import { requestBackend } from 'util/requests';
import './styles.css';

type Props = {
  user: User;
  onDelete: Function;
};

function UserCrudCard({ user, onDelete }: Props) {
  user.roles.sort((a, b) => a.authority.localeCompare(b.authority));

  const handleDelete = (userId: number) => {
    if (!window.confirm('Você realmente quer deletar o usuário?')) {
      return;
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: `/users/${userId}`,
      withCredentials: true,
    };

    requestBackend(config)
      .then(() => {
        onDelete();
        toast.info('Usuário deletado com sucesso!');
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <div className="user-crud-card-container base-card">
      <div className="user-crud-card-text-content">
        <h6 className="user-crud-card-text">{`${user.firstName}`}</h6>
      </div>
      <div className="user-crud-card-roles-container">
        {user.roles.map((role) => (
          <Badge name={formatRole(String(role.authority))} key={role.id} />
        ))}
      </div>
      <div className="user-crud-card-buttons-container">
        <Link to={`/admin/users/${user.id}`}>
          <button className="btn btn-outline-secondary user-crud-card-button">
            editar
          </button>
        </Link>
        <button
          className="btn btn-outline-danger user-crud-card-button user-crud-card-button-first"
          onClick={() => handleDelete(user.id)}
        >
          excluir
        </button>
      </div>
    </div>
  );
}

export default UserCrudCard;
