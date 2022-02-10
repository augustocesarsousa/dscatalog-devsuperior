import { AxiosRequestConfig } from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Category } from 'types/catecory';
import { requestBackend } from 'util/requests';
import './styles.css';

type Props = {
  category: Category;
  onDelete: Function;
};

type Error = {
  message: string;
};

function CategoryCrudCard({ category, onDelete }: Props) {
  const [errorDelete, setErrorDelete] = useState<Error>({ message: '' });

  const handleDelete = (categoryId: number) => {
    if (!window.confirm('Você realmente quer deletar a categoria?')) {
      return;
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: `/categories/${categoryId}`,
      withCredentials: true,
    };

    requestBackend(config)
      .then(() => {
        onDelete();
        toast.info('Categoria deletada com sucesso!');
      })
      .catch((error) => {
        setErrorDelete(error.response.data);
      });
  };

  useEffect(() => {
    if (errorDelete.message === 'Integrity violation')
      toast.error(
        `Erro ao deletar a categoria, existem produtos cadastrados com esta categoria!`
      );
  }, [errorDelete]);

  return (
    <div className="category-crud-card-container base-card">
      <div className="category-crud-card-text-content">
        <h6 className="category-crud-card-text">{category.name}</h6>
      </div>
      <div className="category-crud-card-buttons-container">
        <Link to={`/admin/categories/${category.id}`}>
          <button className="btn btn-outline-secondary category-crud-card-button">
            editar
          </button>
        </Link>
        <button
          className="btn btn-outline-danger category-crud-card-button"
          onClick={() => handleDelete(category.id)}
        >
          excluir
        </button>
      </div>
    </div>
  );
}

export default CategoryCrudCard;
