import React from 'react'

const Textbox = props => {

    const { title, placeholder } = props

    const properties = {
        type: 'text',
        className: 'textbox__input',
        placeholder: placeholder,
    }

    return(
        <div className="textbox">
            <span className="textbox__span">{title}</span>
            <input {...properties}/>
        </div>
    )
}

export default Textbox