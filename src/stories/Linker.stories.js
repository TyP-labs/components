import { action } from '@storybook/addon-actions';
import React from 'react';
import Linker from '../base/Linker';
import '../styles/index.css';

export default {
  title: 'Linker',
  component: Linker,
};

const Template = (args) => <Linker {...args} />;

export const Principal = Template.bind({});
Principal.args = {
  value: 'value',
  isWhite: false,
  handleClick: action,
};

export const Secondary = Template.bind({});
Secondary.args = {
  value: 'value',
  isWhite: true,
  handleClick: action,
};
