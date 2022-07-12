import axios from "axios";
import { ADD_TEST } from "./types";

const headers = {
    Authorization:
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU4ODIwMDg5LCJpYXQiOjE2NTc1MjQwODksImp0aSI6IjIwMWIwNTg4ZDM5MzRiZDY5MDE2ZDA5YTZiYmNjMDA3IiwidXNlcl9pZCI6MzIsInVzZXJuYW1lIjoic3ViaG9qaXQ5NzAzZGV5QGdtYWlsLmNvbSIsImVtYWlsIjoic3ViaG9qaXQ5NzAzZGV5QGdtYWlsLmNvbSJ9.oxqKKmEk_ZHFbXCUpOi2yqU3TuywbjGS122K61WBS2M",
    "Content-Type": "application/json",
}

export const getTests = (callback) =>{
    return dispatch =>{
        axios.get('/api/tests/',{
            headers : headers
        })
        .then((res)=>{
            console.log(res)
        })
        .catch((e)=>{
            console.log(e)
        })
    }
}

export const getTestById = (id,callback) =>{
    return dispatch =>{
        axios.get(`/api/tests/${id}`,{
            headers : headers
        })
        .then((res)=>{
            callback(res)
        })
        .catch((e)=>{
            callback(e.response)
        })
    }
}


export const deleteTestById = (id,callback) =>{
    return dispatch =>{
        axios.delete(`/api/tests/${id}`,{
            headers : headers
        })
        .then((res)=>{
            console.log(res)
        })
        .catch((e)=>{
            console.log(e)
        })
    }
}

export const addTest = (data, callback)=>{
    return dispatch =>{
        axios.post('/api/tests/',data,{
            headers : headers
        })
        .then((res)=>{
            callback(res)
        })
        .catch((e)=>{
            callback(e.response)
        })
    }
}

export const editTest = (id,data, callback)=>{
    return dispatch =>{
        axios.patch(`/api/tests/${id}`,data,{
            headers : headers
        })
        .then((res)=>{
            console.log(res)
        })
        .catch((e)=>{
            console.log(e)
        })
    }
}

export const addQuestion = (data, callback)=>{
    return dispatch =>{
        axios.post('/api/questions/',data,{
            headers : headers
        })
        .then((res)=>{
            callback(res)
        })
        .catch((e)=>{
            callback(e.response)
        })
    }
}