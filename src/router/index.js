import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import AddBlock from '@/components/AddBlock'
import ShowBlock from '@/components/ShowBlock'
import SingleBlog from '@/components/SingleBlog'
import EditBlog from '@/components/EditBlog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShowBlock',
      component: ShowBlock
    },
    {
      path: '/add',
      name: 'AddBlock',
      component: AddBlock
    },
    {
      path: '/blog/:id',
      name: 'SingleBlog',
      component: SingleBlog
    },
    ,
    {
      path: '/edit/:id',
      name: 'EditBlog',
      component: EditBlog
    }
  ],
  mode: 'history'
})
