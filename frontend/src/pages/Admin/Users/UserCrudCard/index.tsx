import { AxiosRequestConfig } from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { User } from 'types/user';
import { requestBackend } from 'util/requests';
import './styles.css';

type Props = {
  user: User;
  onDelete: Function;
};

function UserCrudCard({ user, onDelete }: Props) {
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
        <h6 className="user-crud-card-text">{`${user.firstName} ${user.lastName}`}</h6>
      </div>
      <div className="user-crud-card-buttons-content">
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