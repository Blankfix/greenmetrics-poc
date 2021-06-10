<template lang="pug">
  div#catalog
    v-container
      v-row
        v-col(cols="12")
          v-alert(
            dense
            type="info"
            close-text="Fermer"
            dismissible
          )
            strong Message système :
            | &nbsp
            span Vous avez de nouveaux projets
          v-card-title
            v-text-field(
              v-model="search"
              append-icon="mdi-magnify"
              label="Filtrer (Type, intitulé, ou lieu...)"
              single-line
              hide-details
            )
          v-data-table(
          :headers="headers"
          :items="projects"
          :items-per-page="5"
          :search="search"
          class="elevation-1"
          )
</template>

<script lang="ts">
import Vue from "vue";
import {globalStore} from "@/main";
import JSONprojects from "@/samples/projects.json";

export default Vue.extend({
  name: "Projects",
  data() {
    return{
      search: '',
      projects: JSONprojects,
      headers: [
        { text: "Type", value: "catName" },
        { text: "Intitulé", value: "title" },
        { text: "Acteurs", value: "actors", filterable: false},
        { text: "Localité", value: "place" },
        { text: "Description", value: "description", filterable: false },
        { text: "Objectif", value: "goal", filterable: false },
        { text: "Récolté", value: "current", filterable: false },
        { text: "Restant", value: "remaining, filterable: false" },
        { text: "Participants", value: "candidates", filterable: false },
        { text: "Site web", value: "website", filterable: false }
      ],
    }
  },
  beforeCreate() {
    if( !globalStore.user.isConnected ){
      this.$router.push('/login');
    }
  },
});
</script>
<style lang="scss" scoped></style>
