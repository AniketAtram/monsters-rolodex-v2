import React, { Component } from 'react';
import './Heading.css';
class Heading extends Component {
    render() {
        let { title } = this.props;
        return (
            <div className='title-container'>
                <h1>{title}</h1>
            </div>
        );
    }
}

export default Heading;
