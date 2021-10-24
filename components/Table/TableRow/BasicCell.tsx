import { Dispatch, FC, SetStateAction } from 'react';

type Props = {
  data: string;
  isEditable: boolean;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};

const BasicCell: FC<Props> = ({ data, isEditable, value, setValue }) => {
  return (
    <td
      className={
        'table-cell text-lg font-medium text-gray-700 lg:w-1/5 w-32 justify-start text-left'
      }
    >
      {isEditable ? (
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      ) : (
        data
      )}
    </td>
  );
};

export default BasicCell;
