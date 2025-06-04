export function warningEmail() {
    const contentEmail = document.querySelector('.email__container');
    const inputEmail = document.querySelector('.email');
    
    
    // Verifica se já existe um elemento de warning
    const existingWarning = contentEmail.querySelector('.warning-email');
    
    // Se já existir, não cria outro
    if (existingWarning) {
        console.log('Email inválido');
        return;
    }
    
    // Cria e insere mensagem de erro
    const textwarningEmail = document.createElement('p');
    textwarningEmail.innerHTML = 'Please provide a valid email address';
    textwarningEmail.classList.add('warning-email');
    contentEmail.appendChild(textwarningEmail);

    // Aplica estilos no input
    inputEmail.style.border = '1px solid #ff6155';
    inputEmail.style.color = '#ff6155';
    inputEmail.style.backgroundColor = '#FFE7E6';
    inputEmail.style.opacity = '0.5';
    inputEmail.value = '';

    // Insere depois do inputEmail (correção principal)
    inputEmail.addEventListener('focus', () => {
    console.log('Input PERDEU o foco!');
    inputEmail.style.border = '1px solid  #242742';
    inputEmail.style.color = '#242742';
    inputEmail.style.backgroundColor = '#fff';
    inputEmail.style.opacity = '1';
    textwarningEmail.remove();
});
}

