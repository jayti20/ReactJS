import React from 'react'

function Person({person1}){
    console.log({person1})

    return(
        <>
        <h2>I am {person1.fname} {person1.lname}</h2>
     
        </>
    )
}
export default Person