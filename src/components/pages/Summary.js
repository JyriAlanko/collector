import React, { Component } from 'react'



export default class Summary extends Component {
    render(){

        let i = 0;
        let list = [];

        this.props.stampCollection.forEach((element) => {
            list.push(<p key={i}>{element.name}</p>);
            i++
        })
        return (
            
            <div classname="">
            
                <p>This is summary of the stamp collector</p>

                <div>
                    {list}
                </div>

            </div>
    
        )
    }
}
