/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 * Sign Up form code was edited from W3 Schools https://www.w3schools.com/howto/howto_css_signup_form.asp
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MySignup extends PolymerElement {
    static get template() {
        return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

 <div class="card">
<form action="action_page.php" style="border:1px solid #ccc">
  <div class="container">
    <h1 align="center">Sign Up</h1>
    <p align="center">Please fill in all information to sign up for AFR</p>

<label>
      <input type="radio"  name="Client" style="margin-bottom:15px"> Client  <input type="radio"  name="Caretaker" style="margin-bottom:15px" style="padding-right:150px"> Caretaker
    </label>
    <hr>

    <label for="fname"><b>First Name</b></label>
    <input type="text" name="fname" required>

    <label for="lname"><b>Last Name</b></label>
    <input type="text" name="lname" required>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required>

    <label>
      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
    </label>

    <div class="clearfix">
      <button type="button" class="sucancelbtn"><a href="[[rootPath]]login">Cancel</a></button>
      <button type="submit" class="signupbtn">Sign Up</button>
    </div>
  </div>
</form>
    `;
    }
}

window.customElements.define('my-sign-up', MySignup);// JavaScript source code
