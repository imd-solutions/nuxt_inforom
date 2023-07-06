import Tab from "./Tab.vue";

export default {
  title: "Tab",
  component: Tab,
};

export const asDefault = () => ({
  components: { Tab },
  template: '<Tab/>',
});
