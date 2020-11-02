import React from 'react'

/**
 * Textbox UI Component
 * @param {string} title insert title string
 * @param {string} placeholder insert placeholder string
 * @param {boolean} isPassword change between password and text input
 * @param {*} handleChange function to handle onChange event
 * @return Textbox
 */
const Textbox = props => {

    const { title, placeholder, handleChange, isPassword } = props

    const properties = {
        type: isPassword ? 'password' : 'text',
        className: 'textbox__input',
        placeholder: placeholder,
        onChange: e => handleChange(e.target.value)
    }

    return(
        <div className="textbox">
            <span className="text__span--black">{title}</span>
            <div className="textbox__container">
                <input {...properties}/>
            </div>
        </div>
    )
}

export default Textbox