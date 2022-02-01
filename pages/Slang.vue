<template lang="pug">
  div
    b-dropdown#dropdown-1.m-md-2.mydropdown(text='Irish Phrases')
      b-dropdown-item(@click="makeGreetings") Greetings
      b-dropdown-item(@click="makeSwears") Swears
      b-dropdown-item(@click="makeMisc")  Miscelleanous

    MyQuote

</template>

<script>
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'SlangPage',

  data() {
    return {
      myvariable: 'random text',
      showSwears: false,    }
  },

  computed: {
    state() {
      return this.$store.state
    },
    lolfunction(){
     return () => {
     alert('lol')
     }
    },
  },
  methods: {
    makeGreetings() {
        this.$store.commit('MAKEGREETINGS')
    },
    makeSwears() {
        this.$store.commit('MAKESWEARS')
    },
    makeMisc() {
        this.$store.commit('MAKEMISC')
    }
  }
}
</script>

<style>
.container {
  width: 800px;
  border: 2px solid lightgray;
  color: white;
}

.mydropdown {
  margin:3rem;
  position:relative;
  padding:2rem;
}

#dropdown-1{
    font-size:40px !important;
}

p {
  color: white;
}
</style>
