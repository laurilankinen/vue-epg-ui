<template>
  <div class="timeline">
    <div class="timeline--track" ref="timelinetrack" draggable="true">
      <div class="timeline--clock" :style="{'width': dayWidth + 'px'}">
        <p
          v-for="(hour, index) in 24"
          :key="index"
          :style="{'left': hourWidth * (hour -1) + 'px'}"
          class="timeline--hour">
          {{ hour - 1 }}:00</p>
      </div>
      <playhead :x-position="playheadPosition"/>
      <slot></slot>
    </div>
    <button class="button--now" @click="updateTimelinePosition()">Now</button>
  </div>
</template>

<script>
import { minuteInPixels } from '@/constants/config'
import Playhead from '@/components/playhead/Playhead.vue'

export default {
  name: 'Timeline',
  components: {
    Playhead
  },
  data() {
    return {
      dayWidth: 24 * (minuteInPixels * 60),
      hourWidth: minuteInPixels * 60,
      playheadPosition: 0,
      timer: null
    }
  },
  methods: {
    calcPlayheadPositionFromDate() {
      const now = new Date()
      this.playheadPosition = (now.getHours() + (now.getMinutes() / 60)) * this.hourWidth
    },
    calcTimelinePositionFromDate() {
      const now = new Date()
      const screenWidth = window.innerWidth
      const playheadPosition = (now.getHours() + (now.getMinutes() / 60)) * this.hourWidth
      this.$refs.timelinetrack.scrollLeft = playheadPosition - (screenWidth / 2)
    },
    updateTimelinePosition() {
      this.calcPlayheadPositionFromDate()
      this.calcTimelinePositionFromDate()
    }
  },
  mounted() {
    this.updateTimelinePosition()
    this.timer = setInterval(this.calcPlayheadPositionFromDate, 1000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>

<style lang="scss" scoped>
  .timeline {
    .timeline--track {
      position: relative;
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
      overflow-x: auto;
      ::-webkit-scrollbar {
        display: none;
      }
      .timeline--clock {
        position: relative;
        display: block;
        height: 50px;
        .timeline--hour {
          position: absolute;
          width: 60px;
          margin-left: -30px;
          margin: 0px;
          font-size: 2rem;
          font-weight: 500;
          &::after {
            content: "";
            display: block;
            position: absolute;
            bottom: 0px;
            left: 30px;
            background: #fff;
            width: 1px;
            height: 5px;
          }
        }
      }
    }
    .button--now {
      position: fixed;
      right: 40px;
      bottom: 30px;
      background: rgb(200, 30, 59);
      color: #fff;
      outline: none;
      padding: 10px 18px;
      border: none;
      border-radius: 5px;
      font-size: 1.5rem;
      font-weight: 300;
      user-select: none;
    }
  }
</style>
