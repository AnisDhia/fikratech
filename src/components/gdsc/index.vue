<template>
    <section>
        <v-row>
            <v-col>
                <v-img src="@/assets/gdsc/gdsc1.svg" max-width="350"></v-img>
            </v-col>
            <v-col cols="12" md="" :class="{ 'text-center': smAndDown }">
                <h1 class="">Who are GDSC Batna?</h1>
                <p>
                    Google Developer Student Clubs are community groups for college and
                    university students interested in Google developer technologies.
                    <!-- Google Developer Student Clubs (GDSC) are community groups for college and university students interested
                    in Google developer technologies. Students from all undergraduate or graduate programs with an interest
                    in growing as a developer are welcome. By joining a GDSC, students grow their knowledge in a
                    peer-to-peer learning environment and build solutions for local businesses and their community. -->
                </p>
                <div>
                    <v-btn class="hithere" color="transparent" icon size="x-large" flat href="https://www.instagram.com/gdsc.batna2/"
                        target="_blank">
                        <v-icon size="x-large" color="#D27849" icon="custom:insta"></v-icon>
                    </v-btn>
                    <v-btn class="hithere" color="transparent" icon size="x-large" flat href="https://www.linkedin.com/company/gdscbatna2"
                        target="_blank">
                        <v-icon size="x-large" color="#D27849" icon="custom:linkedin"></v-icon>
                    </v-btn>
                    <v-btn class="hithere" color="transparent" icon size="x-large" flat href="https://www.facebook.com/GDSCBatna"
                        target="_blank">
                        <v-icon size="x-large" color="#D27849" icon="custom:facebook"></v-icon>
                    </v-btn>
                </div>
            </v-col>
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
h1 {
    font-weight: 700;
    color: #008080;
    size: 3.75rem;
    margin-top: 12%;
}

p {
    font-weight: 700;
    color: #333333;
    size: 2rem;
}
</style>