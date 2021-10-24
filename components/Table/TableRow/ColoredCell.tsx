import { FC } from 'react';

type Props = {
  data: string;
  color?: 'green' | 'red';
};

const ColoredCell: FC<Props> = ({ data, color }) => {
  return (
    <td className="table-cell lg:w-1/5 w-32 justify-center ">
      <span
        className={
          'rounded-md text-base font-medium px-3 py-0.5 ' +
          (color === 'green'
            ? 'text-green-600 bg-green-100'
            : 'text-red-600 bg-red-100')
        }
      >
        {data}
      </span>
    </td>
  );
};

export default ColoredCell;
