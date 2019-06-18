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

  const switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // Dont do this: personsState.persons[0].name = "Maximilian";
    setPersonsState({
      persons:[
        {name: newName, age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 27}
    ] 
    })
  }

  const nameChangedHandler = (event) => {
    setPersonsState({
      persons:[
        {name: 'Max', age: 28},
        {name: event.target.value, age: 29},
        {name: 'Stephanie', age: 26}
    ] 
    })
  }

  return (
    <div className="App">
     <h1>React - The Complete Guide (incl Hooks, React Router, Redux)</h1>
     {/* Not recommended - inefficent */}
     <button onClick={() => switchNameHandler('Maxitrillion!!')}>Switch Name</button>
     <Person 
     name={personsState.persons[0].name} 
     age={personsState.persons[0].age} />
     <Person 
     name={personsState.persons[1].name} 
     age={personsState.persons[1].age}
      // Recommended
     click={switchNameHandler.bind(this, 'Harry!')}
     changed={nameChangedHandler}> My hobbies: Racing </Person>
     <Person 
     name={personsState.persons[2].name}
      age={personsState.persons[2].age} />
    </div>
  );
  // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this work now?'));  
}

export default App;

 

