<template lang="pug">
.navbar
  ul.onLarge
    NuxtLink.logo(to='/')
      img.logopic(src="../assets/bonkers-logo.svg")
    li.nav-item
    .navlinks
      li(v-for="i in pages") 
        NuxtLink(:to="i" ) {{i}}

  b-dropdown#dropdown-1.m-md-2.hamburger(text='Menu')
      b-dropdown-item(to="/about") about
      b-dropdown-item(to="/slang") slang
      b-dropdown-item(to="/task-board") task-board
      b-dropdown-item(to="/testPage") testPage

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

.logopic {
  width: 150px;
  height: 70px;

}

.navbar {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  /* background-color: $bonkers-color; */
  background-color: lightgreen;
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


.navlinks {
  display:flex;
  flex-direction:row;
  place-items:center;
}

li {
  margin: 0px 10px;
  color: #04AA6D;
  font-size:14px;
  font-weight:bold;
  text-transform: capitalize
}

a {
  text-decoration: none;
   color:#04AA6D;
}

@media screen and (max-width:1200px) {
  .navlinks {display:none;}
}
@media screen and (min-width:1200px) {
  .hamburger {display:none;}
}

</style>
