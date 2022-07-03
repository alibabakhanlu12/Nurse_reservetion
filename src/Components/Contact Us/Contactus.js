import React from 'react';
import './Contactus.css';
import { Helmet } from 'react-helmet'
function App() {

    return (

        <div>

            <Helmet> <title> Contact Us</title></Helmet>
            <div className="contact3 py-3">
                <div className="row no-gutters">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div  >
                                    <img src="https://www.seekpng.com/png/full/443-4435760_contact-us-girl-contact-us-girl-png.png" class="img-fluid" />
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="contact-box ml-3">
                                    <h1 className="font-weight-light mt-5" id='title-contactus'>Contact with us</h1>
                                    <form className="mt-4">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                    <input className="form-control" type="text" placeholder="name" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                    <input className="form-control" type="email" placeholder="email address" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                    <input className="form-control" type="text" placeholder="phone" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                    <textarea className="form-control" rows="3" placeholder="message"></textarea>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <button type="submit" className="btn btn-danger-gradiant mt-3 ml-5 border-0 px-10 py-4"><span className='button-sumbit'> SUBMIT</span></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>


                            <div className="col-lg-12">
                                <div className="card mt-4 border-0 mb-4">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            <div className="card-body d-flex align-items-center c-detail pl-0">
                                                <div className="mr-3 align-self-center">
                                                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" />
                                                </div>
                                                <div className="">
                                                    <h6 className="font-weight-medium">Address</h6>
                                                    <p className="">Tabriz.
                                                        <br /> University of Tabriz</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <div className="card-body d-flex align-items-center c-detail">
                                                <div className="mr-3 align-self-center">
                                                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png" />
                                                </div>
                                                <div className="">
                                                    <h6 className="font-weight-medium">Phone</h6>
                                                    <p className="">+98914121243
                                                        <br /> 041 1431 8851</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <div className="card-body d-flex align-items-center c-detail">
                                                <div className="mr-3 align-self-center">
                                                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" />
                                                </div>
                                                <div className="">
                                                    <h6 className="font-weight-medium">Email</h6>
                                                    <p className="">
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