import React from 'react'

const Header = props =>(
    <div className='card-header'>
    <h1 className='card-header-title'>
      You have {props.num} Todos
    </h1>
  </div>
)
export default Header;
