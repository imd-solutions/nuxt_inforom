import ContentDiv from "./ContentDiv.vue";

export default {
  title: "ContentDiv",
  component: ContentDiv,
};

export const asDefault = () => ({
  components: { ContentDiv },
  data() {
    return {
      src: "https://i.ibb.co/ynKY7t6/Rectangle-10.jpg",
    };
  },
  template: '<ContentDiv :src="src"></ContentDiv>',
});
