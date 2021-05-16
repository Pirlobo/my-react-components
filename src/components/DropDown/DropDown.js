import React from 'react'
import './dropDown.css'
import PropTypes from 'prop-types';
const DropDown = (props) => {
  let defaultProps = {
    title : props.title,
    options : props.options
  }
    return (
      <div className="dropdown">
      <button className="dropbtn">{defaultProps.title} 
        <i className="fa fa-caret-down"></i>
      </button>
      <div className="dropdown-content">
      {defaultProps.options.map((option, index) => {
          return <a key = {index} href={option.href}>{option.opt}</a>
        })}
      </div>
    </div> 
    )
}
DropDown.propTypes = {
  title: PropTypes.string,
  options : PropTypes.array
};

export default DropDown
