<template>
  <div>
    <h2>List of Sessions</h2>
    <hr />

    <v-list>
      <v-list-item v-for="session in sessions" :key="session.id">
        <v-row>
          <v-col :cols="10">
            <div>
              <h3>{{ session.name }}</h3>
              <div>{{ session.level }}</div>
              <div>{{ session.abstract }}</div>
              <div>{{ session.speaker }}</div>
            </div>
          </v-col>
          <v-col :cols="2">
            <voting-widget
              :votes="session.upvoteCount"
              @upvote="vote('upvote', session)"
              @downvote="vote('downvote', session)"
            ></voting-widget>
          </v-col>
        </v-row>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup lang="ts">
import useFetch from '@/composables/useFetch'
import { fetchSessionsForWorkshop, voteFor } from '@/services/sessions'
import type { ISession } from '@/services/sessions'
import { toRefs } from 'vue'

interface Props {
  id: string
}

const props = defineProps<Props>()

const fetcher = (): Promise<ISession[]> => {
  return fetchSessionsForWorkshop(props.id)
}

const { loading, error, data: sessions } = useFetch<ISession[]>([], fetcher)

const vote = async (voteType: 'upvote' | 'downvote', session: ISession) => {
  //   alert(voteType + ' ' + session.name)
  try {
    const updatedSession = await voteFor(session.id, voteType)
    alert('success')
    sessions.value.map((s) => (s.id === session.id ? updatedSession : s))
  } catch (error) {
    alert(error.message)
  }
}
</script>

<style scoped></style>
