import { action } from '@storybook/addon-actions'
import React from 'react'
import Selector from '../base/Selector'
import '../styles/index.css'

export default {
    title: 'Selector',
    component: Selector
}

const Template = args => 
<div style={{width: '500px'}}>
    <Selector {...args}/>
</div>

export const Primary = Template.bind({})
Primary.args = {
    value: 'value',
    handleClick: action
}

export const Secondary = Template.bind({})
Secondary.args = {
    value: 'value',
    handleClick: action,
    isWhite: true
}