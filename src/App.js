import React from 'react';
import WebFont from 'webfontloader';
import './App.css';

WebFont.load({
  google: {
    families: ['Pacifico', 'VT323', 'Lobster', 'Alfa Slab One', 'Fira Sans Extra Condensed', 'sans-serif']
  }
});

function App() {
  return (
    <div className="App">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 150" class="svg">
        <text y="100" class="text title" font-size="100" font-family="Lobster">
          <tspan x="50%" class="text__fill">
            Jonathan Price
          </tspan>
          <tspan x="50.25%" dy="2" class="text__stroke">
            Jonathan Price
          </tspan>
        </text>
        <text x="50%" y="140" class="text sub-title" font-size="30" font-family="Fira Sans Extra Condensed">
          Frontend developer
        </text>
      </svg>
    </div>
  );
}

export default App;
