<template>
    <div class="container">
        <h1 class="title">Random User</h1>
        <h3 class="subtitle">My Component</h3>
        <div>
            <button class="getUserButton" on-click="getUsers"> Get Random User</button>
         </div>   
        <ul v-for="user in users" :key="user.id">
            <li> {{user}}  lool  </li>
    </ul>
    <!-- each time the User state gets updated, the new user gets listed out here -->
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
//   mapGetters, mapMutation shud be in there too


export default {
    name: "MyComponent",
    computed: mapState(['users']),
    methods: {
        ...mapActions(['getUsers'])
    }

}




</script>

<style>


</style>