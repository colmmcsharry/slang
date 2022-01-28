<template lang="pug">
  .container
    FoodMenu 
</template>

<script>
import FoodMenu from '../components/FoodMenu.vue'
import CaptionedContent from '../components/CaptionedContent.vue'

export default {
  name: 'IndexPage',
  components: {
    FoodMenu,
    CaptionedContent,
  },
}
</script>

<style scoped>
body {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  line-height: 1.6;
  color: white;
}
.container {
  max-width: 1100px;
  margin: auto;
  padding: 0 2rem;
  color: white;
}

.notherdiv {
  margin: 2px solid white;
  position: relative;
  height: 200px;
  display: block;
  background-color: pink;
}
</style>
