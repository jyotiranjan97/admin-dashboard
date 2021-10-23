import { ChangeEvent, FC, useEffect, useState } from 'react';
import { User } from '@/types/user';
import Paginate from './Pagination/Paginate';
import SearchInput from './SearchBox/SearchInput';

type Props = {
  data: User[];
};

const Main: FC<Props> = ({ data }) => {
  const [users, setUsers] = useState<User[]>([]);
  let debounceTimeout: any = undefined;

  useEffect(() => {
    setUsers(data);
  }, []);

  // Search Start -------
  function search(input: string) {
    if (input === '') {
      setUsers(data);
    } else {
      setUsers((prevState) => {
        return filterTextInputInData(prevState, input);
      });
    }
  }

  function filterTextInputInData(data: User[], queryText: string) {
    return data.filter(
      (element) =>
        element.name.toLowerCase().includes(queryText.toLowerCase()) ||
        element.email.toLowerCase().includes(queryText.toLowerCase()) ||
        element.role.toLowerCase().includes(queryText.toLowerCase())
    );
  }

  function debounceSearch(event: ChangeEvent<HTMLInputElement>) {
    let inputTxt = event.target.value;

    if (debounceTimeout) {
      window.clearTimeout(debounceTimeout);
    }
    debounceTimeout = window.setTimeout(function () {
      search(inputTxt);
    }, 300);
  }
  // Search End ------

  return (
    <>
      <SearchInput onInputChange={debounceSearch} />
      {users.length > 0 ? (
        <Paginate data={users} />
      ) : (
        <span id="no-data">No data to display</span>
      )}
    </>
  );
};

export default Main;
