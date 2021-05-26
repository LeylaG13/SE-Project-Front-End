import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Login, {validateInput} from '../Login/Login';
import {LoginProvider} from '../context/LoginContext'

// export const validateInput = (str="") => str.includes("@"); // email validation

describe("login", ()=> {
  // test("login testing", () => {
  //   render(<LoginProvider><Login /></LoginProvider>);
  // });
  
  test("validate function should pass on correct input", () => {
    const email = "sarkhanjafarli12@gmail.com";
    expect(validateInput(email)).toBe(true);
  })  
  
  test("validate function should fail on incorrect input", () => {
    const email = "sarkhanjafarli12gmail.com";
    expect(validateInput(email)).not.toBe(true);
  })  

  test("email field should be in the document", ()=>{
    const {getByLabelText} = render(<LoginProvider><Login /></LoginProvider>);
    const emailInput = getByLabelText("Email");
    expect(emailInput).toBeInTheDocument();
  })

  test("email field should accept an input", ()=> {
    const {getByLabelText} = render(<LoginProvider><Login /></LoginProvider>);
    const emailInput = getByLabelText("Email");
    expect(emailInput.value).toMatch("");
    fireEvent.change(emailInput, {target: {value: "testing"}});
    expect(emailInput.value).toMatch("testing");
  })

  test("password field should be in the document", ()=> {
    const {getByLabelText} = render(<LoginProvider><Login /></LoginProvider>);
    const passwordInput = getByLabelText("Password");
    expect(passwordInput).toBeInTheDocument();
  })
})

