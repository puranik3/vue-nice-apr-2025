<template>
  <form @submit.prevent="doLogin">
    <v-text-field label="Email" type="text" id="email" v-model="credentials.email" />
    <v-text-field label="Password" type="password" id="password" v-model="credentials.password" />
    <v-btn type="submit">Login</v-btn>
  </form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const router = useRouter()

const { login } = useAuthStore()

const credentials = reactive({
  email: '',
  password: '',
})

const doLogin = async () => {
  try {
    const data = await login(credentials)
    // console.log(data)
    router.push({
      name: 'workshops-list',
    })
  } catch (error) {
    alert(error.message)
  }
}
</script>

<style scoped></style>
