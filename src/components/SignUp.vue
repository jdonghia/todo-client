<template>
  <Sign type="signUp">
    <template v-slot:title>Sign Up</template>
    <template v-slot:button>Register</template>
  </Sign>
</template>
<script lang="ts">
import Vue from "vue";
import Sign from "./shared/Sign.vue";
export default Vue.extend({
  components: {
    Sign,
  },
});
</script>
