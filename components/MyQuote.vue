<template lang="pug">
  .container
      h2.categoryHeading {{ category }}
      ul.categoryList(v-if='category === "greetings"') 
        li(v-for='quote in state.greetingQuotes' :key='quote.id')
          button.quoteButton {{ quote.buttonTitle}} 
          p {{ quote.explanation }} 
          p.example "{{ quote.example }}""
      ul(v-if="category === 'swears' ")
        li(v-for='quote in state.swearQuotes' :key='quote.id')
          button.quoteButton {{ quote.buttonTitle}} 
          p {{ quote.explanation }}  
          p.example {{ quote.example }}
      ul(v-if="category === 'misc' ")
        li(v-for='quote in state.miscQuotes' :key='quote.id')
          button.quoteButton {{ quote.buttonTitle}} 
          p {{ quote.explanation }}  
          p.example {{ quote.example }}      
                   
</template>

<script>
export default {
  name: 'SlangPage',
  props: ['buttonclicked'],

  data() {
    return { myvariable: 'hehehe',
     }
  },

  computed: {
    state() {
      return this.$store.state
    },
    category() {
      return this.$store.state.category
    }
  }
}
</script>

<style >
.container {
  width: 800px;
  border: 2px solid lightgray;
  display:flex;
  align-items:center;
  flex-direction:column;
}

.categoryHeading {
  margin:2rem 0 4rem;
  font-weight:bold;

}



.example {
  font-style: italic;
  margin-bottom:5rem;
}


.quoteButton {
  padding: 5px;
}
</style>
