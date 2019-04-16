<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <!-- <keep-alive>
    <component v-bind:is="components"></component>
    </keep-alive> -->
    <router-view></router-view>
    <app-aladdine v-bind:aladdines="aladdines"></app-aladdine>
    <!-- <button v-on:click="components='form-one'">Show Contact Us form</button>
    <button v-on:click="components='form-two'">Show Login form</button>
    <button v-on:click="components='add-blog'">Add Blog</button>
    <show-blogs></show-blogs> -->
    <app-footer v-bind:title="title"></app-footer>
</div>

</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Aladdine from './components/Aladdine.vue';
import formHelper from './components/formHelper.vue';
import formOne from './components/formOne.vue';
import formTwo from './components/formTwo.vue';
import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';
import virtualBrowser from './components/virtualBrowser.vue';

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-aladdine': Aladdine,
    'form-one': formOne,
    'form-two': formTwo,
    'form-helper': formHelper,
    'add-blog': addBlog,
    'show-blogs': showBlogs,
    'virtual-browser': virtualBrowser
  },
  data () {
    return {
      aladdines: [
        {name: 'Akram', speciality: 'Vue Js', show: false},
        {name: 'Erick', speciality: 'React Js', show: false},
        {name: 'Ankit', speciality: 'Angular Js', show: false},
        {name: 'Prakher', speciality: 'Ruby on Rails', show: false},
        {name: 'Shahrukh', speciality: 'Asp.Net', show: false},
        {name: 'Vivek', speciality: 'PHP', show: false}
      ],
      title: "Vue Aladdine",
      components: ""
    }
  },
  methods: {
    updateTitle: function(updatedTitle) {
      this.title = updatedTitle;
    }
  }
}
</script>

<style scoped>
button {
  border-radius: 8px;
  background-color: lightgreen;
  height: 50px;
  font-weight: bold;
}

</style>
