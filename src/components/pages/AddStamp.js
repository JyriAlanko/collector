import React from 'react'
import { Link } from 'react-router-dom';

export default function AddStamp() {
    return (
        <div>
        <React.Fragment>
            <div className="Header">

            <h1>Add Stamp</h1>
            <Link to="/">Main</Link> | <Link to="/stamplist">List</Link> | <Link to="/about">About</Link> | <Link to="/summary">Summary</Link>
            <p>This is where you can add stamp to collection</p>

            </div>
        </React.Fragment>
        </div>
    )
}
