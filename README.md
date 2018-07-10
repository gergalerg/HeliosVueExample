It's not pretty but it works.

Running on Node v10.6.0 (and Node v8.11.3) locally. 

It uses a helios logo in CSS just moving around the screen.

On a click the logo is hidden and the form is displayed.

After entering first, last and email a button is clicked to send to the url using fetch.

A global `window.__URL__` object is exposed allowing anybody to change the URL in the console.
I think that's what you meant? In production I would do it probably by making a request to an API or some kind of service. 

All the logic is in ./src/components/SimpleForm.vue

To run do:

`git clone git@github.com:gergalerg/HeliosVueExample.git`

`cd HeliosVueExample`

`npm install`

`npm run start`

Open browser to:

`http://localhost:8080/`
