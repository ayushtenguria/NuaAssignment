

import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  recordsPerPage,
  onRecordsPerPageChange,
}) => {
  const generatePageNumbers = () => {
    const delta = 2;
    const range = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      range.unshift("...");
    }
    if (currentPage + delta < totalPages - 1) {
      range.push("...");
    }

    range.unshift(1);
    if (totalPages > 1) {
      range.push(totalPages);
    }

    return range;
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages && newPage !== currentPage) {
      onPageChange(newPage);
    }
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div className="bg-blue-600 flex justify-around p-5 text-white">
      <div className="space-x-3 font-medium text-lg">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {pageNumbers.map((number, index) => (
          <button
            key={index}
            onClick={() =>
              typeof number === "number" && handlePageChange(number)
            }
            disabled={number === currentPage || number === "..."}
          >
            {number}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      <div className="space-x-2">
        <label htmlFor="recordsPerPage" className="font-medium text-lg">Records per page:</label>
        <select
          id="recordsPerPage"
          value={recordsPerPage}
          onChange={(e) => onRecordsPerPageChange(Number(e.target.value))}
          className="text-black"
        >
          <option value={10}>10</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>
    </div>
  );
};

export default Pagination;
