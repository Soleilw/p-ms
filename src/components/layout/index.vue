<template>
	<div>
		<v-header></v-header>
		<v-main></v-main>
	</div>
</template>

<script>
	import vHeader from './Header.vue'
	import vMain from './main.vue'

	export default {
		components: {
			vHeader,
			vMain
		},
	}
</script>

<style scoped>
</style>
