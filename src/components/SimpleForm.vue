<template>
	<div class="SimpleForm">
		<input v-model="firstName" placeholder="first name" @keyup="clear_message">
		<input v-model="lastName" placeholder="last name" @keyup="clear_message">
		<input v-model="email" placeholder="email" @keyup="clear_message">
		<p>{{ message }}</p>
		<button v-on:click="send">Create Request bin</button>
	</div>
</template>

<script>
window.__URL__ = {
	global_url: 'https://helios-request-bin.herokuapp.com/wy9u4dwy'
}
export default {
  name: 'SimpleForm',
  data:  () => {
return  {  message: "", firstName: "", lastName: "" , email: ""}
  },
  methods: {
	clear_message: function() {
		this.message = '';	
	},
	send: function() {
		const data = JSON.stringify(
		{firstName: this.firstName, 
		lastName: this.lastName, 
		email: this.email});

		fetch(window.__URL__['global_url'], 
			{method: 'PUT',mode: 'cors', body: data})
		.then(res=> { this.message = "Your data has been sent";
			this.firstName = '';
			this.lastName = '';
			this.email = '';
			return res})
		.catch(err=>err);
		}
	}
}
</script>

<style lang="scss">
$size: 100px;

body {
  margin: 0;
}

img {
  width: $size;
  height: $size;
}

.x {
  animation: x 13s linear infinite alternate;
}

.y {
  animation: y 7s linear infinite alternate;
}

@keyframes x {
  100% {
    transform: translateX( calc(100vw - #{$size}) );
  }
}

@keyframes y {
  100% {
    transform: translateY( calc(100vh - #{$size}) );
  }
}
</style>
