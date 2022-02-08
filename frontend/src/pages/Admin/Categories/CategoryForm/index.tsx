import { AxiosRequestConfig } from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Category } from 'types/catecory';
import { requestBackend } from 'util/requests';
import './styles.css';

type UrlParams = {
  categoryId: string;
};

function CategoryForm() {
  const { categoryId } = useParams<UrlParams>();

  const isEditing = categoryId !== 'create';

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Category>();

  useEffect(() => {
    if (isEditing) {
      requestBackend({ url: `/categories/${categoryId}` }).then((response) => {
        const category = response.data as Category;
        setValue('name', category.name);
      });
    }
  }, [isEditing, categoryId, setValue]);

  const onSubmit = (formData: Category) => {
    const config: AxiosRequestConfig = {
      method: isEditing ? 'PUT' : 'POST',
      url: isEditing ? `/categories/${categoryId}` : '/categories',
      data: formData,
      withCredentials: true,
    };

    requestBackend(config)
      .then(() => {
        if (isEditing) {
          toast.info('Categoria editada com sucesso!');
        } else {
          toast.info('Categoria cadastrada com sucesso!');
        }
        history.push('/admin/categories');
      })
      .catch(() => {
        if (isEditing) {
          toast.error('Erro ao editar a categoria!');
        } else {
          toast.error('Erro ao cadastrar a categoria!');
        }
      });
  };

  const handleCancel = () => {
    history.push('/admin/categories');
  };

  return (
    <div className="category-form-card-container base-card">
      <form
        className="category-form-card-content"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="category-form-card-input-container">
          <input
            {...register('name', {
              required: 'Campo obrigatório',
            })}
            type="text"
            className={`form-control base-input ${
              errors.name ? 'is-invalid' : ''
            }`}
            placeholder="Nome da categoria"
            name="name"
          />
          <div className="invalid-feedback d-block">{errors.name?.message}</div>
        </div>
        <div className="category-form-card-buttons-container">
          <button className="btn btn-primary category-form-card-button">
            salvar
          </button>
          <button
            className="btn btn-outline-danger category-form-card-button"
            onClick={handleCancel}
          >
            cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default CategoryForm;
