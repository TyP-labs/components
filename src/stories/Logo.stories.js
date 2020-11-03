import React from 'react'
import Logo from '../base/Logo'

export default {
    title: 'Logo',
    component: Logo
}

const Template = args => <Logo {...args}/>

export const logo = Template.bind({})
logo.args = {
    isWhite: false
}
