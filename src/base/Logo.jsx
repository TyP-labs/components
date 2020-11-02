import React from 'react'
import LogoWhite from '../assets/logo-icon-white.png'
import LogoViolet from '../assets/logo-icon.png'

/**
 *  Logo UI Component
 * @param {bool} isWhite
 */
const Logo = props => {

    const { isWhite } = props

    return(
        <div className="logo">
            <img src={isWhite ? LogoWhite : LogoViolet} className="logo__img"/>
            <h3 className="logo__title">Kritt.</h3>
        </div>
    )
}

export default Logo