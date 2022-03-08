<template lang="pug">
  div.redb
    .flags
      img.flag(src="https://www.irelandandbeyond.com/wp-content/uploads/2021/02/flag-ireland-1024x683.jpg.webp") 
      img.flag(src="https://cdn.britannica.com/44/344-004-494CC2E8/Flag-England.jpg") 
      img.flag(src="http://4.bp.blogspot.com/-SUet8L5kd2g/UE1aWzCVf3I/AAAAAAAAANc/DpmZINoJ0JU/s1600/Australia_flag.jpg") 
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
  }
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

.redb {
  border:2px solid red;
}

.flags {
  display: flex;
  flex-direction:row;
  justify-content: space-evenly;
  align-items: space-evenly;
  width:250px;
  height:90px;
  margin:0 auto;
  border:1px solid blue;
  gap:10px;
  place-items:center;
}

.flag {
  max-width:80px;
  max-height:70px;
}



.mydropdown {
  position:relative;
  padding:4rem;
  top:30px;
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
