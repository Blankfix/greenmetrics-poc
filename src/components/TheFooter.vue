<template lang="pug">
  v-container
    v-row.text-center
      v-col(cols="12")
        v-img(
            :src="require('../assets/img/logo-greenjection.svg')"
            class="my-3"
            contain
            height="200"
        )

      v-col.mb-4
        h1.display-2.font-weight-bold.mb-3 Greenjection

        p.subheading.font-weight-regular For help and collaboration with other Vuetify developers,
          | please join our online
          a(
              href="https://community.vuetifyjs.com"
              target="_blank"
          ) Discord Community

      v-col.mb-5(cols="12")
        h2.headline.font-weight-bold.mb-3  What's next?

        v-row(justify="center")
          a(v-for="(footerLink, i) in footerLinks" :key="i"
              :href="footerLink.href"
              class="subheading mx-3"
              target="_blank"
          ) {{ footerLink.text }}
</template>

<script>
export default {
  name: 'TheFooter',

  data: () => ({
    footerLinks: [
      {
        text: 'vuetify-loader',
        href: 'https://github.com/vuetifyjs/vuetify-loader',
      },
      {
        text: 'github',
        href: 'https://github.com/vuetifyjs/vuetify',
      },
      {
        text: 'awesome-vuetify',
        href: 'https://github.com/vuetifyjs/awesome-vuetify',
      },
    ],
  }),
}
</script>
<style lang="scss" scoped>

</style>