import React from "react";
import ReactPaginate from "react-paginate";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Pagination = ({ pageCount, onPageChange, currentPage }) => {
    const pageRangeDisplayed = 5;
    const marginPagesDisplayed = 2;
    return (
    <ReactPaginate
      previousLabel={<FiChevronLeft />}
      nextLabel={<FiChevronRight />}
      pageCount={pageCount}
      onPageChange={onPageChange}
      containerClassName={"pagination flex flex-row"}
      pageLinkClassName={"pagination__link"}
      activeLinkClassName={"pagination__link__active bg-yellow rounded-full "}
      currentPage={currentPage}
      pageRangeDisplayed={pageRangeDisplayed}
      marginPagesDisplayed={marginPagesDisplayed}
    />
  );
};

export default Pagination;
