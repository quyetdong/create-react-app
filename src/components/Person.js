import './Person.css';

// function Person(props) {
//   return (
//     <div className="person">
//       <h1>Name: {props.name}</h1>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// }

const Person = (props) => {
  return (
    <div className="person">
      <p>This is {props.name}. I'm {props.age} years old</p>
      <p>{props.children}</p>
    </div>
  )
}

export default Person;
