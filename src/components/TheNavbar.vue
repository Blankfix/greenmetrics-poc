<template lang="pug">
  v-card.mx-auto.overflow-hidden
    v-app-bar(
      app
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
      absolute
      bottom
      temporary
    )
      v-list(
        nav
        dense
      )
        v-list-item-group(
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        )
          v-list-item( v-for="(link, k) in linksMainMenu" :key="k" )
            v-list-item-title
              a(
                :href=" link.href"
              ) {{ link.text }}


</template>

<script>
import LocaleSelect from '@/components/LocaleSelect';

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
      },
      {
        text: 'A propos',
        href: '/',
      },
      {
        text: 'FAQ',
        href: '/',
      },
      {
        text: 'Mentions légales',
        href: '/',
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