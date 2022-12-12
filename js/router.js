let pageUrls = {
    about: '/index.html?about',
    faq:'/index.html?faq',
    sign:'/index.html?sign',
    pricing:'/index.html?pricing',
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
    RenderSignUpPage();
   });
   document.querySelector('#pricing-link').addEventListener('click', (event) => {
    let stateObj = {
    page: 'pricing'
    }
    document.title = 'Pricing';
    history.pushState(stateObj, "pricing", "?pricing");
    RenderPricingPage();
   });
   function RenderAboutPage(params) {
    document.querySelector('main').innerHTML =
    `
    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
    <h1 class="display-4 fw-normal">Our Mission</h1>
    <p class="fs-5 text-muted">Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.
    We help organizations of all types and sizes prepare for the path ahead — wherever it leads. Our curated collection of business and technical courses help companies, governments, and nonprofits go further by placing learning at the center of their strategies.</p>
    <h2 class="display-6 text-center mb-4"> - Improving lives through learning! -</h2>
    </div>
    `;
   }
   function RenderfaqPage(params) {
    document.querySelector('main').innerHTML =
    `
    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
    <h1 class="display-4 fw-normal">Frequently Asked Questions</h1>
    <p class="fs-5 text-muted">Question: How much does it cost?</p></b><p class="fs-5 text-muted">Answear: Go to pricing tab to check our current offers.</p>
    <p class="fs-5 text-muted">Question: Who can buy a course?</p></b><p class="fs-5 text-muted">Answear: Anyone! Our courser are so inclusive that no matter who you are, human, alien or a cat - We have a course JUST for you!</p>
    <p class="fs-5 text-muted">Question: Do you offer a refund if I dont get a job after completing your course?</p></b><p class="fs-5 text-muted">Answear: No.</p>
    <p class="fs-5 text-muted">Question: How can I sign up for a course?</p></b><p class="fs-5 text-muted">Answear: Go to SignUp tab to easily sign up for our courses.</p>
    </div>
    `;
   }
   function RenderPricingPage(params) {
    document.querySelector('main').innerHTML =
    `
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
      <symbol id="check" viewBox="0 0 16 16">
        <title>Check</title>
        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
      </symbol>
    </svg>

<div class="container py-3">


    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h1 class="display-4 fw-normal">Check Out Our Pricing Programs!</h1>
      <p class="fs-5 text-muted">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
    </div>
  </header>

  <main>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Free</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$0<small class="text-muted fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-primary href="/index.html?pricing">Sign up for free</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Pro</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$15<small class="text-muted fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>20 users included</li>
              <li>10 GB of storage</li>
              <li>Priority email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-primary">Get started</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm border-primary">
          <div class="card-header py-3 text-bg-primary border-primary">
            <h4 class="my-0 fw-normal">Enterprise</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$29<small class="text-muted fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>30 users included</li>
              <li>15 GB of storage</li>
              <li>Phone and email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-primary">Contact us</button>
          </div>
        </div>
      </div>
    </div>

    <h2 class="display-6 text-center mb-4">Compare plans</h2>

    <div class="table-responsive">
      <table class="table text-center">
        <thead>
          <tr>
            <th style="width: 34%;"></th>
            <th style="width: 22%;">Free</th>
            <th style="width: 22%;">Pro</th>
            <th style="width: 22%;">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" class="text-start">Public</th>
            <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
            <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
            <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
          </tr>
          <tr>
            <th scope="row" class="text-start">Private</th>
            <td></td>
            <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
            <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <th scope="row" class="text-start">Permissions</th>
            <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
            <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
            <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
          </tr>
          <tr>
            <th scope="row" class="text-start">Sharing</th>
            <td></td>
            <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
            <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
          </tr>
          <tr>
            <th scope="row" class="text-start">Unlimited members</th>
            <td></td>
            <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
            <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
          </tr>
          <tr>
            <th scope="row" class="text-start">Extra security</th>
            <td></td>
            <td></td>
            <td><svg class="bi" width="24" height="24"><use xlink:href="#check"/></svg></td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
`;
   }
   function RenderSignUpPage(params) {
    document.querySelector('main').innerHTML =
    `
    <div class="text-center">
    <main class="form-signin w-100 m-auto">
        <form>
        <h1 class="display-4 fw-normal">Sing Up Now!</h1>

        <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
        </div>

        <div class="checkbox mb-3">
            <label>
            <input type="checkbox" value="remember-me"> Remember me
            </label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
    </main>
    </div>
    `;
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
    if (loc === pageUrls.pricing){
        RenderPricingPage();
    }
}
   window.onpopstate = popStateHandler;
