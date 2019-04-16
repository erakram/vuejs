<template>
  <div>
    <!-- <h1>Virtual Browser</h1> -->
    <div class="card-body row no-gutters align-items-center">
      <div class="col">
        <input class="form-control form-control-lg" v-model="url" type="search" placeholder="Type Kabeer Aalu">
      </div>
      <div class="col-auto">
        <button class="btn btn-lg btn-success" type="submit">Go</button>
      </div>
    </div>
    <div>
      <iframe ref="iframe" id="vBrowser" :src="url"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: 'https://www.google.com/webhp?igu=1',
      // headers: set('X-Frame-Options', 'SAMEORIGIN', false);
    }
  },
  //Life cycle hook
  // beforeCreate(){
  //   alert('beforeCreate');
  // },
  // created(){
  //   alert('created');
  // },
  // beforeMount(){
  //   alert('beforeMount');
  // },
  // mounted(){
  //   alert('mounted');
  // },
  // beforeUpdate(){
  //   alert('beforeUpdate');
  // },
  // updated(){
  //   alert('updated');
  // }
}

</script>

<style scoped>

#vBrowser {
  width: 100%;
  height: 420vh;
  border: 0;
}



</style>
