import Content from "./Content.vue";

export default {
  title: "Content",
  component: Content,
};

export const asDefault = () => ({
  components: { Content },
  data() {
    return {
      text: "In 2021 TM Forum saw the most rapid increase to date in the number of companies certifying Open APIs.",
    };
  },
  template: '<Content :text="text"></Content>',
});
