import { FC, useEffect, useState } from 'react';
import { User } from '@/types/user';
import Table from '../Table/Table';

type Props = {
  data: User[];
  deleteUser: (id: string) => void;
  multipleDelete: (ids: string[]) => void;
};

const Paginate: FC<Props> = ({ data, deleteUser, multipleDelete }) => {
  const MAXM_DATA_PER_PAGE = 10;

  const [totalPages, setTotalPages] = useState([1]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  // Pagination Start -----
  useEffect(() => {
    var pages = [];
    for (let i = 0; i < data.length / MAXM_DATA_PER_PAGE; i++) {
      pages.push(i + 1);
    }
    setTotalPages(pages);
  }, [data]);

  function getPaginatedData() {
    const startIdx = currentPage * MAXM_DATA_PER_PAGE - MAXM_DATA_PER_PAGE;
    const endIndex = startIdx + MAXM_DATA_PER_PAGE;
    return data.slice(startIdx, endIndex);
  }

  const pageNumbers = totalPages.map((page) => (
    <div
      className={
        'h-8 w-8 font-medium rounded-full mx-2 p-1 cursor-pointer ' +
        (currentPage === page
          ? 'bg-indigo-400 hover:bg-indigo-500'
          : 'bg-gray-200 hover:bg-gray-300')
      }
      key={page}
      onClick={() => pageClicked(page)}
    >
      {page}
    </div>
  ));

  function pageClicked(page: number) {
    setCurrentPage(page);
  }

  function prevPageClicked() {
    if (currentPage != 1) {
      setCurrentPage((currentPage) => currentPage - 1);
    }
  }

  function nextPageClicked() {
    if (currentPage != totalPages.length) {
      setCurrentPage((currentPage) => currentPage + 1);
    }
  }
  // Pagination End -----

  //------------------------------------------------------------------------------

  // Handling Delete Action
  function handleDelete(uId: string | string[]) {
    // If single Id
    if (typeof uId === 'string') {
      setSelectedIds((prevState) =>
        prevState.filter((element) => element != uId)
      );
      deleteUser(uId);
    } else {
      setSelectedIds((prevState) =>
        prevState.filter((element) => uId.indexOf(element) < 0)
      );
      multipleDelete(uId);
    }
  }

  function handleToggleAllSelected() {
    // Unselect all Ids
    if (selectedIds.length === getPaginatedData().length) {
      setSelectedIds([]);
    } else {
      // Select all ids in current page
      setSelectedIds([...getPaginatedData().map((element) => element.id)]);
    }
  }

  function toggleSelectRow(id: string) {
    const indexOfId = selectedIds.indexOf(id);
    if (indexOfId >= 0) {
      setSelectedIds((prevState) =>
        prevState.filter((element) => element !== id)
      );
    } else {
      setSelectedIds((prevState) => [...prevState, id]);
    }
  }

  return (
    <div>
      <div className="h-auto">
        <Table
          data={getPaginatedData()}
          selected={selectedIds}
          selectAll={handleToggleAllSelected}
          deleteUser={handleDelete}
          onSelectRow={toggleSelectRow}
        />
      </div>
      <div className="flex text-gray-700 justify-between mt-8">
        {selectedIds.length > 0 ? (
          <button
            onClick={() => {
              handleDelete(selectedIds);
            }}
          >
            Delete Selected
          </button>
        ) : (
          <div></div>
        )}
        <section className="flex justify-center">
          <div
            className={
              'h-8 w-8 mr-1 flex justify-center items-center ' +
              'rounded-full bg-gray-200 cursor-pointer hover:bg-gray-300'
            }
            onClick={prevPageClicked}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-left w-6 h-6"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </div>
          {pageNumbers}
          <div
            className={
              'h-8 w-8 ml-1 flex justify-center items-center ' +
              'rounded-full bg-gray-200 cursor-pointer hover:bg-gray-300'
            }
            onClick={nextPageClicked}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-chevron-right w-6 h-6"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Paginate;
