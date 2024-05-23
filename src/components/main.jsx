import React, { useEffect, useState } from "react";
import { fetchBooks } from "../service/api";
import { BookTable } from "./bookTables";
import Pagination from "./pagination";
import EditForm from "./EditForm";
import { SignedIn, useUser } from "@clerk/clerk-react";
import { UserButton } from "@clerk/clerk-react";

const Main = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
  const [loading, setLoading] = useState(true);
  const [authorSearch, setAuthorSearch] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  const { firstName } = useUser();

  useEffect(() => {
    const getBooks = async () => {
      setLoading(true);
      try {
        const data = await fetchBooks(
          currentPage,
          recordsPerPage,
          authorSearch
        );
        setBooks(data.docs);
        setTotalPages(Math.ceil(data.numFound / recordsPerPage));
      } catch (error) {
        console.error("Error fetching books:", error);
      }
      setLoading(false);
    };

    getBooks();
  }, [currentPage, recordsPerPage, authorSearch]);

  const handleEdit = (book) => {
    setSelectedBook(book);
  };

  const handleSave = (editedBook) => {
    const updatedBooks = books.map((book) =>
      book === selectedBook ? editedBook : book
    );
    setBooks(updatedBooks);

    setSelectedBook(null);
  };

  const handleAuthorSearch = (event) => {
    setAuthorSearch(event.target.value);
    setCurrentPage(1);
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
    setBooks((prevBooks) =>
      [...prevBooks].sort((a, b) => {
        const valueA =
          typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
        const valueB =
          typeof b[key] === "string" ? b[key].toUpperCase() : b[key];
        if (valueA < valueB) return direction === "asc" ? -1 : 1;
        if (valueA > valueB) return direction === "asc" ? 1 : -1;
        return 0;
      })
    );
  };

  const handleRecordsPerPageChange = (newRecordsPerPage) => {
    setRecordsPerPage(newRecordsPerPage);
    setCurrentPage(1);
  };

  const downloadCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      books.map((book) => Object.values(book).join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "books.csv");
    document.body.appendChild(link);
    link.click();
  };

  return (
    <SignedIn>
      <div>
        <div className="flex justify-around items-center space-x-6 bg-blue-600 text-white p-4">
          <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
          <div className="w-20 text-5xl"><UserButton /></div>
        </div>
        <div className="bg-blue-600 flex justify-around">
          <input
            type="text"
            value={authorSearch}
            onChange={handleAuthorSearch}
            placeholder="Search by author"
            className="px-10 py-4 rounded-xl border my-10"
          />
          <button
            className="text-white px-10 my-10 bg-green-500 hover:bg-green-700 rounded-xl"
            onClick={downloadCSV}
          >
            Download CSV
          </button>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <BookTable books={books} onSort={handleSort} onEdit={handleEdit} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              recordsPerPage={recordsPerPage}
              onRecordsPerPageChange={handleRecordsPerPageChange}
            />
          </>
        )}
        {selectedBook && (
          <EditForm
            book={selectedBook}
            onSave={handleSave}
            onCancel={() => setSelectedBook(null)}
          />
        )}
      </div>
    </SignedIn>
  );
};

export default Main;
