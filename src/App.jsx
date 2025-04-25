import { useState } from 'react';
import './App.css';

function App() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState('');

  const calculateLove = () => {
    if (!name1 || !name2) {
      setResult('Please enter both names!');
      return;
    }
    const loveScore = Math.floor(Math.random() * 100) + 1;
    setResult(`Love between ${name1} and ${name2} = ${loveScore}% `);
  };

  return (
    <div className="container">
      <h1>Love Calculator</h1>
      <input
        type="text"
        placeholder="Enter First Name"
        value={name1}
        onChange={(e) => setName1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Second Name"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
      />
      <button onClick={calculateLove}>Calculate</button>
      <h2>{result}</h2>
    </div>
  );
}

export default App;
