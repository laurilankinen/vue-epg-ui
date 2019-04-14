<template>
  <div class="playhead" :style="{'left': xPosition + 'px'}">
    <div class="top-box"></div>
  </div>
</template>

<script>
export default {
  name: 'playhead',
  props: {
    xPosition: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
  .playhead {
    position: absolute;
    top: 5px;
    bottom: 0;
    width: 2px;
    margin-left: -1px;
    z-index: 100;
    animation-name: color;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    .top-box {
      height: 60px;
      width: 4px;
      border-radius: 3px;
      margin-left: -1px;
      animation-name: color;
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }
  }

  @keyframes color {
  0% {
    background-color: rgba(255, 255, 255, 1);
  }
  50% {
    background-color: rgba(255, 255, 255, 0.45);
  }
  100% {
    background-color: rgba(255, 255, 255, 1);
  }
}
</style>
