import React, { useEffect, useState } from 'react';
import SideBar from '../components/sideBar';
import Search from '../components/search';
import BookMap from '../components/bookMap';
import Skeleton from '../components/skeleton';

const ForYou = ({ user, handleLogout }) => {
  // Check if user is null or undefined before trying to access its properties
  const userName = user ? (user.displayName || user.email) : 'Guest';

const API_URL= "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested"
//Suggested books

async function fetchData() {
  const response = await fetch(API_URL);
  const data = await response.json();
  console.log(data)
  return data;
}

const API_URL2= "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended"
//Recommended books

async function fetchData2() {
  const response = await fetch(API_URL2);
  const data = await response.json();
  console.log(data)
  return data;
}

const [recommended, setRecommended] = useState([]);
const [suggested, setSuggested] = useState([]);

const [bookMap, setBookMap] = useState([]);
    const [loading, setLoading] = useState(true);

    const [searchTerm, setSearchTerm] = useState("");

    const filteredRecommended = recommended.filter((book) =>
  book.title.toLowerCase().includes(searchTerm.toLowerCase())
);

useEffect(() => {
        const fetchBooks = async () => {
            // Simulating a fetch call
            setTimeout(() => {
                // This would be replaced with your actual fetch call
                setBookMap([{ id: 1, title: "Book Title", author: "Author Name", imageLink: "image.jpg" }]);
                setLoading(false);
            }, 2000); // Simulating a 2-second loading time
        };

        fetchBooks();
    }, []);


useEffect (() => {
    fetchData().then(data => setSuggested(data));
  fetchData2().then(data => setRecommended(data));
}, [])

  return (
    <div id="__next">
      <div className="wrapper">
        <Search onSearch={setSearchTerm} />
        <SideBar handleLogout={handleLogout} />
        <div className="row">
          <div className="container">
            <div className="row">
            <div className="container">
            <div className="for-you__wrapper">
            <div className="for-you__title">Selected just for you</div>
            <audio src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Faudios%2Fthe-lean-startup.mp3?alt=media&amp;token=c2f2b1d4-eaf2-4d47-8c8a-7a8fd062a47e"></audio>
            <a className="selected__book" href="/book/f9gy1gpai8">
            <div className="selected__book--sub-title">How Constant Innovation Creates Radically Successful Businesses</div>
            <div className="selected__book--line"></div>
            <div className="selected__book--content">
            <figure className="book__image--wrapper" style={{height: "140px", width: "140px", minWidth: "140px"}}>
                {loading ? (
                        <Skeleton width="150px" height="150px" borderRadius="50%" />
                ) : (
            <img className="book__image" src="https://firebasestorage.googleapis.com/v0/b/summaristt.appspot.com/o/books%2Fimages%2Fthe-lean-startup.png?alt=media&amp;token=087bb342-71d9-4c07-8b0d-4dd1f06a5aa2" alt="book" style={{display: "block"}}/>
                )}
            </figure>
            <div className="selected__book--text">
            <div className="selected__book--title">The Lean Startup</div>
            <div className="selected__book--author">Eric Ries</div>
            <div className="selected__book--duration-wrapper">
            <div className="selected__book--icon">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
            </svg>
            </div>
            <div className="selected__book--duration">3 mins 23 secs</div>
            </div>
            </div>
            </div>
            </a>
            <div>
            <div className="for-you__title">Recommended For You</div>
            <div className="for-you__sub--title">We think you’ll like these</div>
            <div className="for-you__recommended--books">
            Map bookMap={recommended} loading={loading} 
            <BookMap bookMap={filteredRecommended} loading={loading} />
            <BookMap bookMap={filteredRecommended} loading={loading} />
            <BookMap bookMap={filteredRecommended} loading={loading} />
            <BookMap bookMap={filteredRecommended} loading={loading} />
            <BookMap bookMap={filteredRecommended} loading={loading} />
            <BookMap bookMap={filteredRecommended} loading={loading} />
            <BookMap bookMap={filteredRecommended} loading={loading} />
            </div>
            </div>
            <div>
            <div className="for-you__title">Suggested Books</div>
            <div className="for-you__sub--title">Browse those books</div>
            <div className="for-you__recommended--books">
            <BookMap bookMap={suggested} loading={loading} />
            <BookMap bookMap={suggested} loading={loading} />
            <BookMap bookMap={suggested} loading={loading} />
            <BookMap bookMap={suggested} loading={loading} />
            <BookMap bookMap={suggested} loading={loading} />
            <BookMap bookMap={suggested} loading={loading} />
            <BookMap bookMap={suggested} loading={loading} />
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForYou;