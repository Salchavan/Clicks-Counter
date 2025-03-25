import './css/App.css';
import Button from './components/Button.js';
import Counter from './components/Counter.js';
import { useState } from 'react';

function App() {
  const [clickCount, setClickCount] = useState(0);

  const addClick = () => {
    setClickCount(clickCount + 1);
  };

  const resetClick = () => {
    setClickCount(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Counter</h1>
        <img 
          src="logo.svg" 
          className="App-logo" 
          alt="" />
      </header>
      <Counter count={clickCount}/>
      <div className="div-button">
        <Button 
          text='Click me!'
          manageClick={addClick}/>
        <Button 
          text='Reset'
          manageClick={resetClick}/>
      </div>
    </div>
  );
};

export default App;
