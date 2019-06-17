import React, { useState} from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [ personsState, setPersonsState] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ] 
  });

  const [otherState, setOtherSate] = useState('some other value');

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    // Dont do this: personsState.persons[0].name = "Maximilian";
    setPersonsState({
      persons:[
        {name: 'Maximilian', age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 27}
    ] 
    })
  }

  return (
    <div className="App">
     <h1>React - The Complete Guide (incl Hooks, React Router, Redux)</h1>
     <button onClick={switchNameHandler}>Switch Name</button>
     <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
     <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> My hobbies: Racing </Person>
     <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
  // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this work now?'));  
}

export default App;

 

