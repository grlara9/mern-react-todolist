import React from 'react'

const Header = props =>(
    <div className="header">
      
  {props.num  ?  <h1>You have {props.num} Todos Left</h1> : <h1>Start Adding Todos for Today</h1> }
    </div>
  
)
export default Header;
