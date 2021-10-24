import DeleteIcon from '@/components/UI/Icons/DeleteIcon';
import EditIcon from '@/components/UI/Icons/EditIcon';
import SaveIcon from '@/components/UI/Icons/SaveIcon';
import React, { FC } from 'react';

type Props = {
  handleDelete: (id: string) => void;
  uId: string;
  handleEdit: () => void;
  handleSave: () => void;
  editable: boolean;
};

const ActionCell: FC<Props> = ({
  handleDelete,
  uId,
  handleEdit,
  handleSave,
  editable,
}) => {
  return (
    <td className="table-cell text-base w-1/5">
      <div className="flex justify-center">
        {editable ? (
          <span
            className="cursor-pointer hover:bg-green-200 p-1 rounded-md"
            onClick={handleSave}
          >
            <SaveIcon />
          </span>
        ) : (
          <span
            className="cursor-pointer hover:bg-purple-100 p-1 rounded-md"
            onClick={handleEdit}
          >
            <EditIcon />
          </span>
        )}
        <span
          className="cursor-pointer hover:bg-red-200 p-1 rounded-md"
          onClick={() => handleDelete(uId)}
        >
          <DeleteIcon />
        </span>
      </div>
    </td>
  );
};

export default ActionCell;
