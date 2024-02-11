<template>
    <section>
        <v-row justify="end" align="center" class="pr-6">
            <v-img src="@/assets/about/text.svg" :max-width="smAndDown ? 50 : 100"
                :max-height="smAndDown ? 50 : 100"></v-img>
        </v-row>
        <v-row justify="center" align="center">
            <v-col class="text-center">
                <v-img src="@/assets/about/about.svg"></v-img>
            </v-col>
        </v-row>
    </section>
</template>

<script>
import { useDisplay } from 'vuetify/lib/framework.mjs';
export default {
    name: 'HeroSection',
    setup() {
        const { smAndDown } = useDisplay();
        return { smAndDown };
    },
}
</script>

<style scoped></style>