import React, { Component } from 'react'
import StampContainerImage from './StampContainerImage'
import StampContainerData from './StampContainerData'

export default class StampContainer extends Component {
    constructor() {
        super();
        this.state = {
            showFull: false,
        };
    }


    headerclicked() {
        this.setState({
            showFull: !this.state.showFull
        });
    }


    render() {
        

        return (
            <div>
                <div className='StampContainerHeader' onClick={() =>
                this.headerclicked()}>
                    {this.props.stamp.name}
                </div>

                <div hidden={!this.state.showFull}>

                    <StampContainerImage imageUrl={this.props.stamp.imageUrl}/>

                    <StampContainerData stamp={this.props.stamp}/>
                </div>
            </div>
        )
    }
}

