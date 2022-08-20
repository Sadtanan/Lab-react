import React from 'react';
import './App.css';
import WordCard from './WordCard';
const word1 = "Hello";
const word2 = "Apple";
const word3 = "Could";

function App() {
  return (
    <div>
      Guess What are these words?
      {
        <><WordCard value={word1} /><WordCard value={word2} /><WordCard value={word3} /></>
      }
    </div>
  );
}


export default App;
