import React, { Component } from 'react'


class StampContainerData extends Component {
    render() {
        const stamp = this.props.stamp;
        const { name, yearPublished, isStamped, country} = stamp;
    
        return (
            <div>
                
                <p>{name}</p>

                <p>{yearPublished}</p>

                <p>{isStamped}</p>

                <p>{country}</p>

            </div>
        )
    }
}

export default StampContainerData