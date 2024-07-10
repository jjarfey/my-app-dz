import React from "react";
import "./close.css";

const Close =()=>{


   function handleClick() {
         let win= window;
        win.close();
		
        
	}
    return(

        <div className="close">
            <button className="button-close"onClick={handleClick}> Close Window</button>
            
            

        </div>
    );
};

export default Close