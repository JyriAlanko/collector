import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './StampContainer.css'

class Header extends Component {
    render(){

        return (
            <div className='Header'>
                <h1> Collector </h1>

                <Link to="/stamplist">List</Link> | <Link to="/about">About</Link> | <Link to="/addstamp">Add Stamp</Link> | <Link to="/summary">Summary</Link>
            </div>
        )

    }
}

export default Header;