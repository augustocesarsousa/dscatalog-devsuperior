import { AxiosRequestConfig } from 'axios';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import Select from 'react-select';
import { toast } from 'react-toastify';
import { Role } from 'types/role';
import { User } from 'types/user';
import { formatRole } from 'util/formatters';
import { requestBackend } from 'util/requests';
import './styles.css';

type UrlParams = {
  userId: string;
};

function UserForm() {
  const { userId } = useParams<UrlParams>();

  const isEditing = userId !== 'create';

  const history = useHistory();

  const [selectRoles, setSelectRoles] = useState<Role[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm<User>();

  useEffect(() => {
    requestBackend({ url: '/roles', withCredentials: true }).then(
      (response) => {
        setSelectRoles(response.data.content);
      }
    );
  }, []);

  useEffect(() => {
    if (isEditing) {
      requestBackend({ url: `/users/${userId}`, withCredentials: true }).then(
        (response) => {
          const user = response.data as User;
          setValue('roles', user.roles);
          setValue('firstName', user.firstName);
          setValue('lastName', user.lastName);
          setValue('email', user.email);
        }
      );
    }
  }, [isEditing, userId, setValue]);

  const onSubmit = (formData: User) => {
    const data = {
      ...formData,
      password: isEditing ? '' : '123456',
    };

    const config: AxiosRequestConfig = {
      method: isEditing ? 'PUT' : 'POST',
      url: isEditing ? `/users/${userId}` : '/users',
      data,
      withCredentials: true,
    };

    requestBackend(config)
      .then(() => {
        isEditing
          ? toast.info('Usuário editado com sucesso!')
          : toast.info('Usuário cadastrado com sucesso!');

        history.push('/admin/users');
      })
      .catch(() => {
        isEditing
          ? toast.error('Erro ao editar o usuário!')
          : toast.error('Erro ao cadastrar o usuário!');
      });
  };

  const handleCancel = () => {
    history.push('/admin/users');
  };

  return (
    <div className="user-crud-form-container">
      <div className="base-card user-crud-form-content">
        <h1 className="user-crud-form-title">Dados do usuário</h1>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="user-crud-form-inputs-container">
            <div className="margin-bottom-30">
              <Controller
                name="roles"
                rules={{ required: true }}
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={selectRoles}
                    classNamePrefix="user-crud-select"
                    isMulti
                    getOptionLabel={(role: Role) => formatRole(role.authority)}
                    getOptionValue={(role: Role) => String(role.id)}
                    inputId="roles"
                    placeholder="Perfil"
                  />
                )}
              />
              {errors.roles && (
                <div className="invalid-feedback d-block">
                  Campo obrigatório
                </div>
              )}
            </div>
            <div className="margin-bottom-30">
              <input
                {...register('firstName', {
                  required: 'Campo obrigatório',
                })}
                type="text"
                className={`form-control base-input ${
                  errors.firstName ? 'is-invalid' : ''
                }`}
                name="firstName"
                placeholder="Nome"
              />
              <div className="invalid-feedback d-block">
                {errors.firstName?.message}
              </div>
            </div>
            <div className="margin-bottom-30">
              <input
                {...register('lastName', {
                  required: 'Campo obrigatório',
                })}
                type="text"
                className={`form-control base-input ${
                  errors.lastName ? 'is-invalid' : ''
                }`}
                name="lastName"
                placeholder="Sobrenome"
              />
              <div className="invalid-feedback d-block">
                {errors.lastName?.message}
              </div>
            </div>
            <div className="margin-bottom-30">
              <input
                {...register('email', {
                  required: 'Campo obrigatório',
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Email inválido',
                  },
                })}
                type="text"
                className={`form-control base-input ${
                  errors.email ? 'is-invalid' : ''
                }`}
                name="email"
                placeholder="Email"
              />
              <div className="invalid-feedback d-block">
                {errors.email?.message}
              </div>
            </div>
          </div>
          <div className="user-crud-form-buttons-container">
            <button className="btn btn-primary user-crud-button">salvar</button>
            <button
              className="btn btn-outline-danger user-crud-button"
              onClick={handleCancel}
            >
              cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
