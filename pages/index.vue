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
  background-color:green
}
.container {
  max-width: 1100px;
  margin: auto;
  padding: 0 2rem;
  color: white;
  background-color:rgb(53, 53, 53);
}

</style>
