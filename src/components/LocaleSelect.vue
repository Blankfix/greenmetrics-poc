<template lang="pug">
  div.locale-select
    v-select(
      label="fr"
      v-model="$i18n.locale"
      single-line
      bottom
      :items="langs"
      @input="switchLocale"
    )
</template>

<script>
import Vue from "vue";
import $i18n from "@/i18n";

export default Vue.extend({
  name: "LocaleSelect",
  data() {
    return {
      currentLang: "fr",
      langs: $i18n.availableLocales,
    };
  },
  methods: {
    switchLocale(value) {
      console.log(value);
    },
  },
});
</script>

<style lang="scss" scoped>
.locale-select {
  max-width: 50px;
  margin: 0 0 0 15px;
  position: relative;
  top: 6px;
}
</style>
