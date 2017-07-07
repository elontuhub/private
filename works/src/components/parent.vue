<template>
	<div>
		<h2>{{msg}}</h2>
		<Child :change='parentChange'>hello</Child>
	</div>
</template>
<script>
	import Child from '../components/Child'
	export default {

		data:function(){
			return{
				msg:'update u page'
			}

		},
		components:{Child},
		methods:{
			parentChange:function(num){
				this.msg='update your data here.page:'+num
			}
		}
	}
</script>
