<template>
  <v-app-bar app flat color="transparent">
    <v-img src="@/assets/logo.png" max-width="200"></v-img>
    <v-spacer></v-spacer>
    <v-btn variant="flat" color="#008080" class="text-none px-8 rounded-0">Register</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.v-app-bar {
  padding: 2% 5%;
  /* margin: 0; */
}
</style>