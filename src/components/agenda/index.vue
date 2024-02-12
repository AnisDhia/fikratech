<template>
    <section>
        <v-row class="text-center">
            <v-img src="@/assets/agenda/text.svg" :max-height="smAndDown ? 100 : 150" class="d-md-none"></v-img>
        </v-row>
        <div v-if="!smAndDown">
            <v-row justify="center" align="center">
                <v-col class="text-center" cols="12" md="4">
                    <v-img src="@/assets/agenda/day1.svg"></v-img>
                </v-col>
                <v-col class="text-center" cols="12" md="4">
                    <v-img src="@/assets/agenda/day2.svg"></v-img>
                </v-col>
                <v-col class="text-center" cols="12" md="4">
                    <v-img src="@/assets/agenda/day3.svg"></v-img>
                </v-col>
            </v-row>
            <v-row class="text-center">
                <v-img src="@/assets/agenda/text.svg" max-height="100" class="d-none d-md-flex"></v-img>
            </v-row>
            <v-row justify="center" align="center">
                <v-col class="text-center" cols="12" md="4">
                    <v-img src="@/assets/agenda/day4.svg"></v-img>
                </v-col>
                <v-col class="text-center" cols="12" md="4">
                    <v-img src="@/assets/agenda/day5.svg"></v-img>
                </v-col>
            </v-row>
        </div>
        <v-row v-else align="center" justify="center">
            <v-col cols="12">
                <swiper :modules="modules" :slides-per-view="1" :space-between="50" :onSwiper="onSwiper"
                    :onSlideChange="onSlideChange" :pagination="{ clickable: true }" autoplay class="mySwiper">
                    <swiper-slide v-for="(day, index) in days" :key="index">
                        <v-img :src="require('@/assets/agenda/' + day.src)" max-height="300"></v-img>
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
    data() {
        return {
            days: [
                { src: 'day1.svg' },
                { src: 'day2.svg' },
                { src: 'day3.svg' },
                { src: 'day4.svg' },
                { src: 'day5.svg' },
            ]
        }
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
    }
}
</script>

<style scoped></style>