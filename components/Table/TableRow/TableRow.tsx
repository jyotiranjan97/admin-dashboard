import { FC } from 'react';
import { User } from '@/types/user';
import BasicCell from './BasicCell';
import ColoredCell from './ColoredCell';
import ActionCell from './ActionCell';

type Props = {
  data: User;
  deleteUser: (id: string | string[]) => void;
  isChecked: boolean;
  onSelectRow: (id: string) => void;
};

const TableRow: FC<Props> = ({ data, deleteUser, onSelectRow, isChecked }) => {
  function handleDelete(id: string) {
    deleteUser(id);
  }

  return (
    <tr
      className={'table-row h-10 border-b-2 border-gray-100 hover:bg-gray-100 '}
    >
      <td className="table-cell w-1/5">
        <input
          type="checkbox"
          onChange={() => {
            onSelectRow(data.id);
          }}
          value={data.id}
          checked={isChecked}
        />
      </td>
      <BasicCell data={data.name} />
      <BasicCell data={data.email} />
      <ColoredCell
        data={data.role}
        color={data.role === 'admin' ? 'red' : 'green'}
      />
      <ActionCell handleDelete={handleDelete} uId={data.id} />
    </tr>
  );
};

export default TableRow;
