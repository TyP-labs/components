import React from 'react'
import { Helmet } from 'react-helmet'

const Seo = props => {
    const {title, description, canonical} = props

    return(
        <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="description" content={description}/>
                <link rel="canonical" href={canonical}/>
            </Helmet>
    )
}

export default Seo