import Trending from "./Trending.vue";

export default {
  title: "Trending",
  component: Trending,
};

export const asDefault = () => ({
  components: { Trending },
  template: '<Trending />',
});
