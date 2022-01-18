<template>

  <div class="container">
  <FoodMenu />
  </div>
</template>

<script>
import FoodMenu from '../components/FoodMenu.vue'

export default {
  name: 'IndexPage',
  components: {
    FoodMenu
  }
}
</script>

<style scoped>

body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  color:white;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
  color:white;
}


</style>