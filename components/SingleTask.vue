<template lang="pug">
  div(:class="`task ${task.done ? 'is-complete' : ''}`")
    .content {{ task.content }} 
    .buttons
      button(@click='toggleDone') {{ task.done ? &apos;Undo&apos; : &apos;Done&apos; }}
      button.delete(@click='removeTask') Delete
      slot here will be index
</template>

<script>
export default {
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
