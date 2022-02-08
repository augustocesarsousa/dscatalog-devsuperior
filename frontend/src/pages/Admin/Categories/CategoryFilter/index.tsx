import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg';
import React from 'react';
import { useForm } from 'react-hook-form';
import './styles.css';

export type CategoryFilterData = {
  name: string;
};

type Props = {
  onSubmitFilter: (data: CategoryFilterData) => void;
};

function CategoryFilter({ onSubmitFilter }: Props) {
  const { register, handleSubmit, setValue } = useForm<CategoryFilterData>();

  const onSubmit = (formData: CategoryFilterData) => {
    onSubmitFilter(formData);
    console.log(formData);
  };

  const handleFormClear = () => {
    setValue('name', '');
  };

  return (
    <div className="base-card category-filter-container">
      <form onSubmit={handleSubmit(onSubmit)} className="category-filter-form">
        <div className="category-filter-input-container">
          <input
            {...register('name')}
            type="text"
            className="form-control"
            placeholder="Nome da categoria"
            name="name"
          />
          <button className="category-filter-button-searth-icon">
            <SearchIcon />
          </button>
        </div>
        <button
          onClick={handleFormClear}
          className="btn btn-outline-secondary category-filter-button-clean"
        >
          limpar filtro
        </button>
      </form>
    </div>
  );
}

export default CategoryFilter;
