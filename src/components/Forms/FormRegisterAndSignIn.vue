<template lang="pug">
  v-container
    v-row(justify="center")
      v-col(cols="12" md="9")
        v-card
          v-tabs(
            v-model="tab"
            show-arrows
            background-color="secondary"
            icons-and-text
            dark
            grow
          )
            v-tab(v-for="(i, k) in tabs" :key="k")
              v-icon(large) {{ i.icon }}
              div.caption.py-1 {{ i.name }}


            v-tab-item
              v-card.px-4
                form-register

            v-tab-item
              v-card.px-4
                form-sign-in

</template>

<script lang="ts">
import Vue from "vue";
import FormSignIn from "./FormSignIn.vue";
import FormRegister from "./FormRegister.vue";
export default Vue.extend({
  name: "FormRegisterAndSignIn",
  components: { FormRegister, FormSignIn },
  data: () => ({
    dialog: true,
    tab: 0,
    tabs: [
      { name: "S'inscrire", icon: "mdi-account-outline" },
      { name: "Se connecter", icon: "mdi-account" },
    ],
  }),
});
</script>
<style lang="scss" scoped></style>
