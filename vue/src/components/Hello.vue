<template>
  <div class="hello">
  	<span v-once>{{msg}}</span> <!--v-once 改变时，不改变-->
  </br>
  	{{msg}}
  	</br>
  	<div v-html='msg'></div>
  	<input type="button" value="change" @click='dian' />
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '<font size="7" style="color:green">你好</font>'
    }
  },methods:{
  	dian:function(e){
  		this.msg="你好";
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
