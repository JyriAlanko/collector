import React, { Component } from 'react';
import StampContainer from './StampContainer';


class MainWindow extends Component {
    render() {
        
    return (

    <div>
        <StampContainer stamp={this.props.stampCollection[0]}/>
    </div>

)
      
    }
}

export default MainWindow;