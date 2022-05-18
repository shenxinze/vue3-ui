<template>
	<button :class="tClass">
		<i class="iconfont" :class="leftIcon" v-if="leftIcon"></i>
		<span v-if="slots.default"><slot></slot></span>
		<i class="iconfont" :class="rightIcon" v-if="rightIcon"></i>
	</button>
</template>

<script setup>
import { computed, useSlots } from 'vue'
const props = defineProps({
	type: {
		type: String,
		default: 'default'
	},
	size: {
		type: String,
		default: 'default'
	},
	round: Boolean,
	disabled: Boolean,
	leftIcon: String,
	rightIcon: String,
	block: Boolean
})
const tClass = computed(() => {
	let sizeClass = ''
	switch(props.size){
		case 'medium':
			sizeClass = 's-button-medium'
			break
		case 'small':
			sizeClass = 's-button-small'
			break
		case 'mini':
			sizeClass = 's-button-mini'
			break
		default:
			sizeClass = 's-button'
	}
	return [
		sizeClass,
		props.type ? (props.disabled ? '' : `s-button-${props.type}`) : '',
		props.disabled ? `s-button-${props.type}-disabled`: '',
		props.round ? 's-button-round': '',
		props.block ? 's-button-block': ''
	]
})
const slots = useSlots()
</script>
<script>
export default {
	name: 'sButton'
}
</script>

<style lang="scss" scoped>
button {
	outline: none;
	border: 0;
	background: none;
	cursor: pointer;
	&.s-button {
		padding: 10px 20px;
	}
	&.s-button-medium{
		padding: 8px 18px;
	}
	&.s-button-small{
		padding: 6px 16px;
	}
	&.s-button-mini{
		padding: 4px 14px;
	}
	&.s-button-default {
		border: 1px solid #d9d9d9;
		background: #fff;
		color: #333;
		&:hover {
			color: #0e80eb;
			border-color: #0e80eb;
			opacity: 0.8;
		}
		&:active {
			opacity: 1;
		}
	}
	&.s-button-primary {
		border: 1px solid $primary;
		background-color: $primary;
		color: #fff;
		&:hover {
			opacity: 0.8;
		}
		&:active {
			opacity: 1;
		}
	}
	&.s-button-success {
		border: 1px solid $success;
		background-color: $success;
		color: #fff;
		&:hover {
			opacity: 0.8;
		}
		&:active {
			opacity: 1;
		}
	}
	&.s-button-warning {
		border: 1px solid $warning;
		background-color: $warning;
		color: #fff;
		&:hover {
			opacity: 0.8;
		}
		&:active {
			opacity: 1;
		}
	}
	&.s-button-danger {
		border: 1px solid $danger;
		background-color: $danger;
		color: #fff;
		&:hover {
			opacity: 0.8;
		}
		&:active {
			opacity: 1;
		}
	}
	&.s-button-dashed {
		border: 1px dashed #d9d9d9;
		background: #fff;
		color: #333;
		&:hover {
			color: #0e80eb;
			border-color: #0e80eb;
			opacity: 0.8;
		}
		&:active {
			opacity: 1;
		}
	}
	&.s-button-round {
		border-radius: 20px;
	}
	&.s-button-text {
		border: 1px solid #fff;
		background: none;
		color: #0e80eb;
		&:hover {
			color: #0e80eb;
			opacity: 0.8;
		}
		&:active {
			opacity: 1;
		}
	}
	&.s-button-default-disabled {
		cursor: no-drop;
		border: 1px solid #d9d9d9;
		background: #fff;
		opacity: 0.5;
		color: #333;
	}
	&.s-button-primary-disabled {
		cursor: no-drop;
		border: 1px solid #0e80eb;
		background: #0e80eb;
		opacity: 0.5;
		color: #fff;
	}
	&.s-button-success-disabled {
		cursor: no-drop;
		border: 1px solid #09b63d;
		background: #09b63d;
		opacity: 0.5;
		color: #fff;
	}
	&.s-button-danger-disabled {
		cursor: no-drop;
		border: 1px solid #ec3437;
		background: #ec3437;
		opacity: 0.5;
		color: #fff;
	}
	&.s-button-warning-disabled {
		cursor: no-drop;
		border: 1px solid #f57b29;
		background: #f57b29;
		opacity: 0.5;
		color: #fff;
	}
	&.s-button-dashed-disabled {
		cursor: no-drop;
		border: 1px dashed #d9d9d9;
		background: #fff;
		opacity: 0.5;
		color: #333;
	}
	&.s-button-text-disabled {
		cursor: no-drop;
		border: 1px solid #fff;
		background: none;
		opacity: 0.5;
		color: #0e80eb;
	}
	&.s-button-custom-disabled {
		cursor: no-drop;
		opacity: 0.5;
	}
	i+span{
		margin-left: 4px;
	}
	span+i{
		margin-left: 4px;
	}
	&.s-button-block {
		display: block;
		width: 100%;
	}
}
</style>
