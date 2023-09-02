import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';
import DropZone from './components/DropZone';
import Banner from './components/Banner';

function App() {
  const [turn, setTurn] = useState(1);

  return (
    <div className="App"> 
      <Banner turn={turn} />
      <DropZone turn={turn} setTurn={setTurn}/>
      <Board turn={turn} setTurn={setTurn}/>
    </div>
  );
}

export default App;
