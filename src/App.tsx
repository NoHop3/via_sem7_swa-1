import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <header className='App-header'>
            <img src={logo} className='App-logo' alt='logo' />
            <p>SWA Assignment 1</p>
            <p>Authors: Stefan Georgiev 304284, Lyuboslav Kotsev</p>
            <a
              className='App-link'
              href='https://reactjs.org'
              rel='noopener noreferrer'>
              Go to assignment
            </a>
            <Route>
              <Route path='/assignment' element={<App />} />
            </Route>
          </header>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
