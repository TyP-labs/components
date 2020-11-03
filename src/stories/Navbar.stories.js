import React from 'react'
import Navbar from '../components/Navbar'

export default {
    title: 'Navbar',
    component: Navbar
}

const Template = args => <Navbar {...args}/>

export const Primary = Template.bind({})
Primary.args = {
    isWhite: false
}

export const Secondary = Template.bind({})
Secondary.args = {
    isWhite: true
}
