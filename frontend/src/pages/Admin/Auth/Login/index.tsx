import { AuthContext } from 'AuthContext';
import ButtonIcon from 'components/ButtonIcon';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { resquestBackendLogin } from 'util/requests';
import { saveAuthData } from 'util/storage';
import { getTokenData } from 'util/token';
import './styles.css';

type CredentialsDTO = {
  username: string;
  password: string;
};

type LocationState = {
  from: string;
};

const Login = () => {
  const location = useLocation<LocationState>();

  const { from } = location.state || { from: { pathname: '/admin' } };

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

  const history = useHistory();

  const onSubmit = (formData: CredentialsDTO) => {
    resquestBackendLogin(formData)
      .then((response) => {
        saveAuthData(response.data);
        setHasError(false);
        setAuthContextData({
          authenticated: true,
          tokenData: getTokenData(),
        });
        history.replace(from);
      })
      .catch((error) => {
        error.response === undefined
          ? setErrors(true, 'Erro ao fazer a requisição!')
          : setErrors(true, 'Usuário ou senha não conferem!');
      });
  };

  return (
    <div className="base-card login-card">
      <h2>login</h2>
      {hasError && (
        <div className="alert alert-danger mb-4">{errorMessage}</div>
      )}
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
        <div className="mb-2">
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
        <div className="login-submit">
          <ButtonIcon text="Fazer login" />
        </div>
        <Link
          to="/admin/auth/changePassword"
          className="login-link-change-password"
        >
          Alterar a senha
        </Link>
      </form>
    </div>
  );
};
export default Login;
