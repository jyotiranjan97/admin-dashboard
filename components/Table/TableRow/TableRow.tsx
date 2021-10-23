import { FC } from 'react';
import { User } from '@/types/user';
import BasicCell from './BasicCell';
import ColoredCell from './ColoredCell';
import ActionCell from './ActionCell';

type Props = {
  data: User;
};

const TableRow: FC<Props> = ({ data }) => {
  return (
    <tr
      className={'table-row h-10 border-b-2 border-gray-100 hover:bg-gray-100 '}
    >
      <td className="table-cell w-1/5"></td>
      <BasicCell data={data.name} />
      <BasicCell data={data.email} />
      <ColoredCell
        data={data.role}
        color={data.role === 'admin' ? 'red' : 'green'}
      />
      <ActionCell />
    </tr>
  );
};

export default TableRow;
