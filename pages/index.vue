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

@media screen and (min-width:1200px) {
  .container {
  max-width: 1100px;
  }
}
.container {
  margin: auto;
  padding: 0 2rem;
  color: white;
  background-color:rgb(53, 53, 53);
}

</style>
