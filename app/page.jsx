
// Components are functions that return some JSX

// JSX is a javascript syntax in react to create our HTML

"use client";

import { useState } from "react"  // Use this to add state to our components
// state lets us keep track of changing date and show it in the components

function HomePage(){
const [count, setCount] = useState(0)


    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={()=>{
                // write some javascript for this function to call
                setCount(count + 1)
            }}> Add  One </button>
        </div>
    )
}
export default HomePage