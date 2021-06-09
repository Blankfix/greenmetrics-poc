import Vue from "vue";
//import {Vuetify, ThemeDefinition} from 'vuetify/lib/framework';
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        primary: "#62cc75",
        secondary: "#2e3842",
        green: "#62cc75",
        accent: "#8c9eff",
        error: "#b71c1c",
      },
    },
  },
});
