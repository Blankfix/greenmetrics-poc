<template lang="pug">
  // card-single child requires card-icon prop and a carcContent slot

  v-scale-transition( mode="in-out" appear )
    v-row.std-cards

      card-single( card-icon="chart-bar" )
        template( v-slot:cardContent )
          h4 Bilan GES et fiscalité écologique
          p Reporting et analyse de votre situation par rapport à votre secteur d'activité.
          p Audit et proposition de plans d'action pour réduire votre empreinte carbone.

      card-single( card-icon="scale-balance" )
        template( v-slot:cardContent )
          h4 Compensez vos émissions CO²
          p Votre secteur peut être polluant de par sa nature, et vous risquez des pénalités et taxes.
          p Choisissez d'agir de manière responsable, anticipez, et soutenez des projets verts.

      card-single( card-icon="check-decagram" )
        template( v-slot:cardContent )
          h4 Labellisation et RSE
          p Bcorp, LUCIE, Engagé RSE, ces labels rayonnent en France et à l'international comme des gages de confiance et d'engagement.
          p L'image de votre entreprise : votre  meilleure carte de visite





</template>

<script lang="ts">
import CardSingle from  './CardSingle'

export default {
  name: 'CardWrapper',

  props: {
    desktopCols : {
      type: [Number, String],
      default () {
        return this.cardIcon;
      }},
  },

  components: {
    CardSingle,
  },
}
</script>

<style lang="scss" scoped>
  .std-cards{
    padding: 60px 0 50px;
  }
</style>
