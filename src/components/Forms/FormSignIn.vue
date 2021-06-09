<template lang="pug">

  v-card-text
    v-form(
      ref="loginForm"
      v-model="valid"
      lazy-validation
    )
      v-row
        v-col(cols="12")
          v-text-field(
            v-model="loginEmail"
            :rules="loginEmailRules"
            label="Email"
            autocomplete="new-password"
            required
          )

        v-col(cols="12")
          v-text-field(
            v-model="loginPassword"
            :rules="[rules.required]"
            :type="password"
            autocomplete="new-password"
            name="input-10-1"
            label="Mot de passe"
          )

        v-col.d-flex(cols="12" sm="6" xsm="12")

        v-spacer

        v-col.d-flex(cols="12" sm="3" xsm="12" align-end)
          v-btn(
            x-large
            block
            :disabled="!valid"
            color="success"
            @click="validate"
          ) Connexion

</template>

<script lang="ts">
import Vue from "vue";
import {globalStore} from "@/main";
export default Vue.extend({
  name: "FormSignIn",
  data: () => ({
    valid: true,

    loginEmail: "",
    loginPassword: "",
    password: "",
    loginEmailRules: [
      (v: string) => !!v || "Ce champ est obligatoire",
      (v: string) => /.+@.+\..+/.test(v) || "L'email doit être valide",
    ],

    rules: {
      required: (value: string) => !!value || "Ce champ est obligatoire",
      min: (v: string) => (v && v.length >= 8) || "8 caractères minimum",
    },
  }),
  methods: {
    validate() {
      if ((this.$refs.loginForm as Vue & { validate: () => boolean }).validate()) {
        console.log(globalStore.user);
      }
    },
  },
  // computed: {
  //   passwordMatch() {
  //     return () =>
  //       this.loginPassword === this.verify || "Le mot de passe doit correspondre";
  //   },
  //},
});
</script>
<style lang="scss" scoped></style>
