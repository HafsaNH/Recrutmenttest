import React, { Component } from 'react';
import Header from '../components/layout/Header';
import PageHeader from "../components/layout/PageHeader";
import { Footer } from '../components/layout/Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axios from 'axios';

export class Register extends Component {
    handleSubmit = async (e) => {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);
        const data = {
            nom: formData.get('nom'),
            prenom: formData.get('prenom'),
            email: formData.get('email'),
            mot_de_passe: formData.get('mot_de_passe'),
            role: formData.get('role')
        };
        
        try {
            const response = await axios.post('http://localhost:5000/register', data);
            alert('Registration successful');
        } catch (error) {
            console.error('There was an error registering!', error);
            alert('Registration failed');
        }
    };

    render() {
        return (
            <div className="site-main">
                <Header />
                <PageHeader title="register" breadcrumb="register" />
                <div className="ttm-row register-section clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="bg-theme-GreyColor ttm-col-bgcolor-yes ttm-bg rounded p-50 p-lg-20">
                                    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                                    <div className="layer-content">
                                        <div className="text-center mb-20">
                                            <h3>Create An Account</h3>
                                        </div>
                                        <div className="ttm-tabs ttm-tab-style-02">
                                            <Tabs>
                                                <TabList className="tabs">
                                                    <Tab className="tab">
                                                        <a>
                                                            <i className="flaticon flaticon-research"></i>
                                                            <span>Candidate</span><h5>Login as a Candidate</h5>
                                                        </a>
                                                    </Tab>
                                                    <Tab className="tab">
                                                        <a>
                                                            <i className="flaticon flaticon-job-search"></i>
                                                            <span>Employer</span><h5>Login as an Employer</h5>
                                                        </a>
                                                    </Tab>
                                                </TabList>
                                                <div className="content-tab">
                                                    <TabPanel>
                                                        <form id="register_form" className="login_form wrap-form" onSubmit={this.handleSubmit}>
                                                            <div className="row">
                                                                <div className="col-lg-6">
                                                                    <label>
                                                                        <i className="ti ti-user"></i>
                                                                        <input type="text" name="nom" placeholder="Username" required />
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <label>
                                                                        <i className="ti ti-user"></i>
                                                                        <input type="text" name="prenom" placeholder="First Name" required />
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <label>
                                                                        <i className="ti ti-email"></i>
                                                                        <input type="email" name="email" placeholder="Email Address" required />
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <label>
                                                                        <i className="ti ti-lock"></i>
                                                                        <input type="password" name="mot_de_passe" placeholder="Password" required />
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-6">
                                                                    <label>
                                                                        <i className="ti ti-lock"></i>
                                                                        <input type="password" name="cpassword" placeholder="Confirm Password" required />
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <label>
                                                                        <i className="ti ti-mobile"></i>
                                                                        <input type="tel" name="phone" placeholder="Phone Number" />
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <label className="mt-0">
                                                                        <div className="d-md-flex align-items-center justify-content-between">
                                                                            <div className="cookies-checkbox mt-15">
                                                                                <div className="d-flex flex-row justify-content-start">
                                                                                    <input className="w-auto mr-10 mt-5" name="cookies-consent" type="checkbox" value="yes" required />
                                                                                    <span>you accept our Terms and Conditions and Privacy Policy</span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="mt-15">
                                                                                <p>Already registered?<a href="/login" className="text-theme-SkinColor"> Sign in here</a></p>
                                                                            </div>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <label className="mb-0">
                                                                        <button className="submit w-100 ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor" type="submit">Sign up</button>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </TabPanel>
                                                    <TabPanel>
                                                        {/* Employer Registration Form */}
                                                    </TabPanel>
                                                </div>
                                            </Tabs>
                                        </div>
                                        <div className="login-social-buttons">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <button id="login-with-facebook" className="social-account-button w-100 facebook-button">
                                                        <i className="ti ti-facebook"></i><span>Login With Facebook</span>
                                                    </button>
                                                </div>
                                                <div className="col-md-6">
                                                    <button id="login-with-google" className="social-account-button w-100 google-button">
                                                        <i className="ti ti-google"></i><span>Login With Google</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Register;
