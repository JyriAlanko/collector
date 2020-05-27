import React, { Component } from 'react';
import EditStampFrom from './EditStampFrom';
import './AddStampContainer.css'

class AddStampContainer extends Component{
    render() {
        return (
            <div className="addStampContainer">
                <EditStampFrom stamp={null}
                    addStampToCollection={this.props.addStampToCollection}/>
            </div>
        )
    }
}

export default AddStampContainer;