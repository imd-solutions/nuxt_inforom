import Card from "./Card3.vue";

export default {
  title: "Card",
  component: Card,
};

export const asDefault = () => ({
  components: { Card },
  template: '<div class="flex flex-column"><div><Card/></div><div><Card :isHorizontal="true"/></div> </div>',
});
