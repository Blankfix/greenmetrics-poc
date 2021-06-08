<template lang="pug">
  v-card.carousel-testimony(
    elevation="24"
    max-width="444"
    class="mx-auto"
  )
    v-carousel(
      :continuous="false"
      :cycle="cycle"
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      height="300"
    )
      v-carousel-item(
        v-for="(slide, i) in slides"
        :key="i"
      )
        v-sheet(
          :color="colors[i]"
          height="100%"
          tile
        )
          v-list
            v-list-item
              v-list-item-avatar( size="200")
                v-img( :src="slide.img" )
              v-list-item-group
                v-list-item-title {{ slide.name }}
                v-list-item-subtitle {{ slide.job }}
                v-list-item-content {{ slide.quote }}

</template>

<script lang="ts">

export default {
  name: 'CarouselTestimony',

  data () {
    return {
      colors: [
        'green',
        'secondary',
        'yellow darken-4',
        'red lighten-2',
        'orange darken-1',
      ],
      cycle: false,
      slides: [
          {
            name: `Alain TÉRIEUR`,
            job: `Frère d'Alex`,
            img: `https://thispersondoesnotexist.com/image`,
            quote: `Nous avons pu nous apercevoir que déverser nos déchets dans les rivières n'était pas une solution pérenne.`
          },
          {
            name: `Camille ONNETTE`,
            job: `Employée chez Persona`,
            img: `https://thispersondoesnotexist.com/image`,
            quote: `Je n'existe pas vraiment, et j'en suis triste, mais ça va car ma tristesse n'existe pas, elle non plus.`
          },
          {
            name: `Adam TROIJOURS`,
            job: `Président d'une présipauté`,
            img: `https://thispersondoesnotexist.com/image`,
            quote: `Je suis quelqu'un d'important...`
          },
          {
            name: `Jean-Philippe ERBIEN`,
            job: `PDG de Redoutables`,
            img: `https://thispersondoesnotexist.com/image`,
            quote: `Je suis bien plus important que l'autre gugus !`
          }
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
  $secondaryColor: #2e3842;

  .carousel-testimony{
    .v-list-item__content{
      font-weight: 300;
      font-size: 15px;
      color: $secondaryColor;
      line-height: 1.3;
    }
  }
</style>