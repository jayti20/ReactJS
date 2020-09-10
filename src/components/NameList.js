import React from 'react'
import Person from './Person'
function NameList(){

    const names=['Bruce','Diana','Ross']
    const nameList=names.map((name,index)=><h2 key={index}>{index} {name}</h2>)
    /*const persons=[
        {
            id:1,
            fname:'Hellen',
            lname:"Keller"
        },

        {
            id:2,
            fname:'Hina',
            lname:"Khan"
        },
        {
            id:3,
            fname:'Ananya',
            lname:"Srivastava"
        }
    ]
//const personsList=persons.map(person=><h2>I am {person.fname} {person.lname}</h2>)
const personsList=persons.map(person=><Person key={person.fname} person1={person}><p></p></Person>)
console.log("list of persons ", personsList)*/


    /*return(
        <>
        <h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[2]}</h2>
        </>
    )*/

   /* return(
        <>
       {names.map(name=><h2>{name}</h2>)}
        </>

    )*/

    /*return(
        <>
        {personsList}
        </>
    )*/

    return(
        <>
       {nameList}
        </>

    )
    
}
export default NameList