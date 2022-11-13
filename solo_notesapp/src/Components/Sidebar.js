import React from "react"

function Sidebar({notes}){

  const onButtonClick =  () => {
    alert("Hi! This is a test.")
  }

 return <div className="app-sidebar">  
   <div  className="app-sidebar-header">
    <h3> Notes</h3>
    <button onClick={onButtonClick}>Add</button>
    </div> 
    <div className="app-sidebar-notes">
    {/* {notes.map((note) =>  (
    
))} */}

    
    <div className="app-sidebar-note">
      <div className="sidebar-note-title">
        <strong>TITLE</strong>
        <button>Delete</button>
      </div>
      <p>Note preview</p>
      <small className="note-meta"> Last modified [date]</small>
    </div>
    </div>
    
    


 </div>

}

export default Sidebar