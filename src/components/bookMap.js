{bookMap.length ? (
  <OwlCarousel className="owl-theme" {...options}>
    {bookMap.map((item, index) => (
      <a
        key={index}
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
          <div className="recommended__book--details">
            <div className="recommended__book--details-text">{item.duration}</div>
          </div>
          <div className="recommended__book--details">
            <div className="recommended__book--details-text">{item.averageRating}</div>
          </div>
        </div>
      </a>
    ))}
  </OwlCarousel>
) : null}