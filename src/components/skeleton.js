const Skeleton = ({ width, height, borderRadius, type }) => {
    if (width || height || borderRadius) {
        return (
            <div
                className="skeleton-placeholder"
                style={{
                    width,
                    height,
                    borderRadius,
                }}
            />
        );
    }

    const cards = [1, 2, 3];

    if (type === 'card-list') {
        return (
            <>
                {cards.map((item) => (
                    <div key={item} className="skeleton-card">
                        <div className="skeleton-card__image" />
                        <div className="skeleton-line skeleton-line--card-title" />
                        <div className="skeleton-line skeleton-line--card-author" />
                        <div className="skeleton-line skeleton-line--card-subtitle" />
                        <div className="skeleton-line skeleton-line--card-detail" />
                    </div>
                ))}
            </>
        );
    }

    return (
        <div className="skeleton-loader">
            <div className="skeleton-placeholder" style={{ height: '24px', width: '40%', marginBottom: '12px' }} />
            <div className="skeleton-placeholder" style={{ height: '280px', width: '100%', borderRadius: '16px' }} />
        </div>
    );
};

export default Skeleton