<template>
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
    <nav>
      <ul>
        <li><router-link to="/" exact>Blog</router-link></li>
        <li><router-link to="/add" exact>Add BLog</router-link></li>
        <li><router-link to="/virtualbrowser" exact>V_Browser</router-link></li>
      </ul>
    </nav>
  </header>

</template>

<script>
import { bus } from '../main';

export default{
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
    }
  },
  methods: {
    changeTitle: function() {
      //this.title = "Aladdine Industries"
      //this.$emit('changeTitle', 'Aladdine Industries');
      this.title = "Aladdine Industries";
      bus.$emit('titleChanged', 'Aladdine Industries');
    }
  }
}

</script>

<style scoped>
header{
  background-color: lightgreen;
  padding: 10px;
}
h1{
  color: #222;
  text-align: center;
}
ul{
  list-style-type: none;
  margin: 0;
  text-align: center;
}
li{
  display: inline-block;
  margin: 0 10px;
}
a{
  color: #fff;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
}
nav{
  background: #444;
  padding: 14px 0;
  margin-bottom: 40px;
}
.router-link-active{
  background: #eee;
  color: #444;
}
</style>
                                                                                                                                                                                                                                                                                                                   
