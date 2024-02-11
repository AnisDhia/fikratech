<template>
  <v-app>
    <NavBar />
    <v-main>
      <Hero />
      <About />
      <Gdsc />
      <Agenda />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import { NavBar } from './components/Navigation.vue'
import Hero from './components/hero/index.vue'
import About from './components/about/index.vue'
import Gdsc from './components/gdsc/index.vue'
import Agenda from './components/agenda/index.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',

  components: {
    NavBar,
    Hero,
    About,
    Gdsc,
    Agenda,
    Footer,
  },

  data: () => ({
    //
  }),
}
</script>

<style>
* {
  font-family: 'Mermaid', sans-serif;

}
section {
  padding: 5% 5%;
}
</style>
