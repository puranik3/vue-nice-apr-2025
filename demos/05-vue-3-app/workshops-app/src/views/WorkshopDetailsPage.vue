<template>
  <div>
    <div v-if="loading">
      <div class="text-center my-6">
        <v-progress-circular color="primary" indeterminate></v-progress-circular>
      </div>
    </div>

    <div v-else-if="error !== null">
      <v-alert color="danger" variant="outlined">
        {{ error.message }}
        <template v-slot:title>
          <strong>Something went wrong!</strong>
        </template>
      </v-alert>
    </div>

    <div v-else>
      <h1>{{ workshop.name }}</h1>
      <v-divider class="my-6"></v-divider>

      <v-row>
        <v-col md="4">
          <v-img :src="workshop.imageUrl" :alt="workshop.name" class="img-fluid" cover />
        </v-col>
        <v-col md="8">
          <small>{{ date(workshop.startDate) }} - {{ date(workshop.endDate) }}</small>
          <div>
            <div>
              <font-awesome-icon :icon="workshop.modes.inPerson ? 'check' : 'xmark'" />
              In-person
            </div>
            <div>
              <font-awesome-icon :icon="workshop.modes.online ? 'check' : 'xmark'" />
              Online
            </div>
          </div>
          <div v-html="workshop.description"></div>
        </v-col>
      </v-row>
    </div>

    <div class="my-10">
      <router-link :to="{ name: 'sessions-list', params: { id: workshop.id } }" class="mr-2"
        >List of sessions</router-link
      >
      <router-link :to="{ name: 'add-session', params: { id: workshop.id } }"
        >Add a session</router-link
      >
    </div>

    <router-view :id="id"></router-view>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
// ref -> primitive, reactive -> object
import { ref } from 'vue'
import type { IWorkshop } from '@/services/workshops'
import { fetchWorkshopById } from '@/services/workshops'
import useFetch from '@/composables/useFetch'
import date from '@/filters/date'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faXmark, faCheck } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'

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
