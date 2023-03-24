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
            axios.get('http://localhost:9001/api/user/login',{
                params:{
                    username:userData.username,
                    password:userData.password
                }
            }).then(checkUser=>{
                if(checkUser.data.statusCode===200){
                    router.push('/welcome')
                }else{
                    alert('your username or password no found!')
                }
            })
        }else{
            alert('please enter valid value!')
        }
    }



    return{
        loginHandler,userData
    }
}