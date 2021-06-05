<template lang="pug">
  v-container#footer(
    fluid
  )
    v-row.text-center
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