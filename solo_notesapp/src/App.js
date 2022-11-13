import './App.css';
import React from 'react';
import Sidebar from './Components/Sidebar';
import Main from "./Components/Main";


function App() {

 const [notes, setNotes] = React.useState([])
  
  return(
  <div className="App">
    <Sidebar/>
    <Main/>
     </div>
     )
  
}

export default App;
