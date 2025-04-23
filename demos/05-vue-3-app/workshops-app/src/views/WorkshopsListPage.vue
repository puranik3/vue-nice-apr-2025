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
        <template v-slot:title>
          <strong>Something went wrong!</strong>
        </template>
        {{ error.message }}
      </v-alert>
    </div>

    <div v-else>
      <div class="row">
        <div class="col-12 col-md-4 my-3 d-flex" v-for="workshop in workshops" :key="workshop.id">
          <div class="card p-3 w-100">
            <img :src="workshop.imageUrl" :alt="workshop.name" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">
                {{ workshop.name }}
              </h5>
              <div class="card-text" v-html="workshop.description"></div>
              <a href="#" class="btn btn-primary">Know more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { fetchWorkshops } from '@/services/workshops'
import { ref, onMounted, watch } from 'vue'

// --- data ---
const loading = ref(true)
const workshops = ref([])
const error = ref(null)
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
    error.value = err
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
