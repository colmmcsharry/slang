<template>
    <div class="navbar">
      <NuxtLink to="/">  <NuxtLogo /> </NuxtLink>
        <ul> 
          <NuxtLink to="about">  <li>About</li> </NuxtLink>
           <NuxtLink to="menu">  <li>Menu</li> </NuxtLink>
            <NuxtLink to="contact">  <li>Contact</li> </NuxtLink>
          </ul>
    </div>
</template>


<style scoped>

.navbar {
    display:flex;
 border:1px solid gray;
  align-items:flex-end;
  justify-content: space-between;
}

ul {
    border:1px solid red;
    list-style: none;
     display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

li {margin:0px 10px;}


</style>