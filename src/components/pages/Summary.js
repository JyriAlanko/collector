import React, { Component } from 'react';
import './Summary.css';


export default class Summary extends Component {
    render(){

        let i = 0;
        let list = [];

        this.props.stampCollection.forEach((element) => {
            list.push(<p key={i}>{element.name}</p>);
            i++
        })
        return (
            
            <div className="summaryHeader">
            
                This is summary of the stamp collector

                <div className="summaryList">
                    {list}
                </div>

            </div>
    
        )
    }
}
