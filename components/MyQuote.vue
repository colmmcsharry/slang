<template lang="pug">
  .container




    ul#example-1 Greetings
      li(v-for='quote in state.greetingQuotes' :key='quote.id')
        button.quoteButton {{ quote.buttonTitle}}
        p {{ quote.explanation }}

    ul Swears
      li(v-for='quote in state.swearQuotes' :key='quote.id')
        button.quoteButton {{ quote.buttonTitle}}
        p {{ quote.explanation }}

</template>

<script>
export default {
  name: 'SlangPage',

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
  border: 2px solid red;
}

.quoteButton {
  padding: 5px;
}
</style>
