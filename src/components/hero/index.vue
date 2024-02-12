<template>
    <section>
        <v-parallax src="@/assets/hero/bg.png">
            <v-img src="@/assets/hero/texture.png" cover>
                <v-parallax src="@/assets/hero/grid.png">
                    <v-row justify="space-between" align="center" style="padding: 5% 5%">
                        <v-img src="@/assets/logo.png" :max-width="smAndDown ? 100 : 200"></v-img>
                        <!-- <v-spacer></v-spacer> -->
                        <v-btn variant="flat" color="#008080" class="text-none px-8 rounded-0" :size="smAndDown ? 'small' : 'large'">Register</v-btn>
                    </v-row>
                    <v-row justify="center" class="fill-height">
                        <v-col class="text-center" cols="10" md="5">
                            <v-img src="@/assets/hero/logo.png"></v-img>
                            <v-row align="center" justify="center" class="my-8">
                                <div class="d-flex mx-4">
                                    <v-icon class="mr-3" color="#008080">custom:location</v-icon>
                                    <h3>University Of Constantine 03</h3>
                                </div>
                                <div class="d-flex mx-4">
                                    <v-icon class="mr-3" color="#FFD600">custom:clock</v-icon>
                                    <h3>22,23 and 24 February</h3>
                                </div>
                                <v-btn size="x-large" variant="flat" color="#008080"
                                    class="text-none px-16 rounded-0 mt-6">Register</v-btn>
                            </v-row>
                        </v-col>
                    </v-row>
                    <v-img src="@/assets/hero/mask.png" class="mask"></v-img>
                </v-parallax>
            </v-img>
        </v-parallax>
        <v-img src="@/assets/hero/ellipse2.svg" class="elipse2"></v-img>
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

<style scoped>
section {
    margin: 0;
    padding: 0;
}

.mask {
    position: absolute;
    bottom: 0;
    z-index: 1;
    width: 100%;
}

h3 {
    color: white;
}

.elipse2 {
    position: absolute;
    top: 0;
    right: 0;
    /* z-index: 1; */
    width: 100%;
}
</style>