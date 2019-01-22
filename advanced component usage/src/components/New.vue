<template>
  <div>
    <h1>The new</h1>
    <button @click="counter++">Increase</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      counter: 0
    };
  },
  destroyed() {
    console.log("destroy New");
  },
  deactivated() {
    console.log("Deactivated New");
  },
  activated() {
    console.log("Activated New");
  }
};
</script>

<style scoped>
</style>
