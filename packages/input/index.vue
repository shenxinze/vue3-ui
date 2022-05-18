<template>
	<div>
		<i class="iconfont left-icon" :class="leftIcon" v-if="leftIcon"></i>
		<input :class="tClass" :type="type" :value="modelValue" @input="input" :disabled="disabled" :placeholder="placeholder" />
		<i class="iconfont m-icon-close clearable-icon" v-if="modelValue&&!rightIcon" @click="clear"></i>
		<i class="iconfont right-icon" :class="rightIcon" v-if="rightIcon"></i>
	</div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
	modelValue: String | Number,
	type: {
		type: String,
		default: 'text'
	},
	size: {
		type: String,
		default: 'default'
	},
	disabled: {
		type: Boolean,
		default: false
	},
	placeholder: String,
	leftIcon: String,
	rightIcon: String
})
const tClass = computed(() => {
	return [
		props.size === 'default' ? 's-input-default' : `s-input-${props.size}`,
		props.disabled ? 's-input-disabled' : ''
	]
})
const emit = defineEmits(['update:modelValue'])
const input = e => {
	emit('update:modelValue', e.target.value)
}
const clear = () => {
	emit('update:modelValue', '')
}
</script>

<script>
export default {
	name: 'sInput'
}
</script>

<style lang="scss" scoped>
div {
	position: relative;
}
input{
	border: 0;
	width: 100%;
	font-size: 14px;
	color: #606266;
	box-sizing: border-box;
	border-radius: 4px;
	outline: 1px solid rgba(220, 223, 230, .9);
	margin-bottom: 2px;
	&:focus {
		outline-color: $primary;
	}
	&::placeholder {
		color: #c6c8cc;
	}
	&.s-input-default {
		padding: 10px 30px 10px 10px;
		&.s-input-disabled {
			padding-right: 30px;
		}
	}
	&.s-input-medium {
		padding: 8px;
		&.s-input-disabled {
			padding-right: 30px;
		}
	}
	&.s-input-small {
		padding: 6px;
		&.s-input-disabled {
			padding-right: 30px;
		}
	}
	&.s-input-mini {
		padding: 4px;
		&.s-input-disabled {
			padding-right: 30px;
		}
	}
	&.s-input-disabled {
		cursor: no-drop;
		color: #c3bfbf;
	}
}
.clearable-icon {
	position: absolute;
	right: 10px;
	top: 10px;
	color: #94969b;
	cursor: pointer;
}
.left-icon {
	position: absolute;
	left: 10px;
	top: 10px;
	& + input {
		padding-left: 35px;
	}
}
.right-icon {
	position: absolute;
	right: 10px;
	top: 10px;
}
</style>