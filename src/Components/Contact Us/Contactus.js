import React from 'react';
import './Contactus.css';

function App() {

    return (

        <div>
            <div class="contact3 py-3">
                <div class="row no-gutters">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div  >
                                    <img src="https://www.seekpng.com/png/full/443-4435760_contact-us-girl-contact-us-girl-png.png" class="img-fluid" />
                                </div>
                            </div>
                            <div class="col-lg-5">
                                <div class="contact-box ml-3">
                                    <h1 class="font-weight-light mt-3">Contact with us</h1>
                                    <form class="mt-4">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="form-group mt-2">
                                                    <input class="form-control" type="text" placeholder="name" />
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-group mt-2">
                                                    <input class="form-control" type="email" placeholder="email address" />
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-group mt-2">
                                                    <input class="form-control" type="text" placeholder="phone" />
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="form-group mt-2">
                                                    <textarea class="form-control" rows="3" placeholder="message"></textarea>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <button type="submit" class="btn btn-danger-gradiant mt-3 ml-5 border-0 px-10 py-4"><span className='button-sumbit'> SUBMIT</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="card mt-4 border-0 mb-4">
                                    <div class="row">
                                        <div class="col-lg-4 col-md-4">
                                            <div class="card-body d-flex align-items-center c-detail pl-0">
                                                <div class="mr-3 align-self-center">
                                                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" />
                                                </div>
                                                <div class="">
                                                    <h6 class="font-weight-medium">Address</h6>
                                                    <p class="">Tabriz.
                                                        <br /> University of Tabriz</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4">
                                            <div class="card-body d-flex align-items-center c-detail">
                                                <div class="mr-3 align-self-center">
                                                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" />
                                                </div>
                                                <div class="">
                                                    <h6 class="font-weight-medium">Phone</h6>
                                                    <p class="">+98914121243
                                                        <br /> 041 1431 8851</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4 col-md-4">
                                            <div class="card-body d-flex align-items-center c-detail">
                                                <div class="mr-3 align-self-center">
                                                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" />
                                                </div>
                                                <div class="">
                                                    <h6 class="font-weight-medium">Email</h6>
                                                    <p class="">
                                                        info@hospital.com
                                                        <br /> 123@hospital.com
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default App;