import React, { useState } from "react";

import plusIcon from "../assets/plus.png"

import "./Sidebar.css";


function Sidebar(props) {
    const colors = ["#fe9b72", "#fec971", " #00d4fe", "#b693fd", "#e4ee91"];        // these are colors

    const [listOpen, setListOpen] = useState(false);            // toggle krne k leye state ka use krege AND listopen ye btaega ki ab hmari
    // koi list open h ya nhi   , state hme ye chiz btata h 
    // agr list open hogi to bnd ho jaegi or if list bnd h to open ho jaegi is leye toggle use me lete h

  return (
    <div className="sidebar">
      <img src={plusIcon} alt="Add" onClick={() => setListOpen(!listOpen)} />
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>                            
      {/* list open rhegi to hme extra list lgani h that's why we do sidebar list active AND    listopen is the condition*/}
      {/* map use kr rhe h to key is complusory */}
        {colors.map((item, index) => (
          <li
            key={index}                 // react me key unique rhega kyuki hm sbko uniquelly pachan ske
            className="sidebar_list_item"
            style={{ backgroundColor: item }}               // background color will be different of every notes
            onClick={() => props.addNote(item)}           // child to parent travel krna h to uske leye hm function ka use kr lete h
            // addNote is the function or uske andr color pass krna h ki kon sa color jaega or item paticular color ko denote kr rhe h
            //color vale array ko hi map kr rhe h hm
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;