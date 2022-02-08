import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { User } from 'types/user';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
import UserCrudCard from './UserCrudCard';
import UserFilter from './UserFilter';

const Users = () => {
  const [page, setPage] = useState<SpringPage<User>>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: '/users',
      withCredentials: true,
      params: {
        page: 0,
        size: 12,
      },
    };

    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  }, []);

  return (
    <div>
      <UserFilter onSubmitFilter={() => {}} />
      {page?.content.map((user) => (
        <UserCrudCard key={user.id} user={user} onDelete={() => {}} />
      ))}
    </div>
  );
};

export default Users;
