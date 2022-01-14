<template lang="pug">
.navbar
  Nuxtlink.logo(to='/')   My Logo 
  ul
    Nuxtlink(to='about')
      li About
    Nuxtlink(to='contact')
      li Contact
    Nuxtlink(to='task-board')
      li Taskboard
</template>


<style scoped>

.navbar {
    display:flex;
 border:1px solid gray;
  align-items:flex-end;
  justify-content: space-between;
  background-color:rgb(48, 48, 48);
  color:lightblue;
  font-family: Cursive;
}

ul {
    list-style: none;
     display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom:10px;
  margin-right:10px;
}

.logo {
   color:lightblue;
   border: 1px solid lightgray;
   border-radius:50%;
   padding:10px;
}

li {margin:0px 10px;
color:white;
 }

 a{text-decoration: none;}


</style>