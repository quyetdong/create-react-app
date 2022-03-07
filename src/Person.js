import './Person.css';

function Person(props) {
  return (
    <div class="person">
      <h1>Name: {props.name}</h1>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default Person;
