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
    // If user id is present in parameter uIDs array, remove it
    setUsers((prevState) =>
      prevState.filter((element) => uIDs.indexOf(element.id) < 0)
    );
    setData(data.filter((element) => uIDs.indexOf(element.id) < 0));
  }
  // Delete Users End ---

  //------------------------------------------------------------------------------

  // Edit Details Start -------

  function onEditDetailsHandler(user: User) {
    setUsers((prevState) =>
      prevState.map(function replaceObjectIfIdMatches(element) {
        if (element.id === user.id) return user;
        return element;
      })
    );

    // API to be called here in case of persistance
    setData((prevState) =>
      prevState.map(function replaceObjectIfIdMatches(element) {
        if (element.id === user.id) return user;
        return element;
      })
    );
  }

  // Edit Details End -------

  return (
    <>
      <SearchInput onInputChange={debounceSearch} />
      {users.length > 0 ? (
        <Paginate
          data={users}
          deleteUser={deleteUser}
          multipleDelete={multiDelete}
          editDetails={onEditDetailsHandler}
        />
      ) : (
        <div style={{ height: '27.5rem' }}>
          <span id="no-data" className="text-lg text-center">
            No data to display 😞
          </span>
        </div>
      )}
    </>
  );
};

export default Main;
