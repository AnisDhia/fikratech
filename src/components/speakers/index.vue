<template>
    <section>
        <v-row class="text-center">
            <v-img src="@/assets/speakers/text.svg" :max-height="smAndDown ? 100 : 150" class="d-md-none"></v-img>
        </v-row>
        <!-- <v-row justify="center" align="center">
            <v-col class="text-center" cols="12" md="4">
                <v-img src="@/assets/speakers/card.svg"></v-img>
            </v-col>
            <v-col class="text-center" cols="12" md="4">
                <v-img src="@/assets/speakers/card.svg"></v-img>
            </v-col>
            <v-col class="text-center" cols="12" md="4">
                <v-img src="@/assets/speakers/card.svg"></v-img>
            </v-col>
        </v-row> -->
        <v-row align="center" justify="center">
            <v-col cols="12">
                <swiper :modules="modules" :slides-per-view="1" :space-between="50" :onSwiper="onSwiper"
                    :onSlideChange="onSlideChange" :pagination="{ clickable: true }" autoplay class="mySwiper">
                    <swiper-slide v-for="(speaker, index) in 5" :key="index">
                        <v-img src="@/assets/speakers/card.svg" max-height="300"></v-img>
                    </swiper-slide>
                </swiper>
            </v-col>
        </v-row>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import { useDisplay } from 'vuetify/lib/framework.mjs'

export default {
    name: 'AgendaSection',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper)
        };
        const onSlideChange = () => {
            // console.log('slide change')
        };

        const { smAndDown } = useDisplay();
        return {
            smAndDown,
            onSwiper,
            onSlideChange,
            modules: [Pagination, Autoplay],
        };
    },
}
</script>

<style scoped></style>