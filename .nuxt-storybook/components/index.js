export { default as Tutorial } from '../../components/Tutorial.vue'
export { default as VuetifyLogo } from '../../components/VuetifyLogo.vue'
export { default as Avatar } from '../../components/Avatar/Avatar.vue'
export { default as Button } from '../../components/Button/Button.vue'
export { default as Card } from '../../components/Card/Card.vue'
export { default as Card3 } from '../../components/Card/Card3.vue'
export { default as Carousel } from '../../components/Carousel/Carousel.vue'
export { default as ContentDiv } from '../../components/ContentDiv/ContentDiv.vue'
export { default as Footer } from '../../components/Footer/Footer.vue'
export { default as DefaultImage } from '../../components/DefaultImage/DefaultImage.vue'
export { default as Header } from '../../components/Header/Header.vue'
export { default as Layout } from '../../components/Layout/Layout.vue'
export { default as Login } from '../../components/Login/Login.vue'
export { default as Link } from '../../components/Link/Link.vue'
export { default as Logo } from '../../components/Logo/Logo.vue'
export { default as NuxtLogo } from '../../components/NuxtLogo/NuxtLogo.vue'
export { default as Search } from '../../components/Search/Search.vue'
export { default as SelectNavigationSelect } from '../../components/Select/NavigationSelect.vue'
export { default as Tab } from '../../components/Tab/Tab.vue'
export { default as Timeline } from '../../components/Timeline/Timeline.vue'
export { default as Trending } from '../../components/Trending/Trending.vue'
export { default as Form } from '../../components/Form/Homepage/Form.vue'
export { default as TextAuthor } from '../../components/Text/Author/Author.vue'
export { default as TextDate } from '../../components/Text/Date/Date.vue'
export { default as TextTopicAndType } from '../../components/Text/TopicAndType/TopicAndType.vue'
export { default as TextContent } from '../../components/Text/Content/Content.vue'
export { default as TextTopics } from '../../components/Text/Topics/Topics.vue'
export { default as TextTitle } from '../../components/Text/Title/Title.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
