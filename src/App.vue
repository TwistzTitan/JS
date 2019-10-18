
<template>
  <div id="app">
    <ReqForm />
  </div>
</template>

<script>
import ReqForm from './components/FormRequest.vue'
export default {
  name: 'app',
  components:{
    ReqForm
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
}
</style>
