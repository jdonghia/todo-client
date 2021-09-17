<template>
  <header>
    <Navbar @createTask="createTask"></Navbar>
    <Tasks ref="tasks"></Tasks>
  </header>
</template>
<script lang="ts">
import Navbar from "./shared/Navbar.vue";
import Tasks from "./Tasks.vue";
import Vue from "vue";

export default Vue.extend({
  components: {
    Navbar,
    Tasks,
  },

  methods: {
    createTask(): void {
      (this.$refs.tasks as any).insertTask(); // how can i type this?
    },
  },
});
</script>
