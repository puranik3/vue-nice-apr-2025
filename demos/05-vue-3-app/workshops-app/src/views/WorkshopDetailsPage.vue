<template>
  <div v-if="!loading && error === null">{{ workshop.name }}</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
// ref -> primitive, reactive -> object
import { ref } from 'vue'
import type { IWorkshop } from '@/services/workshops'
import { fetchWorkshopById } from '@/services/workshops'
import useFetch from '@/composables/useFetch'

interface Props {
  id: string
}

const props = defineProps<Props>()

const route = useRoute()
const id = route.params.id

console.log(id)
console.log(props.id)

const fetcher = () => {
  return fetchWorkshopById(id)
}

const { loading, data: workshop, error } = useFetch<IWorkshop[]>([] as IWorkshop[], fetcher)
</script>

<style scoped></style>
