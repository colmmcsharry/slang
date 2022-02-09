<!-- Child Component -->
<template>
  <div>
    <button @click="notify">Notify Parent</button>
  </div>
</template>

<script>
  export default {
    methods: {
      notify() {
        // instead of true we could emit any value, e.g. an object
        this.$emit('button-clicked', true);
      }
    }
  }
</script>