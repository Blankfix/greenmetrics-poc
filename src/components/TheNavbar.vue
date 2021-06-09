<template lang="pug">
  div#main-nav
    v-app-bar(
      app
      dark
      id="navbar"
      color="secondary"
    )
      div.d-flex.align-center
        v-app-bar-nav-icon(  @click.stop="drawer = !drawer" )
        picture
          source(
            media="(max-width: 374px)"
            :srcset="require('../assets/img/favicon.png')"
          )
          source(
            media="(min-width: 375px)"
            :srcset="require('../assets/img/logo-greenjection-light.svg')"
            width="120"
          )
          img(
            :src="require('../assets/img/logo-greenjection-light.svg')"
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
      app
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
        text: 'Accueil',
        href: '/',
        icon: 'view-dashboard',
      },
      {
        text: 'À propos',
        href: '/about',
        icon: 'help-box',
      },
      {
        text: 'FAQ',
        href: '/faq',
        icon: 'school',
      },
      {
        text: 'Mentions légales',
        href: '/legals',
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