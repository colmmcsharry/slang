<template lang="pug">
  div(:class="`task ${task.done ? 'is-complete' : ''}`")
    .content {{ task.content }}
    .buttons
      button(@click='toggleDone') {{ task.done ? &apos;Undo&apos; : &apos;Done&apos; }}
      button.delete(@click='removeTask') Delete
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['task'],
  methods: {
    toggleDone() {
      this.$store.commit('TOGGLE_TASK', this.task)
    },
    removeTask() {
      this.$store.commit('REMOVE_TASK', this.task)
    },
  },
}
</script>

<style>
.content {
  color:white;
}
</style>
