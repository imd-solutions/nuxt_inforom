import Title from "./Title.vue";

export default {
  title: "Title",
  component: Title,
};

export const asDefault = () => ({
  components: { Title },
  data() {
    return {
      text: "Rapid growth in Open API certification as more telcos push for compliance",
    };
  },
  template: '<Title :text="text"></Title>',
});
