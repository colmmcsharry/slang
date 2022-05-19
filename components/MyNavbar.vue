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
      b-dropdown-item(to="/about") slots
      b-dropdown-item(to="/slang") slang
      b-dropdown-item(to="/task-board") task-board

</template>

<script>
export default {
  name: 'FoodMenu',
  data() {
    return {
      pages: ['slots', 'slang', 'task-board']
  }
  }
}
</script>

<style lang="scss" scoped>
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
   color: $white;
  font-family: Cursive;
  flex-direction: row;
  background-color: $bonkers-color;
}


ul.onLarge {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width:100%;
  margin-bottom: 10px;
  margin-right: 10px;
  color: $white;
}


.navlinks {
  display:flex;
  flex-direction:row;
  place-items:center;
}

li {
  margin: 0px 10px;
    color: $white;
  font-size:14px;
  font-weight:bold;
  text-transform: capitalize
}

a {
  text-decoration: none;
     color: $white;
}

@media screen and (max-width:1200px) {
  .navlinks {display:none;}
}
@media screen and (min-width:1200px) {
  .hamburger {display:none;}
}

</style>
