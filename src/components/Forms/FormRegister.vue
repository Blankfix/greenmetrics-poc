<template lang="pug">

  v-card-text
    v-form(
      ref="registerForm"
      v-model="valid"
      lazy-validation
    )
      v-row
        v-col(cols="12" sm="12" md="12")
          v-text-field(
            v-model="company"
            :rules="[rules.required]"
            label="Société"
            maxlength="30"
            required
          )
        v-col(cols="12" sm="6" md="6")
          v-text-field(
            v-model="firstName"
            :rules="[rules.required]"
            label="Prénom"
            maxlength="20"
            required
          )

        v-col(cols="12" sm="6" md="6")
          v-text-field(
            v-model="lastName"
            :rules="[rules.required]"
            label="Nom"
            maxlength="30"
            required
          )

        v-col(cols="12")
          v-text-field(
            v-model="email"
            :rules="emailRules"
            label="Email"
            autocomplete="new-password"
            required
          )

        v-col(cols="12")
          v-text-field(
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            autocomplete="new-password"
            name="input-10-1"
            label="Mot de passe"
            hint="8 carctères minimum"
            counter
            @click:append="show1 = !show1"
          )

        v-col(cols="12")
          v-text-field(
            block v-model="verify"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, passwordMatch]"
            :type="show1 ? 'text' : 'password'"
            autocomplete="new-password"
            name="input-10-1"
            label="Confirmez le mot de passe"
            counter
            @click:append="show1 = !show1"
          )

        v-col(cols="12")
          v-card(
            v-show="isLoading()"
            color="primary"
            dark)
            v-card-text Opération en cours...
              v-progress-linear(
                indeterminate
                color="white"
                class="mb-0"
              )

        v-spacer

        v-col.d-flex.ml-auto(cols="12" sm="3" xsm="12")
          v-btn(
            x-large
            block
            :disabled="!valid"
            color="success"
            @click="validate"
          ) Valider

</template>

<script lang="ts">
import Vue from "vue";
import { User } from "@/classes/User";
import { globalStore } from "@/main";
export default Vue.extend({
  name: "FormRegister",
  data: () => ({
    valid: true,
    loading: false,

    //company: "", //"Le Charbonneur",
    company: "Le Charbonneur",
    //firstName: "", //"Cyril",
    firstName: "Cyril",
    //lastName: "", //"DECONINCK",
    lastName: "DECONINCK",
    //email: "", //"cyril@lecharbonneur.com",
    email: "cyril@lecharbonneur.com",
    //password: "", //"bonjour0000",
    password: "bonjour0000",
    //verify: "", //"bonjour0000",
    verify: "bonjour0000",

    emailRules: [
      (v: string) => !!v || "Ce champ est obligatoire",
      (v: string) => /.+@.+\..+/.test(v) || "L'email doit être valide",
    ],

    show1: false,
    rules: {
      required: (value: string) => !!value || "Ce champ est obligatoire",
      min: (v: string) => (v && v.length >= 8) || "8 caractères minimum",
    },
  }),
  methods: {
    validate() {
      if (
        (
          this.$refs.registerForm as Vue & { validate: () => boolean }
        ).validate()
      ) {
        const userRegisterDatas = {
          company: this.company,
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: btoa(this.password),
        };
        console.log(userRegisterDatas);

        this.$store.commit("update", userRegisterDatas);
        this.$store.commit("connect");

        // globalStore.user.company = this.company;
        // globalStore.user.firstName = this.firstName;
        // globalStore.user.lastName = this.lastName;
        // globalStore.user.email = this.email;
        // globalStore.user.password = btoa(this.password); // just for fun btoa & atob base64 encryption

        setTimeout(() => {
          this.toggleLoading();
        }, 150);

        setTimeout(() => {
          this.toggleLoading();
          globalStore.user.isConnected = true;
        }, 1350);
      }
    },
    toggleLoading() {
      this.loading = !this.loading;
    },
  },
  computed: {
    passwordMatch() {
      return () =>
        this.password === this.verify || "Le mot de passe doit correspondre";
    },
    isLoading() {
      return () => this.loading;
    },
    // registerForm(): Vue & { validate: () => boolean } {
    //   return this.$refs.registerForm as Vue & { validate: () => boolean }
    // }
  },
});
</script>
<style lang="scss" scoped></style>
