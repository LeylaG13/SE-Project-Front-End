import React from "react";
import "../style.css";
import "./register.css";

function Register() {
  return (
    <div>
      <h1> Register</h1>
      <div>
        <div id="registerdiv">
          <form>
            <div>
              <label for="email" class="preg">
                Email
              </label>
              <input type="email" id="idemail" name="email" />
            </div>

            <div>
              <label for="name" class="preg">
                {" "}
                Name
              </label>
              <input type="text" id="idname" name="name" />
            </div>

            <div>
              <label for="username" class="preg">
                Username
              </label>
              <input type="text" id="idusername" name="username" />
            </div>

            <div>
              <label for="password" class="preg">
                Password
              </label>
              <input type="password" id="idpassword" name="password" />
            </div>
            <button class="ui big inverted button">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Register;
