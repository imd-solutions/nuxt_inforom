import Logo from "./Logo.vue";

export default {
  title: "Logo",
  component: Logo,
};

export const asDefault = () => ({
  components: { Logo },
  template: '<Logo></Logo>',
});
