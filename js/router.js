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
   function RenderAboutPage(params) {
    document.querySelector('main').innerHTML =
    `<h1 class="title">About Me</h1>
    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
   Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
   printer took a galley of type and scrambled it to make a type specimen book. It has survived
   not only five centuries, but also the leap into electronic typesetting, remaining essentially
   unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
   Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
   PageMaker including versions of Lorem Ipsum.</p>`;
   }
   function RenderfaqPage(params) {
    document.querySelector('main').innerHTML =
    `<h1 class="title">FrequentlyAskedQuestions</h1>
    <p>Question: How much does it cost?</p></b><p>Answear: Go to pricing</p>`;
   }
   function popStateHandler(event) {
    loc = window.location.href.toString().split(window.location.host)[1];
    if (loc === pageUrls.faq){
    RenderfaqPage();
    }
    if(loc === pageUrls.about){
    RenderAboutPage();
    }
   }
   window.onpopstate = popStateHandler;