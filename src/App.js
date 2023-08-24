import React, { useEffect, useState } from "react";

import NoteContainer from "./Components/NoteContainer/NoteContainer";
import Sidebar from "./Components/Sidebar/Sidebar";

import "./App.css";

// notes ka changes hme app pe show hona chaiye that's why hm state ka use krege

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || []     // jb koi note nhi h tb to undefined note show hoga
  );

  const addNote = (color) => {         // note ka array bnaege
    const tempNotes = [...notes];     // spread krege taki ik copy ho jae tempNotes k andr, new copy bn jae
// note ki ik copy bnaege kyuki hme ab state ko update krna h change krna h
      // kbi be directly state ko manipulate(update/change) nhi krna hota 
      // tempNotes be ik notes hi h bs ik reference pass hua h BS naam change kiya h chiz(kaam) vhi h
      

    tempNotes.push({                    // tempNotes k andr ik push krege ik new array of object
      id: Date.now() + "" + Math.floor(Math.random() * 78),     //id hmne unique rkh  di and koi be random no.78 se niche tk
      text: "",                 // text empty hoga kyuki new object h to text to kya hi hoga , date mili sec. represent krega
      time: Date.now(),
      color,          // key value same h 
    });
    setNotes(tempNotes);            // set note ke zriye h tempNotes ko set kr dete h
  };

  const deleteNote = (id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };

  const updateText = (text, id) => {        //text,id se hi update hoga
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes[index].text = text;
    setNotes(tempNotes);
  };

  useEffect(() => {               // changes ko effect krne k leye
    localStorage.setItem("notes-app", JSON.stringify(notes));   // local storage me hmesa stringify ka use krna chaiye
  }, [notes]);

  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <NoteContainer
        notes={notes}
        deleteNote={deleteNote}
        updateText={updateText}
      />
    </div>
  );
}

export default App;