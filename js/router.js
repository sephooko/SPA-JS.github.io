let pageUrls = {
    about: '/index.html?about',
    faq:'/index.html?faq'
   }
   function OnStartUp(params) {
    popStateHandler();
   }
   OnStartUp();
   document.querySelector('#about-link').addEventListener('click', (event) => {
    let stateObj = {
    page: 'about'
    }
    document.title = 'About';
    history.pushState(stateObj, "about", "?about");
    RenderAboutPage();
   });
   document.querySelector('#faq-link').addEventListener('click', (event) => {
    let stateObj = {
    page: 'faq'
    }
    document.title = 'faq';
    history.pushState(stateObj, "faq", "?faq");
    RenderfaqPage();
   });
   document.querySelector('#sign-link').addEventListener('click', (event) => {
    let stateObj = {
    page: 'sign'
    }
    document.title = 'sign';
    history.pushState(stateObj, "sign", "?sign");
    RenderfaqPage();
   });
   function RenderAboutPage(params) {
    document.querySelector('main').innerHTML =
    `<h1 class="title">Our Mission</h1>`;
   }
   function RenderfaqPage(params) {
    document.querySelector('main').innerHTML =
    `<h1 class="title">Frequently Asked Questions</h1>
    <p>Question: How much does it cost?</p></b><p>Answear: Go to pricing</p>`;
   }
   function RenderPricingPage(params) {
    document.querySelector('main').innerHTML =
    `<h1 class="title">Pricing</h1>`;
   }
   function RenderSignUpPage(params) {
    document.querySelector('main').innerHTML =
    `<h1 class="title">Sing Up Now!</h1>`;
   }
   function popStateHandler(event) {
    loc = window.location.href.toString().split(window.location.host)[1];
    if (loc === pageUrls.faq){
    RenderfaqPage();
    }
    if(loc === pageUrls.about){
    RenderAboutPage();
    }
    if (loc === pageUrls.sign){
        RenderSignUpPage();
    }
}
   window.onpopstate = popStateHandler;