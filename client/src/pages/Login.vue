<template>
  <div class="container mt-5">
    <div class="row justify-content-center align-items-center">
      <div class="col-12 col-md-4">
        <form @submit.prevent>
          <div class="card px-4 py-5">
            <input v-model="userData.username" id="username" type="text" placeholder="username">
            <input v-model="userData.password" class="my-3" id="password" type="password" placeholder="password">
            <button @click="loginHandler">LOGIN</button>
            <div class="mt-3 d-flex align-items-center justify-content-center">
              <span class="text-muted ">Not registered?</span><router-link to="/register" class="ms-2">Create an account</router-link>
            </div>
          </div>
        </form>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useLogin} from "../composables/useLogin";
const {loginHandler,userData}=useLogin()
</script>

<style scoped>

</style>