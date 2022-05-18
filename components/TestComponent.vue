<template lang="pug">
   li.quoteDiv 
      button.quoteButton.button(@click.prevent="playSound(quote.audioPath)") {{ quote.buttonTitle }}
      span
        img.heart(@click="addFave" 
                  :class="quote.isFavourite ? 'redcolor' : ''"
                  src="../assets/empty-heart.png" )
        //- img.heart(@click="addFave" v-else src="../assets/full-heart.png" height="35px" width="35px")
      img.loudspeaker(v-if="playingSound" src="../assets/soundIcon.png" height="35px" width="35px")
      p.explanation {{ quote.explanation }}  
      p.example {{ quote.example }}
</template>


<script>

export default {
  name: 'TestComponent',
  props: {
    quote: { type: Object, default: null }
    },
  data() {
    return {
      playingSound: false,
      isFave: false,
     }
  },
  computed: {

  },
  methods: {
    playSound(sound, quote){
      this.playingSound = true;
      const audio = new Audio(sound);
        console.log(this.playingSound);
        audio.play();
        this.playingSound = true;
        console.log("audio length is", audio.duration);
        console.log(this.playingSound);
        setTimeout(() => {
          this.playingSound = false;
        }, 1900);

    },

    addFave(){
      this.$store.commit('FAVE', this.quote)
  },
  removeFave(){
    this.isFave = false;
    this.$store.commit('REMOVEFAVE', this.quote)
  },
  
}
}
</script>

<style>
.quoteDiv {
  /* background-color:red; */
}

.heart {
  position:relative;
  left:1.1rem;
  height:35px;
  width:35px
}

.redcolor {
  background-color:red;
}
</style>