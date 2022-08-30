import './CardList.css';
function CardList(props) {

    const { monstersData } = props;
    return (
        <>
             {
                monstersData.map(data => {

                    return (
                        <div className="card" key={data.id}>
                            <img src={`https://robohash.org/${data.id}?set=set2`} className="card-img-top" alt={data.name} />
                            <div className="card-body">
                                <p className="card-title">{data.name}</p>
                            </div>
                        </div>
                    )
                }
                )
            }
        </>
    )
}

export default CardList;
