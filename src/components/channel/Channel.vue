<template>
  <div class="channel">
    <program
      v-for="(program, index) in channelData.schedules"
      :key="index"
      :program-data="program"
      :channel-color="channelColor" />
  </div>
</template>

<script>
import { channelColors } from '@/constants/config'
import Program from '@/components/program/Program.vue'

export default {
  name: 'channel',
  components: {
    Program
  },
  props: {
    channelData: {
      type: Object,
      default: null
    }
  },
  computed: {
    channelColor() {
      return channelColors[this.channelData.id]
    }
  }
}
</script>

<style lang="scss" scoped>
  .channel {
    display: flex;
    flex-wrap: nowrap;
  }
</style>
