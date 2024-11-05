import React, { useEffect, useRef } from 'react';
import { Runtime, Inspector } from '@observablehq/runtime';

// Import the Observable module definition
import define from 'https://api.observablehq.com/d/6189fc76f778024d@283.js?v=4';

// React Component
const ObservableCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Create a new Observable runtime and render to the canvasRef div
    const runtime = new Runtime();
    runtime.module(define, name => {
      if (name === 'canvas') return new Inspector(canvasRef.current);
    });

    // Cleanup the runtime when the component unmounts
    return () => runtime.dispose();
  }, []);

  return (
    <div className='w-full'>
      <div className='mx-auto w-full flex justify-center items-start relative h-full'>
      <img className='mx-auto absolute z-999 curr-icons' alt="Not Available" src="/Icons/SectionCurrency.png" />
      </div>
      
      <div id="observablehq-canvas-ec88052a" ref={canvasRef}></div>
      </div>
  );
};

export default ObservableCanvas;
