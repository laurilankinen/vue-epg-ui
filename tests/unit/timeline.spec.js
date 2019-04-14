import { shallowMount } from '@vue/test-utils'
import Timeline from '@/components/timeline/Timeline.vue'

describe('Timeline.vue', () => {
  it('renders timeline container', () => {
    const wrapper = shallowMount(Timeline, {})
    expect(wrapper.classes()).toContain('timeline')
  })
})
