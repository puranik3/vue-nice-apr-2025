<template>
  <div class="voting-widget">
    <font-awesome-icon icon="caret-up" class="fa-2x" @click="onUpvote" />
    {{ props.votes }}
    <font-awesome-icon icon="caret-down" class="fa-2x" @click="onDownvote" />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['upvote', 'downvote'])
const props = defineProps({
  votes: {
    type: Number,
    required: true,
  },
})

const onUpvote = () => {
  // Vue 2 this.$emit() -> Vue 3 emit()
  emit('upvote', { message: 'Hi upvote the session' })
}

const onDownvote = () => {
  // Vue 2 this.$emit() -> Vue 3 emit()
  emit('downvote', { message: 'Hi downvote the session' })
}
</script>

<!-- export default {
    setup(props, context) {
        // context.emit()
    }
} -->

<style scoped>
.voting-widget {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
