import { action } from '@storybook/addon-actions'
import React from 'react'
import Textbox from '../base/Textbox'
import '../styles/index.css'

export default {
    title: 'Textbox',
    component: Textbox
}

const Template = args => 
<div style={{width: '420px'}}>
    <Textbox {...args}/>
</div>

export const Text = Template.bind({})
Text.args = {
    title: 'title',
    placeholder: 'placeholder',
    isPassword: false,
    alt: 'alt',
    img: '',
    handleChange: action
}