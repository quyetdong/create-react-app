import { useState } from 'react';
import Person from './Person';

export default function People() {
  const hobbies = ['Teaching', 'Running'];
  const defaultPeople = [
    { name: 'Tedu 1', age: 1, hobbies },
    { name: 'Tedu 2', age: 2 },
    { name: 'Tedu 3', age: 3 },
  ];
  const [people, setPeople] = useState(defaultPeople);
  const [showPeople, setShowPeople] = useState(true);

  const updatePeopleHandler = (e) => {
    const updatedPeople = [
      { name: people[1].name, age: people[1].age + 1, hobbies: people[1].hobbies },
      { name: people[2].name, age: people[2].age + 1, hobbies: people[2].hobbies },
      { name: people[0].name, age: people[0].age + 1, hobbies: people[0].hobbies }
    ];
    setPeople(updatedPeople);
  }

  const changeNameHandler = (event, ind) => {
    const updatedPeople = [...people];
    updatedPeople[ind].name = event.target.value;
    setPeople(updatedPeople);
  }

  const togglePeople = () => {
    setShowPeople(!showPeople);
  }

  let peopleElement = null;
  if (showPeople) {
    peopleElement = <div>
      {people.map((p, i) =>
        <Person click={updatePeopleHandler} name={p.name} age={p.age} changeName={(e) => changeNameHandler(e, i)}>
        {`${p.hobbies ? 'My hobbies are: ' + p.hobbies.join(', ') : ''}`}
      </Person>
      )}
    </div>;
  }

  return (
    <div>
      {peopleElement}
      <button onClick={togglePeople}>Toggle People</button>
      {/* <button onClick={() => updatePeopleHandler('ABC')}>Change name 2</button> */}
    </div>
  );
}
