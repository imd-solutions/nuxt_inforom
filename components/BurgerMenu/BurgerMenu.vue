<template>
  <div class="nav-wrapper">
    <div class="bm-menu box-shadow" :class="{ isOpen: isOpen }">
      <a v-if="showBack" href @click.prevent="backNav" class="back d-block">
        <div class="d-flex justify-start pa-4">
          <v-icon color="#000" size="18px">mdi-chevron-left</v-icon>
          <span>Back</span>
        </div>
      </a>
      <div v-else class="pa-4">
        <Link :to="{ name: 'index' }">
          <Logo />
        </Link>
      </div>
      <div class="bm-inner" :style="style">
        <BurgerList :menuData="menuData" :dataLevel="1" @subNav="subNav" />
      </div>
    </div>

    <div class="hamburger-wrapper">
      <div
        class="hamburger hamburger--vortex"
        :class="{ isOpen: isOpen }"
        @click.prevent="clickBurger"
      >
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
        </div>
      </div>
    </div>

    <div v-show="isOpen" @click.prevent="closeNav" class="overlay">
      <div class="overlay-bg"></div>
    </div>
  </div>
</template>

<script>
import BurgerData from './BurgerData'
import BurgerList from './BurgerList'
import Logo from '../Logo/Logo'
import Link from '../Link/Link'

export default {
  name: 'BurgerMenu',

  components: {
    BurgerList,
    Logo,
    Link,
  },

  data() {
    return {
      pollTime: 200,
      storageTimeCache: null,
      isOpen: false,
      subLevel: 0,
    }
  },

  computed: {
    menuData() {
      /*
            this is just a reviz of the mega menu data so
            the mega menu component handles fetching data from the server
            then caching it in the store and local storage
            */
      return BurgerData().menu_items
    },
    style() {
      /*
            make the menu container wide enough to fit the list for each level side-by-side
            slide it to the left (as the popout is on the left of the page)
            to only display the deepest list on screen
            */
      return {
        left: this.subLevel * -250 + 'px',
        width: (this.subLevel + 1) * 250 + 'px',
      }
    },
    showBack() {
      /*
            if we're not at the top level then show the link to narrow and slide us right
            */
      return this.subLevel > 0
    },
  },

  methods: {
    subNav(subLevel) {
      /*
            navigate to a certain level of the menu
            */
      this.subLevel = subLevel
    },
    backNav() {
      /*
            navigate a level back up the menu (for back button)
            */
      this.subNav(this.subLevel - 1)
    },
    closeNav() {
      /*
            hide the popout list and put the menu back to the top level
            */
      this.isOpen = false
      // looks odd closing and resetting nav at same time
      setTimeout(() => {
        this.resetNav()
      }, 300)
    },
    resetNav() {
      /*
            put the menu back to the top level
            */
      this.subLevel = 0
    },
    clickBurger() {
      /*
            three stripe burger button toggles showing the popout menu list
            */
      this.isOpen = !this.isOpen
      if (!this.isOpen) this.closeNav()
    },
  },
}
</script>

<style lang="scss" src="./Index.scss"></style>
