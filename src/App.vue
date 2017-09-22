<template>
  <div id="app">
    <div class="header">    
        <x-header :left-options="{showBack: false}" style="background-color: red;">
    	    <a slot="left"><i class="icon iconfont icon-caidan" style="font-size: 25px;color: #fff;"></i></a> 
    	   <ul class="title-ul">
    	   <li> 
    	    	<i class="icon iconfont icon-yinle" style="font-size: 25px;"></i>
    	   </li>
    	   <li>
    	       <i class="icon iconfont icon-wangyiyunyinlezizhi-copy" style="font-size: 25px;"></i>
    	   </li>
    	   <li>
    	       <i class="icon iconfont icon-haoyou" style="font-size: 30px;"></i>
    	  </li>
    	 </ul>
    	 <a slot="right"><i class="icon iconfont icon-sousuo" style="font-size: 25px;color: #fff;"></i></a> 
    </x-header>
  </div>   
    <mune></mune>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
	import XHeader from 'vux/src/components/x-header'
	import Mune  from '@/components/mune.vue'
	import Music from '@/components/Munepages/music.vue'
  import Video from '@/components/Munepages/video.vue'
  import Dj from '@/components/Munepages/dj.vue'
export default {
  name: 'app',
  components:{
  	Mune,
  	Music,
  	XHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 980px;
	margin: 0 auto;
}
body{
	margin: 0!important;
}
ul{overflow: hidden;}
li{float: left;list-style: none;}
.header .icon{	
	cursor: pointer;
}
.header .title-ul{
	display: inline-block;
	white-space: nowrap;
	width: 100%;
	margin: 2px auto;
}
.title-ul li{
	text-align: center;
	width: 30%;
	list-style: none;
}
</style>
