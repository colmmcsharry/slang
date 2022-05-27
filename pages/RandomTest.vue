<!-- Parent component -->
<template>
  <div class="mycontainer">
    <p> some text here</p>
    <MyChild @button-clicked="processUpdate" />
  </div>
</template>

<script>
import MyChild from '../components/MyChild.vue'
  export default {
    name: 'RandomTest',
    components: {
    MyChild,
  },
    methods: {
      processUpdate(value) {
        // This will output: true
        console.log(value);
      }
    }
  }
</script>


<style>
.mycontainer {
  border:2px solid red;
  width:500px;
  height:500px;
}
</style>