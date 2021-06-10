<template lang="pug">
  div#dashboard
    v-container(fluid)
      v-row
        v-col(cols="12" md="4")
          v-alert(
            dense
            type="info"
            close-text="Fermer"
            dismissible
          )
            strong Message système :
            | &nbsp;
            span Vous avez de nouveaux projets
          v-card
            v-sheet.v-sheet--offset.mx-auto(
              color="cyan"
              elevation="12"
              max-width="calc(100% - 32px)"
            )
              v-sparkline(
                :labels="labels_block1"
                :value="value_block1"
                color="white"
                line-width="2"
                padding="16"
              )

            v-card-text
              div Émission de GES
              div  Plan d'action "Le Charbonneur, charbonne moins de carbone"
              v-divider.my-2
              v-icon.mr-2.small mdi-clock
              span.text-caption.grey--text.font-weight-light Année en cours

        v-col(cols="12" md="5" offset-md="1")
          v-alert(
            dense
            type="info"
            close-text="Fermer"
            dismissible
          )
            strong Message système :
            | &nbsp;
            span Vous avez de nouveaux projets
          v-card
            v-sheet.v-sheet--offset.mx-auto(
              color="cyan"
              elevation="12"
              max-width="calc(100% - 32px)"
            )
              v-sparkline(
                :labels="labels_block2"
                :value="value_block2"
                color="white"
                line-width="2"
                padding="16"
              )

            v-card-text
              div Émission de GES
              div  Projection pour "Le Charbonneur, charbonne moins de carbone"
              v-divider.my-2
              v-icon.mr-2.small mdi-clock
              span.text-caption.grey--text.font-weight-light Année en cours
</template>

<script lang="ts">
import Vue from "vue";
import {globalStore} from "@/main";

export default Vue.extend({
  name: "Dashboard",

  data: () => ({
    labels_block1: [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre',
    ],
    value_block1: [
      200,
      675,
      410,
      390,
      310,
      460,
      250,
      240,
    ],
    labels_block2: [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre',
    ],
    value_block2: [
      200,
      675,
      410,
      390,
      310,
      460,
      250,
      240,
      210,
      180,
      140,
      90,
    ],
  }),
  beforeCreate() {
    if( !globalStore.user.isConnected ){
      this.$router.push('/login');
    }
  },
});
</script>
<style lang="scss" scoped></style>
