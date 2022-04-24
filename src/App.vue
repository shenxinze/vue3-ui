<template>
	<div>
		<s-button size="medium" disabled>测试</s-button>
		<s-button type="primary" size="small" round disabled>测试</s-button>
		<s-button type="success" size="mini">测试</s-button>
		<s-button type="warning">测试</s-button>
		<s-button type="danger">测试</s-button>
		<s-button type="dashed" round size="mini" disabled>测试</s-button>
		<s-button type="text">测试</s-button>
		<s-input v-model="val"></s-input>
		<div>{{ val }}</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'

const val = ref('')
</script>

<style lang="scss">

</style>
