export const BookTable = ({ books, onSort, onEdit }) => {
  console.log("Books in Table:", books); 

  const handleEdit = (book) => {
    onEdit(book);
  };

  return (
    <table className="min-w-full divide-y divide-gray-200 p-10">
    <thead>
      <tr className="bg-blue-600 text-xl font-semibold">
        <th
          className="px-6 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider cursor-pointer"
          onClick={() => onSort('ratings_average')}
        >
          Ratings Average
        </th>
        <th
          className="px-6 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider cursor-pointer"
          onClick={() => onSort('author_name')}
        >
          Author Name
        </th>
        <th
          className="px-4 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider cursor-pointer"
          onClick={() => onSort('title')}
        >
          Title
        </th>
        <th
          className="px-6 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider cursor-pointer"
          onClick={() => onSort('first_publish_year')}
        >
          First Publish Year
        </th>
        <th
          className="px-6 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider cursor-pointer"
          onClick={() => onSort('subject')}
        >
          Subject
        </th>
        <th
          className="px-6 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider cursor-pointer"
          onClick={() => onSort('author_birth_date')}
        >
          Author Birth Date
        </th>
        <th
          className="px-6 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider cursor-pointer"
          onClick={() => onSort('author_top_work')}
        >
          Author Top Work
        </th>
        <th className="px-6 py-3 text-left text-sm font-semibold text-white uppercase tracking-wider">
          Actions
        </th>
      </tr>
    </thead>
    <tbody className="bg-blue-50 divide-y divide-gray-200">
      {books.map((book, index) => (
        <tr key={index} className="bg-blue-100">
          <td className="px-6 py-4 whitespace-nowrap">{book.ratings_average}</td>
          <td className="px-6 py-4 ">{book.author_name}</td>
          <td className="px-6 py-4 whitespace-nowrap">{book.title}</td>
          <td className="px-6 py-4 whitespace-nowrap">{book.first_publish_year}</td>
          <td className="px-6 py-4 ">{book.subject}</td>
          <td className="px-6 py-4 whitespace-nowrap">{book.author_birth_date}</td>
          <td className="px-6 py-4 whitespace-nowrap">{book.author_top_work}</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <button
              className="text-indigo-600 hover:text-indigo-900 "
              onClick={() => onEdit(book)}
            >
              Edit
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>

    //     <table>
    //     {/* Table header */}
    //     <tbody>
    //       {books.map((book, index) => (
    //         <tr key={index}>
    //           {/* Table data */}
    //           <td>{book.ratings_average}</td>
    //           <td>{book.author_name}</td>
    //           <td>{book.title}</td>
    //           {/* Add an edit button */}
    //           <td>
    //             <button onClick={() => handleEdit(book)}>Edit</button>
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
  );
};
