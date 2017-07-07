<template>
	<div>
		<MyHeader col='green'>
			<span class="title">首页</span>
		</MyHeader>
		<Banner swipeid='swipe01'>
			<div class="swiper-slide" ><img src="../../assets/images/banner/01.jpg"/></div>
			<div class="swiper-slide" ><img src="../../assets/images/banner/02.jpg"/></div>
			<div class="swiper-slide" ><img src="../../assets/images/banner/03.jpg"/></div>
		</Banner>	
		<Media></Media>	
		<div>
			 <div v-for="item in arr">{{item.title}}</div >
		</div>
	</div>
	
</template>
<script>
	import MyHeader from '../../components/header'
	import Banner from '../../components/banner'
	import Media from '../../components/media'

	export default{
		components:{
			MyHeader,
			Banner,
			Media
		},
		mounted:function(){			
			this.search();
		},
		methods:{
			search:function(){
				this.axios.get('/api/homeData').then((response)=>{
					console.log(response.data.data.recommend_feeds);
					this.arr=response.data.data.recommend_feeds
				});
			}
		},
		data:function(){
			return{
				 arr:[]
				}
		}
	}
</script>