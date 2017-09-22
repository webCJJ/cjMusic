<template>
	<div class="music-content">
		<swiper loop auto :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange"></swiper>
		<ul class="icon-ul">
			<li style="margin-left: 0;">
				<p class="li-p">
					<a href="javascript:void(0);">
						<i class="icon iconfont icon-fm"></i>
					</a>
				</p>
				<p class="li-title">私人FM</p>
			</li>
			<li>
				<p class="li-p">
					<a href="javascript:void(0);">
						<i class="icon iconfont icon-calendar"></i>
					</a>
				</p>
				<p class="li-title">每日推荐</p>
			</li>
			<li>
				<p class="li-p">
					<a href="javascript:void(0);">
						<i class="icon iconfont icon-ttpodicon"></i>
					</a>
				</p>
				<p class="li-title">歌单</p>
			</li>
			<li>
				<p class="li-p">
					<a href="javascript:void(0);">
						<i class="icon iconfont icon-paixingbang"></i>
					</a>
				</p>
				<p class="li-title">排行榜</p>
			</li>
		</ul>
		<card>
			<p slot="header">
				<i class="quoter"></i>
				<span>推荐歌单</span>
				<i class="icon iconfont icon-you"></i>
			</p>
		</card>
	</div>
</template>

<script>
	import { Swiper, GroupTitle, SwiperItem, XButton, Divider, Card } from 'vux'
	//轮播
	const baseList = [{
		url: 'javascript:',
		img: 'https://static.vux.li/demo/1.jpg',
		title: '送你一朵fua'
	}, {
		url: 'javascript:',
		img: 'https://static.vux.li/demo/2.jpg',
		title: '送你一辆车'
	}, {
		url: 'javascript:',
		img: 'https://static.vux.li/demo/5.jpg',
		title: '送你一次旅行',
		fallbackImg: 'https://static.vux.li/demo/3.jpg'
	}]

	const urlList = baseList.map((item, index) => ({
		url: 'http://m.baidu.com',
		img: item.img,
		fallbackImg: item.fallbackImg,
		title: `(可点击)${item.title}`
	}))

	export default {
		components: {
			Swiper,
			SwiperItem,
			GroupTitle,
			XButton,
			Divider,
			Card
		},
		data() {
			return {

			}
		},
		ready() {

		},
		methods: {
			onSwiperItemIndexChange(index) {
				console.log('demo item change', index)
			},

			demo06_onIndexChange(index) {
				this.demo06_index = index
			},

		},
		data() {
			return {
				demo06_list: urlList,
				demo06_index: 0,
				swiperItemIndex: 1
			}
		}
	}
</script>

<style>
	.icon-ul a {
		color: red;
	}
	
	.icon-ul li {
		width: 7%;
		margin-left: 210px;
	}
	
	.icon-ul li .iconfont {
		font-size: 23px;
	}
	
	.li-title {
		width: 100%;
		text-align: center;
	}
	
	li .li-p {
		width: 90%;
		height: 53px;
		border: 1px solid red;
		border-radius: 50%;
		text-align: center;
		line-height: 51px;
	}
	/*card*/
	
	.card-demo-flex {
		display: flex;
	}
	
	.card-demo-content01 {
		padding: 10px 0;
	}
	
	.card-padding {
		padding: 15px;
	}
	
	.card-demo-flex>div {
		flex: 1;
		text-align: center;
		font-size: 12px;
	}
	
	.card-demo-flex span {
		color: #f74c31;
	}
	
	.quoter {
		display: inline-block;
		width: 2px;
		height: 15px;
		background: red;
		position: relative;
		top: 1px;
	}
</style>