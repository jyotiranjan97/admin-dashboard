import {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { User } from '@/types/user';
import Paginate from './Pagination/Paginate';
import SearchInput from './SearchBox/SearchInput';

type Props = {
  data: User[];
  setData: Dispatch<SetStateAction<User[]>>;
};

const Main: FC<Props> = ({ data, setData }) => {
  const [users, setUsers] = useState<User[]>([]);
  let debounceTimeout: any = undefined;

  useEffect(() => {
    setUsers(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Search Implementaion Start -------
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
  // Search Implementaion End ------

  //------------------------------------------------------------------------------

  // Delete Users Start ----
  function deleteUser(uId: string) {
    setData(data.filter((element) => element.id !== uId));
    setUsers((prevState) => prevState.filter((element) => element.id !== uId));
  }

  function multiDelete(uIDs: string[]) {
    // If user id is present in input uIDs array, remove it
    setUsers((prevState) =>
      prevState.filter((element) => uIDs.indexOf(element.id) < 0)
    );
    console.log('Before -', data.length);

    setData(data.filter((element) => uIDs.indexOf(element.id) < 0));

    console.log('After -', data.length);
  }
  // Delete Users End ---

  return (
    <>
      <SearchInput onInputChange={debounceSearch} />
      {users.length > 0 ? (
        <Paginate
          data={users}
          deleteUser={deleteUser}
          multipleDelete={multiDelete}
        />
      ) : (
        <span id="no-data">No data to display</span>
      )}
    </>
  );
};

export default Main;
