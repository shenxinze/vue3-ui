<template>
  <li :class="{'center': center}">
    <div class="line" :style="{'backgroundColor': lineColor}"></div>
    <div class="icon" :class="iconClass" :style="{'backgroundColor': color, 'left': size === 'large' ? '0px': '1px'}"></div>
    <div class="item-wrap">
      <span class="time-top" v-if="placement === 'top' && !hideTimestamp">{{timestamp}}</span>
      <slot></slot>
      <span class="time-bottom" v-if="placement === 'bottom' && !hideTimestamp">{{timestamp}}</span>
    </div>
  </li>
</template>

<script setup lang='ts'>
import { computed } from 'vue'
const props = defineProps({
  timestamp: String,
  hideTimestamp: Boolean,
  center: Boolean,
  placement: {
    type: String,
    default: 'bottom'
  },
  type: String,
  color: String,
  lineColor: String,
  hollow: Boolean,
  size: {
    type: String,
    default: 'normal'
  }
})

const iconClass = computed(() => {
  return [
    `icon-${props.type}`,
    props.hollow && props.type ? `icon-hollo-${props.type}` : props.hollow ? `icon-hello` : '',
    props.size && props.type ? `icon-${props.size}-${props.type}`: props.size ? `icon-${props.size}` : ''
  ]
})

</script>

<style lang='scss' scoped>
li{
  font-size: 14px;
  list-style: none;
  position: relative;
  padding: 0 0 10px 20px;
  .line {
    width: 2px;
    height: 100%;
    background-color: $boder;
    position: absolute;
    left: 6px;
    top: 0;
  }
  .icon {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: $boder;
    z-index: 2;
    box-sizing: border-box;
    &.icon-primary {
      background-color: $primary;
      &.icon-hollo-primary {
        background-color: #fff;
        border: 2px solid $primary;
      }
      &.icon-default-primary {
        width: 12px;
        height: 12px;
      }
      &.icon-large-primary {
        width: 14px;
        height: 14px;
      }
    }
    &.icon-success {
      background-color: $success;
      &.icon-hollo-success {
        background-color: #fff;
        border: 2px solid $success;
      }
      &.icon-default-success {
        width: 12px;
        height: 12px;
      }
      &.icon-large-success {
        width: 14px;
        height: 14px;
      }
    }
    &.icon-danger {
      background-color: $danger;
      &.icon-hollo-danger {
        background-color: #fff;
        border: 2px solid $danger;
      }
      &.icon-default-danger {
        width: 12px;
        height: 12px;
      }
      &.icon-large-danger {
        width: 14px;
        height: 14px;
      }
    }
    &.icon-warning {
      background-color: $warning;
      &.icon-hollo-warning {
        background-color: #fff;
        border: 2px solid $warning;
      }
      &.icon-default-warning {
        width: 12px;
        height: 12px;
      }
      &.icon-large-warning {
        width: 14px;
        height: 14px;
      }
    }
    &.icon-info {
      background-color: $info;
      &.icon-hollo-info {
        background-color: #fff;
        border: 2px solid $info;
      }
      &.icon-default-info {
        width: 12px;
        height: 12px;
      }
      &.icon-large-info {
        width: 14px;
        height: 14px;
      }
    }
    &.icon-hollo {
      background-color: #fff;
      border: 2px solid $boder;
    }
    &.icon-default {
      width: 12px;
      height: 12px;
    }
    &.icon-large {
      width: 14px;
      height: 14px;
    }
  }
  &:last-child {
    .line {
      width: 0;
    }
  }
  .item-wrap{
    display: flex;
    flex-direction: column;
    padding: 0 10px 20px;
  }
  span {
    padding-top: 8px;
    &.time-top {
      margin-top: 0;
      padding-bottom: 8px;
    }
  }
  &.center {
    .line {
      top: 50%;
      transform: translateY(-6px);
    }
    .icon {
      top: 50%;
      transform: translateY(-6px);
    }
    .item-wrap {
      padding: 10px;
    }
  }
}
</style>