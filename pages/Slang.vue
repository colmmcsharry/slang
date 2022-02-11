<template lang="pug">
  div
    b-dropdown#dropdown-1.m-md-2.mydropdown(text='Irish Phrases')
      b-dropdown-item(@click="makeGreetings") Greetings
      b-dropdown-item(@click="makeSwears") Swears
      b-dropdown-item(@click="makeMisc")  Miscelleanous

    MyQuote

</template>

<script>

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
    }
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
  border: 2px solid lightgray;
  color: #59BEC4;
   max-width: 800px
}

div {
   text-align:center;
}

.mydropdown {
  margin:3rem;
  position:relative;
  padding:2rem;
}

.btn dropdown-toggle btn-secondary {
  background-color: green;
}

#dropdown-1 > button{
    background-color: #fbddf3;
    color:#59BEC4
}

p {
  color: #59BEC4;
}
</style>
