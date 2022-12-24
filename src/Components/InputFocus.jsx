import React,{useRef,useEffect} from "react";

const InputFocus = () => {

    const inputRef = useRef();
    useEffect(()=>{
        inputRef.current.focus();
    },[])

    return ( 
        <input
        ref={inputRef}
        type="text"
        />
     );
}
 
export default InputFocus;