<template>
  <v-app>
    <!-- <NavBar /> -->
    <v-main>
      <Hero/>
      <About />
      <Gdsc />
      <Speakers />
      <Agenda />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
// import NavBar from './components/Navigation.vue'
import Hero from './components/hero/index.vue'
import About from './components/about/index.vue'
import Gdsc from './components/gdsc/index.vue'
import Speakers from './components/speakers/index.vue'
import Agenda from './components/agenda/index.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',

  components: {
    // NavBar,
    Hero,
    About,
    Gdsc,
    Speakers,
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


 /* Style for pagination bullet */

 .swiper-pagination {
   position: relative;
   bottom: 0;
   left: 0;
   right: 0;
   margin-top: 5%;
   width: 100px;
   height: 10px;
   display: flex;
   justify-content: center;
   align-items: center;
 }

 @media screen and (max-width: 768px) {
   .swiper-pagination {
     margin-top: 10%;
   }

 }

 .swiper-pagination-bullet {
   opacity: 1;
   background-color: rgb(221, 221, 221);
   border-radius: 50%;
   width: 10px;
   height: 10px;
   transition: all 0.3s ease-in-out;
 }

 /* Style for active pagination bullet */
 .swiper-pagination-bullet-active {
   background-color: #505050;
   border-radius: 25px;
   width: 20px;
   height: 10px;
 }
</style>
