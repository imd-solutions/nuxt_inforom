import Length from "./Length.vue";

export default {
  title: "Length",
  component: Length,
};

export const asDefault = () => ({
  components: { Length },
  data() {
    return {
      text: "FEB 2022",
    };
  },
  template: '<Length :text="text"></Length>',
});
