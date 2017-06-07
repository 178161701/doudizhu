<template>
  <div id="app">
    <img src="./assets/index.jpg" width="100%" height="650px">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
	#app {
	  font-family: 'Avenir', Helvetica, Arial, sans-serif;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	  text-align: center;
	  color: #2c3e50;
	  /*background: url(assets/index1.jpg);*/
	  /*margin-top:3px;*/
	  /*min-height 100%;*/
	  /*background-color: #2C3E50;*/
	} 
	body {
        margin: 0px;
        padding: 0px;
    }
</style>
