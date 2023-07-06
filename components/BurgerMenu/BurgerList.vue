<template>
  <ul class="bm-list">
    <li v-for="(menuItem, index) in menuData" :key="index" class="bm-list-item">
      <div
        v-if="menuItem.children && menuItem.children.length > 0"
        class="item-wrapper sub"
      >
        <div class="item-link">
          <div class="w-100">
            <a
              href
              @click.prevent="clickNav(index, dataLevel)"
              class="d-flex justify-space-between w-100"
            >
              <p class="ma-0">{{ menuItem.label }}</p>
              <div class="d-flex justify-end">
                <p class="ma-0">({{ menuItem.children.length }})</p>
                <v-icon color="#000" size="18px">mdi-chevron-right</v-icon>
              </div>
            </a>
          </div>
        </div>
        <BurgerList
          v-show="selected === index"
          :menuData="menuItem.children"
          :dataLevel="dataLevel + 1"
          @subNav="subNav"
        />
      </div>
      <div v-else class="item-wrapper">
        <a :href="menuItem.url">
          <p class="ma-0 item-link">{{ menuItem.label }}</p>
        </a>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'BurgerList',

  components: {
    BurgerList: () => import('./BurgerList.vue'),
  },

  props: {
    menuData: {
      type: Array,
      default() {
        return []
      },
    },
    dataLevel: {
      // how many sublevels deep are we
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      selected: null,
    }
  },

  methods: {
    clickNav(index, dataLevel) {
      this.selected = index
      this.subNav(dataLevel)
    },
    subNav(dataLevel) {
      this.$emit('subNav', dataLevel)
    },
  },
}
</script>
