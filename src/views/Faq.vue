<template lang="pug">
  v-container
    h1.page-title F.A.Q
    v-row.align-center
      v-col( cols="12" md="8" offset-md="2")
        v-main
          v-alert(
            border="top"
            colored-border
            type="info"
            elevation="2"
          ) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam luctus placerat metus, sit amet ullamcorper turpis. Praesent venenatis, ipsum sit amet finibus finibus, metus sem efficitur nibh, non consequat quam orci eget elit. Morbi lobortis scelerisque gravida. Sed mattis odio ac pulvinar lacinia.

          v-banner N'hésitez pas à nous contacter directement si vous ne trouvez pas la réponse à votre question.

          v-expansion-panels
            v-expansion-panel
              v-expansion-panel-header Quels types d'initiatives ?
              v-expansion-panel-content
                ul
                  li Mise en place de solutions de recyclage
                  li Implentation de zones "poumons verts"
                  li Construction de structures de production d'énergie verte
                  li Plans d'action de dépollution directe
                  li Financement de R&D dans les techologies vertes
            v-expansion-panel
              v-expansion-panel-header Pourquoi investir des fonds dans des éco-projets ?
              v-expansion-panel-content
                ul
                  li Soigner l’image de l’entreprise
                  li Se différencier sur le marché
                  li Limiter le gaspillage, faire des économies
                  li Des gains de productivité
            v-expansion-panel
              v-expansion-panel-header Porteur d'un projet, vous cherchez à lever des fonds ?
              v-expansion-panel-content
                v-btn.secondary
                  | Proposez une
                  br
                  | initiative écologique

</template>
