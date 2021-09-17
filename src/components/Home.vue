<template>
  <main class="home">
    <div class="home__left-container home__container">
      <Intro></Intro>
    </div>
    <div class="home__right-container home__container">
      <router-view />
      <footer class="footer">
        <span class="copyright">made by João Donghia</span>
      </footer>
    </div>
  </main>
</template>
<script lang="ts">
import Vue from "vue";
import Intro from "./Intro.vue";
export default Vue.extend({
  components: {
    Intro,
  },
});
</script>
<style scoped>
.home {
  height: 100vh;
  display: flex;
}
.home__container {
  width: 50%;
}
.home__left-container {
  background: black;
  display: flex;
  justify-content: center;
}
.home__right-container {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer {
  position: absolute;
  bottom: 1%;
  right: 1%;
}
.copyright {
  color: rgb(114, 114, 114);
  font-weight: 100;
  font-size: 0.8rem;
}
</style>
