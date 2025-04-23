<template>
  <nav>
    <router-link to="/" active-class="x">Home</router-link>
    <router-link to="/workshops" active-class="x">List of workshops</router-link>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
nav {
  padding: 16px;
  background-color: lightgray;
  color: white;
}

.x {
  color: white;
}
</style>
