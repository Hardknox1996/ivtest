import React, { useState } from "react";

export const AddItem = ({clickhandle}) => {
  const [newVal, setNewVal] = useState("");

  const [error, setError] = useState(false)
  const addNew =()=>{
    if(newVal != ""){
        clickhandle(newVal)
        setError(false)
        setNewVal("")
    }else{
        setError(true)
    }
  }

  return (
    <div className="addNewItem">
      <div className="w100 overf">
        <input
          className="inpField"
          type="text"
          value={newVal}
          onKeyDown={(e) => { 
            if (e.key === "Enter") { 
                addNew()
            } 
        }} 
          onChange={(e) => {
            setNewVal(e.target.value);
            setError(false)
        }}
        />
        <button className="newAddButton" onClick={addNew}>+ Add</button>

          {error ? (<p className="errorMsg" >
            Cannot submit blank value
        </p>): (<></>)}
        
      </div>
    </div>
  );
};
