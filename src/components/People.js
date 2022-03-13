import Radium from 'radium';
import { useState } from 'react';
import Person from './Person';

function People() {
  let buttonClasses = [];
  let paraClasses = [];
  const hobbies = ['Teaching', 'Running'];
  const defaultPeople = [
    { name: 'Number 1', age: 1, hobbies },
    { name: 'Number 2', age: 2 },
    { name: 'Number 3', age: 3 },
  ];
  const [people, setPeople] = useState(defaultPeople);
  const [showPeople, setShowPeople] = useState(true);

  const deletePerson = (i) => {
    let newPeople = [...people];
    newPeople.splice(i, 1);
    setPeople(newPeople);
  }

  const changeNameHandler = (event, ind) => {
    const updatedPeople = [...people];
    updatedPeople[ind].name = event.target.value;
    setPeople(updatedPeople);
  }

  const togglePeople = () => {
    setShowPeople(!showPeople);
  }

  const resetPeople = () => {
    setPeople(defaultPeople);
    setShowPeople(true);
  }

  if (people.length < 3) paraClasses.push('red');
  if (people.length < 2) paraClasses.push('bold');

  const styles = {
    ':hover': {
      backgroundColor: 'lightgreen',
      color: 'white'
    }
  };

  let peopleElement = null;
  if (showPeople && people.length > 0) {
    peopleElement = <div>
      {people.map((p, i) =>
        <Person
          key={i}
          click={() => deletePerson(i)}
          name={p.name}
          age={p.age}
          changeName={(e) => changeNameHandler(e, i)}
        >
          {`${p.hobbies ? 'My hobbies are: ' + p.hobbies.join(', ') : ''}`}
        </Person>)}
    </div>;

    buttonClasses = ['red', 'bold', 'hightLight'];
    styles[':hover'] = {
      backgroundColor: '#FF7BA9',
      color: 'black'
    };
  }

  return (
    <div>
      <p className={paraClasses.join(' ')}>This is a dynamic class paragraph</p>
      {peopleElement}
      <button key={1} style={styles} className={buttonClasses.join(' ')} onClick={togglePeople}>Toggle People</button>
      <button key={2} style={styles} className={buttonClasses.join(' ')} onClick={resetPeople}>Reset People</button>
    </div>
  );
}

export default Radium(People);
