import Advert from './Advert.vue'

export default {
  title: 'Advert',
  component: Advert,
}

export const asDefault = () => ({
  components: { Advert },
  data() {
    return {
      advert: {
        format: 'billboard',
        image:
          'https://inform-staging-cms-public.s3.amazonaws.com/original_images/2_Efficiency__Experience__Monetization_970x250_2.png',
        live: false,
        name: 'Efficiency Experience Monetization',
        url:
          'https://www.etiya.com/en/solutions/digital-business-platforms?utm_source=tmforum&utm_medium=banner&utm_campaign=digital-business-platforms&utm_content=homepage',
      },
    }
  },
  template: '<Advert :advert="advert" />',
})
