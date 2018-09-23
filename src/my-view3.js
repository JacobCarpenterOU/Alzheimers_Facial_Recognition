/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

class MyView3 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
		#Container{
			margin: 0px auto;
			width: 375px;
			height: 375px;
			border: 10px #333 solid;
		}
		#videoElement{
			
			width: 375px;
			height: 375px;
			background-color: #666;
		}
      </style>
	  <div id="Container">
	  <video autoplay="true" id="videoElement"></video>
	  </div>
      <div class="card">
        <div class="circle">3</div>
        <h1>Camera View</h1>
		<p>Relative's Name</p>
		<p>Relation to User</p>
		<p>Relative's Interests</p>
	  </div>
	  <script>
		var video = document.querySelector("#videoElement");
 
		if (navigator.mediaDevices.getUserMedia) {       
			navigator.mediaDevices.getUserMedia({video: true})
		  .then(function(stream) {
			video.srcObject = stream;
		  })
		  .catch(function(err0r) {
			console.log("Something went wrong!");
		  });
		} 
	  </script>
    `;
  }
}

window.customElements.define('my-view3', MyView3);
