import { action } from '@storybook/addon-actions'
import React from 'react'
import FloatButton from '../base/FloatButton'

export default {
    title: 'Floating Button',
    component: FloatButton
}

const Template = args => <FloatButton {...args}/>

export const FloatingButton = Template.bind({})
FloatingButton.args = {
    value: 'value',
    handleClick: action
}