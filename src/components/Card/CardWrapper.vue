<template lang="pug">
  // card-single child requires card-icon prop and a carcContent slot

  v-scale-transition( mode="in-out" appear )
    v-row.std-cards

      card-single( card-icon="chart-bar" )
        template( v-slot:cardContent )
          h4 {{$t('card1Title')}}
          p {{$t('card1Content1')}}
          p {{$t('card1Content2')}}

      card-single( card-icon="scale-balance" )
        template( v-slot:cardContent )
          h4 {{$t('card2Title')}}
          p {{$t('card2Content1')}}
          p {{$t('card2Content2')}}

      card-single( card-icon="check-decagram" )
        template( v-slot:cardContent )
          h4 {{$t('card3Title')}}
          p {{$t('card3Content1')}}
          p {{$t('card3Content2')}}





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

<i18n>
{
  "en": {
    "card1Title": "GHG balance and ecological taxation",
    "card1Content1": "Reporting and analysis of your situation in relation to your sector of activity.",
    "card1Content2": "Audit and proposal of action plans to reduce your carbon footprint.",

    "card2Title": "Offset your CO² emissions",
    "card2Content1": "Your industry can be polluting by its nature, and you risk penalties and taxes.",
    "card2Content2": "Choose to act responsibly, anticipate, and support green projects.",

    "card3Title": "Labeling and CSR",
    "card3Content1": "Bcorp, LUCIE, CSR Committed, these labels shine in France and internationally as pledges of trust and commitment.",
    "card3Content2": "Your company's image: your best business card"
  },
  "fr": {
    "card1Title": "Bilan GES et fiscalité écologique",
    "card1Content1": "Reporting et analyse de votre situation par rapport à votre secteur d'activité.",
    "card1Content2": "Audit et proposition de plans d'action pour réduire votre empreinte carbone.",

    "card2Title": "Compensez vos émissions CO²",
    "card2Content1": "Votre secteur peut être polluant de par sa nature, et vous risquez des pénalités et taxes.",
    "card2Content2": "Choisissez d'agir de manière responsable, anticipez, et soutenez des projets verts.",

    "card3Title": "Labellisation et RSE",
    "card3Content1": "Bcorp, LUCIE, Engagé RSE, ces labels rayonnent en France et à l'international comme des gages de confiance et d'engagement.",
    "card3Content2": "L'image de votre entreprise : votre  meilleure carte de visite"
  }
}
</i18n>