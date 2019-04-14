<template>
  <div class="program" :style="{'width': `${elemWidth}px`, 'border-bottom': `2px solid ${channelColor}`}" :class="{'active': active}">
    <div class="program--content">
      <p class="program--title">{{ programData.title }}</p>
      <p>{{ start }} - {{ end }}</p>
    </div>
  </div>
</template>

<script>
import { minuteInPixels } from '@/constants/config'

export default {
  name: 'program',
  props: {
    programData: {
      type: Object,
      default: null
    },
    channelColor: {
      type: String,
      default: '#fff'
    }
  },
  computed: {
    duration() {
      const start = new Date(this.programData.start)
      const end = new Date(this.programData.end)
      return (end - start) / 1000 / 60
    },
    start() {
      const start = new Date(this.programData.start)
      return `${start.getHours()}:${('0' + start.getMinutes()).slice(-2)}`
    },
    end() {
      const end = new Date(this.programData.end)
      return `${end.getHours()}:${('0' + end.getMinutes()).slice(-2)}`
    },
    elemWidth() {
      return this.duration ? this.duration * minuteInPixels : 200
    },
    active() {
      const start = new Date(this.programData.start).getTime()
      const end = new Date(this.programData.end).getTime()
      const now = new Date().getTime()
      return start < now && now < end
    }
  }
}
</script>

<style lang="scss" scoped>
  .program {
    height: 150px;
    font-size: 0.8rem;
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.65);
    flex: 0 0 auto;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.025) 0%, rgba(255, 255, 255, 0) 100%);
    &.active {
      color: rgba(255, 255, 255, 1);
      background: rgba(255, 255, 255, 0.1);
    }
    .program--content {
      text-align: left;
      vertical-align: top;
      padding: 20px;
      p {
        margin: 0;
        line-height: 100%;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .program--title {
        font-size: 1.35rem;
        margin-bottom: 10px;
      }
    }
  }
  @media screen and (max-width: 850px) {
    .program {
      height: 75px;
      font-size: 0.65rem;
      .program--content {
        padding: 15px;
        .program--title {
          font-size: 1rem;
        }
      }
    }
  }
</style>
