import { AuthContext } from 'AuthContext';
import { AxiosRequestConfig } from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { requestBackend, resquestBackendLogin } from 'util/requests';
import { removeAuthData, saveAuthData } from 'util/storage';
import { getTokenData } from 'util/token';
import './styles.css';

type CredentialsDTO = {
  username: string;
  password: string;
  newPassword: string;
  repeatPassword: string;
};

function ChangePassword() {
  const history = useHistory();

  // eslint-disable-next-line
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CredentialsDTO>();

  const setErrors = (has: boolean, message: string) => {
    setHasError(has);
    setErrorMessage(message);
  };

  const onSubmit = (formData: CredentialsDTO) => {
    formData.newPassword.localeCompare(formData.repeatPassword) === 0
      ? resquestBackendLogin(formData)
          .then((response) => {
            setErrors(false, '');
            saveAuthData(response.data);
            setAuthContextData({
              authenticated: true,
              tokenData: getTokenData(),
            });
            changePassword(formData.username, formData.newPassword);
            removeAuthData();
            setAuthContextData({
              authenticated: false,
            });
          })
          .catch((error) => {
            error.response === undefined
              ? setErrors(true, 'Erro ao fazer a requisição!')
              : setErrors(true, 'Usuário ou senha não conferem!');
          })
      : setErrors(true, 'Senhas não conferem!');
  };

  const changePassword = (email: string, password: string) => {
    const newPassword = {
      password: password,
    };

    const config: AxiosRequestConfig = {
      method: 'PUT',
      url: `/users/change-password/${email}`,
      data: newPassword,
      withCredentials: true,
    };

    requestBackend(config)
      .then(() => {
        toast.info('Senha alterada com sucesso!');
        history.push('/admin/auth/login');
      })
      .catch(() => {
        toast.error('Erro ao alterar a senha!');
      });
  };

  const handleCancel = () => {
    history.push('/admin/auth/login');
  };

  return (
    <div className="base-card change-password-container">
      <h2>Alterar senha</h2>
      {hasError && (
        <div className="alert alert-danger mb-4">{errorMessage}</div>
      )}
      <div className="change-password-content">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              {...register('username', {
                required: 'Campo obrigatório',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Email inválido',
                },
              })}
              type="text"
              className={`form-control base-input ${
                errors.username ? 'is-invalid' : ''
              }`}
              placeholder="Email"
              name="username"
            />
            <div className="invalid-feedback d-block">
              {errors.username?.message}
            </div>
          </div>
          <div className="mb-4">
            <input
              {...register('password', {
                required: 'Campo obrigatório',
              })}
              type="password"
              className={`form-control base-input ${
                errors.password ? 'is-invalid' : ''
              }`}
              placeholder="Senha"
              name="password"
            />
            <div className="invalid-feedback d-block">
              {errors.password?.message}
            </div>
          </div>
          <div className="mb-4">
            <input
              {...register('newPassword', {
                required: 'Campo obrigatório',
              })}
              type="password"
              className={`form-control base-input ${
                errors.newPassword ? 'is-invalid' : ''
              }`}
              placeholder="Nova senha"
              name="newPassword"
            />
            <div className="invalid-feedback d-block">
              {errors.newPassword?.message}
            </div>
          </div>
          <div className="mb-4">
            <input
              {...register('repeatPassword', {
                required: 'Campo obrigatório',
              })}
              type="password"
              className={`form-control base-input ${
                errors.repeatPassword ? 'is-invalid' : ''
              }`}
              placeholder="Repetir senha"
              name="repeatPassword"
            />
            <div className="invalid-feedback d-block">
              {errors.repeatPassword?.message}
            </div>
          </div>
          <div className="change-password-buttons-container">
            <button className="btn btn-primary change-password-button">
              alterar
            </button>
            <button
              className="btn btn-outline-danger change-password-button"
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

export default ChangePassword;
