import Date from "./Date.vue";

export default {
  title: "Date",
  component: Date,
};

export const asDefault = () => ({
  components: { Date },
  data() {
    return {
      text: "FEB 2022",
    };
  },
  template: '<Date :text="text"></Date>',
});
