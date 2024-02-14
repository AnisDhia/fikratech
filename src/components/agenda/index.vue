<template>
    <section>
        <v-row class="text-center">
            <v-img src="@/assets/agenda/text.svg" :max-height="smAndDown ? 100 : 150" class="d-md-none bounce"></v-img>
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
                <v-img src="@/assets/agenda/text.svg" max-height="100" class="d-none d-md-flex bounce"></v-img>
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
                { src: 'day1.svg', alt: "Day 1: Reception & Organisation" },
                { src: 'day2.svg', alt: "Day 2: Confrence & Workshops" },
                { src: 'day3.svg', alt: "Day 3: Confrence & Workshops" },
                { src: 'day4.svg', alt: "Day 4: Teams work & Surprise" },
                { src: 'day5.svg', alt: "Day 5: Salon & Ceremony" },
            ]
        }
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
    }
}
</script>

<style scoped>



.flip {
	backface-visibility: visible !important;
	animation: flip 2s ease-in-out;
}
@keyframes flip {
	0% {
		transform: perspective(400px) rotateY(0);
		animation-timing-function: ease-out;
	}
	40% {
		transform: perspective(400px) translateZ(150px) rotateY(170deg);
		animation-timing-function: ease-out;
	}
	50% {
		transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
		animation-timing-function: ease-in;
	}
	80% {
		transform: perspective(400px) rotateY(360deg) scale(.95);
		animation-timing-function: ease-in;
	}
	100% {
		transform: perspective(400px) scale(1);
		animation-timing-function: ease-in;
	}
}

</style>