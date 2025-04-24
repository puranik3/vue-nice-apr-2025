<template>
  <div>
    <h2>Add a new session</h2>
    <v-divider class="my-6"></v-divider>

    <!-- v$.sequenceId.$errors -> [ { $message: }, { $message: }, ... ] -->
    <!-- [ 'Password must have uppercase', ... ]-->
    <form @submit.prevent="addSession">
      <div class="mb-3">
        <v-text-field
          label="Sequence ID"
          type="number"
          id="sequenceId"
          v-model.number="form.sequenceId"
          @blur="v$.sequenceId.$touch()"
          :error-messages="v$.sequenceId.$errors.map((error) => error.$message)"
        />
      </div>
      <div class="mb-3">
        <v-text-field
          label="Name"
          type="text"
          id="name"
          v-model="form.name"
          @blur="v$.name.$touch()"
          :error-messages="v$.name.$errors.map((error) => error.$message)"
        />
      </div>
      <div class="mb-3">
        <v-text-field
          label="Speaker"
          type="text"
          id="speaker"
          v-model="form.speaker"
          @blur="v$.speaker.$touch()"
          :error-messages="v$.speaker.$errors.map((error) => error.$message)"
        />
      </div>
      <div class="mb-3">
        <v-text-field
          label="Duration"
          type="text"
          id="duration"
          v-model.number="form.duration"
          @blur="v$.duration.$touch()"
          :error-messages="v$.duration.$errors.map((error) => error.$message)"
        />
      </div>
      <div class="mb-3">
        <v-select
          label="Level"
          id="level"
          :items="items"
          v-model="form.level"
          @blur="v$.level.$touch()"
          :error-messages="v$.level.$errors.map((error) => error.$message)"
        ></v-select>
      </div>
      <div class="mb-3">
        <v-textarea
          label="Abstract"
          id="abstract"
          v-model="form.abstract"
          @blur="v$.abstract.$touch()"
          :error-messages="v$.abstract.$errors.map((error) => error.$message)"
        ></v-textarea>
        {{ form.abstract }}
      </div>
      <div class="mb-3">
        <v-btn color="primary" type="submit">Add a session</v-btn>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { helpers, minLength, maxLength, minValue, numeric, required } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import type { ISession } from '@/services/sessions'
import { useRouter } from 'vue-router'

interface Props {
  id: string
}

const props = defineProps<Props>()

const router = useRouter() // not to confuse with useRoute()

const items = ['Basic', 'Intermediate', 'Advanced']

const form = reactive({
  sequenceId: 0,
  name: '',
  speaker: '',
  duration: 0,
  level: 'Basic',
  abstract: '',
})

// const temp = () => {
//   alert('hi')
// }

const rules = {
  sequenceId: {
    // required: required
    required: helpers.withMessage('Sequence ID is required', required),
    minValue: minValue(1),
    numeric,
  },
  name: {
    required,
    name: helpers.withMessage('Name can have only letters and spaces', (value: string) => {
      const pattern = /^[A-Za-z][A-Za-z ]+$/
      return pattern.test(value)
    }),
  },
  speaker: {
    required,
  },
  duration: {
    required,
    numeric,
    minValue: minValue(0.5),
  },
  level: {
    required,
  },
  abstract: {
    minLength: minLength(10),
    maxLength: maxLength(240),
  },
}

const v$ = useVuelidate(rules, form)

const addSession = () => {
  const newSession: Omit<ISession, 'id'> = {
    workshopId: +props.id,
    upvoteCount: 0,
    ...form,
  }

  console.log(newSession)

  // POST request (I will add this code after the session)
  // ...

  router.push({
    name: 'sessions-list',
  })
}
</script>

<style scoped></style>
