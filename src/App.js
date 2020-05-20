import React from 'react';
import Header from './components/Header';
import MainWindow from './components/MainWindow';
import stampCollection, { InitDataManager } from './DataManager';

function App() {
  
  InitDataManager();

  return (
    <div className="App">
      <div className="container">

        <Header />

        <MainWindow stampCollection={stampCollection}/>

      </div>
    </div>
  );
  }

export default App;

//{testData[0].name}