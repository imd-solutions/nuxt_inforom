import NuxtLogo from "./NuxtLogo.vue";

export default {
  title: "Nuxt Logo",
  component: NuxtLogo,
};

export const asDefault = () => ({
  components: { NuxtLogo },
  data() {
    return {
      msg: "Logo!",
    };
  },
  template: '<NuxtLogo :msg="msg"></NuxtLogo>',
});
