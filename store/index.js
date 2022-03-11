export const state = () => ({
  tasks: [],
  counter: 0,
  cartItems: [],
  category: 'Greetings',
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
      buttonTitle: 'Feck',
      explanation: 'A less harsh version of the F word',
      example: 'Ah feck, I forgot the football was on tonight',
      audioPath: require('@/assets/feck.m4a').default,
      isPlaying: false
    },
    {
      id: 2,
      buttonTitle: 'Bollocks',
      explanation: 'Usually uttered when something bad happens',
      example: 'Ah bollocks, I dropped my phone into the bath',
      audioPath: require('@/assets/bollox.m4a').default,
      isPlaying: false
    },
  ],
  miscQuotes:[
    {
      id: 1,
      buttonTitle: 'Gaff',
      explanation: 'A less formal way of saying house or home',
      example: "Let's go back to my gaff for a few cans",
      audioPath: require('@/assets/gaff.m4a').default,
      isPlaying: false
    },
    {
      id: 2,
      buttonTitle: 'Spuds',
      explanation: 'Another term for potatoes',
      example: "I'd love a few spuds for dinner today",
      audioPath: require('@/assets/spuds.m4a').default,
      isPlaying: false
    },
  ]
  
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
         example: "Ah Brian! How's it goin?",
         audioPath: require('@/assets/storyHorse.m4a').default,
         isPlaying: false
       }
      ];
      state.swearQuotes =  [
        {
          id: 1,
          buttonTitle: 'Poxy',
          explanation: 'An adjective, used to describe something terrible',
          example: 'Ah that new Star Wars movie is poxy',
          audioPath: require('@/assets/feck.m4a').default,
          isPlaying: false
        },
        {
          id: 2,
          buttonTitle: 'Dickhead',
          explanation: 'A negative term for a man',
          example: 'That guy Joh is a complete dickhead',
          audioPath: require('@/assets/bollox.m4a').default,
          isPlaying: false
        },
      ];
      state.miscQuotes = [
        {
          id: 1,
          buttonTitle: 'Bloke',
          explanation: 'An informal way of referring to a man',
          example: "I like John, he's a nice bloke",
          audioPath: require('@/assets/gaff.m4a').default,
          isPlaying: false
        },
        {
          id: 2,
          buttonTitle: 'Dodgy',
          explanation: "An adjective to describe someone or something that's weird or unreliable",
          example: "My stomach feels terrible, that chicken I ate smelled a bit dodgy",
          audioPath: require('@/assets/spuds.m4a').default,
          isPlaying: false
        },
      ];
  },
  MAKEIRELAND(state){
    state.country = 'Irish';
    state.greetingQuotes = [
      {
         id: 1,
         buttonTitle: "What's the craic?",
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
      ];
      state.swearQuotes =  [
        {
          id: 1,
          buttonTitle: 'Feck',
          explanation: 'A less harsh version of the F word',
          example: 'Ah feck, I forgot the football was on tonight',
          audioPath: require('@/assets/feck.m4a').default,
          isPlaying: false
        },
        {
          id: 2,
          buttonTitle: 'Bollocks',
          explanation: 'Usually uttered when something bad happens',
          example: 'Ah bollocks, I dropped my phone into the bath',
          audioPath: require('@/assets/bollox.m4a').default,
          isPlaying: false
        },
      ];
      state.miscQuotes = [
        {
          id: 1,
          buttonTitle: 'Gaff',
          explanation: 'A less formal way of saying house or home',
          example: "Let's go back to my gaff for a few cans",
          audioPath: require('@/assets/gaff.m4a').default,
          isPlaying: false
        },
        {
          id: 2,
          buttonTitle: 'Spuds',
          explanation: 'Another term for potatoes',
          example: "I'd love a few spuds for dinner today",
          audioPath: require('@/assets/spuds.m4a').default,
          isPlaying: false
        },
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
      ];
      state.swearQuotes = [
        {
           id: 1,
           buttonTitle: "Crikey!",
           explanation: "This is when we're shocked about something",
           example: "Crikey! I've left the grill on! ",
           audioPath: require('@/assets/whatsTheCraic.m4a').default,
           isPlaying: false
         },
         {
           id: 2,
           buttonTitle: 'Bugger',
           explanation: 'Refers to somebody annoying',
           example: "That Barry guy is a right bugger",
           audioPath: require('@/assets/storyHorse.m4a').default,
           isPlaying: false
         }
        ];
        state.miscQuotes = [
          {
             id: 1,
             buttonTitle: "Cunt",
             explanation: "A bad word in other countries, in Australia this is a term of affection",
             example: "G'Day cunts, I was just over at Clint's house havin beers, he's a good cunt.",
             audioPath: require('@/assets/whatsTheCraic.m4a').default,
             isPlaying: false
           },
           {
             id: 2,
             buttonTitle: 'Bogan',
             explanation: 'Refers to somebody who is working-class and exhibits anti-social behavior. Similar to chav or knacker.',
             example: "I didn't enjoy that nightclub, it was full of bogans",
             audioPath: require('@/assets/storyHorse.m4a').default,
             isPlaying: false
           }
          ]
  },
MAKEGREETINGS(state){
  state.category = 'Greetings'
},
MAKESWEARS(state){
  state.category = 'Swears'
},
MAKEMISC(state){
  state.category = 'Misc'
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
