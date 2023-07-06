import Button from "./Button.vue";

export default {
  title: "Button",
  component: Button,
};

export const asDefault = () => ({
  components: {Button},
  template: `
    <div style="display: flex">
    <Button background="#D42074" color="white"/>
    <Button background="transparent" borderColor="#1A2746" color="#1A2746" fontSize="16" font-weight="700"/>
    <Button background="#E9242C" color="white"/>
    <Button background="#E0121D" color="white"/>

    </div>`,
});
