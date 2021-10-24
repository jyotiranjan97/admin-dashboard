import { FC } from 'react';

const DeleteIcon: FC = () => {
  return (
    <svg
      className="fill-current text-red-500"
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
  );
};

export default DeleteIcon;
