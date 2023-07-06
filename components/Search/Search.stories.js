import Search from "./Search.vue";

export default {
  title: "Search",
  component: Search,
};

export const asDefault = () => ({
  components: { Search },
  template: '<Search />',
});
