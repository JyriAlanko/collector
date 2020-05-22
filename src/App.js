import React from 'react';
import { BrowserRouter as Router, Route }  from 'react-router-dom';
import Header from './components/Header';
import MainWindow from './components/MainWindow';
import stampCollection,{ InitDataManager } from './DataManager';

import StampList from './components/pages/StampList';
import About from './components/pages/About';
import AddStamp from './components/pages/AddStamp';
import Summary from './components/pages/Summary';



import './App.css';

function App() {
  
  InitDataManager();

  return (
    <Router>
    <div className="App">
      <div className="container">
            <Route exact path="/" render={props => (
              <React.Fragment>

                <Header />
                <MainWindow />
                

              </React.Fragment>

            )}/>
            <Route path="/stamplist" component={StampList}/>
            <Route path="/about" component={About}/>
            <Route path="/addstamp" component={AddStamp}/>
            <Route path="/summary" component={Summary}/>

      </div>
    </div>
    </Router>
  );
  }

export default App;
