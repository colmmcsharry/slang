<template>

  <div class="container">
  <MyComponent />
  </div>
</template>

<script>
import MyComponent from '../components/MyComponent.vue'

export default {
  name: 'IndexPage',
  components: {
    MyComponent
  },
  layout: 'My-Layout'
  
}
</script>

<style scoped>

body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: lightpink;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}


</style>