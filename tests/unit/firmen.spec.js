import { mount } from '@vue/test-utils'
import Firmen from '@/views/Firmen.vue'

describe('Firmen.vue', () => {
  it('should render Firmen for each firma', () => {
    // when
    const wrapper = mount(Firmen, {
      propsData: {
        persons: [
          {
            id: 1,
            firmaName: 'YM AG',
            address: 'Kurfürstendamm',
            ust_id: '12345',
            rechnungIds: []
          },
          {
            id: 2,
            firstName: 'MY AG',
            lastName: 'Kurfürstenstraße',
            ust_id: '54321',
            rechnungIds: []
          }
        ]
      }
    })

    // then
    const firmen = wrapper.findAllComponents(Firmen)
    expect(firmen.length).toBe(2)
  })
})
