import NavigationSelect from "./NavigationSelect.vue";

export default {
  title: "NavigationSelect",
  component: NavigationSelect,
};

export const asDefault = () => ({
  components: { NavigationSelect },
  template: '<NavigationSelect/>',
});
