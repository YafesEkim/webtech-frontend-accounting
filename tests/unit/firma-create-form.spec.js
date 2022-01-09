import { flushPromises, shallowMount } from '@vue/test-utils'
import FirmenUebersicht from '@/views/FirmenUebersicht.vue'

describe('FirmenUebersicht.vue', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })

  it('renders Firma Name', async () => {
    fetch.mockResponseOnce(JSON.stringify([
      { id: 1, firmaName: 'YM AG', address: 'Kurfürstendamm', ust_id: '12345', rechnungIds: 1 }
    ]))
    const here = 'rendering Firma description'
    const wrapper = shallowMount(FirmenUebersicht, {
      props: { here }
    })
    await flushPromises()
    const location = wrapper.get('.firma')
    expect(location.text()).toMatch('YM AG')
  })
})
