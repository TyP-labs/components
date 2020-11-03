import React from 'react'
import Logo from '../base/Logo'
import '../styles/index.css'

export default {
    title: 'Logo',
    component: Logo
}

const Template = args => <Logo {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    isWhite: false
}

export const Secondary = Template.bind({})
Secondary.args = {
    isWhite: true
}

