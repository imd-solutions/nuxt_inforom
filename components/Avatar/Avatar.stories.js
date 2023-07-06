import Avatar from "./Avatar.vue";

export default {
  title: "Avatar",
  component: Avatar,
};

export const asDefault = () => ({
  components: { Avatar },
  template: '<Avatar/>',
});
