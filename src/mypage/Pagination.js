import React from "react";
import ReactPaginate from "react-paginate";
import fiChevronRight from "../asset/right-chevron.png";
import fiChevronLeft from "../asset/left-chevron.png"

const Pagination = ({ pageCount, onPageChange, currentPage }) => {
    const pageRangeDisplayed = 5;
    const marginPagesDisplayed = 2;
    return (
    <ReactPaginate
      previousLabel={fiChevronLeft}
      nextLabel={fiChevronRight}
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
