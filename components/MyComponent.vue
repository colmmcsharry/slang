<template>
    <div class="container">
        <h1 class="myheading">
            Counter: {{$store.state.helloWorld.counter}}
        </h1>

        <button @click="add_one"> add 1</button>
            
   
  </div>
</template>

<script>

export default {
    name: "MyComponent",
    methods: {

        // this just connects to the store, tellls it which file to commit the increment function to
       add_one(){
           this.$store.commit('helloWorld/increment')
       }
    }

}




</script>

<style>


</style>