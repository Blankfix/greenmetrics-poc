<template lang="pug">
  div#dashboard
    v-container(fluid)
      v-row
        v-col(cols="12")
          v-alert(
            dense
            type="info"
            close-text="Fermer"
            dismissible
          )
            strong Message système :
            | &nbsp;
            span Vous avez de nouveaux projets

        v-col(cols="12" md="4")
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
          h3 Nouveaux projets non-vus &nbsp;
            small (* par vos thématiques préférées)
          br
          v-data-table(
            :headers="headers"
            :items="projects"
            hide-default-header
            hide-default-footer
            class="elevation-1"
            :items-per-page="3"
          )
      v-row
        v-col(cols="12" md="4")
          v-card
            v-card-text
              div Activité polluante
              v-divider.my-2
            div
              v-sheet.v-sheet--offset.mx-auto(
                color="cyan"
                elevation="12"
                max-width="calc(100% - 32px)"
              )
                v-sparkline(
                  :labels="labels_block3"
                  :value="value_block3"
                  color="white"
                  line-width="2"
                  padding="16"
                )
            v-card-text
              v-icon.mr-2.small mdi-clock
              span.text-caption.grey--text.font-weight-light Année en cours
        v-col(cols="12" md="4")
          v-card
            v-card-text
              div Réduction de CO²
              v-divider.my-2
            div
              v-sheet.v-sheet--offset.mx-auto(
                color="cyan"
                elevation="12"
                max-width="calc(100% - 32px)"
              )
                v-sparkline(
                  :labels="labels_block3"
                  :value="value_block4"
                  color="white"
                  line-width="2"
                  padding="16"
                )
            v-card-text
              v-icon.mr-2.small mdi-clock
              span.text-caption.grey--text.font-weight-light Année en cours
        v-col(cols="12" md="4")
          v-card
            v-card-text
              div Estimation du budget compensatoire
              v-divider.my-2
            div
              v-sheet.v-sheet--offset.mx-auto(
                color="cyan"
                elevation="12"
                max-width="calc(100% - 32px)"
              )
                v-sparkline(
                  :labels="labels_block3"
                  :value="value_block3"
                  color="white"
                  line-width="2"
                  padding="16"
                )
            v-card-text
              v-icon.mr-2.small mdi-clock
              span.text-caption.grey--text.font-weight-light Année en cours
</template>

<script lang="ts">
import Vue from "vue";
import {globalStore} from "@/main";
import JSONprojects from "@/samples/projects.json";

export default Vue.extend({
  name: "Dashboard",

  data: () => ({
    projects: JSONprojects,
    headers: [
      { text: "Type", value: "catName" },
      { text: "Intitulé", value: "title" },
      { text: "Localité", value: "place" },
    ],
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
    labels_block3: [
      'Jan',
      'Fév',
      'Mar',
      'Avr',
      'Mai',
      'Juin',
      'Juil',
      'Aou',
      'Sept',
      'Oct',
      'Nov',
      'Déc',
    ],
    value_block3: [
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
    value_block4: [
      90,
      140,
      180,
      210,
      240,
      250,
      200,
      310,
      390,
      410,
      675,
      460,
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
