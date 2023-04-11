<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-6">
        <h1>Welcome, you are logged in!</h1>
        <button @click="logoutHandler" class="btn btn-danger">
          logout
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import {useRouter} from 'vue-router'
const router=useRouter()
const logoutHandler =  () => {
  const userId=localStorage.getItem('userId')
  axios.delete(`http://localhost:9001/api/user/logout/${userId}`).then(response=>{
    if(response.data.statusCode===200){
      router.push('/')
    }
  })


}




</script>

<style scoped>

</style>