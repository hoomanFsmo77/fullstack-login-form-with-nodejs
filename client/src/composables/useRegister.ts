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
            axios.post('http://localhost:9001/api/user/register',{
                username:userData.username,
                password:userData.password
            }).then(response=>{
                localStorage.setItem('userId',response.data.userId)
                router.push('/welcome')
            }).catch(err=>{
                alert('user already exist!')
            })
        }else{
            alert('please enter valid value!')
        }
    }


    return{
        registerHandler,userData
    }
}