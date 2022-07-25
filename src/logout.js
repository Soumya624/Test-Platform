import axios from 'axios'
import getCookie from './getCookies'

let refresh = getCookie('refresh')
let access = getCookie("access_token")

const headers = {
    Authorization:
    `Bearer ${access}`,
    "Content-Type": "application/json",
}

export default function logout(){
    axios.post('/auth/logout/',{
        refresh
    },{
        headers : headers
    })
    .then((res)=>{
        window.location = '/'
    })
}