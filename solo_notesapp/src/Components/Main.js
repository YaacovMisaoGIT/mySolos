import React from "react"

function Main(){
 return <div className="app-main">
    <div className="app-main-note-edit">
        <input type="text" id="title" placeholder="untitled Note1" autoFocus/>
        <textarea id="body" placeholder="Type your note here..."/>
    </div>
    <div className="app-main-note-peview">
        <h1 className="preview-title">TITLE</h1>
        <div className="markdown-preview">note preview</div>


    </div>

 </div>
}

export default Main