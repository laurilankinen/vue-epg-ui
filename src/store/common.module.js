import { epgActions } from '@/store/action.types'

import EPGService from '@/services/epg.service'

export const state = {
  loading: false,
  channels: null
}

export const actions = {
  async [epgActions.FETCH_PROGRAM_DATA](context) {
    context.commit('loading', true)
    const data = await EPGService.fetchProgramGuide().catch(() => {
      alert('failed to load data')
    })
    context.commit('updateChannels', data)
    context.commit('loading', false)
  }
}

export const mutations = {
  loading(state, payload) {
    state.loading = payload
  },

  updateChannels(state, payload) {
    state.channels = payload.channels ? payload.channels : null
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
