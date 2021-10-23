import { FC } from 'react';

type Props = {
  data: string;
};

const BasicCell: FC<Props> = ({ data }) => {
  return (
    <td className="table-cell text-base w-1/5 justify-start text-left">
      {data}
    </td>
  );
};

export default BasicCell;
