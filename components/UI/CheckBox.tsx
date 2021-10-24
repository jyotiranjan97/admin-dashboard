import { FC } from 'react';

type Props = {
  onChange: () => void;
  value?: string;
  isChecked: boolean;
};

const CheckBox: FC<Props> = ({ onChange, value, isChecked }) => {
  return (
    <input
      type="checkbox"
      onChange={onChange}
      value={value}
      checked={isChecked}
      className="form-checkbox h-5 w-5 text-red-500"
    />
  );
};

export default CheckBox;
