<template>
	<div class="mune-content">
    <tab active-color='red' class="tab-a">
      <tab-item selected >
      	<router-link to="/Music">
      		音乐
      	</router-link>
      </tab-item>
      <tab-item >
      	<router-link to="/Video">
         	视频
      	</router-link>
      </tab-item>
      <tab-item >
      	<router-link to="/DJ">
      		电台
      	</router-link>
 
      </tab-item>
    </tab>
    </div>
</template>

<script>
 //引入组件
import { Tab, TabItem} from 'vux'
import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux'

    //创造构造器
    export default {
        components: {
         Tab,
         TabItem,
         Swiper,
         SwiperItem,
         GroupTitle,
         XButton,
         Divider
  },
  
  data () {
    return{
    	
    	list:[
       {
       	  title:'音乐',
       	  content:' <swiper :list="demo03_list" auto style="width:80%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>'
       },
       {
       	  title:"视频",
       	  content:'222'
       },
       {
       	  title:'电台',
       	  content:'333'
       }
    
    ]
  }
    },
  methods: {

    
  }
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/center.less';
.box {
  padding: 15px;
}
.active{
	color: red;
}
.tab-a a{
	color:red;
	text-decoration: none;
}
</style>