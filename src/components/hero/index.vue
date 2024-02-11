<template>
    <section>
        <v-parallax src="@/assets/hero/bg.png">
            <v-parallax src="@/assets/hero/grid.png">
                <v-parallax src="@/assets/hero/texture.png">
                    <v-row justify="center" align="center" class="fill-height">
                        <v-col class="text-center" cols="12" md="5">
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
                                <v-btn size="x-large" variant="flat" color="#008080" class="text-none px-16 rounded-0 mt-6">Register</v-btn>

                            </v-row>
                        </v-col>
                    </v-row>
                    <v-img src="@/assets/hero/mask.png" class="mask"></v-img>
                </v-parallax>
            </v-parallax>
        </v-parallax>
    </section>
</template>

<script>
export default {
    name: 'HeroSection'
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
</style>