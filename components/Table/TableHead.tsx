import { FC } from 'react';

type Props = {
  selectAll: () => void;
  isChecked: boolean;
};

const TableHead: FC<Props> = ({ selectAll, isChecked }) => {
  return (
    <tr
      className={
        'table-row bg-gray-300 h-10 text-lg text-gray-700 tracking-wide'
      }
    >
      <th className="table-cell w-1/5">
        <input onChange={selectAll} type="checkbox" checked={isChecked} />
      </th>
      <th className="table-cell w-1/5 text-left">Name</th>
      <th className="table-cell w-1/5 text-left">Email</th>
      <th className="table-cell w-1/5">Role</th>
      <th className="table-cell w-1/5">Actions</th>
    </tr>
  );
};

export default TableHead;
