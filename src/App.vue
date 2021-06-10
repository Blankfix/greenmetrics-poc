<template lang="pug">
  v-app
    the-navbar
    v-main
      router-view
      the-footer
    modal-generic( ref="modal" :dialog="callModal")
</template>

<script>
import Vue from "vue";
import TheNavbar from "@/components/TheNavbar";
import TheFooter from "@/components/TheFooter";
import ModalGeneric from "@/components/ModalGeneric";

export default Vue.extend({
  name: "App",

  data: () => ({
    test: false,
  }),
  components: {
    TheFooter,
    TheNavbar,
    ModalGeneric,
  },
  props: {
    callModal: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
});
</script>
<style lang="scss">
@import "./assets/styles/app.scss";
</style>
