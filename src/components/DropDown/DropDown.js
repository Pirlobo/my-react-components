import React from 'react'
import './dropDown.css'
function DropDown() {
    return (
      <div class="dropdown">
      <button class="dropbtn">Rao Vặt 
        <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="#">Đăng việc làm</a>
        <a href="#">Đăng bài bán nhà</a>
      </div>
    </div> 
    )
}

export default DropDown
