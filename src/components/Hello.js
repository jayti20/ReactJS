import React from 'react';
/*const Hello=()=>{
    return <div><h1>Hello code</h1></div>
}
export default Hello;
*/
//without using jsx

const Hello=()=>{
    return React.createElement('div',{id:'abc',className:'sap'},React.createElement('h1',null,'Hello code without jsx'))
}
export default Hello;