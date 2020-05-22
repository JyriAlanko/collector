import React from 'react'
import { Link } from 'react-router-dom';


export default function Summary() {
    return (
        <React.Fragment>
            <div className="Header">

            <h1>Summary</h1>
            <Link to="/">Main</Link> | <Link to="/stamplist">List</Link> | <Link to="/about">About</Link> | <Link to="/addstamp">Add Stamp</Link>
            <p>This is summary of the stamp collector</p>

            </div>
        </React.Fragment>
    )
}
