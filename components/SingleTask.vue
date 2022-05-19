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

 .tasks .task .buttons {
	min-width: fit-content;
}

 .tasks .task button {
	appearance: none;
	border: none;
	outline: none;
	background-color: rgb(47, 214, 111);
	text-transform: uppercase;
	font-weight: bold;
	color: #59BEC4;
	font-size: 0.875rem;
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	margin-left: 0.5rem;
	cursor: pointer;
}

 .tasks .task button.delete {
	background-color: crimson;
	color: #59BEC4
}

.tasks .task.is-complete {
	opacity: 0.7;
}

.tasks .task.is-complete .content {
	text-decoration: line-through;
}
</style>
