<template lang="pug">
  .container
      h2.categoryHeading {{ category }}
          
      ul.categoryList
        li.quoteDiv(v-for='quote in quotes' :key='quote.id')   
          button.quoteButton(@click.prevent="playSound(quote.audioPath)") {{ quote.buttonTitle }}
          p {{ quote.explanation }}  
          p.example {{ quote.example }}

</template>

<script>

export default {
  name: 'SlangPage',
  props: ['buttonclicked'],

  data() {
    return {
     }
      },

  computed: {
    state() {
       return this.$store.state
    },
    category() {
      return this.$store.state.category
    },
    quotes() {
      if (this.category === 'swears') {
        return this.state.swearQuotes; 
      } else if (this.category === 'greetings') {
        return this.state.greetingQuotes; 
      } else if(this.category === 'misc') {
        return this.state.miscQuotes; 
      }else {
        return [];
      }
    }
  },
  methods: {
    playSound (sound) {
      if(sound) {
        const audio = new Audio(sound);
        console.log('lol');
        audio.play();
      }
    },
  }
}
</script>

<style >
.container {
  width: 800px;
  display:flex;
  align-items:center;
  flex-direction:column;
}

.categoryHeading {
  margin:2rem 0 4rem;
  font-weight:bold;
}

.categoryList {
  font-size:20px;
}

li.quoteDiv {
    border:1px solid gray;
  margin: 10px 0px;
  padding: 15px 6px;
  text-align:center;
  list-style-type: none;
}

.example {
  font-style: italic;
}


.quoteButton {
  padding: 5px 10px;
  border-radius: 10px;
  margin-bottom:15px 0px;
  font-weight:bold;
}


</style>



