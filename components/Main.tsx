import { FC } from 'react';
import { User } from '@/types/user';
import Table from './Table/Table';

type Props = {
  data: User[];
};

const Main: FC<Props> = ({ data }) => {
  return (
    <>
      <Table data={data} />
    </>
  );
};

export default Main;
