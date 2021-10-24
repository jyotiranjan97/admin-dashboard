import { FC } from 'react';
import CheckBox from '../UI/CheckBox';

type Props = {
  selectAll: () => void;
  isChecked: boolean;
};

const TableHead: FC<Props> = ({ selectAll, isChecked }) => {
  return (
    <tr
      className={
        'table-row bg-purple-500 h-10 text-lg text-gray-100 tracking-wide'
      }
    >
      <th className="table-cell w-1/5">
        <CheckBox onChange={selectAll} isChecked={isChecked} />
      </th>
      <th className="table-cell w-1/5 text-left">Name</th>
      <th className="table-cell w-1/5 text-left">Email</th>
      <th className="table-cell w-1/5">Role</th>
      <th className="table-cell w-1/5">Actions</th>
    </tr>
  );
};

export default TableHead;
