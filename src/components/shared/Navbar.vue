<template>
  <header>
    <b-navbar tag="nav" toggleable="lg" type="light" class="px-4 border-bottom">
      <router-link to="/" custom v-slot="{ navigate }">
        <b-navbar-brand tag="a" class="logo" @click="navigate"
          >todo</b-navbar-brand
        >
      </router-link>

      <b-navbar-nav class="navbar__nav">
        <b-nav-item
          ><b-button @click="createTask" variant="outline-dark"
            >Create Task</b-button
          ></b-nav-item
        >
      </b-navbar-nav>
    </b-navbar>
  </header>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {
    createTask() {
      this.$emit("createTask");
    }
  }
});
</script>
<style scoped>
.logo {
  cursor: pointer;
}
.navbar__nav {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
</style>
