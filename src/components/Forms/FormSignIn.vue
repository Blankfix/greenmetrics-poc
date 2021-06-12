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
            type="password"
            autocomplete="new-password"
            name="input-10-1"
            label="Mot de passe"
          )

        v-col(cols="12")
          v-card(
            v-show="isLoading()"
            color="primary"
            dark)
            v-card-text Connexion en cours...
              v-progress-linear(
                indeterminate
                color="white"
                class="mb-0"
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
import { globalStore } from "@/main";
import json from "@/samples/users.json";

export default Vue.extend({
  name: "FormSignIn",
  data: () => ({
    valid: true,
    users: json,
    loading: false,

    loginEmail: "", //cyril@lecharbonneur.com
    loginPassword: "", //bonjour5555
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
      if (
        (this.$refs.loginForm as Vue & { validate: () => boolean }).validate()
      ) {
        for (const u in this.users) {
          if (
            this.users[u].email == this.loginEmail &&
            this.users[u].password == btoa(this.loginPassword)
          ) {
            globalStore.user.company = this.users[u].company;
            globalStore.user.firstName = this.users[u].firstName;
            globalStore.user.lastName = this.users[u].lastName;
            globalStore.user.email = this.users[u].email;
            globalStore.user.password = this.users[u].password;
            globalStore.user.isConnected = true;

            setTimeout(() => {
              this.toggleLoading();
            }, 150);

            setTimeout(() => {
              this.toggleLoading();
              globalStore.dialog.visible = false;
            }, 850);
          }
        }
      }
    },
    toggleLoading() {
      this.loading = !this.loading;
    },
  },
  computed: {
    isLoading() {
      return () => this.loading;
    },
  },
});
</script>
<style lang="scss" scoped></style>
