import Vue from 'vue';
//import {Vuetify, ThemeDefinition} from 'vuetify/lib/framework';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

// const greenjectionTheme: ThemeDefinition = {
//     dark: false,
//     colors: {
//         background: '#FFFFFF',
//         surface: '#FFFFFF',
//         primary: '#6200EE',
//         'primary-darken-1': '#3700B3',
//         secondary: '#03DAC6',
//         'secondary-darken-1': '#018786',
//         error: '#B00020',
//         info: '#2196F3',
//         success: '#4CAF50',
//         warning: '#FB8C00',
//     }
// }

Vue.component('LocaleSelect', {
    methods: {
        changeLocale () {
            this.$vuetify.lang.current = 'fr'
            console.log( this.$vuetify.lang );
        },
    },
})

export default new Vuetify({
    theme: {
        defaultTheme: 'light',
        themes: {
            light: {
                primary: '#62cc75',
                secondary: '#2e3842',
                green: '#62cc75',
                accent: '#8c9eff',
                error: '#b71c1c',
            },
        },
    },
})
