<template>
  <div id="app">
    <SimpleForm />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import SimpleForm from './components/SimpleForm.vue'

export default {
  name: 'app',
  components: {
    SimpleForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  visibility: hidden;
}


</style>
