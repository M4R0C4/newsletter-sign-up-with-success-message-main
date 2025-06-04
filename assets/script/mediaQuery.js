export function mediaQuery (){ //inserir como novo aprendizado https://www.w3schools.com/howto/howto_js_media_queries.asp
    const screenDesktop =  window.matchMedia("(min-width: 1025px)");
    const screenTablet =  window.matchMedia("(min-width: 481px) and (max-width: 1024px)");
    const screenMobile = window.matchMedia("(max-width: 480px)");
    let imgMain = document.querySelector('.img__main');
    if (screenTablet.matches) {
        imgMain.src = './assets/images/illustration-sign-up-mobile.svg';
        console.log('tablet')
    }
    if (screenMobile.matches) {
        imgMain.src = './assets/images/illustration-sign-up-mobile.svg';
        console.log('mobile')
    }
    if (screenDesktop.matches) {
        imgMain.src = './assets/images/illustration-sign-up-desktop.svg';
        console.log('desktop')
    }
}
