<template>
  <div class="channel-logo">
    <div class="channel--info" :style="{'background': channelColor}">
      <img :src="imageUrl">
    </div>
  </div>
</template>

<script>
import { channelColors, channelImages } from '@/constants/config'

const imageContext = require.context('../../assets/', false, /\.png$/)

export default {
  name: 'channel-logo',
  props: {
    channelData: {
      type: Object,
      default: null
    }
  },
  computed: {
    imageUrl() {
      return imageContext(`./${channelImages[this.channelData.id]}`)
    },
    channelColor() {
      return channelColors[this.channelData.id]
    }
  }
}
</script>

<style lang="scss" scoped>
  .channel-logo {
    display: flex;
    width: 150px;
    height: 150px;
    .channel--info {
      width: 150px;
      height: 150px;
      position: absolute;
      left: 0px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      img {
        max-width: 90px;
        max-height: 90px;
      }
    }
  }
  @media screen and (max-width: 850px) {
    .channel-logo {
      width: 75px;
      height: 75px;
      .channel--info {
        width: 75px;
        height: 75px;
        img {
          max-width: 35px;
          max-height: 35px;
        }
      }
    }
  }
</style>
