<template>
	<div class="broadcast_item_wrap clear">
		<div class="broadcast_item_wrap_top clear">
			<div class="broadcast_item_wrap_name">
				<h4>{{ itemWrapName }}</h4>
			</div>
			<div class="broadcast_item_wrap_more">
				更多<span> ></span>
			</div>
		</div>
		<div class="broadcast_item_wrap_cont">
			<slot name="itemCont"></slot>
		</div>
	</div>
</template>

<script>
	export default{
		props:['itemWrapName']
	}
</script>

<style>
	.broadcast_item_wrap{background-color: #fff;margin-top: 10px;padding: 0 10px 10px 10px;}
	.broadcast_item_wrap_top{padding: 15px;}
	.broadcast_item_wrap_name{float: left;font-size: 16px;}
	.broadcast_item_wrap_name  h4{font-family: 'sans-serif';}
	.broadcast_item_wrap_more{color: #6cce87;font-size: 14px;float: right;}
	.broadcast_item_wrap_more span{font-family: consolas;}
</style>