import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment,incrementByAmmount } from "../features/counters/counterSlices";


const Counter = () => {

    const count = useSelector((state)=>state.counter.value)
    const dispatch =useDispatch();
    const [incrementAmmount,setincrementAmmount] = useState(0)

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
            <div className="d-flex flex-row justify-content-center">
                <input
                value={incrementAmmount}
                onChange={e=>setincrementAmmount(e.target.value)}
                />

                <button onClick={()=>dispatch(incrementByAmmount(Number(incrementAmmount) || 0))}>Add Amount</button>

            </div>
        </div>
    )
}

export default Counter;