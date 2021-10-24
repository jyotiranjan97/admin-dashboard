import { Dispatch, FC, SetStateAction } from 'react';

type Props = {
  data: string;
  color?: 'green' | 'red';
  isEditable: boolean;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

const ColoredCell: FC<Props> = ({
  data,
  color,
  isEditable,
  value,
  setValue,
}) => {
  return (
    <td className="table-cell lg:w-1/5 w-32 justify-center ">
      {isEditable ? (
        <select
          name="role-select"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        >
          <option value="admin">admin</option>
          <option value="member">member</option>
        </select>
      ) : (
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
      )}
    </td>
  );
};

export default ColoredCell;
