export const state = () => ({
  tasks: [],
  counter: 0,
  cartItems: [],
  category: '',
  country: 'Irish',
  greetingQuotes: [
    {
      id: 1,
      buttonTitle: "What's the craic",
      explanation: "This is how we ask each other how we're doing",
      example: "Oh hello David, what's the craic?",
      audioPath: require('@/assets/whatsTheCraic.m4a').default,
      isPlaying: false
    },
    {
      id: 2,
      buttonTitle: 'Story horse',
      explanation: 'This is how we ask each other what is up',
      example: "Ah Frank! What's the story horse?",
      audioPath: require('@/assets/storyHorse.m4a').default,
      isPlaying: false
    },
  ],
  swearQuotes: [
    {
      id: 1,
      buttonTitle: 'feck',
      explanation: 'a less harsh version of the F word',
      example: 'Ah feck, I forgot the football was on tonight',
      audioPath: require('@/assets/feck.m4a').default,
      isPlaying: false
    },
    {
      id: 2,
      buttonTitle: 'bollocks',
      explanation: 'Usually uttered when something very bad happens',
      example: 'Ah bollocks, I dropped my phone into the bath',
      audioPath: require('@/assets/bollox.m4a').default,
      isPlaying: false
    },
  ],
  miscQuotes: [
    {
      id: 1,
      buttonTitle: 'gaff',
      explanation: 'a less formal way of saying house or home',
      example: "Let's go back to my gaff for a few cans",
      audioPath: require('@/assets/gaff.m4a').default,
      isPlaying: false
    },
    {
      id: 2,
      buttonTitle: 'spuds',
      explanation: 'Another term for potatoes',
      example: "I'd love a few spuds for dinner today",
      audioPath: require('@/assets/spuds.m4a').default,
      isPlaying: false
    },
  ],
})

export const mutations = {
  MAKEENGLAND(state){
    state.country = 'English';
    state.greetingQuotes = [
      {
         id: 1,
         buttonTitle: "What's up, mate?",
         explanation: "This is how we ask each other how we're doing",
         example: "Oh hello David, what's up mate?",
         audioPath: require('@/assets/whatsTheCraic.m4a').default,
         isPlaying: false
       },
       {
         id: 2,
         buttonTitle: "How's it goin?",
         explanation: 'This is how we ask each other what is up',
         example: "Ah Frank! How's it goin?",
         audioPath: require('@/assets/storyHorse.m4a').default,
         isPlaying: false
       }
      ]
  },
  MAKEIRELAND(state){
    state.country = 'Irish';
    state.greetingQuotes = [
      {
         id: 1,
         buttonTitle: "What's the craic",
         explanation: "This is how we ask each other how we're doing",
         example: "Oh hello David, what's the craic?",
         audioPath: require('@/assets/whatsTheCraic.m4a').default,
         isPlaying: false
       },
       {
         id: 2,
         buttonTitle: 'Story horse',
         explanation: 'This is how we ask each other what is up',
         example: "Ah Frank! What's the story horse?",
         audioPath: require('@/assets/storyHorse.m4a').default,
         isPlaying: false
       }
      ]
  },
  MAKEAUSSIE(state){
    state.country = 'Aussie';
    state.greetingQuotes = [
      {
         id: 1,
         buttonTitle: "G'Day mate!",
         explanation: "This is how we ask each other how we're doing",
         example: "Oh hey David, G'Day mate!",
         audioPath: require('@/assets/whatsTheCraic.m4a').default,
         isPlaying: false
       },
       {
         id: 2,
         buttonTitle: 'How ya goin?',
         explanation: 'This is how we ask each other what is up',
         example: "Ah Frank! How ya goin mate?",
         audioPath: require('@/assets/storyHorse.m4a').default,
         isPlaying: false
       }
      ]
  },
MAKEGREETINGS(state){
  state.category = 'greetings'
},
MAKESWEARS(state){
  state.category = 'swears'
},
MAKEMISC(state){
  state.category = 'misc'
},
  ADDTOCART(state, item) {
    state.cartItems = [item, ...state.cartItems]
  },
  REMOVEITEM(state, item) {
    state.cartItems.splice(state.cartItems.indexOf(item), 1)
  },

  // todolist starts
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
