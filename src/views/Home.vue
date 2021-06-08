<template lang="pug">
  div#home
    v-container
      v-row
        v-col(cols="12")
          v-scale-transition( mode="in-out" appear )
            div#slogan
              h2.secondary--text(v-html="$t('homeSloganH2')")
              h3.secondary--text(v-html="$t('homeSloganH3')")
              div.text-right
                span.d-inline-block.text-center
                  v-btn.green.theme--dark {{$t('homeSloganBtn')}}
                  br
                  em {{$t('homeSloganEm')}}

      v-divider.half

      // Cards component section.
      // Tested as a folder structure
      // Child single vue requires "card-icon" prop and is filled by a "cardContent" slot
      card-wrapper( desktop-cols=4 )


      v-row.home-pleas(align="center")
        v-col.text-center(cols="12" md="6")
          div.home-plea
            h4 Quels types d'initiatives ?
            ul
              li Mise en place de solutions de recyclage
              li Implantation de zones "poumons verts"
              li Construction de structures de production d'énergie verte
              li Plans d'action de dépollution directe
              li Financement de R&D dans les technologies vertes
        v-col.home-plea-img.text-center(cols="12" md="6")
          v-img(
            src="https://picsum.photos/1024/512?image=321"
            srcset="https://picsum.photos/1024/512?image=321 1024w, https://picsum.photos/780/390?image=321 780w, https://picsum.photos/500/250?image=321 500w"
            sizes="(min-width: 1024px) 1024px, (min-width: 780px) 500px"
            alt="Quels types d'initiatives ?"
          )

        v-row.home-pleas(align="center")
          v-col.home-plea-img.text-center(cols="12" md="6")
            v-img(
              src="../assets/img/img-sample.png"
            )
          v-col.text-center(cols="12" md="6")
            div.home-plea
              h4 Pourquoi investir des fonds dans des éco-projets ?
              ul
                li Soigner l’image de l’entreprise
                li Se différencier sur le marché
                li Limiter le gaspillage, faire des économies
                li Des gains de productivité

    form-register-and-sign-in

    div#cta
      v-container
        v-row(align="center")
          v-col(cols="12" md="10")
            div.cta
              div.cta-icon
                v-icon.secon mdi-help-rhombus
              div.cta-text
                h4
                  span
                    | Porteur d'un projet,
                    br
                    | vous cherchez
                    br
                    | à lever des fonds ?
                v-btn.secondary
                  | Proposer une
                  br
                  | initiative écologique
    v-container(fluid=true)#testimony
      v-row( align="center" )
        v-col( col="12" md="6" )
          div.text-center
            div.bg-half
              v-icon.bg-icon mdi-emoticon-happy-outline
            div.overlay-text
              v-icon mdi-format-quote-open
              h4
                | Retour d'expérience :
                br
                | ils témoignent

        v-col( col="12" md="6" )
          carousel-testimony

    v-container#reinsurance(fluid=true)
      v-row
        v-col(cols
          v-for="(reinsurance, k) in reinsurances"
          :key="k"
        )
          v-img(
            :src="reinsurance.src"
            width="170"
          )
</template>

<script lang="ts">
import FormRegisterAndSignIn from '../components/Forms/FormRegisterAndSignIn.vue'
import CardWrapper from '../components/Card/CardWrapper'
import CarouselTestimony from "../components/Carousel/CarouselTestimony.vue";

  export default {
    name: 'Home',

    data () {
      return {
        reinsurances : [
          {
            src: require('../assets/img/label1.png')
          },
          {
            src: require('../assets/img/label2.png')
          },
          {
            src: require('../assets/img/label3.png')
          },
          {
            src: require('../assets/img/label4.png')
          },
          {
            src: require('../assets/img/label5.png')
          },
        ]
      }
    },

    components: {
      CarouselTestimony,
      FormRegisterAndSignIn,
      CardWrapper
    },
  }
</script>
<style lang="scss" scoped>
  $secondaryColor: #2e3842;

  #slogan{
    padding-top: 80px;
    padding-bottom: 60px;
    display:inline-block;

    h2{
      font-size: 50px;
      font-weight: 300;
    }

    h3{
      font-weight: 300;
      font-size: 35px;
      line-height: 1.2;
      margin-bottom: 20px;
    }
    .v-btn{
      padding: 25px;
      font-size:17px;
      font-weight:300;
    }
    em{
      font-style: normal;
      font-size:12px;
      opacity:0.8;
    }
  }

  .home-pleas{
    padding:50px 0;
  }
  .home-plea{
    display: inline-block;
    text-align: left;
    font-size: 125%;
  }
  #cta{
    position:relative;
    margin: 50px 0;

    &:before{
      content:"";
      display:block;
      position:absolute;
      left:0;
      right:50%;
      top:0;
      bottom:0;
      z-index: 1;
      background:#f1f1f1;
    }
    [class^='col-']{
      padding-top: 0;
      padding-bottom: 0;
    }
  }
  .cta{
    text-align: right;
    background:#f1f1f1;
    padding: 40px;
    position:relative;
    z-index: 2;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .cta-icon{
      padding: 0 40px;

      i{
        font-size: 200px;
        color:$secondaryColor;
      }
    }
    .cta-text{

      h4{
        color:$secondaryColor;
        text-align: left;
        font-size: 160%;
        line-height: 1.25;
        font-weight: 400;
        margin-bottom: 20px;
        text-align: center;

        span{
          display: inline-block;
          text-align: left;
        }
      }
      .v-btn{
        padding: 25px;
        font-size: 17px;
        font-weight: 300;
      }
    }
  }

  #testimony{
    [class^='col-']{
      position:relative;
    }

    .bg-icon{
      font-size: 350px;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      opacity: 0.25;
      z-index: 1;
    }
    .bg-half:after{
      content: "";
      display: block;
      background: #fff;
      position: absolute;
      z-index: 2;
      left: 50%;
      right: 0;
      top: 0;
      bottom: 0;
      transition: none;
      opacity: 1;
    }
    .overlay-text{
      position: absolute;
      top: 0;
      bottom: 0;
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      text-align: right;
      margin-left: auto;
      right: 5px;
      z-index: 3;
      font-size: 30px;
      line-height: 1.2;
      color:$secondaryColor;
      margin-top: -40px;

      i{
        color:$secondaryColor;
        font-size: 80px;
        line-height: 0.5;
        position:relative;
        left:12px;
      }
    }
  }

  #reinsurance{
    position:relative;
    background:#f1f1f1;
    padding: 50px 20px;
    margin: 50px 0;
  }

  @media all and (max-width: 960px){
    .home-plea-img{
      order:1;
    }
    .home-pleas > div:not(.home-plea-img){
      order:2;
    }
  }
  @media all and (max-width: 764px){
    #testimony{
      .overlay-text{
        width: 100%;
        text-align: center;
        align-items: center;
      }
    }
  }
</style>

<i18n>
{
  "en": {
    "homeSloganH2": "Spot your flaws, <span class='green--text'>turn it to a strength</span>",
    "homeSloganH3": "Balance your carbone footprint <br> by financing ecological projects",
    "homeSloganBtn": "Create your account",
    "homeSloganEm": "get your quote and free documentation"
  },
  "fr": {
    "homeSloganH2": "Repérez vos failles, <span class='green--text'>faites-en une force</span>",
    "homeSloganH3": "Compensez votre empreinte carbone <br> et participant à des initiatives écologiques",
    "homeSloganBtn": "Ouvrez votre compte",
    "homeSloganEm": "obtenez votre devis et une documentation gratuite"
  }
}
</i18n>