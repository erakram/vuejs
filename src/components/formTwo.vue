<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Form Two | Login</h3>
        <p>Enter your details to login</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="name" required />
        <input type="password" placeholder="password" required />
      </div>
      <div slot="form-controls">
        <button v-on:click="">Submit</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import formHelper from '../components/formHelper.vue';

export default{
  components:{
    'form-helper': formHelper
  },
  data() {
    return {

    }
  }
}

</script>

<style scoped>
h1{
  text-align: center;
}
form{
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
}
#useful-links li{
  display: inline-block;
  margin-right: 10px;
}
form > div {
  padding: 20px;
  background: #eee;
  margin: 20px 0;
}
#form=header {
  background: #ddd;
  border: 1px solid #bbb;
}
</style>
