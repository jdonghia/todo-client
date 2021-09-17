<template>
  <Sign type="signIn">
    <template v-slot:title>Sign In</template>
    <template v-slot:button>Login</template>
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
