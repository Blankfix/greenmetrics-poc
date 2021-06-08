<template lang="pug">
  v-app
    the-navbar
    v-main
      router-view
      the-footer
</template>

<script>
import TheNavbar from '@/components/TheNavbar';
import TheFooter from "@/components/TheFooter";

export default {
  name: 'App',

  components: {
    TheFooter,
    TheNavbar,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
  @import "./assets/styles/app.scss";
</style>