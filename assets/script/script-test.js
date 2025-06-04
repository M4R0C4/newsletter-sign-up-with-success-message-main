// Media Query
import {mediaQuery} from '../script/mediaQuery.js';
import {verifyEmail} from '../script/verifyEmail.js';
mediaQuery();

//Recolher todos os elementos necessários da página
const formEmail = document.querySelector('.form');

const inputEmail = document.querySelector('.email');
const successMessage = document.querySelector('.success-message'); // Relacionado ao sucesso



// Ao submeter o email....

formEmail.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('O formulário foi enviado.');
    console.log('O email inserido foi: ' + inputEmail.value);
    //Testar o email com o regex
    verifyEmail();
})  
