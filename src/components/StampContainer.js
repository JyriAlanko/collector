import React, { Component } from 'react'
import StampContainerImage from './StampContainerImage'
import StampContainerData from './StampContainerData'
import './StampContainer.css'

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
        const {name, imageUrl} = this.props.stamp;

        return (
            <div class="container-fluid">
                <div class="row">
            
                    <div className='stampContainer'>
                        <div className='stampContainerHeader' onClick={() =>
                        this.headerclicked()}>
                            {name}
                        </div>

                        <div hidden={!this.state.showFull}>
                            <table>
                                <tbody>

                                    <tr>

                                        <td>
                                            <StampContainerImage imageUrl={imageUrl}/>
                                        </td>


                                        <td>
                                            <StampContainerData stamp={this.props.stamp}/>
                                        </td>

                                    </tr>

                                </tbody>
                            </table>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

