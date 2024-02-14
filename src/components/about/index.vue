<template>
    <section>
        <v-row justify="end" align="center" class="pr-6">
            <v-img class="bounce" src="@/assets/about/text.svg" :max-width="smAndDown ? 50 : 100"
                :max-height="smAndDown ? 50 : 100"></v-img>
        </v-row>
        <p class="">
            <v-img src="@/assets/about/line.svg" :max-height="smAndDown ? 20 : 30" position="left"></v-img>
            Fikrtech is an exciting event where you'll apply your ideas in Startup prototype using
            Technology. With interactive workshops, you'll get to present your prototype at the end.
            <v-img src="@/assets/about/line2.svg" :max-height="smAndDown ? 20 : 30" position="right"></v-img>
        </p>
        <v-row justify="center" align="center" class="mt-4">
            <v-col class="text-center">
                <v-img src="@/assets/about/about.svg"></v-img>
            </v-col>
        </v-row>
    </section>
</template>

<script>
import { useDisplay } from 'vuetify/lib/framework.mjs';
export default {
    name: 'AboutSection',
    setup() {
        const { smAndDown } = useDisplay();
        return { smAndDown };
    },
}
</script>

<style scoped>

p {
    text-align: start;
    font-size: 2rem;
    margin: 0;
    padding: 0;
    color: #008080;
}

@media screen and (max-width: 768px) {
    p {
        font-size: 1rem;
    }
    
}

</style>