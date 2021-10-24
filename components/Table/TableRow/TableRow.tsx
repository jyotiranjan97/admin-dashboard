import { FC, useState } from 'react';
import { User } from '@/types/user';
import BasicCell from './BasicCell';
import ColoredCell from './ColoredCell';
import ActionCell from './ActionCell';
import CheckBox from '@/components/UI/CheckBox';

type Props = {
  data: User;
  deleteUser: (id: string | string[]) => void;
  isChecked: boolean;
  onSelectRow: (id: string) => void;
  editDetails: (user: User) => void;
};

const TableRow: FC<Props> = ({
  data,
  deleteUser,
  onSelectRow,
  isChecked,
  editDetails,
}) => {
  const [editable, setEditable] = useState(false);
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);

  function handleDelete(id: string) {
    deleteUser(id);
  }

  const handleEdit = () => {
    setEditable(true);
  };

  const handleSave = () => {
    setEditable(false);
    editDetails({ ...data, name: name, email: email });
  };

  return (
    <tr
      className={'table-row h-10 border-b-2 border-gray-100 hover:bg-gray-100 '}
    >
      <td className="table-cell w-1/5">
        <CheckBox
          value={data.id}
          onChange={() => onSelectRow(data.id)}
          isChecked={isChecked}
        />
      </td>
      <BasicCell
        data={data.name}
        isEditable={editable}
        value={name}
        setValue={setName}
      />
      <BasicCell
        data={data.email}
        isEditable={editable}
        value={email}
        setValue={setEmail}
      />
      <ColoredCell
        data={data.role}
        color={data.role === 'admin' ? 'red' : 'green'}
      />
      <ActionCell
        handleDelete={handleDelete}
        uId={data.id}
        handleEdit={handleEdit}
        handleSave={handleSave}
        editable={editable}
      />
    </tr>
  );
};

export default TableRow;
