import axios from 'axios';
import * as config from '../config';

axios.defaults.withCredentials = true;

export async function getUser(){
    const api_url = `${config.host}/get_user/`;
    return axios.get(api_url, {'withCredentials':true});
}

export async function register(first_name, last_name, email, password, confirm_password){
    const api_url = `${config.host}/register/`;
    const data = {
        'first_name' : first_name,
        'last_name' : last_name,
        'email' : email,
        'password' : password, 
        'password2' : confirm_password
    }
    return axios.post(api_url, data, {'withCredentials':true})
}

export async function reg_otp(otp){
    const api_url =  `${config.host}/reg_otp/`;
    const data = {
        'otp' : otp
    }
    return axios.post(api_url, data, {'withCredentials':true})
}

export async function login(email, password){
    const api_url = `${config.host}/login/`;
    const data = {"email":email,
                "password":password};
    return axios.post(api_url, data, {'withCredentials': true});
}

export async function change_password(password, password2){
    const api_url = `${config.host}/change_password/`;
    const data = {
        'password' : password,
        'password2' : password2,
    }
    return axios.post(api_url, data, {'withCredentials':true})
}

export async function logout(){
    const api_url = `${config.host}/logout/`;
    return axios.get(api_url, {'withCredentials':true});
}

export async function reset_password(email){
    const api_url = `${config.host}/reset_password/`;
    const data = {
        'email' : email
    }
    return axios.post(api_url, data, {'withCredentials':true})
}

export async function reset_otp(otp, password, password2){
    const api_url  = `${config.host}/reset_otp/`;
    const data = {
        'otp' : otp,
        'password' : password,
        'password2' : password2
    }
    return axios.post(api_url, data, {'withCredentials' : true})
}


export async function attendence(punch_status, day){
    const api_url = `${config.host}/attendence/`;
    const date = {
        'punch_status' : punch_status,
        'date' : day
    }
    return axios.post(api_url, {'withCredentials' : true})
}

