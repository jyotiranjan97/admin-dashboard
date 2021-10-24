import DeleteIcon from '@/components/UI/Icons/DeleteIcon';
import EditIcon from '@/components/UI/Icons/EditIcon';
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              className="fill-current text-green-500"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z" />
            </svg>
          </span>
        ) : (
          <span
            className="cursor-pointer hover:bg-gray-200 p-1 rounded-md"
            onClick={handleEdit}
          >
            <EditIcon />
          </span>
        )}
        <span
          className="cursor-pointer hover:bg-red-100 p-1 rounded-md"
          onClick={() => handleDelete(uId)}
        >
          <DeleteIcon />
        </span>
      </div>
    </td>
  );
};

export default ActionCell;
