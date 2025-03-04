
// Components are functions that return some JSX

// JSX is a javascript syntax in react to create our HTML

"use client";

import { useState } from "react"  // Use this to add state to our components
// state lets us keep track of changing date and show it in the components

import Form from "./Components/Form" //important
import Table from "./Components/Table" //important

function HomePage(){
    return (
        <div>
            <h1> FavLinks </h1>

            <Form />  {/*custom component*/}

            { /* a table the user can use to see their submission*/}

            <Table />

        </div>
    )
}
export default HomePage