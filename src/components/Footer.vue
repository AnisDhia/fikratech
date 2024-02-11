<template>
    <v-footer class="d-block">
        <v-img src="@/assets/logo.png" max-height="53px"></v-img>
        <v-row justify="center" align="center" class="text-center mt-16 mb-3">
            <v-btn color="transparent" icon size="x-large" flat>
                <v-icon size="x-large" color="white" icon="custom:insta"></v-icon>
            </v-btn>
            <v-btn color="transparent" icon size="x-large" flat>
                <v-icon size="x-large" color="white" icon="custom:linkedin"></v-icon>
            </v-btn>
            <v-btn color="transparent" icon size="x-large" flat>
                <v-icon size="x-large" color="white" icon="custom:facebook"></v-icon>
            </v-btn>
        </v-row>
    </v-footer>
</template>

<script>
export default {
    name: 'FooterSection'
}
</script>

<style scoped>
.v-footer {
    background-image: url(@/assets/grey.png);
}
</style>