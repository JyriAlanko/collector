import React from 'react';
import Header from './components/Header';
import MainWindow from './components/MainWindow';
import DataManager from './DataManager';




import './App.css';

function App() {
  
  const dataManager = new DataManager();
  dataManager.InitDataManager();

  return (

    <div className="App">
      <div className="container">

          <Header />
          <MainWindow stampCollection={dataManager.stampCollection} dataManager={dataManager}/>

      </div>
    </div>

  );
  }

export default App;
