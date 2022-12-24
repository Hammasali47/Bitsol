import React,{ useEffect,useMemo,useState } from "react";

const Calculation = () => {


    const ExpensiveCalculation =(num)=>{
        console.log("Calculating.......")
        for(let i=0;i<10000000000; i++){
            num +=1;
        }
        return num;
        
    }


    const [count,setCount] =useState(0);
    const [todos,setTodos] =useState([]);
    const calculation = useMemo(()=>{},[])


    useEffect(()=>{

    },[])


    return ( 
        <div>

        </div>
     );
}
 
export default Calculation;