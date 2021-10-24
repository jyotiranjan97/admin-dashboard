import { FC } from 'react';

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
            <svg
              className="fill-current text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              height="23px"
              viewBox="0 0 24 24"
              width="24px"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d={
                  'M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 ' +
                  '9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 ' +
                  '7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 ' +
                  '0l-1.83 1.83 3.75 3.75 1.83-1.83z'
                }
              />
            </svg>
          </span>
        )}
        <span
          className="cursor-pointer hover:bg-red-100 p-1 rounded-md"
          onClick={() => handleDelete(uId)}
        >
          <svg
            className="fill-current text-red-400"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path
              d={
                'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 ' +
                '2-2V9c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v10zM18 ' +
                '4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 ' +
                '0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 ' +
                '1h12c.55 0 1-.45 1-1s-.45-1-1-1z'
              }
            />
          </svg>
        </span>
      </div>
    </td>
  );
};

export default ActionCell;
