<template>
  <div class="navigation-select">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            v-bind="attrs"
            v-on="on"
            v-html="label"
        >
          <v-icon
              medium
          >
            mdi-chevron-down
          </v-icon>
        </v-btn>

      </template>
      <v-list>
        <v-list-item
            v-for="(item, index) in items"
            :key="index"
        >
          <Link :to="item && item.to"><v-list-item-title>{{ item.text }}</v-list-item-title></Link>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import Link from "../Link/Link";
export default {
  name: "NavigationSelect",
  components: {Link},
  props: {
    items: {
      default: () => [{text: 'list', to: '#'},
        {text: 'favorite', to: '#'},
        {text: 'delete', to: '#'}]
    },
    label: {
      default: 'Research & analysis'
    }
  },
  methods:{
    handleClick(href){
      alert(href)
    }
  }
}
</script>

<style lang="scss" src="./Index.scss">

</style>
