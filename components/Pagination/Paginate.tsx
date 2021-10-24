import React, { FC, useEffect, useState } from 'react';
import { User } from '@/types/user';
import Table from '../Table/Table';
import Button from '../UI/Button';
import BackwardIcon from '../UI/Icons/BackwardIcon';
import ForwardIcon from '../UI/Icons/ForwardIcon';
import DoubleArrowIcon from '../UI/Icons/DoubleArrowIcon';

type Props = {
  data: User[];
  deleteUser: (id: string) => void;
  multipleDelete: (ids: string[]) => void;
  editDetails: (user: User) => void;
};

const Paginate: FC<Props> = ({
  data,
  deleteUser,
  multipleDelete,
  editDetails,
}) => {
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
        'h-8 w-8 font-medium rounded-full mx-0.5 p-1 cursor-pointer ' +
        (currentPage === page
          ? 'bg-purple-400 hover:bg-purple-500'
          : 'bg-purple-200 hover:bg-purple-300')
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

  function firstPageClicked() {
    setCurrentPage(1);
  }

  function lastPageClicked() {
    setCurrentPage(totalPages.length);
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

  // -------------------------------------------------------------------------

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
    <div className="grid grid-cols-1">
      {/** Table */}
      <div
        style={{ height: '100%', minHeight: '27.5rem' }}
        className="overflow-x-auto"
      >
        <Table
          data={getPaginatedData()}
          selected={selectedIds}
          selectAll={handleToggleAllSelected}
          deleteUser={handleDelete}
          onSelectRow={toggleSelectRow}
          editDetails={editDetails}
        />
      </div>

      <div className="flex text-gray-700 justify-between flex-wrap mt-3 mb-2 px-3">
        {/** Multiple Delete Button */}
        <section className="my-5 md:my-auto mx-auto md:mx-0">
          <Button
            name="Delete Selected"
            isDisabled={selectedIds.length <= 0}
            onClick={() => {
              handleDelete(selectedIds);
            }}
          />
        </section>
        <section className="flex justify-center my-auto mx-auto md:mx-0">
          {/** GoTo First Page Button */}
          <span
            className={
              'h-8 w-8 mr-1 flex justify-center items-center ' +
              'rounded-full transform rotate-180 ' +
              (currentPage === 1
                ? 'cursor-not-allowed bg-gray-100'
                : 'bg-gray-200 cursor-pointer hover:bg-gray-300')
            }
            onClick={firstPageClicked}
          >
            <DoubleArrowIcon />
          </span>

          {/** Previous Page Button */}
          <span
            className={
              'h-8 w-8 mr-0.5 flex justify-center items-center ' +
              'rounded-full ' +
              (currentPage === 1
                ? 'cursor-not-allowed bg-gray-100'
                : 'bg-gray-200 cursor-pointer hover:bg-gray-300')
            }
            onClick={prevPageClicked}
          >
            <BackwardIcon />
          </span>

          {/** Page Navigator Buttons */}
          {pageNumbers}

          {/** Next Page Button */}
          <span
            className={
              'h-8 w-8 ml-0.5 flex justify-center items-center ' +
              'rounded-full ' +
              (currentPage === totalPages.length
                ? 'cursor-not-allowed bg-gray-100'
                : 'bg-gray-200 cursor-pointer hover:bg-gray-300')
            }
            onClick={nextPageClicked}
          >
            <ForwardIcon />
          </span>

          {/** GoTo Last Page Button */}
          <span
            className={
              'h-8 w-8 ml-1 flex justify-center items-center ' +
              'rounded-full ' +
              (currentPage === totalPages.length
                ? 'cursor-not-allowed bg-gray-100'
                : 'bg-gray-200 cursor-pointer hover:bg-gray-300')
            }
            onClick={lastPageClicked}
          >
            <DoubleArrowIcon />
          </span>
        </section>
      </div>
    </div>
  );
};

export default Paginate;
