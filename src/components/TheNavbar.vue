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
            media="(max-width: 430px)"
            :srcset="require('../assets/img/favicon.png')"
          )
          source(
            media="(min-width: 431px)"
            :srcset="require('../assets/img/logo-greenjection-light.svg')"
            width="120"
          )
          img(
            :src="require('../assets/img/logo-greenjection-light.svg')"
          )
          div.mobile-hidden( v-if="isConnected" )
            v-divider(vertical)
            span.ml-5 Bonjour {{userName}},

      v-spacer

      v-divider(vertical)
      v-btn(icon)
        v-icon mdi-magnify

      v-btn(
        icon
        v-show="isConnected"
      )
        v-icon mdi-account-circle

      v-btn(
        icon
        v-if="isConnected"
        @click="disconnectUser()"
        title="Se déconnecter"
      )
        v-icon mdi-logout
      v-btn(
        icon
        v-else
        @click="showModal()"
        title="Se connecter"
      )
        v-icon mdi-login

      locale-select

    v-navigation-drawer(
      v-model="drawer"
      :permanent="isOpened ? true : null"
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
          v-list-item( v-for="(link, b) in linksBackoffice" :key="'bo'+b"
            v-if="isConnected"
            link
            :to="link.href"
          )
            v-list-item-icon
              v-icon mdi-{{ link.icon }}
            v-list-item-title {{ link.text }}

          v-divider( v-show="isConnected" )

          v-list-item( v-for="(link, k) in linksMainMenu" :key="k"
            link
            :to="link.href"
          )
            v-list-item-icon
              v-icon mdi-{{ link.icon }}
            v-list-item-title {{ link.text }}

        //template( v-slot:modalHeader )
        //  div Header
        //template( v-slot:modalContent )
        //  div Content
        //template( v-slot:modalContent )
        //  div Footer
</template>

<script lang="ts">
import Vue from "vue";
import LocaleSelect from "../components/LocaleSelect.vue";
import { globalStore } from "@/main";

export default Vue.extend({
  name: "TheNavbar",
  components: {
    LocaleSelect,
  },
  data: () => ({
    user: {
      isLoggedIn: false,
    },
    linksMainMenu: [
      {
        text: "Accueil",
        href: "/",
        icon: "view-dashboard",
      },
      {
        text: "À propos",
        href: "/about",
        icon: "help-box",
      },
      {
        text: "FAQ",
        href: "/faq",
        icon: "school",
      },
      {
        text: "Mentions légales",
        href: "/legals",
        icon: "alert",
      },
    ],
    linksBackoffice: [
      {
        text: "Tableau de bord",
        href: "/dashboard",
        icon: "gauge",
      },
      {
        text: "Projets",
        href: "/projects",
        icon: "format-list-bulleted-type",
      },
    ],
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },

  computed: {
    isConnected() {
      return globalStore.user.isConnected;
    },
    isOpened() {
      if (globalStore.user.isConnected) {
        switch (this.$vuetify.breakpoint.name) {
          case "xs":
            return false;
          case "sm":
            return false;
          case "md":
            return false;
          default:
            return true;
        }
      } else {
        return false;
      }
    },
    userName() {
      return globalStore.user.firstName;
    },
  },

  methods: {
    disconnectUser() {
      globalStore.user.isConnected = false;
      if (this.$router.currentRoute.name != "login")
        this.$router.push("/login");
      return (this.drawer = false);
    },
    showModal() {
      globalStore.dialog.visible = true;
    },
  },
});
</script>
<style lang="scss" scoped></style>
