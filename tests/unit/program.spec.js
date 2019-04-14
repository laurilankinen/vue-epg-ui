import { shallowMount } from '@vue/test-utils'
import Program from '@/components/program/Program.vue'

describe('Program.vue', () => {
  it('renders single program container', () => {
    const wrapper = shallowMount(Program, {
      propsData: {
        programData: {
          end: '2019-04-14T00:40:00+03:00',
          id: 'dummy_program_id',
          start: '2019-04-14T00:00:00+03:00',
          title: 'Cool Stuff'
        }
      }
    })
    expect(wrapper.text()).toContain('Cool Stuff')
  })
})
