import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        weatherSunny: colors.blue.base,
        weatherRain: colors.indigo.base,
        weatherWind: colors.teal.base,
      },
    },
  },
});
