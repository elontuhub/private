<template>
	<div id='box'>
		<Parent></Parent>
	</div>
</template>

<script>
	import Parent from '../components/parent'
	export default {

		data:function(){
			return{
				msg:'����һ������'
			}

		},components:{
		Parent
		}
	}
</script>

