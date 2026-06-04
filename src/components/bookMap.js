import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "./skeleton";

const BookMap = ({ bookMap, loading }) => {
  if (loading) {
    return <Skeleton type="card-list" />;
  }

  return (
    <>
      {bookMap.map((item, index) => (
        <Link
          key={item.id || index}
          className="for-you__recommended--books-link"
          to={`/book/${item.id}`}
        >
            
            {item.subscriptionRequired && (
  <div className="book__pill">Premium</div>
)}

          <figure className="book__image--wrapper" style={{ marginBottom: "8px" }}>
            <img
              className="book__image"
              src={item.imageLink}
              alt="book"
              style={{ display: "block" }}
            />
          </figure>

          <div className="recommended__book--title">{item.title}</div>
          <div className="recommended__book--author">{item.author}</div>
          <div className="recommended__book--sub-title">{item.subTitle}</div>

          <div className="recommended__book--details-wrapper">
            <div className="recommended__book--details">{item.details}</div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default BookMap;