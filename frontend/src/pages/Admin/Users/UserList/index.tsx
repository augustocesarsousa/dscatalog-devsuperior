import { AxiosRequestConfig } from 'axios';
import Pagination from 'components/Pagination';
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { User } from 'types/user';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
import UserCrudCard from '../UserCrudCard';
import UserFilter, { UserFilterData } from '../UserFilter';
import './styles.css';

type ControlComponentsData = {
  activePage: number;
  filterData: UserFilterData;
};

function UserList() {
  const [page, setPage] = useState<SpringPage<User>>();

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: { name: '' },
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
      filterData: controlComponentsData.filterData,
    });
  };

  const handleSubmitFilter = (data: UserFilterData) => {
    setControlComponentsData({
      activePage: 0,
      filterData: data,
    });
  };

  const getUsers = useCallback(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/users',
      withCredentials: true,
      params: {
        page: controlComponentsData.activePage,
        size: 6,
        sort: 'firstName',
        name: controlComponentsData.filterData.name,
      },
    };

    requestBackend(config).then((response) => {
      setPage(response.data);
    });
  }, [controlComponentsData]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div className="user-crud-container">
      <div className="user-crud-bar-container">
        <Link to="/admin/users/create" className="btn-crud-add-link">
          <button className="btn btn-primary text-white btn-crud-add">
            adicionar
          </button>
        </Link>
        <UserFilter onSubmitFilter={handleSubmitFilter} />
      </div>
      {page?.content.map((user) => (
        <div key={user.id}>
          <UserCrudCard user={user} onDelete={getUsers} />
        </div>
      ))}
      <div className="row">
        <Pagination
          pageCount={page ? page?.totalPages : 0}
          range={3}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default UserList;
