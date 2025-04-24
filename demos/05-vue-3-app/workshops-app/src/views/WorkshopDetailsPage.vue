<template>
  <div v-if="!loading && error === null">{{ workshop.name }}</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
// ref -> primitive, reactive -> object
import { ref } from 'vue'
import type { IWorkshop } from '@/services/workshops'
import { fetchWorkshopById } from '@/services/workshops'

interface Props {
  id: string
}

const props = defineProps<Props>()

const route = useRoute()
const id = route.params.id

console.log(id)
console.log(props.id)

// --- data ---
const loading = ref(true)
const workshop = ref<null | IWorkshop>(null)
const error = ref<null | Error>(null)

const getWorkshopById = async () => {
  loading.value = true

  try {
    const data = await fetchWorkshopById(id)
    workshop.value = data
  } catch (err) {
    error.value = err as Error
  } finally {
    loading.value = false
  }
}

getWorkshopById()
</script>

<style scoped></style>
