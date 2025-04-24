<template>
  <nav>
    <div v-if="isAuthenticated()">
      <router-link :to="{ name: 'home' }" active-class="x">Home</router-link>
      <router-link :to="{ name: 'workshops-list' }" active-class="x">List of workshops</router-link>
      <router-link :to="{ name: 'workshops-list' }" active-class="x" @click="onLogout"
        >Logout</router-link
      >
    </div>
    <div v-else>
      <router-link class="link" :to="{ name: 'login' }">Login</router-link>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const router = useRouter()

const { isAuthenticated, logout } = useAuthStore()

const onLogout = () => {
  logout()
  router.push({
    name: 'login',
  })
}
</script>

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
