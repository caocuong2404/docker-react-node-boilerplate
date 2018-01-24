import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');
  console.log("🚀 ~ file: App.js ~ line 8 ~ App ~ message", message)

  useEffect(() => {
    (async () => {
      const resp = await fetch('/api');
      console.log("🚀 ~ file: App.js ~ line 12 ~ resp", resp)
      let text = await resp.text();

      let _messageRes = null;
      try {
        _messageRes = JSON.parse(text); // cannot call both .json and .text - await resp.json();
        console.log("🚀 ~ file: App.js ~ line 18 ~ _messageRes", _messageRes)
      } catch (e) {
        console.err(`Invalid json\n${e}`);
      }

      if (resp.status !== 200) {
        throw Error(_messageRes ? _messageRes.message : 'No data');
      }

      setMessage(_messageRes.message);
    })()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Message: <i>{message || 'No message'}</i> </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
