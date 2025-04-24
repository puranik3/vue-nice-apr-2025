<template>
  <v-card class="w-100 pa-6">
    <v-img class="align-end text-white" height="200" :src="w.imageUrl" :alt="w.name" contain>
    </v-img>

    <v-card-title>{{ w.name }}</v-card-title>

    <v-card-text v-html="w.description"></v-card-text>

    <v-card-actions>
      <router-link to="/">
        <v-btn href="#" class="btn btn-primary">Know more</v-btn>
      </router-link>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import type { IWorkshop } from '../../services/workshops'

// How to define props using composition API (in setup script)
// define an interface
type Props = {
  w: IWorkshop
  x: number
}

const { w, x } = defineProps<Props>()

// {
//     props: {
//
//     },
//     setup() {
//
//     }
// }
</script>

<style scoped></style>
