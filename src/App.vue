<template>
	<div>
		<s-button size="medium" disabled leftIcon="m-icon-loading1">测试</s-button>
		<s-button type="primary" size="small" round disabled rightIcon="m-icon-shangchuan">测试</s-button>
		<s-button type="success" size="mini">测试</s-button>
		<s-button type="warning">测试</s-button>
		<s-button type="danger">测试</s-button>
		<s-button type="dashed" round size="mini" disabled>测试</s-button>
		<s-button type="text">测试</s-button>
		<hr>
		<s-button type="primary" size="small" round disabled leftIcon="m-icon-shangchuan"></s-button>
		<s-button type="dashed" size="small" round leftIcon="m-icon-loading1"></s-button>
		<hr>
		<s-input type="text" v-model="value" placeholder="请输入" leftIcon="m-icon-discount" rightIcon="m-icon-discount" />
		<s-input type="text" size="medium" v-model="value" disabled />
		<s-input type="text" size="small" />
		<s-input type="text" size="mini" />
		<s-timeline>
			<timeline-item v-for="item in list" :type="item.type" :color="item.color" :size="item.size" :hollow="item.hollow" center :timestamp="item.timestamp" placement="bottom">
				{{item.content}}
			</timeline-item>
		</s-timeline>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import TimelineItem from '../packages/timeline/timelineItem.vue'
const value = ref('')


const list = ref([
  {
    content: '活动按期开始',
    timestamp: '2018-04-15',
    type: 'primary',
    hollow: true,
    // size: 'large'
  },
  {
    content: '通过审核',
    timestamp: '2018-04-13',
    type: 'success',
    color: 'blue',
    // size: 'large'
  },
  {
    content: '创建成功',
    timestamp: '2018-04-11',
    type: 'warn',
    hollow: true
  }
])
</script>

<style lang="scss">
@import './assets/css/icon.css';
</style>
