import List from "./List.vue";

export default {
  title: "List",
  component: List,
};

export const asDefault = () => ({
  components: { List },
  template: '<List></List>',
});
