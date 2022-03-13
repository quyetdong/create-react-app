import './App.css';
import People from './components/People';
import { StyleRoot } from 'radium';

function App() {

  return (
    <StyleRoot>
      <div className="App">
        <h1>This is my react app</h1>
        <p>Description of Application</p>
        <People />
      </div>
    </StyleRoot>
  );
}

export default App;
