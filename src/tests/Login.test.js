import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Login, {validateInput} from '../Login/Login';
import {LoginProvider} from '../context/LoginContext'

describe("login", ()=> {

  // test("validate function should pass on correct input", () => {
  //   const email = "sarkhanjafarli12@gmail.com";
  //   expect(validateInput(email)).toBe(true);
  // })  
  
  // test("validate function should fail on incorrect input", () => {
  //   const email = "sarkhanjafarli12gmail.com";
  //   expect(validateInput(email)).not.toBe(true);
  // })  

  test("email field should be in the document", ()=>{
    const {getByLabelText} = render(<LoginProvider><Login /></LoginProvider>);
    const emailInput = getByLabelText("Email");
    expect(emailInput).toBeInTheDocument();
  })

  test("email field should accept an input", ()=> {
    const { getByText, getByLabelText} = render(<LoginProvider><Login /></LoginProvider>);
    const emailInput = getByLabelText("Email");
    expect(emailInput.value).toMatch("");

    fireEvent.change(emailInput, {target: {value: "testing"}});
    expect(emailInput.value).toMatch("testing");

    const logInButton = getByText("Log In");
    fireEvent.click(logInButton);
    
    // const errorMessage= getByText("Invalide Email");
    // expect(errorMessage).toBeInTheDocument();

    fireEvent.change(emailInput, {target: {value: "testing@"}});
    expect(emailInput.value).toMatch("testing@");

    fireEvent.click(logInButton);
    // expect(errorMessage).not.toBeInTheDocument();

  })

  test("should be able to submit form", ()=> {
    
    const { getByText, getByLabelText} = render(<LoginProvider><Login /></LoginProvider>);
    const emailInput = getByLabelText("Email");
    const passwordInput = getByLabelText("Password");
    fireEvent.change(emailInput, {target: {value: "sarkhanjafarli12@gmail.com"}});
    fireEvent.change(passwordInput, {target: {value: "SJefry12"}});
    const logInButton = getByText("Log In");
    fireEvent.submit(logInButton);
  })

  // test("password field should be in the document", ()=> {
  //   const {getByLabelText} = render(<LoginProvider><Login /></LoginProvider>);
  //   const passwordInput = getByLabelText("Password");
  //   expect(passwordInput).toBeInTheDocument();
  // })
})

