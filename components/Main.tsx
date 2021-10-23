import { FC, useEffect, useState } from 'react';
import { User } from '@/types/user';
import Table from './Table/Table';
import Paginate from './Pagination/Paginate';

type Props = {
  data: User[];
};

const Main: FC<Props> = ({ data }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    setUsers(data);
  }, []);

  return (
    <>
      {users.length > 0 ? (
        <Paginate data={users} />
      ) : (
        <span id="no-data">No data to display</span>
      )}
    </>
  );
};

export default Main;
