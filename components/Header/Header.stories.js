import Header from "./Header.vue";

export default {
  title: "Header",
  component: Header,
};

export const asDefault = () => ({
  components: { Header },
  template: '<Header :isStorybook="true"/>',
});
