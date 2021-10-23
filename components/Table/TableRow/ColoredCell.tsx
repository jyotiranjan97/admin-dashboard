import { FC } from 'react';

type Props = {
  data: string;
  color?: 'green' | 'red';
};

const ColoredCell: FC<Props> = ({ data, color }) => {
  return (
    <td className="table-cell w-1/5 justify-center ">
      <span
        className={
          'rounded-md text-base font-medium px-3 py-0.5 ' +
          (color === 'green'
            ? 'text-green-500 bg-green-50'
            : 'text-red-500 bg-red-50')
        }
      >
        {data}
      </span>
    </td>
  );
};

export default ColoredCell;
