import { ReactComponent as SearchIcon } from 'assets/images/search-icon.svg';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { Role } from 'types/role';
import { formatRole } from 'util/formatters';
import { requestBackend } from 'util/requests';
import './styles.css';

export type UserFilterData = {
  name: string;
  role: Role | null;
};

type Props = {
  onSubmitFilter: (data: UserFilterData) => void;
};

function UserFilter({ onSubmitFilter }: Props) {
  const { register, handleSubmit, setValue, getValues, control } =
    useForm<UserFilterData>();

  const [selectRoles, setSelectRoles] = useState<Role[]>([]);

  const onSubmit = (formData: UserFilterData) => {
    onSubmitFilter(formData);
  };

  const handleFormClear = () => {
    setValue('name', '');
    setValue('role', null);
  };

  const handleChangeRole = (value: Role) => {
    setValue('role', value);
    const obj: UserFilterData = {
      name: getValues('name'),
      role: getValues('role'),
    };
    onSubmitFilter(obj);
  };

  useEffect(() => {
    requestBackend({
      url: '/roles',
      params: { sort: 'authority' },
      withCredentials: true,
    }).then((response) => {
      setSelectRoles(response.data.content);
    });
  }, []);

  return (
    <div className="base-card user-filter-container">
      <form onSubmit={handleSubmit(onSubmit)} className="user-filter-form">
        <div className="user-filter-name-container">
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
        <div className="user-filter-bottom-container">
          <div className="user-filter-role-container">
            <Controller
              name="role"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={selectRoles}
                  isClearable
                  classNamePrefix="role-filter-select"
                  placeholder="Perfil"
                  onChange={(value) => handleChangeRole(value as Role)}
                  getOptionLabel={(role: Role) => formatRole(role.authority)}
                  getOptionValue={(role: Role) => String(role.id)}
                />
              )}
            />
          </div>
          <button
            onClick={handleFormClear}
            className="btn btn-outline-secondary user-filter-button-clean"
          >
            limpar <span className="user-filter-button-clean-word">filtro</span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserFilter;
