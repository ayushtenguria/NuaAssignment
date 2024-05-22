// src/services/api.js

const BASE_URL = 'https://openlibrary.org';

export const fetchBooks = async (page = 1, recordsPerPage = 10) => {
    const startIndex = (page - 1) * recordsPerPage;
  try {
    const response = await fetch(`${BASE_URL}/search.json?q=subject:fiction&page=${page}&limit=${recordsPerPage}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Fetched Data:', data);

    // Check if the data contains docs
    if (data.docs && data.docs.length > 0) {
      const books = data.docs.map(book => ({
        ratings_average: book.average_rating || 'N/A', // Adjust the key if necessary
        author_name: book.author_name ? book.author_name.join(', ') : 'N/A',
        title: book.title || 'N/A',
        first_publish_year: book.first_publish_year || 'N/A',
        subject: book.subject ? book.subject.join(', ') : 'N/A',
        author_birth_date: book.birth_date || 'N/A',
        author_top_work: book.top_work || 'N/A',
      }));
      return { docs: books, numFound: data.numFound };
    } else {
      console.log('No books found');
      return { docs: [], numFound: 0 };
    }
  } catch (error) {
    console.error('Error fetching books:', error);
    return { docs: [], numFound: 0 };
  }
};
