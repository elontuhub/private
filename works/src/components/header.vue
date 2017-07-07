<template>
	<div class="headerWrap" :style="{background:col}">
		<slot></slot>
		<slot name='leftImg'></slot>
		<slot name='rightImg'> </slot>
	</div>

</template>
<script>
	export default{
		props:{
			col:{
				default:'#f7f7f7'
			}
		}
	}
</script>
<style>
	.headerWrap{width: 100%;height: 48px;position: fixed;top: 0;left: 0;line-height:48px;}
	.title{font-size: 16px;color: #000;}
</style>