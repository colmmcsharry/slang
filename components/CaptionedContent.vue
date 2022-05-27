<template lang="pug">
  div.mycontainer 
      slot(name="heading") 
        h4 tempirary heading
      
      slot(name="content")
        img(src="https://i.stack.imgur.com/y9DpT.jpg") 
      
      img(src="https://i.stack.imgur.com/y9DpT.jpg")
      p this image and this P will always be here, as they're not in slots

      slot(name="caption") 
        p placeholder text 2
        p placeholder
       
</template>

<script>
export default {}
</script>

<style scoped>
img {
  width: 200px;
  height: 200px;
  padding: 20px;
}

div {
  color: red;
}

.mycontainer {
  border: 1px solid green;
  margin: 10px;
}
</style>
