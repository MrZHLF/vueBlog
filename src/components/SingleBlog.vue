<template>
  <div class="single-blog">
   	<h1>{{blog.title}}</h1>
   	<article>{{blog.content}}</article>
    <p>作者:{{blog.author}}</p>
    <ul>
      <li v-for="categorie in blog.categories">{{categorie}}</li>
    </ul>
    <button @click="deleteSingBlong()">删除</button>
    <router-link :to="'/edit/' + id">编辑</router-link>
  </div>
</template>

<script>
export default {
  name: 'single-block',
  data () {
    return {
      id:this.$route.params.id,
      blog:{}
    }
  },
  created(){
  	this.$http.get("https://wd6591195512wohfkv.wilddogio.com/posts/"+this.id + ".json").then(data => {
      return data.json()
  		// this.blog = res.body
  		console.log(data)
  	}).then(data => {
      this.blog = data;
  	})
  },
  methods:{
    deleteSingBlong(){
      this.$http.delete("https://wd6591195512wohfkv.wilddogio.com/posts/"+this.id + ".json").then(res => {
        this.$router.push({path:'/'})
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.single-blog{
	max-width: 960px;
	margin: 0 auto;
	padding: 20px;
	background: #eee;
	border: 1px solid #eee;
}
</style>
