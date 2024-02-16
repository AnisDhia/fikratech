<template>
    <section>
        <v-parallax src="@/assets/hero/bg.png" cover :style="{ height: xs ? '100vh' : 'auto' }" style="position: relative;">
            <v-parallax src="@/assets/hero/texture.png" cover :style="{ height: xs ? '100vh' : 'auto' }">
                <v-img src="@/assets/hero/grid.png" cover :style="{ height: xs ? '100vh' : 'auto' }">
                    <v-row justify="space-between" align="center" style="padding: 5% 5%" class="content">
                        <v-img src="@/assets/logo.png" :max-width="smAndDown ? 100 : 200"></v-img>
                        <!-- <v-spacer></v-spacer> -->
                        <v-btn target="_blank"
                            href="https://docs.google.com/forms/d/e/1FAIpQLSfErfYRo7Xg4FU1fyZ9M0r0YU1AWGAwiNA9pzKi6J87_BHDkQ/viewform"
                            variant="flat" color="#008080" class="text-none px-8 rounded-0"
                            :size="smAndDown ? 'small' : 'large'">Register</v-btn>
                    </v-row>
                    <v-row justify="center" class="fill-height">
                        <v-col class="text-center" cols="10" md="5">
                            <v-img src="@/assets/hero/logo.png"></v-img>
                            <div class="">
                                <v-row align="center" justify="center" class="mt-8">
                                    <div class="d-flex mx-4 my-3">
                                        <v-icon :size="smAndDown ? 'small' : 'large'" class="mr-3"
                                            color="#FFD600">custom:clock</v-icon>
                                        <h3>24 to 28 February</h3>
                                    </div>
                                    <div class="d-flex mx-4 my-3">
                                        <v-icon :size="smAndDown ? 'small' : 'large'" class="mr-3"
                                            color="#008080">custom:location</v-icon>
                                        <h3>University Of Constantine 03</h3>
                                    </div>
                                </v-row>
                            </div>
                            <v-btn target="_blank"
                                href="https://docs.google.com/forms/d/e/1FAIpQLSfErfYRo7Xg4FU1fyZ9M0r0YU1AWGAwiNA9pzKi6J87_BHDkQ/viewform"
                                size="x-large" variant="flat" color="#008080" class="text-none px-16 rounded-0 mt-10">
                                Register
                            </v-btn>
                            <!-- <v-row align="center" justify="center" class="mt-8 d-none d-md-flex">
                                <div class="d-flex mx-4 my-3 my-md-0">
                                    <v-icon :size="smAndDown ? 'small' : 'large'" class="mr-3"
                                        color="#008080">custom:location</v-icon>
                                    <h3>University Of Constantine 03</h3>
                                </div>
                                <div class="d-flex mx-4 my-3 my-md-0">
                                    <v-icon :size="smAndDown ? 'small' : 'large'" class="mr-3"
                                        color="#FFD600">custom:clock</v-icon>
                                    <h3>24 to 28 February</h3>
                                </div>
                                <v-btn target="_blank"
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSfErfYRo7Xg4FU1fyZ9M0r0YU1AWGAwiNA9pzKi6J87_BHDkQ/viewform"
                                    size="x-large" variant="flat" color="#008080" class="text-none px-16 rounded-0 mt-6">
                                    Register
                                </v-btn>
                            </v-row> -->
                            <v-img src="@/assets/hero/logos.png" :max-height="smAndDown ? 50 : 80" class="mt-16"></v-img>
                            <!-- <v-row justify="center" align="center">
                                <v-img src="@/assets/hero/startedu.png" max-height=""></v-img>
                                <v-img src="@/assets/hero/gdsc.png" :max-height="smAndDown ? 50 : 80"></v-img>
                            </v-row> -->
                        </v-col>
                    </v-row>
                    <!-- <v-img src="@/assets/hero/mask.png" class="mask"></v-img> -->
                </v-img>
            </v-parallax>
            <!-- <v-img src="@/assets/hero/e1.svg" class="elipse1"/> -->

            <!-- <v-img src="@/assets/hero/e2.svg" class="elipse2"></v-img> -->
            <!-- <v-img src="@/assets/hero/e3.svg" class="elipse3"></v-img> -->
        </v-parallax>
    </section>
</template>

<script>
import { useDisplay } from 'vuetify/lib/framework.mjs';

export default {
    name: 'HeroSection',
    setup() {
        const { smAndDown, xs } = useDisplay();
        return { smAndDown, xs };
    },
}
</script>

<style scoped>
section {
    margin: 0;
    padding: 0;
}

.content {
    z-index: 10;
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

.elipse1 {
    position: absolute;
    bottom: 0;
    left: 0;
    /* z-index: 0; */
    width: 100%;
}

.elipse2 {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;
    /* width: 100%; */
}

.elipse3 {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 0;
    /* width: 100%; */
}

.masquito {
    mask: url(@/assets/hero/mask.png);
    /* mask-repeat: no-repeat; */
    mask-position: bottom;
    -webkit-mask-composite: exclude;
    mask-composite: exclude;
}

.inverted {
    mask: url(@/assets/hero/mask.png) bottom/contain no-repeat, linear-gradient(#fff 0 0);
    -webkit-mask:
        url(@/assets/hero/mask.png) bottom/contain no-repeat,
        linear-gradient(#fff 0 0);
    /* we need this extra layer for mask-composite */
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
}

@media screen and (max-width: 768px) {
    .content {
        padding: 5% 0;
    }

    h3 {
        font-size: 1rem;
    }

    .mask {
        display: none;
    }

    .elipse2 {
        display: none;
    }

    .inverted {
        mask: none;
    }



}


@media screen and (max-width: 768px) {}
</style>