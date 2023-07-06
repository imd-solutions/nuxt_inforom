import Topics from './Topics.vue'

export default {
  title: 'Topics',
  component: Topics,
}

export const asDefault = () => ({
  components: { Topics },
  data() {
    return {
      text: '5G, Machine Learning',
    }
  },
  template: '<Topics :text="text"></Topics>',
})
