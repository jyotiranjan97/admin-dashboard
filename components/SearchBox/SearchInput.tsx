import { ChangeEvent, FC } from 'react';

type Props = {
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput: FC<Props> = ({ onInputChange }) => {
  return (
    <div className="w-full shadow-sm flex mb-5">
      <input
        className={
          'w-full rounded-md p-2 focus:ring ring-purple-600 focus:outline-none ' +
          'border-gray-400 text-lg font-medium'
        }
        type="text"
        placeholder="Search by name, email or role"
        onChange={(event) => onInputChange(event)}
      />
    </div>
  );
};

export default SearchInput;
