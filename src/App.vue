<template>
  <v-app>
    <v-app-bar
      app
      color="secondary"
      light
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <blockquote
        class="font-weight-bold"
      >
        Fuel Cost
      </blockquote>
    </v-app-bar>

    <v-content>
      <Calculation/>
    </v-content>
  </v-app>
</template>

<script>
import Calculation from './components/Calculation';

export default {
  name: 'App',

  components: {
    Calculation,
  },

  data: () => ({
    //
  }),
};
</script>
