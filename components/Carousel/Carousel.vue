<template>
  <Slick
      ref="slick"
      :options="slickOptions"
      @afterChange="handleAfterChange"
      @beforeChange="handleBeforeChange"
      @breakpoint="handleBreakpoint"
      @destroy="handleDestroy"
      @edge="handleEdge"
      @init="handleInit"
      @reInit="handleReInit"
      @setPosition="handleSetPosition"
      @swipe="handleSwipe"
      @lazyLoaded="handleLazyLoaded"
      @lazyLoadError="handleLazeLoadError">
   <slot></slot>
  </Slick>
</template>

<script>
import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';

export default {
  name: "Carousel",
  components: {Slick},

  data() {
    return {
      slickOptions: {
        // Any other options that can be got from plugin documentation
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        dots: true,
        arrows: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      },
    };
  },

  // All slick methods can be used too, example here
  methods: {
    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },

    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    },

    // Events listeners
    handleAfterChange(event, slick, currentSlide) {
      console.log('handleAfterChange', event, slick, currentSlide);
    },
    handleBeforeChange(event, slick, currentSlide, nextSlide) {
      console.log('handleBeforeChange', event, slick, currentSlide, nextSlide);
    },
    handleBreakpoint(event, slick, breakpoint) {
      console.log('handleBreakpoint', event, slick, breakpoint);
    },
    handleDestroy(event, slick) {
      console.log('handleDestroy', event, slick);
    },
    handleEdge(event, slick, direction) {
      console.log('handleEdge', event, slick, direction);
    },
    handleInit(event, slick) {
      console.log('handleInit', event, slick);
    },
    handleReInit(event, slick) {
      console.log('handleReInit', event, slick);
    },
    handleSetPosition(event, slick) {
      console.log('handleSetPosition', event, slick);
    },
    handleSwipe(event, slick, direction) {
      console.log('handleSwipe', event, slick, direction);
    },
    handleLazyLoaded(event, slick, image, imageSource) {
      console.log('handleLazyLoaded', event, slick, image, imageSource);
    },
    handleLazeLoadError(event, slick, image, imageSource) {
      console.log('handleLazeLoadError', event, slick, image, imageSource);
    },
  },
}
</script>

<style lang="scss" src="./Index.scss"/>
