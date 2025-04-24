<template>
  <nav>
    <router-link :to="{ name: 'home' }" active-class="x">Home</router-link>
    <router-link :to="{ name: 'workshops-list' }" active-class="x">List of workshops</router-link>
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
