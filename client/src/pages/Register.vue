<template>
  <div class="container mt-5">
    <div class="row justify-content-center align-items-center">
      <div class="col-12 col-md-4">
        <form @submit.prevent>
          <div class="card px-4 py-5">
            <input v-model="userData.username" id="username" type="text" placeholder="username">
            <input v-model="userData.password" class="my-3" id="password" type="password" placeholder="password">
            <button @click="registerHandler">Register</button>
            <div class="mt-3 d-flex align-items-center justify-content-center">
              <span class="text-muted ">do you have account?</span><router-link to="/" class="ms-2">Login</router-link>
            </div>
          </div>
        </form>

      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import {useRegister} from "../composables/useRegister";
const {registerHandler,userData}=useRegister()
</script>

<style scoped>

</style>