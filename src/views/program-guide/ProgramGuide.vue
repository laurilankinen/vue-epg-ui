<template>
  <div class="programguide">
    <div class="channel--logo-container" v-if="!loading">
      <channel-logo
        v-for="(channel, $index) in channels"
        :key="$index"
        :channel-data="channel"/>
    </div>
    <timeline v-if="!loading">
      <channel
        v-for="(channel, $index) in channels"
        :key="$index"
        :channel-data="channel" />
    </timeline>
    <p v-if="loading">Loading</p>
  </div>
</template>

<script>
import Timeline from '@/components/timeline/Timeline.vue'
import Channel from '@/components/channel/Channel.vue'
import ChannelLogo from '@/components/channel/ChannelLogo.vue'
import { epgActions } from '@/store/action.types'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'programguide',
  components: {
    Timeline,
    Channel,
    ChannelLogo
  },
  mounted() {
    if (!this.programData) {
      this.fetchProgramData()
    }
  },
  computed: {
    ...mapState('common', [
      'loading',
      'channels'
    ])
  },
  methods: {
    ...mapActions('common', {
      fetchProgramData: epgActions.FETCH_PROGRAM_DATA
    })
  }
}
</script>

<style lang="scss" scoped>
.channel--logo-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 150px;
  margin-top: 50px;
  float: left;
}
@media screen and (max-width: 850px) {
    .channel--logo-container {
      width: 75px;
    }
  }

</style>
