
{bookMap.length ? (
  <OwlCarousel className="owl-theme" {...options}>
    {bookMap.map((item, index) => (
      <Link
        key={index} // Ensure each item has a unique key
        className="for-you__recommended--books-link"
        href={`/book/${item.id}`}
      >
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
  </OwlCarousel>
) : (
  <p>No books available.</p> // Fallback if bookMap is empty
)}