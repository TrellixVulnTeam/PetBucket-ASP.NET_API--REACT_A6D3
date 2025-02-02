import React from 'react'
import './landing.css';

const LandingPage = () => {
    return (
        <>
        
<nav class="navbar navbar-light bg-light static-top">
    <div class="container">
        <a class="navbar-brand" href="#!">Pet Bucket</a>
        <a class="btn btn-primary" href="/login">Log in</a>
        <a class="btn btn-primary" href="/register">Sign Up</a>

    </div>
</nav>
{/* <!-- Masthead--> */}
<header class="masthead">
    <div class="container position-relative">
        <div class="row justify-content-center">
            <div class="col-xl-6">
                <div class="text-center text-white">
                    {/* <!-- Page heading--> */}
                    <h1 class="mb-5">
                        Get Pet Sitters for
                        Cat & Dog Boarding in Bangladesh
                    </h1>
                </div>
            </div>
        </div>
    </div>
</header>
{/* <!-- Icons Grid--> */}
<section class="features-icons bg-light text-center">
    <div class="container">
        <div class="row">
            <div class="row" style={{overflow:"hidden"}}>
                <div class="col-12 col-md-6" id="openBusinessImg"><img src="https://storage.googleapis.com/petbacker/images/cms/petbacker-open-business.png" class="img-fluid" alt="Petbacker Pet Boarding for dog and cat"/></div>
                
                
                <div class="col-12 col-md-6" style={{"justify-content": "space-around", "padding-top": "10%","padding-bottom":"10%"}}>

                    <div class="section-title-big" style={{"font-family": 'Heebo'}}>
                        Open for business.
                    </div>
                    <p>Whatever pet service you provide, we'll find the pet sitter, groomer or dog walker jobs you need.</p>

                    <div class="item_buttons"><a href="/../pet-sitter-job" target="_blank"><input id="btn_besitter" class="btn" type="button" value="Become a pet sitter" style={{ width:"auto !important;"}}/></a></div>
                    <div class="item_buttons"><a href="/../dog-walker-job" target="_blank"><input id="btn_besitter" class="btn" type="button" value="Become a dog walker" style={{ width:"auto !important;"}}/></a></div>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- Image Showcases--> */}
<section class="showcase">
    <div class="container-fluid p-0">
        <div class="row g-0">
            <div class="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: "url('https://storage.googleapis.com/petbacker/images/cms/servicecovers/pet-taxi.jpg')"}}></div>
            <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>Pet Taxi</h2>
                <p class="lead mb-0">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
            </div>
        </div>
        <div class="row g-0">

        <div class="col-lg-6  text-white showcase-img" style={{backgroundImage: "url('https://storage.googleapis.com/petbacker/images/cms/servicecovers/cat-grooming.jpg')"}}></div>
             <div class="col-lg-6 my-auto showcase-text">
                <h2>Pet Grooming</h2>
                <p class="lead mb-0">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>    
            </div>
        </div>
        <div class="row g-0">
            <div class="col-md-6 order-md-2 text-white showcase-img" style={{backgroundImage: "url('https://storage.googleapis.com/petbacker/images/cms/servicecovers/dog-walking.jpg')"}}></div>
            <div class="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>Dog Walking</h2>
                <p class="lead mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
        </div>
    </div>
</section>
{/* <!-- Testimonials--> */}
<section class="testimonials text-center bg-light">
    <div class="container">
        <h2 class="mb-5">What people are saying...</h2>
        <div class="row">
            <div class="col-lg-4">
                <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                    <img class="img-fluid rounded-circle mb-3" src="assets/img/testimonials-1.jpg" alt="..." />
                    <h5>Margaret E.</h5>
                    <p class="font-weight-light mb-0">"This is fantastic! Thanks so much guys!"</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                    <img class="img-fluid rounded-circle mb-3" src="assets/img/testimonials-2.jpg" alt="..." />
                    <h5>Fred S.</h5>
                    <p class="font-weight-light mb-0">"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="testimonial-item mx-auto mb-5 mb-lg-0">
                    <img class="img-fluid rounded-circle mb-3" src="assets/img/testimonials-3.jpg" alt="..." />
                    <h5>Sarah W.</h5>
                    <p class="font-weight-light mb-0">"Thanks so much for making these free resources available to us!"</p>
                </div>
            </div>
        </div>
    </div>
</section>
{/* <!-- Call to Action--> */}
<section class="call-to-action text-white text-center" id="signup">
    <div class="container position-relative">
        <div class="row justify-content-center">
            <div class="col-xl-6">
                <h2 class="mb-4">Ready to get started? Sign up now!</h2>
                {/* <!-- Signup form-->
                <!-- * * * * * * * * * * * * * * *-->
                <!-- * * SB Forms Contact Form * *-->
                <!-- * * * * * * * * * * * * * * *-->
                <!-- This form is pre-integrated with SB Forms.-->
                <!-- To make this form functional, sign up at-->
                <!-- https://startbootstrap.com/solution/contact-forms-->
                <!-- to get an API token!--> */}
                <form class="form-subscribe" id="contactFormFooter" data-sb-form-api-token="API_TOKEN">
                    {/* <!-- Email address input--> */}
                    <div class="row">
                        <div class="col">
                            <input class="form-control form-control-lg" id="emailAddressBelow" type="email" placeholder="Email Address" data-sb-validations="required,email" />
                            <div class="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:required">Email Address is required.</div>
                            <div class="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:email">Email Address Email is not valid.</div>
                        </div>
                        <div class="col-auto"><button class="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
                    </div>
                    {/* <!-- Submit success message-->
                    <!---->
                    <!-- This is what your users will see when the form-->
                    <!-- has successfully submitted--> */}
                    <div class="d-none" id="submitSuccessMessage">
                        <div class="text-center mb-3">
                            <div class="fw-bolder">Form submission successful!</div>
                            <p>To activate this form, sign up at</p>
                            <a class="text-white" href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                        </div>
                    </div>
                    {/* <!-- Submit error message-->
                    <!---->
                    <!-- This is what your users will see when there is-->
                    <!-- an error submitting the form--> */}
                    <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                </form>
            </div>
        </div>
    </div>
</section>
{/* <!-- Footer--> */}
<footer class="footer bg-light">
    <div class="container">
        <div class="row">
            <div class="col-lg-6 h-100 text-center text-lg-start my-auto">
                <ul class="list-inline mb-2">
                    <li class="list-inline-item"><a href="#!">About</a></li>
                    <li class="list-inline-item">⋅</li>
                    <li class="list-inline-item"><a href="#!">Contact</a></li>
                    <li class="list-inline-item">⋅</li>
                    <li class="list-inline-item"><a href="#!">Terms of Use</a></li>
                    <li class="list-inline-item">⋅</li>
                    <li class="list-inline-item"><a href="#!">Privacy Policy</a></li>
                </ul>
                <p class="text-muted small mb-4 mb-lg-0">&copy; Your Website 2021. All Rights Reserved.</p>
            </div>
            <div class="col-lg-6 h-100 text-center text-lg-end my-auto">
                <ul class="list-inline mb-0">
                    <li class="list-inline-item me-4">
                        <a href="#!"><i class="bi-facebook fs-3"></i></a>
                    </li>
                    <li class="list-inline-item me-4">
                        <a href="#!"><i class="bi-twitter fs-3"></i></a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#!"><i class="bi-instagram fs-3"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>
   </>
    )
}

export default LandingPage
