import { FC } from 'react';
import { User } from '@/types/user';
import TableHead from './TableHead';
import TableRow from './TableRow/TableRow';

type Props = {
  data: User[];
};

const Table: FC<Props> = ({ data }) => {
  // Table rows
  const tableRows =
    data && data.map((entity) => <TableRow key={entity.id} data={entity} />);

  return (
    <table className="table table-fixed w-10/12">
      <TableHead />
      {tableRows}
    </table>
  );
};

export default Table;
