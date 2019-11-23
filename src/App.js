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
        <defs>
          <clipPath id="text-1">
            <text x="50.25%" dy="2" y="100" class="text title" font-size="100" font-family="Pacifico" font-size="100" >Jonathan Price</text>
          </clipPath>
        </defs>

        <text y="100" class="text title" font-size="100">
          <tspan x="50%" class="text__fill" font-family="Pacifico">
            Jonathan Price
          </tspan>
          <tspan x="50.25%" dy="2" class="text__stroke" font-family="Pacifico">
            Jonathan Price
          </tspan>
        </text>
        
        {/* Stroke */}
        <g clipPath="url(#text-1)">
          <rect x="0" y="0" fill="#27f1e4" width="100%" height="100%" />
          <text y="100" class="text title" font-size="100" font-family="Pacifico">
            <tspan x="50%" class="text__fill">
              Jonathan Price
          </tspan>
          </text>
        </g>

        <text x="50%" y="140" class="text sub-title" font-size="30" font-family="Fira Sans Extra Condensed">
          Frontend developer
        </text>
      </svg>
    </div>
  );
}

export default App;
