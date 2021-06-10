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
import { globalStore } from "@/main.ts";
import FormSignIn from "@/components/Forms/FormSignIn.vue";
export default Vue.extend({
  name: "ModalGeneric",
  components: {FormSignIn},
  data() {
    return {
      modal: globalStore.dialog.visible,
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
      globalStore.dialog.visible = false;
      globalStore.dialog.header = "";
      console.log( globalStore.dialog );
    },
  },
  computed: {
    callModal: {
      get() {
        return globalStore.dialog.visible;
      },
      set(value: boolean) {
        globalStore.dialog.visible = value;
      },
    },
    callHeader: {
      get() {
        return globalStore.dialog.header;
      },
      set(value: string) {
        globalStore.dialog.header = value;
      },
    },
    callContent: {
      get() {
        return globalStore.dialog.content;
      },
      set(value: string) {
        globalStore.dialog.content = value;
      },
    },
    callFooter: {
      get() {
        return globalStore.dialog.footer;
      },
      set(value: string) {
        globalStore.dialog.footer = value;
      },
    },
  },
});
</script>
