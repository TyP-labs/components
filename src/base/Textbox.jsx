import React from 'react'

/**
 * Textbox UI Component
 * @param {string} title insert title string
 * @param {string} placeholder insert placeholder string
 * @return Textbox
 */
const Textbox = props => {

    const { title, placeholder, isPassword } = props

    const properties = {
        type: isPassword ? 'password' : 'text',
        className: 'textbox__input',
        placeholder: placeholder,
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