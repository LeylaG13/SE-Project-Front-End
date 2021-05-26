import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';
import {LoginProvider} from '../context/LoginContext'

test('renders learn react link', () => {
  const {getByText}= render( <LoginProvider>
  <App /></LoginProvider>);
  });
