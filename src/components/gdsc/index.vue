<template>
    <section>
        <v-row align="center" class="d-block d-md-flex">
            <!-- <vid> -->
            <v-img v-if="!smAndDown" src="@/assets/gdsc/gdscbatna.svg" max-width="30vw" max-height="45vh"></v-img>
            <v-img v-else src="@/assets/gdsc/gdsc.svg" max-height="20vh"></v-img>
            <!-- </vid> -->
            <div class="mb-0 mb-md-6 mb-lg-16" :class="{ 'text-center': smAndDown }">
                <h1 class="mb-3">Who are <span style="color: #4385F3;">G</span><span style="color: #E94436;">D</span><span
                        style="color: #FABC05;">S</span><span style="color: #109D58;">C</span> Batna?</h1>
                <p>
                    Google Developer Student Clubs are community groups for college and <br />
                    university students interested in Google developer technologies.
                    <!-- Google Developer Student Clubs (GDSC) are community groups for college and university students interested
                    in Google developer technologies. Students from all undergraduate or graduate programs with an interest
                    in growing as a developer are welcome. By joining a GDSC, students grow their knowledge in a
                    peer-to-peer learning environment and build solutions for local businesses and their community. -->
                </p>
                <div class="mt-3">
                    <v-btn class="hithere" color="transparent" icon size="x-large" flat
                        href="https://www.instagram.com/gdsc.batna2/" target="_blank">
                        <v-icon size="x-large" color="#D27849" icon="custom:insta"></v-icon>
                    </v-btn>
                    <v-btn class="hithere" color="transparent" icon size="x-large" flat
                        href="https://www.linkedin.com/company/gdscbatna2" target="_blank">
                        <v-icon size="x-large" color="#D27849" icon="custom:linkedin"></v-icon>
                    </v-btn>
                    <v-btn class="hithere" color="transparent" icon size="x-large" flat
                        href="https://www.facebook.com/GDSCBatna" target="_blank">
                        <v-icon size="x-large" color="#D27849" icon="custom:facebook"></v-icon>
                    </v-btn>
                    <v-img src="@/assets/gdsc/oursocials.svg" class="bounce oursocials" max-height="16vh"></v-img>
                    <!-- style="position: relative; right: smAndDown ? 10% : 12%;" -->
                </div>
            </div>
        </v-row>
    </section>
</template>

<script>
import { useDisplay } from 'vuetify/lib/framework.mjs';

export default {
    name: 'GdscSection',
    setup() {
        const { smAndDown } = useDisplay();
        return { smAndDown };
    },
}
</script>

<style scoped>
.oursocials {
    position: absolute;
    right: 0;
    left: 0;
}


h1 {
    font-weight: 700;
    color: #008080;
    font-size: 4.5rem;
    /* margin-top: 15%; */
}

p {
    font-weight: 700;
    color: #333333;
    font-size: 2.5rem;
}

@media screen and (max-width: 1920px) {
    h1 {
        font-weight: 700;
        color: #008080;
        font-size: 3.5rem;
        margin-top: 20%;
    }

    p {
        font-weight: 700;
        color: #333333;
        font-size: 1.5rem;
    }

}

@media screen and (max-width: 1024px) {
    h1 {
        font-size: 2rem;
    }

    p {
        font-size: 1rem;
    }

    section {
        margin-bottom: 10%;
    }

}

@media screen and (max-width: 768px) {
    h1 {
        font-size: 2rem;
    }

    p {
        font-size: 1rem;
    }

    section {
        margin-bottom: 10%;
    }

}
</style>