import React, {useState} from "react";
import './open.css';

const Open =()=>{

const [value, setValue] = useState('http://');
	
	// const [result, setResult] = useState(0);
	
	function handleChange1(event) {
		setValue(event.target.value);
	}
	
	
	
	function handleClick() {
        let win= window;
		
        win.open(value)
	};
    return(
        <div className="open"> 
            
            <input className="input-open"value={value} onChange={handleChange1}/>
           
            <button className="button-open" onClick={handleClick}>Search</button>
		
            
            

        </div>
    );
};

export default Open;