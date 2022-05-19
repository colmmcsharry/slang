<template lang="pug">
  .container
      h2.categoryHeading {{ category }}
          
      ul.categoryList
        IndividualQuote(v-for='quote in quotes' 
                      :key='quote.id'
                      :quote='quote')   
       

</template>

<script>

export default {
  name: 'SlangPage',

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
      if (this.category === 'Swears') {
        return this.state.swearQuotes; 
      } else if (this.category === 'Greetings') {
        return this.state.greetingQuotes; 
      } else if(this.category === 'Misc') {
        return this.state.miscQuotes; 
      }  else if(this.category === 'Faves') {
        return this.state.faveQuotes.filter(quote => quote.isFavourite === true); 
      }
      else {
        return [];
      }
    },
  },
}
</script>

<style lang="scss" >
.container {
  max-width: 800px;
  display:flex;
  align-items:center;
  flex-direction:column;
}

.categoryHeading {
  margin:2rem 0 4rem;
  font-weight:bold;
  color:#333333;
  text-decoration:underline
}

.categoryList {
  font-size:20px;
}

.example {
  font-style: italic;
}

.loudspeaker {
  position:absolute;
  top:120px;
  left:46%;
}

.example, .explanation {
  text-align:left;
  color: #333333;
}

.example::before {
  content: "eg. "
}

.example {
  font-weight:400;
}

.button {
  padding: 15px 25px;
  margin-bottom:50px;
  margin-top:20px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  position:relative;
  outline: none;
  color: #fff;
  background-color: $bonkers-color;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}

.button:hover {background-color: #3e8e41}

.button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

</style>



