import { AxiosRequestConfig } from 'axios';
import React, { useEffect, useState } from 'react';
import { Category } from 'types/catecory';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';

function Categoies() {
  const [page, setPage] = useState<SpringPage<Category>>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: '/categories',
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
      {page?.content.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
}

export default Categoies;
