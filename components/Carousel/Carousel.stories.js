import Carousel from "./Carousel.vue";

export default {
  title: "Carousel",
  component: Carousel,
};

export const asDefault = () => ({
  components: { Carousel },
  template: '<Carousel/>',
});
