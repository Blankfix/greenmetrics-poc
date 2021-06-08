<template lang="pug">
  div#main-nav
    v-app-bar(
      dark
      id="navbar"
      color="secondary"
    )
      div.d-flex.align-center
        v-app-bar-nav-icon(  @click.stop="drawer = !drawer" )
        v-img(
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('../assets/img/logo-greenjection-light.svg')"
          transition="scale-transition"
          width="120"
        )

      v-spacer

      v-divider(vertical)
      v-btn(icon)
        v-icon mdi-magnify

      v-btn(
        icon
        v-if="user.isLoggedIn"
      )
        v-icon mdi-logout
      v-btn(
        icon
        v-else
      )
        v-icon mdi-login

      v-btn(
        icon
        v-show="user.isLoggedIn"
      )
        v-icon mdi-account_circle

      locale-select

    v-navigation-drawer(
      v-model="drawer"
    )
      v-list(
        nav
        dense
      )
        v-list-item-group(
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        )
          v-list-item( v-for="(link, k) in linksMainMenu" :key="k"
            link
            :to="link.href"
          )
            v-list-item-icon
              v-icon mdi-{{ link.icon }}
            v-list-item-title {{ link.text }}



</template>

<script lang="ts">
import LocaleSelect from '../components/LocaleSelect';

export default {
  name: 'TheNavbar',
  components:{
    LocaleSelect
  },
  data: () => ({
    user: {
      isLoggedIn : false,
    },
    linksMainMenu: [
      {
        text: 'Greenjection',
        href: '/',
        icon: 'view-dashboard',
      },
      {
        text: 'A propos',
        href: '/about',
        icon: 'help-box',
      },
      {
        text: 'FAQ',
        href: '/a-faire',
        icon: 'school',
      },
      {
        text: 'Mentions légales',
        href: '/a-faire',
        icon: 'alert',
      },
    ],
    drawer: false,
    group: null,
  }),

  watch: {
    group () {
      this.drawer = false
    },
  },
}
</script>
<style lang="scss" scoped>

</style>