import React from 'react';
import Button from '../base/Button';
import {action} from '@storybook/addon-actions'
import '../styles/index.css'

export default {
  title: 'Button',
  component: Button,
  action: {
    handleClick: ['click']
  }
};

const Template = args =>
<div style={{width: '200px'}}>
  <Button {...args} />
</div>;

export const Primary = Template.bind({});
Primary.args = {
  isPrincipal: true,
  value: 'Button',
  handleClick: ()=>{}
};

export const Secondary = Template.bind({});
Secondary.args = {
  isPrincipal: false,
  value: 'Button',
  handleClick: ()=>{}
};