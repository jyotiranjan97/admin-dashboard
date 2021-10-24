import { FC } from 'react';
import { User } from '@/types/user';
import TableHead from './TableHead';
import TableRow from './TableRow/TableRow';

type Props = {
  data: User[];
  selected: string[];
  selectAll: () => void;
  deleteUser: (id: string | string[]) => void;
  onSelectRow: (id: string) => void;
};

const Table: FC<Props> = ({
  data,
  selected,
  selectAll,
  deleteUser,
  onSelectRow,
}) => {
  // Table rows
  const tableRows =
    data &&
    data.map((entity) => (
      <TableRow
        key={entity.id}
        data={entity}
        deleteUser={deleteUser}
        isChecked={selected.indexOf(entity.id) >= 0 ? true : false}
        onSelectRow={onSelectRow}
      />
    ));

  return (
    <table className="table table-fixed w-full">
      <thead>
        <TableHead
          selectAll={selectAll}
          isChecked={selected.length === data.length ? true : false}
        />
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
};

export default Table;
