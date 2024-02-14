<template>
    <v-footer>
        <v-parallax src="@/assets/hero/bg.png" style="height: 60vh;" class="mask">
            <v-parallax src="@/assets/hero/texture.png" style="height: 100%;">
                <v-img src="@/assets/hero/grid.png" style="height: 100%;">
                    <div style="position: absolute; bottom: 0; right: 0; left:0; padding-bottom: 1%;">
                        <v-img src="@/assets/logo.png" max-height="53px"></v-img>
                        <v-row justify="center" align="center" class="text-center mt-16 mb-3">
                            <v-btn class="hithere" color="transparent" icon size="x-large" flat href="https://www.instagram.com/startedu_dz/" target="_blank">
                                <v-icon size="x-large" color="white" icon="custom:insta"></v-icon>
                            </v-btn>
                            <v-btn class="hithere" color="transparent" icon size="x-large" flat href="https://www.instagram.com/startedu_dz/" target="_blank">
                                <v-icon size="x-large" color="white" icon="custom:linkedin"></v-icon>
                            </v-btn>
                            <v-btn class="hithere" color="transparent" icon size="x-large" flat href="https://www.instagram.com/startedu_dz/" target="_blank">
                                <v-icon size="x-large" color="white" icon="custom:facebook"></v-icon>
                            </v-btn>
                        </v-row>
                        <h3>© All Rights Reserved For Fikratech 2024.</h3>
                    </div>
                </v-img>
            </v-parallax>
        </v-parallax>

    </v-footer>
</template>

<script>
export default {
    name: 'FooterSection'
}
</script>

<style scoped>
.v-footer {
    /* background-image: url(@/assets/grey.png); */
    margin: 0;
    padding: 0;
}

h3 {
    color: white;
    font-size: 1.3rem;
    text-align: center;
}

.mask {
    mask: url(@/assets/footer/mask.png) center/cover no-repeat;
}

@media screen and (max-width: 768px) {
    h3 {
        font-size: 1rem;
    }

}
</style>