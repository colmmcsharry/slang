<template lang="pug">
  .container
      h2.categoryHeading {{ category }}
          
      ul.categoryList
        TestComponent(v-for='quote in quotes' 
                      :key='quote.id'
                      :quote='quote')   
       

</template>

<script>

export default {
  name: 'SlangPage',

  data() {
    return {
      playingSound: false
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
      }else {
        return [];
      }
    },
  },
}
</script>

<style >
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

li.quoteDiv {
    border-bottom:1px solid rgb(211, 211, 211);
    border-radius:6px;
  margin: 10px 0px;
  padding: 15px 6px;
  text-align:center;
  list-style-type: none;
  position:relative;
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

/* .explanation::before {
  content: "- "
} */
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
  background-color: #04AA6D;
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

/* .button:active::after {
  content: "lool";
  position:absolute;
  bottom: -20px;
  color:black;
  left:40%;
} */

</style>



