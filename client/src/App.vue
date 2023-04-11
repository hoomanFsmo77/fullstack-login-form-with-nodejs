<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import {onMounted} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";
const router=useRouter()
onMounted(async()=>{
  const userId=localStorage.getItem('userId')
  if(userId){
    axios.get(`http://localhost:9001/api/user/me/${userId}`).then(res=>{
      if(res.data.statusCode===200){
        router.push('/welcome')
      }else{
        router.push('/')
      }
    })
  }else{
    router.push('/')
  }

})

</script>

<style scoped>

</style>