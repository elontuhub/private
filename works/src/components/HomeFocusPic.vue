<template>
	<div class="swiper-container banner" :class="otherName">
		<div class="swiper-wrapper">
			<slot></slot>
		</div>
		<div :class="{'swiper-pagination':hasPagination}" :style="{textAlign:paginationDis}"></div>
	</div>
</template>

<script>
import '../assets/libs/swiper/js/swiper.js'

	export default{
		props:{
			otherName:{
				type:String,
				default:''
			},
			// 轮播图是否有导航按钮
			hasPagination:{
				type:Boolean,
				default:true
			},
			// 轮播图导航按钮位置
			paginationDis:{
				type:String,
				default:'center'
			},
			// 轮播图循环播放
			loop:{
				type:Boolean,
				default:true
			},
			// 轮播图间隔播放时间
			autoplay:{
				type:Number,
				default:2000
			}
		},
		mounted:function(){

			var _this = this;

			new Swiper('.'+_this.otherName,{
				loop:_this.loop,
				autoplay:_this.autoplay,
				pagination:'.swiper-pagination',
			});
		}
	}

</script>

<style>
@import '../assets/libs/swiper/css/swiper.min.css';

.banner{height:200px;width: 100%;background-color: #ccc;}
.banner .swiper-slide{width: 100%;}
.banner img{width: 100%;height: 100%;}

</style>

