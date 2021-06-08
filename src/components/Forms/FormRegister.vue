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
            v-model="compagny"
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
export default {
  name: 'FormRegister',
  data: () => ({
    valid: true,

    compagny: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    verify: "",
    loginPassword: "",
    loginEmail: "",
    loginEmailRules: [
      v => !!v || "Ce champ est obligatoire",
      v => /.+@.+\..+/.test(v) || "L'email doit être valide"
    ],
    emailRules: [
      v => !!v || "Ce champ est obligatoire",
      v => /.+@.+\..+/.test(v) || "L'email doit être valide"
    ],

    show1: false,
    rules: {
      required: value => !!value || "Ce champ est obligatoire",
      min: v => (v && v.length >= 8) || "8 caractères minimum"
    }
  }),
  methods: {
    validate() {
      if (this.$refs.loginForm.validate()) {
        console.log();
      }
    }
  },
  computed: {
    passwordMatch() {
      return () => this.password === this.verify || "Le mot de passe doit correspondre";
    }
  },
}
</script>
<style lang="scss" scoped>

</style>