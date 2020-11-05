import React from 'react';
import Footer from '../components/Footer';

export default {
  title: 'Footer',
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const footer = Template.bind({});
footer.args = {
  list: ['value_1', 'value_2', 'value_3', 'value_4'],
};
