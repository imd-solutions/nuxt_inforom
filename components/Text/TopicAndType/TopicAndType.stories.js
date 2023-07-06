import TopicAndType from "./TopicAndType.vue";

export default {
  title: "TopicAndType",
  component: TopicAndType,
};

export const asDefault = () => ({
  components: { TopicAndType },
  data() {
    return {
      text: "5G | Features & opinion",
    };
  },
  template: '<TopicAndType :text="text"></TopicAndType>',
});
