import './NotFoundCard.css';
function NotFoundCard() {
    return (
        <>
            <div className="card-na" key="not-found-404">
                <div className="card-body">
                    <p className="card-title">No Data Found</p>
                </div>
                <img src={`https://robohash.org/$11?set=set5`} className="card-img-top" alt="not-found" />

            </div>
        </>
    );
}

export default NotFoundCard;

