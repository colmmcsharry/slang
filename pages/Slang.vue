<template lang="pug">
  div
    b-dropdown#dropdown-1.m-md-2(text='Irish Phrases')
      b-dropdown-item(@click="lolfunction") Greetings
      //- b-dropdown-item(@click="myclick=swears") Swears
      b-dropdown-item Miscelleanous



  //- this is temporary, need to change it so it loads the quotes component with only the appropriate data

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
      showGreetings: false,
      showSwears: false,
    }
  },

  computed: {
    state() {
      return this.$store.state
    },
    lolfunction(){
     return () => {
     alert('lol')
     }
    }
  },
}
</script>

<style>
.container {
  width: 800px;
  border: 2px solid lightgray;
  color: white;
}

p {
  color: white;
}
</style>
