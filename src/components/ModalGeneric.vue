<template lang="pug">
  div.text-center
    v-dialog(
        v-model="callModal"
        width="660"
    )
      v-card
        v-card-title Se connecter
          v-btn.text-right(
            icon
            @click="closeModal()"
          )
            v-icon mdi-close

        v-card-text
          form-sign-in

        v-divider

        //v-card-actions
        //  v-spacer

</template>
<script lang="ts">
import Vue from "vue";
import FormSignIn from "@/components/Forms/FormSignIn.vue";
export default Vue.extend({
  name: "ModalGeneric",
  components: { FormSignIn },
  data() {
    return {
      modal: this.$store.getters.modal._isVisible,
    };
  },
  props: {
    dialog: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    closeModal() {
      this.$store.commit("modalClose");
    },
  },
  computed: {
    callModal: {
      get() {
        return this.$store.getters.modal_isVisible;
      },
      set() {
        this.$store.modal.commit("modalOpen");
      },
    },
  },
});
</script>
