<template>
  <p>Counter is: {{ counter }}</p>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("counter", {
      counter: state => state.counter
    })
  }
};
</script>