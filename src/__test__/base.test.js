import React from 'react';
import { create } from 'react-test-renderer';
import Button from '../base/Button';

test('UI Button Base Component', () => {
  const button = create(<Button value="Iniciar Sesión" />).toJSON();
  expect(button).toMatchSnapshot();
});
