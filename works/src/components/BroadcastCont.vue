<template>
	<div class="broadcast_cont">

		<ul class="broadcast_cont_nav clear" >
			<li :class="{ac:selected==film}" @click="setAc(film)">
				<router-link to="/broadcast/film">电影</router-link>
			</li>
			<li :class="{ac:selected==book}" @click="setAc(book)">
				<router-link to="/broadcast/book">读书</router-link>
			</li>
			<li :class="{ac:selected==tv}" @click="setAc(tv)">
				<router-link to="/broadcast/tv" >电视</router-link>
			</li>
			<li :class="{ac:selected==city}" @click="setAc(city)">
				<router-link to="/broadcast/city">同城</router-link>
			</li>
			<li :class="{ac:selected==music}" @click="setAc(music)">
				<router-link to="/broadcast/music">音乐</router-link>
			</li>
		</ul>

		<router-view></router-view>

	</div>
</template>

<script>
	export default{
		data:function(){
			return {
				selected:'film',
				film:'film',
				book:'book',
				music:'music',
				city:'city',
				tv:'tv'
			}
		},
		methods:{
			setAc:function(val){
				this.selected = val;
			}
		}
	}
</script>

<style>
	.broadcast_cont{background-color: #efefef;padding-top: 96px;}
	.broadcast_cont_nav{position: fixed;top:61px;width: 100%;z-index: 100;background-color: #fff;}
	.broadcast_cont_nav li{float: left;width: 20%;height: 35px;background-color: #fff;}
	.broadcast_cont_nav a{display: block;width: 100%;height: 100%;text-align: center;line-height: 35px;color: #333;border-bottom: 2px solid #fff;}
	.broadcast_cont_nav li.ac a{color: #6cce87;border-color: #6cce87;}
</style>