import React, { useEffect, useState } from 'react';
import SideBar from '../components/sideBar';
import Search from '../components/search';
import BookMap from '../components/bookMap';

const Library = ({ user, handleLogout }) => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];
    setBooks(savedBooks);
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (book.author && book.author.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (book.subTitle && book.subTitle.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div id="__next">
      <div className="wrapper">
        <Search onSearch={setSearchTerm} handleLogout={handleLogout} />
        <SideBar handleLogout={handleLogout} />
        <div className="row">
          <div className="container">
            <div className="for-you__wrapper">
              <div className="for-you__title">My Library</div>
              <div className="for-you__recommended--books">
                <BookMap bookMap={filteredBooks} loading={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;