import React from 'react';
import TimeDisplay from './TimeDisplay';
// import { UserAgent } from "react-useragent"
import Open from './Open';
import Close from './Close';
import { Routes, Route, Link } from 'react-router-dom'
import './App.css';





  const App =() => { 

    
   
  return (
    <div className="App">
      <header className="App-header">
      <nav>
          <ul>
              
            <li> <Link to="/Open">Search</Link> </li> 
            <li> <Link to= "/Close">Close</Link> </li>             
            
          </ul>
          
            
          
        </nav>  
        
      </header>
      <h1>Здраствуйте !</h1>
      <div>
      {<TimeDisplay/>}
     
      </div>
      <Routes>
      
      <Route path="/Open" element={<Open/>}/>
      <Route path="/Close" element={<Close/>}/>

     
     </Routes>
    
      
      
    </div>
  );
}

export default App;
