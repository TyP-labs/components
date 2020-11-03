import React from 'react'
import Card from '../base/Card'
import '../styles/index.css'

export default {
  title: 'Card',
  component: Card
};

const Template = () => 
  <div style={{width:'400px'}}> 
    <Card>
      <h3 className="text__h3--black">This is a Card</h3>
      <p className="text__p">Welcome!</p>
    </Card> 
  </div>

export const Primary = Template.bind({})