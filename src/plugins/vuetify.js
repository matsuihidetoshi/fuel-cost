import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#f3b03d',
        secondary: '#fff',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
  icons: {
    iconfont: 'mdiSvg',
  },
  breakpoint: {
    thresholds: {
      xs: 544,
      sm: 768,
      md: 992,
      lg: 1200,
    },
  },
});
