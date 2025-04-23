<script setup lang="ts">
// @ -> src folder
import Navbar from '@/components/common/Navbar.vue'
</script>

<template>
  <navbar />

  <!-- <h1 class="app-title">Hello App component</h1>
  <v-btn>Button</v-btn> -->
  <v-container class="my-6">
    <router-view></router-view>
  </v-container>
</template>

<style scoped>
.app-title {
  color: crimson;
}
</style>
