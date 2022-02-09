<template lang="pug">
.navbar
  ul
    NuxtLink.logo(to='/')   My Logo
    .navlinks
      li(v-for="i in pages") 
        NuxtLink(:to="i" ) {{i}}





  //-
  //- ul
  //-   NuxtLink(to='about')
  //-     li About
  //-   NuxtLink(to='slang')
  //-     li Slang
  //-   NuxtLink(to='task-board')
  //-     li Taskboard
</template>

<script>
export default {
  name: 'FoodMenu',
  data() {
    return {
      pages: ['about', 'slang', 'task-board', 'testPage']
  }
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  border-bottom: 1px solid gray;
  align-items: flex-end;
  justify-content: flex-end;
  background-color: rgb(48, 48, 48);
  color: lightblue;
  font-family: Cursive;
  flex-direction: row;
}

ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width:100%;
  margin-bottom: 10px;
  margin-right: 10px;
  color:white;
}

.logo {
  color: lightblue;
  border: 1px solid lightgray;
  border-radius: 50%;
  padding: 10px;
}

.navlinks {
  display:flex;
  flex-direction:row;
  place-items:center;
}

li {
  margin: 0px 10px;
  color: rgb(243, 243, 243);
  font-size:18px;
  font-weight:bold;
}

a {
  text-decoration: none;
   color:white;
}

</style>
