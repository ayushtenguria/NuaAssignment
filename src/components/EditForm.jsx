

import React, { useState } from "react";

const EditForm = ({ book, onSave, onCancel }) => {
  const [editedBook, setEditedBook] = useState(book);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedBook((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(editedBook);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50 z-50  ">
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-8 min-w-[45rem] shadow-lg">
        <h2 className="text-white font-bold my-5 text-xl">Edit Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white">
              Ratings Average:
            </label>
            <input
              type="text"
              name="ratings_average"
              value={editedBook.ratings_average}
              onChange={handleChange}
              className="mt-1 p-2 bg-white bg-opacity-30 border border-gray-300 rounded-md w-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white">
              Author Name:
            </label>
            <input
              type="text"
              name="author_name"
              value={editedBook.author_name}
              onChange={handleChange}
              className="mt-1 p-2 bg-white bg-opacity-30 border border-gray-300 rounded-md w-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white">
              Title:
            </label>
            <input
              type="text"
              name="title"
              value={editedBook.title}
              onChange={handleChange}
              className="mt-1 p-2 bg-white bg-opacity-30 border border-gray-300 rounded-md w-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white">
              First Publish Year:
            </label>
            <input
              type="text"
              name="first_publish_year"
              value={editedBook.first_publish_year}
              onChange={handleChange}
              className="mt-1 p-2 bg-white bg-opacity-30 border border-gray-300 rounded-md w-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white">
              Subject:
            </label>
            <input
              type="text"
              name="subject"
              value={editedBook.subject}
              onChange={handleChange}
              className="mt-1 p-2 bg-white bg-opacity-30 border border-gray-300 rounded-md w-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white">
              Author Birth Date:
            </label>
            <input
              type="text"
              name="author_birth_date"
              value={editedBook.author_birth_date}
              onChange={handleChange}
              className="mt-1 p-2 bg-white bg-opacity-30 border border-gray-300 rounded-md w-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white">
              Author Top Work:
            </label>
            <input
              type="text"
              name="author_top_work"
              value={editedBook.author_top_work}
              onChange={handleChange}
              className="mt-1 p-2 bg-white bg-opacity-30 border border-gray-300 rounded-md w-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-around my-4">

          <button type="submit" className="bg-blue-600 text-white px-3 py-1 font-semibold hover:bg-blue-800 rounded-lg">Save</button>
          <button type="button" className="bg-blue-600 text-white px-3 py-1 font-semibold hover:bg-blue-800 rounded-lg" onClick={onCancel}>
            Cancel
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
