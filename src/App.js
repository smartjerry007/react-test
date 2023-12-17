import logo from './logo.svg';
import './App.css';
import Firstpage from './pages/firstpage';


const firstArray = ['apple', 'banana', 'orange'];
const myList = firstArray.map((item) => <div>{item}</div>);
const number1 = [1, 2, 3, 4];
const number2 = [5, 6, 7];
const numberspread = [...number1, ...number2];
const [one, two, three, ...rest] = numberspread;


function App() {
  return (
    <div className="App">
      <h1 className='hello'>Hello World!</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <>
          {myList}{numberspread}{one}{rest}
        </>
      </header>
    </div>
  );
}

export default App;
