<template lang="pug">
  div.redb
    .flags
      img.flag(src="https://www.irelandandbeyond.com/wp-content/uploads/2021/02/flag-ireland-1024x683.jpg.webp"
              @click="makeIreland"
              :class="state.country === 'Irish' ? 'highlight' : '' ")
      img#engflag.flag(src="https://cdn.britannica.com/44/344-004-494CC2E8/Flag-England.jpg"
              @click="makeEngland"
              :class="state.country === 'English' ? 'highlight' : '' ")
      img.flag(src="http://4.bp.blogspot.com/-SUet8L5kd2g/UE1aWzCVf3I/AAAAAAAAANc/DpmZINoJ0JU/s1600/Australia_flag.jpg"
                @click="makeAussie"
                :class="state.country === 'Aussie' ? 'highlight' : '' ")
    b-dropdown#dropdown-1.m-md-2.mydropdown(:text=" state.country + ' phrases' " )
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
    makeEngland() {
        this.$store.commit('MAKEENGLAND')
    },
     makeIreland() {
        this.$store.commit('MAKEIRELAND')
    },
     makeAussie() {
        this.$store.commit('MAKEAUSSIE')
    },
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
  color: #04AA6D;
   max-width: 800px;
}

div {
   text-align:center;
}

.highlight {
  filter: brightness(120%) !important;
  transform:scale(115%);
  transition:all .2s ease;
  z-index:2;
}

.flags {
  display: flex;
  flex-direction:row;
  justify-content: space-evenly;
  align-items: space-evenly;
  width:250px;
  height:90px;
  margin:10px auto 0;
  gap:10px;
  place-items:center;
}

.flag {
  max-width:80px;
  max-height:70px;
  cursor:pointer;
   filter: brightness(50%);
}



.mydropdown {
  position:relative;
  padding:.4rem 0 3rem;
}

.btn dropdown-toggle btn-secondary {
  background-color: green;
}

#dropdown-1 > button{
    background-color: #fbddf3;
    color:#333333;
    font-weight:bold;
}

p {
  color: #04AA6D
}
</style>
