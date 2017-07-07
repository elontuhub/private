<template>
	<div class="itemwrap" @click="fn()">
		<span v-show='bol'><slot name='nomalImg'></slot><br/></span>
		<span v-show='!bol'><slot name='activeImg'></slot><br/></span>
		<span v-text='txt'></span>
	</div>
</template>
<script>
	export default{
		props:['txt','id'],
		computed:{
			bol:function(){
				//console.log(this.select)
				if (this.$parent.sel==this.id) {
					return false
				}
				return true
			}
		},
		methods:{
			fn:function(){
				this.$router.push('/'+this.id)
				this.$emit("change",this.id)

			}
		},
		
	}
</script>
<style>
	.itemwrap{ width:20%;float: left; }
	.icon{width: 30px;}
	span{font-size: 12px;color: #999}
</style>