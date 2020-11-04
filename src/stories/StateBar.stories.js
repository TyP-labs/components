import React from 'react';
import Statebar from '../base/StateBar';

export default {
  title: 'StateBar',
  component: Statebar,
};

const Template = (args) => <Statebar {...args} />;

export const StateBar = Template.bind({});
StateBar.args = {
  length: 3,
  actual: 2,
};
