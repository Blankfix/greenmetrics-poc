<template lang="pug">
  v-container#registerlogin
    v-row#registerloginform(  ref="registerloginform"  v-if="!isConnected" )
      v-col( cols="12" md="8" offset-md="2" )
        h2 Veuillez vous connecter
        form-sign-in
        h2 Pas encore inscrit ?
        form-register
    v-row( v-else )
      v-col( cols="12" )
        h1.page-title Vous êtes connecté(e)
        br
        br
        v-row.align-center
          v-col.text-center( cols="12" md="8" offset-md="2")
                v-btn.green.theme--dark(
                  :to="'/'"
                ) Retour à l'accueil

          v-col.text-center( cols="12" md="8" offset-md="2")
                v-btn.secondary.theme--dark(
                  :to="'/dashboard'"
                ) Tableau de bord

        br
        br
</template>

<script lang="ts">
import Vue from "vue";
import FormSignIn from "@/components/Forms/FormSignIn.vue";
import FormRegister from "@/components/Forms/FormRegister.vue";
import { globalStore } from "@/main";

export default Vue.extend({
  name: "RegisterLogIn",

  computed: {
    isConnected() {
      return globalStore.user.isConnected;
    },
  },

  components: {
    FormSignIn,
    FormRegister,
  },
});
</script>
<style lang="scss" scoped></style>
