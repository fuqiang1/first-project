import Vue from 'vue'
import List from '../../components/List'
import Hello from '../../components/Hello'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

require('../index/assets/list.css')
/* eslint-disable no-new */
new Vue({
  el: '#test2',
  components: {
    'hello': Hello,
    'list': List
  }
})
