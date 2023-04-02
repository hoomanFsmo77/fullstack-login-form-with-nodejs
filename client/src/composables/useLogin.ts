import {reactive} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";


export const useLogin=()=>{
    const router=useRouter()
    const userData=reactive({
        username:'' as string,
        password:'' as string
    })


    const loginHandler =  () => {
        if(userData.username.length>4 && userData.password.length>8){
            axios.put('http://localhost:9001/api/user/login',{
                username:userData.username,
                password:userData.password
            }).then((checkUser)=>{
                localStorage.setItem('userId',checkUser.data.userId)
                router.push('/welcome')
            }).catch(err=>{
                alert('your username or password not found!')
            })
        }else{
            alert('please enter valid value!')
        }
    }



    return{
        loginHandler,userData
    }
}