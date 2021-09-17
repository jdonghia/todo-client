<template>
  <div class="logo">
    <h1 class="logo__title">ToDo</h1>
    <h2 class="logo__description">Do your thing.</h2>
    <b-button
      class="logo__button"
      to="/signup"
      variant="outline-light mt-3 w-75"
      >Sign Up</b-button
    >
  </div>
</template>
<style scoped>
.logo {
  text-transform: lowercase;
  color: white;
  margin: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo__title {
  font-weight: 100;
  font-size: 6rem;
  margin: 0;
}
.logo__description {
  font-weight: 100;
  font-size: 1.5rem;
}
.logo__button {
  text-transform: capitalize;
}
</style>
