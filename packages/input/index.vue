<template>
	<div>
		<input type="text" :value="modelValue" @input="input" />
	</div>
</template>

<script setup>
const props = defineProps({
	modelValue: String | Number
})

const emit = defineEmits(['update:modelValue'])
const input = e => {
	emit('update:modelValue', e.target.value)
}
</script>

<script>
export default {
	name: 'sInput'
}
</script>
