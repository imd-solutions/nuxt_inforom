<template>
  <div class="cont">
    <DefaultImage :src="'https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png'"></DefaultImage>
  </div>
</template>

<script>
import DefaultImage from "../DefaultImage/DefaultImage";

export default {
  name: "NuxtLogo",
  components: {DefaultImage},
  props: {
    msg: String,
  },
};
</script>

<style>
.cont{

}
.nuxt-logo {
  height: 180px;
}
</style>
