<template lang="pug">
  main
    h1 Task Board
    p Create a list of tasks

    .create-new
      input(
        v-model="newTask" 
        type="text" 
        placeholder="Add a new task" 
        @keypress.enter="addTask")
      button(@click="addTask") Add
    

    .tasks
      SingleTask(
        v-for="(task, i) in $store.state.tasks"
        :key="i"
        :task="task")
    
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
    }
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.$store.commit('ADD_TASK', this.newTask)
        this.newTask = ''
      }
    },
  },
}
</script>

<style scoped>
h1 {
  color: #59BEC4
}
p {
  color:#59BEC4;
}
</style>
