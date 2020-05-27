import React, { Component } from 'react'
import StampContainer from '../StampContainer';


export default class StampList extends Component {
    render() {

        let i = 0;
        let list = [];

        this.props.stampCollection.forEach((element) => {
            list.push(<StampContainer stamp={element} key={i}/>);
            i++
        });
    return (
        
             <div>
                {list}
            </div>
        
        
    )}
}
