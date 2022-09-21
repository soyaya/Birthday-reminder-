 import React,{useState} from 'react';
import './App.css';
import List from './List';
import data from './data';


function App() {
  const[people , setPeople]= useState(data);
  return (
    <div className="App">
      <main>
        <section>
          <h3>{people.length} birthdays today</h3>
          <List people = {people}/>
          <button onClick={()=>setPeople([])}>Clear all</button>
        </section>
      </main>
    </div>
  );
}

export default App;
