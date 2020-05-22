import React from 'react'
import { Link } from 'react-router-dom';


export default function About() {
    return (
        <React.Fragment>
            <div className="Header">

            <h1>About</h1>
            <Link to="/">Main</Link> | <Link to="/stamplist">List</Link> | <Link to="/addstamp">Add Stamp</Link> | <Link to="/summary">Summary</Link> 
            <p>This is stamp collector app v1</p>

            </div>
        </React.Fragment>
    )
}
