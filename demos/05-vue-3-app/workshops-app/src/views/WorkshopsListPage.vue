<template>
  <div class="container my-4">
    <h1>List of workshops</h1>
    <v-divider class="my-6"></v-divider>

    <div>You are on page {{ page }}</div>
    <v-btn color="primary" @click="changePage(-1)" class="mr-2">Previous</v-btn>
    <v-btn color="primary" @click="changePage(1)">Next</v-btn>

    <div v-if="loading">
      <div class="text-center my-6">
        <v-progress-circular color="primary" indeterminate></v-progress-circular>
      </div>
    </div>

    <div v-else-if="error !== null">
      <v-alert color="danger" variant="outlined">
        <!-- through the concept of slot we can pass HTML content from parent to child - this helps us customize the HTML rendered by the child component. -->
        <!-- A component can have multiple names slot (eg. title slot), and one default slot. A template is used by the parent component to pass HTML for a named slot in the child component. Any content outside of template is inserted into the default slot in the child component. -->
        {{ error.message }}
        <template v-slot:title>
          <strong>Something went wrong!</strong>
        </template>
      </v-alert>
    </div>

    <div v-else>
      <v-row>
        <v-col
          :cols="12"
          :sm="12"
          :md="4"
          class="d-flex"
          v-for="workshop in workshops"
          :key="workshop.id"
        >
          <workshops-list-item :w="workshop" :x="100" ></workshops-list-item>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { fetchWorkshops } from '@/services/workshops'
import type { IWorkshop } from '@/services/workshops'
import { ref, onMounted, watch } from 'vue'
import WorkshopsListItem from '../components/workshops/WorkshopsListItem.vue'

// --- data ---
const loading = ref(true)
const workshops = ref<IWorkshop[]>([])
const error = ref<null | Error>(null)
const page = ref(1)

// --- methods ---
const changePage = (by = 1) => {
  page.value = page.value + by
}

const getWorkshops = async () => {
  loading.value = true

  try {
    const data = await fetchWorkshops(page.value)
    workshops.value = data
  } catch (err) {
    error.value = err as Error
  } finally {
    loading.value = false
  }
}

// --- lifecycle hooks ---
// created() lifecycle method logic of options API is written in setup function itself
getWorkshops()

// mounted
onMounted(() => {
  // code that is called after UI shows up
  console.log('mounted')
})

// --- watch ---
// watch([page, x, y], (newValues, oldValue) => {
watch(page, (newPage, oldPage) => {
  console.log('page changed')
  console.log(newPage, oldPage)

  getWorkshops()
})
</script>

<style scoped></style>
