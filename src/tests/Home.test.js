import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render } from '@testing-library/react';

import Home from '../pages/Home';
import {LoginProvider} from '../context/LoginContext'

test('renders learn react link', () => {
  const {getByText}= render(<LoginProvider><BrowserRouter><Home /></BrowserRouter></LoginProvider>);
  getByText("Codenames Online");
  getByText("Create Room");
  getByText("Log In");
  getByText("Sign Up");

  });

test('allow users to press buttons', ()=>{
  const {getByText}= render(<LoginProvider><BrowserRouter><Home /></BrowserRouter></LoginProvider>);
  fireEvent.click(getByText("Create Room"));
  fireEvent.click(getByText("Log In"));
  fireEvent.click(getByText("Sign Up"));

});