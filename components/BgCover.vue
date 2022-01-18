<template lang="pug">
  .cover
</template>

<script>
export default {

}
</script>

<style scoped>
.cover {
  width:100vw;
  height:100vh;
  z-index:-2;
  position:absolute;
  top:0px;
  left:0px;
  background-image:url('../assets/terenureinn.jpeg')
}

.cover:after{
  content:"";
   width:100vw;
  height:100vh;
  background-color:rgba(20, 14, 15, 0.63);
  position:absolute;
  top:0px;
  left:0px;
  
}

</style>