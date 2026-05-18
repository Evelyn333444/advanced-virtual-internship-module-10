const Skeleton = () => {
    return (
        <div className="skeleton-loader">
            <div className="skeleton-book">
                <div className="skeleton-image" />
                <div className="skeleton-title" />
                <div className="skeleton-author" />
            </div>
            {/* Add more skeletons as needed */}
        </div>
    );
};

export default Skeleton