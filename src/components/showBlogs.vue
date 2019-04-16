<template>
  <div v-theme:column="'wide'" id="show-blogs">
    <h1>All Blogs Article</h1>
    <div class="card-body row no-gutters align-items-center">
      <div class="col">
        <input class="form-control form-control-lg" type="search" v-model="search" placeholder="Search Blogs">
      </div>
      <div class="col-auto">
        <button class="btn btn-lg btn-success" type="submit">Search</button>
      </div>
    </div>
    <!-- <input id="input_text" type="text" v-model="search" placeholder="Search Blogs" /> -->
    <div v-for="blog in filteredBlogs" class="single-blog">
      <router-link v-bind:to="'blog/' + blog.id"><h2 v-rainbow>{{ blog.title | to-uppercase }}</h2></router-link>
      <article>{{ blog.content | snippet }}</article>
    </div>
  </div>
</template>

<script>

export default {

  data () {
    return {
      blogs: [],
      search: ''
    }
  },
  methods: {
  },
  created(){
    this.$http.get('https://vue-js-project-a8a2a.firebaseio.com/posts.json').then(function(data){
      // this.blogs = data.body.slice(0,10);
      // console.log(data.json());
      return data.json();
    }).then(function(data){
      var blogsArray = [];
      for (let key in data){
        data[key].id = key
        blogsArray.push(data[key]);
      }
      this.blogs = blogsArray;
    })
  },
  computed: {
    filteredBlogs: function(){
      return this.blogs.filter((blog) => {
          return blog.title.match(this.search)
        })
      }
    },
    filters: {
      toUppercase(value) {
        return value.toUpperCase();
      }
    },
    directives: {
      'rainbow': {
        bind(el, binding,vnode){
          el.style.color = "#" + Math.random().toString().slice(2,8)
        }
      }
    }
}
</script>

<style scoped>
#show-blogs{
  max-width: 800px;
  margin: 0 auto;
}
.single-blog{
  padding: 20px;
  margin: 20px 0px;
  box-sizing: border-box;
  background: #eee;
}
#input_text {
  max-width: 1800px !important;
  background: #000;
}

</style>
