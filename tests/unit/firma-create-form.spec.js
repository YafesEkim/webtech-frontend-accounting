import { mount } from '@vue/test-utils'
import Firmen from '@/views/Firmen.vue'

describe('Testing Firmen.vue', () => {
  it('should not show form by default', () => {
    // when
    const wrapper = mount(Firmen)

    // then
    expect(wrapper.find('#firmen-offcanvas').classes()).not.toContain('show')
  })
})
