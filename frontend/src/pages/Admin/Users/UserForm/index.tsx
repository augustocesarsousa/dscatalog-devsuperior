import React from 'react';
import Select from 'react-select';
import './styles.css';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

function UserForm() {
  return (
    <div className="user-crud-form-container">
      <div className="base-card user-crud-form-content">
        <h1 className="user-crud-form-title">Dados do usuário</h1>
        <form action="">
          <div className="user-crud-form-inputs-container">
            <div className="margin-bottom-30">
              <input
                type="text"
                className="form-control base-input"
                name="firstName"
                placeholder="Nome"
              />
            </div>
            <div className="margin-bottom-30">
              <input
                type="text"
                className="form-control base-input"
                name="lastName"
                placeholder="Sobrenome"
              />
            </div>
            <div className="margin-bottom-30">
              <Select options={options} classNamePrefix="user-crud-select" />
            </div>
            <div className="margin-bottom-30">
              <input
                type="text"
                className="form-control base-input"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className="margin-bottom-30">
              <input
                type="password"
                className="form-control base-input"
                name="password"
                placeholder="Senha"
              />
            </div>
          </div>
          <div className="user-crud-form-buttons-container">
            <button className="btn btn-primary user-crud-button">salvar</button>
            <button className="btn btn-outline-danger user-crud-button">
              cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
