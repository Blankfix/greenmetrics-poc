<template lang="pug">
  v-container#footer(
    fluid
    tag="footer"
  )
    v-row(align="center")
      v-col(cols="12" md="3")
        div.col-inner
          v-img(
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            :src="require('../assets/img/logo-greenjection-light.svg')"
            transition="scale-transition"
            width="120"
          )
          address
            | 5 avenue de LaRue,
            br
            | 56123, Elliv
            br
            | FRANCE
          div
            label Tél.:
            a(
              :href="`tel:0605040302`"
            ) 0605040302
          div
            label Mail.:
            a(
              :href="`mailto:bonjour@greenjection.tech`"
            ) bonjour@greenjection.tech

      v-col(cols="12" md="3")
        div.col-inner
          ul
            li(v-for="(footerLink, i) in footerLinksLeft" :key="i")
              a(
                  :href="footerLink.href"
              ) {{ footerLink.text }}

      v-col(cols="12" md="3")
        div.col-inner
          ul
            li(v-for="(footerLink, k) in footerLinksRight" :key="k")
              a(
                :href="footerLink.href"
            ) {{ footerLink.text }}

      v-col(cols="12" md="3")
        div.col-inner
          v-btn.primary(
            large="large"
          )
            v-icon mdi-email
            span Contact

          div.socials
            a( v-for="(socialLink, l) in footerSocials" :key="l"
              :href="socialLink.href"
              target="_blank"
            )
              v-icon mdi-{{ socialLink.icon }}
</template>

<script lang="ts">
  export default {
    name: 'TheFooter',

    data: () => ({
      footerLinksLeft: [
        {
          text: 'Greenjection',
          href: '/',
        },
        {
          text: 'A propos',
          href: '/',
        },
        {
          text: 'FAQ',
          href: '/',
        },
        {
          text: 'Mentions légales',
          href: '/',
        },
      ],
      footerLinksRight: [
        {
          text: 'Ouvrir un compte',
          href: '/',
        },
        {
          text: 'Se connecter',
          href: '/',
        },
        {
          text: 'Proposer un projet',
          href: '/',
        },
        {
          text: 'Nous contacter',
          href: '/',
        },
      ],
      footerSocials: [
        {
          icon: 'facebook',
          href: '/',
        },
        {
          icon: 'twitter',
          href: '/',
        },
        {
          icon: 'instagram',
          href: '/',
        },
        {
          icon: 'linkedin',
          href: '/',
        },
      ],
    }),
  }
</script>

<style lang="scss" scoped>

  $primaryColor: #62cc75;
  $secondaryColor: #2e3842;

  #footer{
    background:$secondaryColor;
    color:#fff;
    font-weight:300;
    padding: 20px;

    address{
      font-style: normal;
      line-height: 20px;
      margin: 5px 3px;
    }
    address, label{
      font-size:13px;
      margin: 5px 5px;
    }

    ul{
      list-style: none;

      li{
        padding: 2px 0;
      }
      a{
        font-size: 17px;
        text-decoration: none;
        font-weight:400;
      }
    }
    .socials{
      a{
        color:transparent;
        display:inline-block;
        margin: 15px 6px 0 0;

        i{
          color:$primaryColor;
          font-size: 30px;

          &:hover{
            color:#fff;
          }
        }
      }
    }
  }

  @media all and (max-width: 960px){
    #footer{
      .col-inner{
        display:inline-block;
        margin:0 10%;
      }
    }
    ul{
      padding:0;
    }
  }

  @media all and (min-width: 961px){
    #footer{
      [class^='col-']{
        text-align: center;
      }
      .col-inner{
        text-align: left;
        display:inline-block;
      }
    }
  }

</style>