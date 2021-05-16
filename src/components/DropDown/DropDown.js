import React, {useState} from 'react'
import './dropDown.css'
function DropDown(props) {
  let title = props.title
  let options = props.options

    return (
      <div class="dropdown">
      <button class="dropbtn">{title} 
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
      {options.map((option, index) => {
          return <a key = {index} href={option.href}>{option.opt}</a>
        })}
      </div>
    </div> 
    )
}

export default DropDown
