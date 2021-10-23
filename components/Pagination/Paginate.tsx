import { FC, useEffect, useState } from 'react';
import { User } from '@/types/user';
import Table from '../Table/Table';

type Props = {
  data: User[];
};

const Paginate: FC<Props> = ({ data }) => {
  const MAXM_DATA_PER_PAGE = 10;

  const [totalPages, setTotalPages] = useState([1]);
  const [currentPage, setCurrentPage] = useState<number>(1);

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

  return (
    <div>
      <div className="h-auto">
        <Table data={getPaginatedData()} />
      </div>
      <div className="flex text-gray-700 justify-end mt-8">
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
      </div>
    </div>
  );
};

export default Paginate;
