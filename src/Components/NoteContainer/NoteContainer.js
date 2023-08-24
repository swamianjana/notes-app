import React from "react";

import Note from "../Note/Note";

import "./NoteContainer.css";

function NoteContainer(props) {
  const reverArray = (arr) => {                 //array to traverse kr dege fir aage se start hoja 
    const array = [];                         // array ke andr arr ka reverse hoga

    for (let i = arr.length - 1; i >= 0; --i) {           // last index se zero tk loop chalege ge,i zero se bda ho ya equal ho
      array.push(arr[i]);
    }

    return array;
  };
// jp hmare notes aae h props se unko reverse krke notes naam ke array me store krva rhe h
  const notes = reverArray(props.notes);

  return (
    <div className="note-container">
      <h2>Notes</h2>
      <div className="note-container_notes custom-scroll">
        {notes?.length > 0 ? (      // jb koi be notes nhi h to h3 vali line present hogi, length zero se bdi honi chaiye
          notes.map((item) => (
            <Note 
             key={item.id}        // key must be unique in react
              note={item}
              deleteNote={props.deleteNote}
              updateText={props.updateText}
            />
          ))
        ) : (
          <h3>No Notes present</h3>   // if trminatory operator(koi note nhi h tb ) ye line show hoga
        )}
      </div>      
    </div>
  );
}

export default NoteContainer;