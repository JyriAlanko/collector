import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import StampContainer from '../StampContainer';
import stampCollection from '../../DataManager';

export default class StampList extends Component {
    render() {

        let i = 0;
        let list = [];

        stampCollection.forEach((element) => {
            list.push(<StampContainer stamp={element} key={i}/>);
            i++
        });
    return (
        
        <React.Fragment>
            <div className="Header">
                <h1>List</h1>
                <Link to="/">Main</Link> | <Link to="/about">About</Link> | <Link to="/addstamp">Add Stamp</Link> | <Link to="/summary">Summary</Link>
                <p>Here you can see all the stamps in collection</p>

                {list}

            </div>
        </React.Fragment>
        
    )}
}
