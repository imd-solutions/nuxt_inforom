import Timeline from "./Timeline.vue";

export default {
  title: "Timeline",
  component: Timeline,
};

let data =  {
  image: 'https://i.ibb.co/ynKY7t6/Rectangle-10.jpg',
  name: 'Name',
  urls: [{url: '', text: 'DTWS: Choosing your friends wisely'}, {
    url: '',
    text: 'European court of auditors flags up 5G delays amid security concerns'
  }, {url: '', text: 'A balanced diet of public and private cloud'},]
}

export const asDefault = () => ({
  components: { Timeline },
  template: '<Timeline background="#AABE3B" :data="data"></Timeline>',
});
