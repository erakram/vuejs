<template>
  <div id='aladdines'>
    <ul>
      <li v-for="aladdine in aladdines" v-on:click="aladdine.show = !aladdine.show">
        <h2>{{ aladdine.name }}</h2>
        <h3 v-show="aladdine.show">{{aladdine.speciality}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  props: {
    aladdines: {
      type: Array,
      required: true
    }
  },
  data() {
    return {


    }
  }
}

</script>

<style scoped>
#aladdines{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>
