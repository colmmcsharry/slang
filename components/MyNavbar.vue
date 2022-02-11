<template lang="pug">
.navbar
  ul.onLarge
    NuxtLink.logo(to='/')   My Logo
    .navlinks
      li(v-for="i in pages") 
        NuxtLink(:to="i" ) {{i}}

  b-dropdown#dropdown-1.m-md-2.hamburger(text='Menu')
      b-dropdown-item(to="/about") about
      b-dropdown-item(to="/slang") slang
      b-dropdown-item(to="/task-board") task-board
      b-dropdown-item(to="/testPage") testPage



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
.hamburger {
  margin:0;
  padding:0;
  top:10px;
  position:absolute;
  right:10px;
}

.navbar {
  display: flex;
  border-bottom: 1px solid gray;
  align-items: flex-end;
  justify-content: flex-end;
  background-color: #FEF3DC;
  color: #59BEC4;
  font-family: Cursive;
  flex-direction: row;
}


ul.onLarge {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width:100%;
  margin-bottom: 10px;
  margin-right: 10px;
  color:#59BEC4;
}

.logo {
  color: #59BEC4;
  border: 1px solid #59BEC4;
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
  color: #59BEC4;
  font-size:14px;
  font-weight:bold;
}

a {
  text-decoration: none;
   color:#59BEC4;
}

@media screen and (max-width:1200px) {
  .navlinks {display:none;}
}
@media screen and (min-width:1200px) {
  .hamburger {display:none;}
}

</style>
