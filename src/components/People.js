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

  const UpdatePeopleHandler = (e) => {
    console.log(e);

    const updatedPeople = [
      { name: people[1].name, age: people[1].age + 1, hobbies: people[1].hobbies },
      { name: people[2].name, age: people[2].age + 1, hobbies: people[2].hobbies },
      { name: people[0].name, age: people[0].age + 1, hobbies: people[0].hobbies }
    ];
    setPeople(updatedPeople);
  }

  const ChangeNameHandler = (person) => {
    person.age += 1;
  }

  return (
    <div>
      <Person click={UpdatePeopleHandler} name={people[0].name} age={people[0].age}>{`${people[0].hobbies ? 'My hobbies are: ' + people[0].hobbies.join(', ') : ''}`}</Person>
      <Person click={UpdatePeopleHandler} name={people[1].name} age={people[1].age}>{`${people[1].hobbies ? 'My hobbies are: ' + people[1].hobbies.join(', ') : ''}`}</Person>
      <Person click={UpdatePeopleHandler} name={people[2].name} age={people[2].age}>{`${people[2].hobbies ? 'My hobbies are: ' + people[2].hobbies.join(', ') : ''}`}</Person>
      <button onClick={UpdatePeopleHandler}>Update People</button>
      {/* <button onClick={() => UpdatePeopleHandler('ABC')}>Change name 2</button> */}
    </div>
  );
}
