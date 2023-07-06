import DefaultImage from "./DefaultImage.vue";

export default {
  title: "DefaultImage",
  component: DefaultImage,
};

export const asDefault = () => ({
  components: { DefaultImage },
  data() {
    return {
      src: "https://i.ibb.co/ynKY7t6/Rectangle-10.jpg",
    };
  },
  template: '<DefaultImage :src="src"></DefaultImage>',
});
