import {reactive} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";

export const useRegister=()=>{
    const router=useRouter()
    const userData=reactive({
        username:'' as string,
        password:'' as string
    })

    const registerHandler = () => {
        if(userData.username.length>4 && userData.password.length>8){
            axios.get('http://localhost:9001/api/user/register',{
                params:{
                    username:userData.username,
                    password:userData.password
                }
            }).then(response=>{
                if(response.data.statusCode===200){
                    router.push('/welcome')
                }else{
                    alert('user already exist!')
                }
            })
        }else{
            alert('please enter valid value!')
        }
    }


    return{
        registerHandler,userData
    }
}