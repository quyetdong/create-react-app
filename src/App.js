import logo from './logo.svg';
import './App.css';
import Person from './components/Person';

function App() {
  const changeNameHandler = (e) => {
    console.log(e);
  }

  return (
    <div className="App">
      <h1>This is my react app</h1>
      <p>Description of Application</p>
      <button onClick={changeNameHandler}>Change name</button>
      {/* <button onClick={() => changeNameHandler('ABC')}>Change name 2</button> */}
      <Person name="Toan" age="28"/>
      <Person name="Thanh" age="32"/>
      <Person name="Big Man" age="10">My hobbies are: teaching, running</Person>
    </div>
  );
}

export default App;
