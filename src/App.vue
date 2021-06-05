<template lang="pug">
  v-app
    v-main
      the-navbar
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
