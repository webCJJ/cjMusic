<template>
 <p>aa</p>
</template>

<script>
import XHeader from 'vux/src/components/x-header'
export default {
  components: {
    XHeader,

  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<style>
.header .icon{	
	cursor: pointer;
}
.header .title-ul{
	overflow: hidden;
	display: inline-block;
	white-space: nowrap;
	width: 100%;
	margin: 2px auto;
}
.title-ul li{
	float: left;
	text-align: center;
	width: 30%;
	list-style: none;
}
</style>