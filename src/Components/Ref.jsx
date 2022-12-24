
import React,{useEffect, useRef,useState} from "react"


const Ref = () => {
      // const [count,setCount]= useState(0)

  // const handle =()=>{
  //   const updateCount = count+1;
  //   console.log(`I rendered ${updateCount} times`);
  //   setCount(updateCount)
  // }

  // console.log("I rendered")
  // return <button onClick={handle}>Click Me</button>

  
  const timerIdRef = useRef(0)
  const [count,setCount]= useState(0)

  const startHandler =() =>{
    if(timerIdRef.current){return;}
    timerIdRef.current= setInterval(()=>setCount(c=>c+1),1000)
  }

  const stopHandler =()=>{
    clearInterval(timerIdRef.current);
    timerIdRef.current=0
  }

  useEffect(()=>{
    return()=>clearInterval(timerIdRef.current)
  },[])

  return(
    <div>
      {console.log("hello1")}
    <p>{count}</p>
    <button onClick={()=>startHandler()}>Start Handler</button>
    <button onClick={()=>stopHandler()}>Stop Handler</button>
    </div>
  )
}
 
export default Ref;