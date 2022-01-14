<template>
    <div class="navbar">
      <NuxtLink to="/">  My Logo </NuxtLink>
        <ul> 
          <NuxtLink to="about">  <li>About</li> </NuxtLink>
          <NuxtLink to="menu">  <li>Menu</li> </NuxtLink>
          <NuxtLink to="contact">  <li>Contact</li> </NuxtLink>
          <NuxtLink to="task-board">  <li>Taskboard</li> </NuxtLink>
          </ul>
    </div>
</template>


<style scoped>

.navbar {
    display:flex;
 border:1px solid gray;
  align-items:flex-end;
  justify-content: space-between;
  background-color:rgb(48, 48, 48)
}

ul {
    list-style: none;
     display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

li {margin:0px 10px;
color:white;
 }

 a{text-decoration: none;}


</style>