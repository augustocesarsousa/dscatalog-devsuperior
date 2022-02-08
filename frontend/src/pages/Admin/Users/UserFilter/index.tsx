import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg';
import React from 'react';
import { useForm } from 'react-hook-form';
import './styles.css';

export type UserFilterData = {
  name: string;
};

type Props = {
  onSubmitFilter: (data: UserFilterData) => void;
};

function UserFilter({ onSubmitFilter }: Props) {
  const { register, handleSubmit, setValue } = useForm<UserFilterData>();

  const onSubmit = (formData: UserFilterData) => {
    onSubmitFilter(formData);
    console.log(formData);
  };

  const handleFormClear = () => {
    setValue('name', '');
  };

  return (
    <div className="base-card user-filter-container">
      <form onSubmit={handleSubmit(onSubmit)} className="user-filter-form">
        <div className="user-filter-input-container">
          <input
            {...register('name')}
            type="text"
            className="form-control"
            placeholder="Nome do usuário"
            name="name"
          />
          <button className="user-filter-button-searth-icon">
            <SearchIcon />
          </button>
        </div>
        <button
          onClick={handleFormClear}
          className="btn btn-outline-secondary user-filter-button-clean"
        >
          limpar filtro
        </button>
      </form>
    </div>
  );
}

export default UserFilter;
