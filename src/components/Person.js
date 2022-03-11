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
  const style = {
    color: 'red',
    fontWeight: 'bold'
  }

  return (
    <div className="person">
      <p onClick={props.click}>This is <span style={style}>{props.name}</span>. I'm {props.age} years old</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changeName} value={props.name} />
    </div>
  )
}

export default Person;
