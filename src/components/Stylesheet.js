import React from 'react'
import './myStyles.css'

const heading={backgroundColor: 'coral'}
 
function Stylesheet(props){
    
    const className=props.primary?'primary':''


    return(<>
        {/*<h1 className={styles.success}>Meow</h1>*/}
        <h1 className={`${className} font-xl  `} style={heading}>Stylesheets</h1>
        </>)
}
export default Stylesheet