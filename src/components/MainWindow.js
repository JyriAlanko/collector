import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link }  from 'react-router-dom';

import './MainWindow.css';

import StampList from './pages/StampList';
import About from './pages/About';
import Summary from './pages/Summary';
import AddStampContainer from './pages/AddStampContainer';

class MainWindow extends Component {
    constructor (props) {
        super(props);
        this.state = {
            dataManager: props.dataManager,
            stampCollection: props.stampCollection
        }
    }

    addStampToCollection(){

    }

    updateCollection(){
        
        this.setState({
            stampCollection: this.state.dataManager.stampCollection
        });
    }

    render() {
        const stampCollection = this.state.stampCollection;

        return (
            <Router>

                <div className="routerLink">
                    <Link to="/stamplist" >List</Link> | {' '}
                    <Link to="/about" >About</Link> | {' '}
                    <Link to="/addstampcontainer" >Add Stamp</Link> | {' '}
                    <Link to="/summary" >Summary</Link>
                </div>


                {/* Show List */}
                <Route exact path='/stamplist' render={props => (
                    <StampList stampCollection={stampCollection}/>
                )} />

                {/* Show About */}
                <Route path='/about' render={props => (
                    <About stampCollection={stampCollection}/>
                )} />

                {/* Add stamp */}
                <Route path='/addstampcontainer' render={props => (
                    <AddStampContainer addStampToCollection={this.addStampToCollection.bind(this)}/>
                )} />

                {/* Show Summary */}
                <Route path='/summary' render={props => (
                    <Summary stampCollection={stampCollection}/>
                )} />


            </Router>
            )}
}

export default MainWindow;