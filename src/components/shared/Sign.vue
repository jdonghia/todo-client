<template>
  <div class="login">
    <h3 class="login__title border-bottom pb-3 px-5">
      <slot name="title"></slot>
    </h3>
    <b-form class="form">
      <b-form-group class="mt-3" label="Email:">
        <b-form-input type="email" required></b-form-input>
      </b-form-group>
      <b-form-group class="mt-3" label="Password:">
        <b-form-input type="password" required></b-form-input>
      </b-form-group>
      <b-button class="mt-3 form__button" type="submit" variant="outline-dark"
        ><slot name="button"></slot
      ></b-button>
    </b-form>
  </div>
</template>
<style scoped>
.login {
  margin-top: 25%;
  width: 50%;
  align-self: center;
  display: flex;
  flex-direction: column;
}
.login__title {
  align-self: center;
  font-weight: 100;
}
.form {
  display: flex;
  flex-direction: column;
}
.form__button {
  align-self: flex-end;
  width: 20%;
}
</style>
