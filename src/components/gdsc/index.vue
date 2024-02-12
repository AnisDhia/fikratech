<template>
    <section>
        <v-row>
            <v-img src="@/assets/gdsc/gdsc1.svg" max-width="350"></v-img>
            <v-col>
                <h1 class="">Who are GDSC Batna?</h1>
                <p>Google Developer Student Clubs (GDSC) are community groups for college and university students interested
                    in Google developer technologies. Students from all undergraduate or graduate programs with an interest
                    in growing as a developer are welcome. By joining a GDSC, students grow their knowledge in a
                    peer-to-peer learning environment and build solutions for local businesses and their community.</p>
            </v-col>
        </v-row>
    </section>
</template>

<script>
export default {
    name: 'GdscSection'
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