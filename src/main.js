import './assets/rem'
import './assets/reset.css'

import Vue from 'vue'
import App from './App'
import router from './router'
// 引入vant
import { 
  Button,
  Image,Icon,
  Col, Row,
  Search,
  Tab, Tabs,
  Swipe, SwipeItem,
  Grid, GridItem,
  Tabbar, TabbarItem,
  Sticky,
  Sidebar, SidebarItem,
  Field,Form
 } from 'vant';
//全局使用Button
Vue.use(Button).use(Image).use(Icon).use(Row).use(Col).use(Search).use(Tab).use(Tabs).use(Swipe).use(SwipeItem).use(Grid).use(GridItem).use(Tabbar).use(TabbarItem).use(Sticky).use(Sidebar).use(SidebarItem).use(Field).use(Form);

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
