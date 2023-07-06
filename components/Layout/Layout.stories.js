import Layout from "./Layout.vue";

export default {
  title: "Layout",
  component: Layout,
};

export const asDefault = () => ({
  components: { Layout },
  template: '<Layout />',
});
