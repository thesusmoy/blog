import React from "react";
import "./App.css";


function App() {
   return <div className="App"><h1 style={{color:"tomato",fontFamily:"sans-serif"}}>Admin Panel</h1>
   <form action="/" method="post" >
       <input type="text" name="username" placeholder="Username"/><br/>
       <input type="password" name="password" placeholder="Password"/><br/>
       <button type="submit">Log In</button>
   </form>
   </div> 
}

export default App;
