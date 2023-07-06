import { shallowMount } from '@vue/test-utils'
import Logo from "~/components/List.vue";

describe('List.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Logo, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
