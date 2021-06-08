"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var framework_1 = require("vuetify/lib/framework");
vue_1.default.use(framework_1.default);
exports.default = new framework_1.default({
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
});
//# sourceMappingURL=vuetify.js.map