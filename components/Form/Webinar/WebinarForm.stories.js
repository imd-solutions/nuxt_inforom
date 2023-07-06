import Form from "./Form.vue";

export default {
  title: "HomepageForm",
  component: Form,
};

export const asDefault = () => ({
  components: { Form },
  template: '<Form></Form>',
});
