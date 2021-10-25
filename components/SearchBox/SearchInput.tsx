import { FC, useState } from 'react';
import CrossIcon from '../UI/Icons/CrossIcon';

type Props = {
  onInputChange: (input: string) => void;
};

const SearchInput: FC<Props> = ({ onInputChange }) => {
  const [searchInput, setSearchInput] = useState('');

  function handleSearch(input: string): void {
    setSearchInput(input);
    onInputChange(input);
  }

  return (
    <div className="w-full shadow-sm flex mb-5 relative">
      <input
        id="search-input"
        tabIndex={0}
        className={
          'w-full rounded-md p-2 focus:ring ring-purple-600 focus:outline-none ' +
          'border-gray-400 text-lg font-medium'
        }
        type="text"
        placeholder="Search by name, email or role"
        value={searchInput}
        onChange={(event) => handleSearch(event.target.value)}
      />
      {searchInput.trim() === '' ? null : (
        <span
          className={
            'absolute right-2 top-1 rounded-full h-9 w-9 flex p-1.5 ' +
            'bg-gray-100 hover:bg-gray-200 cursor-pointer'
          }
          onClick={() => handleSearch('')}
        >
          <CrossIcon />
        </span>
      )}
    </div>
  );
};

export default SearchInput;
