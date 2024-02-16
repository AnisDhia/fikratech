<template>
    <section>
        <v-row class="text-center">
            <v-img src="@/assets/speakers/text.svg" :max-height="smAndDown ? 100 : 150" class="bounce"></v-img>
        </v-row>
        <v-row align="center" justify="center">
            <v-col cols="12">
                <swiper :modules="modules" :slides-per-view="1" :space-between="50" :onSwiper="onSwiper"
                    :onSlideChange="onSlideChange" :pagination="{ clickable: true }" autoplay class="mySwiper">
                    <swiper-slide v-for="(speaker, index) in speakers" :key="index">
                        <v-img :src="require('@/assets/speakers/' + speaker.image)" :alt="speaker.name"
                            max-height="60vh"></v-img>
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
            speakers: [
                {
                    name: 'Pius Sunday Ojwo',
                    title: 'GDG Constantine Lead',
                    image: 'speaker1.svg',
                },
                {
                    name: 'Ahmed Bendjelloul',
                    title: 'Business',
                    image: 'speaker2.svg',
                },
                {
                    name: 'Dr Anwar Sekiou',
                    title: 'Business',
                    image: 'speaker3.svg',
                },
                {
                    name: 'Meriem Boublia',
                    title: 'English Teacher',
                    image: 'speaker4.svg',
                },
                {
                    name: 'Mohamed Chérif Gharbi',
                    title: 'Full Stack Web Developer',
                    image: 'speaker5.svg',
                },
            ],
        };
    },
    setup() {
        const onSwiper = (swiper) => {
            swiper;
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

<style scoped>

@media screen and (max-width: 600px) {
   section {
    margin-top: 40%;
   }
    
}
</style>