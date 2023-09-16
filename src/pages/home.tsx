import logo from "../logo.svg";
import "../Home.css";


export const Home = () => {
  return (
    <div className="Home">
      <header className='Home-header'>
        <img src={logo} className='Home-logo' alt='logo' />
        <p>SWA Assignment 1</p>
        <p>Authors: Stefan Georgiev, Lyuboslav Kotsev</p>
        <a className='Home-link' href='/historical' rel='noopener noreferrer'>
          Go to historical data
        </a>
        <a className='Home-link' href='/forecast' rel='noopener noreferrer'>
          Go to forecast data
        </a>
        <a className='Home-link' href='/sendData' rel='noopener noreferrer'>
          Go to sending data
        </a>
      </header>
    </div>
  );
};
