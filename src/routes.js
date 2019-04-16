import showBlogs from './components/showBlogs.vue';
import addBlog from './components/addBlog.vue';
import aladdine from './components/Aladdine.vue';
import singleBlog from './components/singleBlog.vue';
import virtualBrowser from './components/virtualBrowser.vue';

export default[
  {path: '/', component: showBlogs},
  {path: '/add', component: addBlog},
  {path: '/aladdines', component: aladdine},
  {path: '/blog/:id', component: singleBlog},
  {path: '/virtualbrowser', component: virtualBrowser}
]
