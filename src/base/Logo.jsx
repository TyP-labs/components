import React from 'react'
import LogoWhite from '../assets/logo-icon-white.png'
import LogoViolet from '../assets/logo-icon.png'

/**
 *  Logo UI Component
 * @param {bool} isWhite change logo color between violet and white
 * @return App Logo
 */
const Logo = props => {

    const { isWhite } = props

    const properties = {
        src: isWhite ? LogoWhite : LogoViolet,
        className:"logo__img",
    }

    return(
        <div className="logo">
            <img {...properties} alt="Kritt Logo"/>
            <h3 className="text__h3--black">Kritt.</h3>
        </div>
    )
}

export default Logo