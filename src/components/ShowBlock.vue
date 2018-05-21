<template>
  <div v-theme="'narrow'" id="show-block">
   <h1>博客总览</h1>
   <input type="text" v-model="search" value="">
   <div class="single-block" v-for="blog in filteredBlogs">
   		<router-link :to="'/blog/' + blog.id">
   			<h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
   		</router-link>	
   		<article>
   			{{blog.content | snippet}}
   		</article>
   </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      blogs:[],
      search:""
    }
  },
  created() {
  	// 野狗数据
  	this.$http.get("https://wd6591195512wohfkv.wilddogio.com/posts.json").then(data =>{
      // console.log(data.json())
      return data.json();
  		// this.blogs = data.body.splice(0,10);
  		// console.log(this.blog)
  	}).then(data => {
  		let blogsArray = [];
      for (let key in data) {
          data[key].id = key;
          blogsArray.push(data[key]);
      }
      this.blogs = blogsArray;
      console.log(this.blogs)
  	})
  },
  computed: {
    // 查询
  	filteredBlogs:function(){
  		return this.blogs.filter((blog) =>{
  			return blog.title.match(this.search)
  		});
  	}
  },
  // 局部自定义过滤器
  filters:{
  	"to-uppercase":function(value){
  		return value.toUpperCase()
  	},
  	"snippet":function(value) {
  		return value.slice(0,100) + "..."
  	}
  },
  // 自定义指令
  directives:{
  	'rainbow':{
  		bind(el,bind,vnode) {
  			el.style.color="#" + Math.random().toString(16).slice(2,8)
  		}
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#show-block{
	max-width: 800px;
	margin: 0 auto;
}
.single-block{
	padding: 20px;
	margin: 20px 0;
	background: #eee;
	box-sizing: border-box;
	border: 1px solid #aaa;
}
a{
	color: #444;
	text-decoration: none;
}
input[type="text"] {
	padding: 10px;
	width: 100%;
	border: 1px solid #ccc;
	border-radius: 10px;
}
</style>