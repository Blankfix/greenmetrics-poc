<template lang="pug">
  //v-app-bar(
  //  app
  //  color="indigo darken-2"
  //  dark
  //  shrink-on-scroll
  //  prominent
  //  scroll-target="#scrolling-techniques"
  //)
  //  v-app-bar-nav-icon
  //  v-app-bar-title Title
  //  v-spacer
  //
  //  v-btn(icon)
  //    v-icon mdi-magnify
  //  v-btn(icon)
  //    v-icon mdi-heart
  //  v-btn(icon)
  //    v-icon mdi-vertical
  //

  v-app-bar(
    app
    dark
    id="navbar"
    color="secondary"
  )
    div.d-flex.align-center
      v-app-bar-nav-icon
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
    //v-btn(
    //  href="https://github.com/vuetifyjs/vuetify/releases/latest"
    //  target="_blank"
    //  text
    //)

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
    navbarLinks: [
    ],
  }),
}
</script>
<style lang="scss" scoped>

</style>