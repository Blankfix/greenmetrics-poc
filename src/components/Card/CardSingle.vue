<template lang="pug">

      v-col(cols="12" :md="parseInt($parent.desktopCols)")
        div.text-center
          v-icon mdi-{{cardIcon}}
        slot( name="cardContent" )

</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "CardSingle",

  props: {
    cardIcon: {
      type: String,
      required: true,
      default(): string {
        return this.cardIcon;
      },
    },
  },
});
</script>

<style lang="scss" scoped>
$secondaryColor: #2e3842;

.std-cards {
  > div {
    padding: 0 20px;
  }

  h4,
  p {
    opacity: 0.5;
  }
  h4 {
    font-size: 24px;
  }
  .v-icon.v-icon {
    color: var(--v-secondary-base);
    color: $secondaryColor;
    font-size: 80px;
    padding-bottom: 20px;
  }
}
</style>
