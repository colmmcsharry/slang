<template lang="pug">
  .container
     p(v-if='buttonclicked = "swears" ') you clicked for swears
     p(v-if='buttonclicked = "greetings" ') you clicked for greetings
     p here is {{ buttonclicked}}
      //- ul#example-1 
      //-   li(v-for='quote in state.greetingQuotes' :key='quote.id')
      //-     button.quoteButton {{ quote.buttonTitle}}
      //-     p {{ quote.explanation }}
         
 
</template>

<script>
export default {
  name: 'SlangPage',
  props: ['buttonclicked'],

  data() {
    return { myvariable: 'hehehe' }
  },

  computed: {
    state() {
      return this.$store.state
    },
  },
}
</script>

<style>
.container {
  width: 800px;
  border: 2px solid lightgray
}

.quoteButton {
  padding: 5px;
}
</style>
