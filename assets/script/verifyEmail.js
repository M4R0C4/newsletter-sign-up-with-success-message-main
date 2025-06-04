import {warningEmail} from './warningEmail.js';

const inputEmail = document.querySelector('.email');
export function verifyEmail (){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(inputEmail.value)) {
        console.log('Email valido');
        window.location.href = "./sucess.html";
        return true;
    } else {
        console.log('Email invalido');
        warningEmail();
        return false;
    }
    
}