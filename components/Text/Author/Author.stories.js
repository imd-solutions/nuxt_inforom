import Author from "./Author.vue";

export default {
  title: "Author",
  component: Author,
};

export const asDefault = () => ({
  components: { Author },
  data() {
    return {
      text: "joanne taaffe!",
    };
  },
  template: '<Author :text="text"></Author>',
});
