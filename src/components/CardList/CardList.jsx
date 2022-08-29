import React, { Component } from 'react';
import './CardList.css';
class CardList extends Component {
    render() {
        const { monstersData } = this.props;
        return (
            <div className='card-index-container'>
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
            </div>
        );
    }
}

export default CardList;
