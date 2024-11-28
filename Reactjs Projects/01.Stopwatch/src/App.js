import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
   const[minute,setMinute] = useState(0)
   const[second,setSecond] = useState(0)
  //  const[txt,setTxt] = useState("Stop")
  //  let flag = true;
   let getIntervalId;
   useEffect(()=>{
   getIntervalId = setInterval(()=>{
     setSecond(second+1)
     if(second===59)
     {
      setMinute(minute+1)
      setSecond(0)
     }
    },1000)
    return ()=>clearInterval(getIntervalId)
   })

   function StopHandler()
   {
    
   clearInterval(getIntervalId);
   }

   function ResetHandler()
   {
   
    clearInterval(getIntervalId);
    setMinute(0)
    setSecond(0)
   }


  return (
    <div className="App">
      <label><h2>StopWatch</h2></label>

      <h1>
         {minute<10? `0${minute}`: minute}
       :{second<10? `0${second}`: second}
       </h1>

      <br></br><br></br><br></br>
     <button onClick={StopHandler}>Stop</button>
     <button onClick={ResetHandler}>Reset</button>
    </div>
  );
}

export default App;
