<script setup lang="ts">
// @ -> src folder
import AppNavbar from '@/components/common/Navbar.vue'
</script>

<template>
  <app-navbar />

  <!-- <h1 class="app-title">Hello App component</h1>
  <v-btn>Button</v-btn> -->
  <router-view></router-view>
</template>

<style scoped>
.app-title {
  color: crimson;
}
</style>
