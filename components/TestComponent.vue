<template lang="pug">
   li.quoteDiv 
      button.quoteButton.button(@click.prevent="playSound(quote.audioPath)") {{ quote.buttonTitle }}
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
      playingSound: false
     }
  },
  methods: {
    playSound(sound){
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

    }
  }
  
}
</script>