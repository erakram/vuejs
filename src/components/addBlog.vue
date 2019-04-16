<template>
  <div class="form-group">
    <form-helper>
      <div slot="form-header">
        <h3>Add Blog | Aladdine</h3>
        <p>Add a New Blog Post</p>
      </div>
      <div v-if="!submitted" slot="form-fields" class="form-group">
        <label>Name:</label>
        <input class="form-control" type="text" v-model.lazy="blog.title" placeholder="Name" required />
        <label>Blog Content:</label>
        <textarea class="form-control" row="10" v-model.lazy="blog.content"></textarea>
        <br/>
        <br/>
        <label>Courses:</label><br/>
        <div id="checkboxes" class="form-check-inline">
            <label class="form-check-label">Vue Js</label>
            <input class="form-check-input" type="checkbox" value="Vue Js" v-model="blog.categories" />
            <label class="form-check-label">React Js</label>
            <input class="form-check-input" type="checkbox" value="React Js" v-model="blog.categories" />
            <label class="form-check-label">Angular Js</label>
            <input class="form-check-input" type="checkbox" value="Angular Js" v-model="blog.categories" />
            <label class="form-check-label">Ruby on Rails</label>
            <input class="form-check-input" type="checkbox" value="RoR" v-model="blog.categories" />
            <label class="form-check-label">Asp.NET</label>
            <input type="checkbox" value="ASP.NET" v-model="blog.categories" />
        </div>
        <br/>
        <br/>
        <label>Author:</label>
        <select class="form-control" v-model="blog.author">
          <option v-for="author in authors">{{ author }}</option>
        </select>
      </div>
      <div slot="form-controls">
        <button class="btn btn-success" v-on:click.prevent="post">Add Blog</button>
        <div v-if="submitted">
          <h3>Thank you for adding your blog</h3>
        </div>
      </div>
      <div slot= "preview">
        <h3>Blog Preview</h3>
        <p>Blog Title: {{ blog.title}}</p>
        <p>Blog Content: {{ blog.content}}</p>
        <p>Blog Category:</p>
        <ul>
          <li v-for="category in blog.categories"> {{category}}</li>
        </ul>
        <p>Author: {{blog.author}}</p>
      </div>
    </form-helper>
  </div>

</template>

<script>
import formHelper from '../components/formHelper.vue';

export default{
  components:{
    'form-helper': formHelper,
  },
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ['Akram', 'Ankit', 'Shahrukh', 'Vivek'],
      submitted: false,
    }
  },
  methods: {
    post: function() {
      this.$http.post('https://vue-js-project-a8a2a.firebaseio.com/posts.json',this.blog).then(function(data){
        console.log(data);
        this.submitted = true;
      });
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
#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}
</style>
