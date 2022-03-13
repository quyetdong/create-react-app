import Radium from 'radium';
import './Person.css';


const Person = (props) => {
  const style = {
    color: 'red',
    fontWeight: 'bold',
  };

  const personStyles = {
    '@media (min-width: 550px)': {
      width: '450px'
    },
  };

  return (
    <div className="person" style={personStyles}>
      <p onClick={props.click}>This is <span style={style}>{props.name}</span>. I'm {props.age} years old</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changeName} value={props.name} />
    </div>
  )
}

export default Radium(Person);
