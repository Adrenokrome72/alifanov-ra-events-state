import React, { useState } from 'react';
import Portfolio from './components/Portfolio/Portfolio';
import Store from './components/Store/Store';
import './App.css';

function App() {
  const [view, setView] = useState('portfolio');

  const handleSwitchView = (newView) => {
    setView(newView);
  };

  return (
    <div className="App">
      <h1>Portfolio and Store</h1>
      <div className="view-switcher">
        <button
          className={`switch-btn ${view === 'portfolio' ? 'active' : ''}`}
          onClick={() => handleSwitchView('portfolio')}
        >
          Portfolio
        </button>
        <button
          className={`switch-btn ${view === 'store' ? 'active' : ''}`}
          onClick={() => handleSwitchView('store')}
        >
          Store
        </button>
      </div>
      {view === 'portfolio' ? <Portfolio /> : <Store />}
    </div>
  );
}

export default App;