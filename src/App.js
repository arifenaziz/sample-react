import React,{useEffect, useState} from 'react';
import './App.css';

const App =()=>{

  const [title,setTitle]=useState('Chittagong');

  const onClickHandler = () => {
    setTitle('Kaptai');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Hello {title}</h2>
        <p>{title} Chittagong</p>
        <button onClick={onClickHandler}>Click and Watch</button>
      </header>
    </div>
  );
}

export default App;
