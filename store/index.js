export const state = () => ({
  tasks: [],
  counter: 0,
  cartItems: [],
  greetingQuotes: [
    {
      id: 1,
      buttonTitle: "What's the craic",
      explanation: "This is how we ask each other how we're doing",
    },
    {
      id: 2,
      buttonTitle: 'Story horse',
      explanation: 'This is how we ask each other what is up',
    },
  ],
  swearQuotes: [
    {
      id: 1,
      buttonTitle: 'feck',
      explanation: 'a less harsh version of the F word',
    },
    {
      id: 2,
      buttonTitle: 'bollocks',
      explanation: 'Usually uttered when something very bad happens',
    },
  ],
})

export const mutations = {
  ADDTOCART(state, item) {
    state.cartItems = [item, ...state.cartItems]
  },
  REMOVEITEM(state, item) {
    state.cartItems.splice(state.cartItems.indexOf(item), 1)
  },

  // not working todolist starts
  ADD_TASK(state, task) {
    state.tasks = [{ content: task, done: false }, ...state.tasks]
  },
  REMOVE_TASK(state, task) {
    state.tasks.splice(state.tasks.indexOf(task), 1)
  },
  TOGGLE_TASK(state, task) {
    task.done = !task.done
  },
  // todo list ends
  INCREMENT(state) {
    state.counter++
  },
}
