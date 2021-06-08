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
            :append-icon="show1?'eye':'eye-off'"
            :rules="[rules.required]"
            :type="show1 ? 'text' : 'password'"
            autocomplete="new-password"
            name="input-10-1"
            label="Mot de passe"
            @click:append="show1 = !show1"
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
export default {
  name: 'FormSignIn',
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