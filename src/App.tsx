import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          SWA Assignment 1
        </p>
        <p>
          Authors: Stefan Georgiev 304284, Lyuboslav Kotsev 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          rel="noopener noreferrer"
        >
          Go to assignment
        </a>
      </header>
    </div>
  );
}

export default App;
