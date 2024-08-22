import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../components/layout/Header';
import PageHeader from "../components/layout/PageHeader";
import { Footer } from '../components/layout/Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            rememberMe: false,
        };
    }

    handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        this.setState({
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;

        if (email === 'EHC@gmail.com' && password === '123AZE') {
            this.props.history.push('/AdminDashboard');
        } else {
            // Handle invalid credentials
            alert('Invalid email or password');
        }
    };

    render() {
        return (
            <div className="site-main">
                <Header />
                {/* PageHeader */}
                <PageHeader title="Login" breadcrumb="Login" />
                {/* PageHeader end */}

                {/* login */}
                <div className="ttm-row login-section clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="bg-theme-GreyColor ttm-col-bgcolor-yes ttm-bg rounded p-50 p-lg-20">
                                    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                                    <div className="layer-content">
                                        <div className="text-center mb-20">
                                            <h3>Login To Your Account</h3>
                                        </div>
                                        <div className="ttm-tabs ttm-tab-style-02">
                                            <Tabs>
                                                <TabList className="tabs">
                                                    <Tab className="tab">
                                                        <a>
                                                            <i className="flaticon flaticon-research"></i>
                                                            <span>Candidate</span>
                                                            <h5>Login as a Candidate</h5>
                                                        </a>
                                                    </Tab>
                                                    <Tab className="tab">
                                                        <a>
                                                            <i className="flaticon flaticon-job-search"></i>
                                                            <span>Employer</span>
                                                            <h5>Login as an Employer</h5>
                                                        </a>
                                                    </Tab>
                                                </TabList>
                                                <div className="content-tab">
                                                    <TabPanel>
                                                        <form id="login_form" className="login_form wrap-form" onSubmit={this.handleSubmit}>
                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <label>
                                                                        <i className="ti ti-email"></i>
                                                                        <input
                                                                            type="email"
                                                                            id="txtemail"
                                                                            name="email"
                                                                            value={this.state.email}
                                                                            onChange={this.handleChange}
                                                                            placeholder="Email Address"
                                                                        />
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <label>
                                                                        <i className="ti ti-lock"></i>
                                                                        <input
                                                                            type="password"
                                                                            id="password"
                                                                            name="password"
                                                                            value={this.state.password}
                                                                            onChange={this.handleChange}
                                                                            placeholder="Password"
                                                                        />
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <label>
                                                                        <div className="forgot-pwd text-center mt-5">
                                                                            <p><a href="#" className="text-theme-SkinColor">Forgot Password?</a></p>
                                                                            <p>Don't have an account? <a href={process.env.PUBLIC_URL + '/register'} className="text-theme-SkinColor">Sign Up here</a></p>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-6 mx-auto">
                                                                    <label className="mb-0">
                                                                        <button
                                                                            className="submit w-100 ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor"
                                                                            type="submit"
                                                                        >
                                                                            Login
                                                                        </button>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </TabPanel>
                                                    <TabPanel>
                                                        <form id="login_form" className="login_form wrap-form" onSubmit={this.handleSubmit}>
                                                            <div className="row">
                                                                <div className="col-lg-12">
                                                                    <label>
                                                                        <i className="ti ti-email"></i>
                                                                        <input
                                                                            type="email"
                                                                            id="txtemail"
                                                                            name="email"
                                                                            value={this.state.email}
                                                                            onChange={this.handleChange}
                                                                            placeholder="Email Address"
                                                                        />
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <label>
                                                                        <i className="ti ti-lock"></i>
                                                                        <input
                                                                            type="password"
                                                                            id="password"
                                                                            name="password"
                                                                            value={this.state.password}
                                                                            onChange={this.handleChange}
                                                                            placeholder="Password"
                                                                        />
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-12">
                                                                    <label>
                                                                        <div className="forgot-pwd text-center mt-5">
                                                                            <p><a href="#" className="text-theme-SkinColor">Forgot Password?</a></p>
                                                                            <input
                                                                                className="w-auto mr-10"
                                                                                id="cookies-consent"
                                                                                name="cookies-consent"
                                                                                type="checkbox"
                                                                                value="yes"
                                                                                checked={this.state.rememberMe}
                                                                                onChange={this.handleChange}
                                                                            />
                                                                            <span>Remember Password</span>
                                                                        </div>
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-6 mx-auto">
                                                                    <label className="mb-0">
                                                                        <button
                                                                            className="submit w-100 ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor"
                                                                            type="submit"
                                                                        >
                                                                            Login
                                                                        </button>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </TabPanel>
                                                </div>
                                            </Tabs>
                                        </div>
                                        <div className="login-social-buttons">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <button
                                                        id="login-with-facebook"
                                                        className="social-account-button w-100 facebook-button"
                                                        style={{ backgroundColor: '#3b5998', color: 'white', borderRadius: '5px', padding: '10px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                                    >
                                                        <i className="ti ti-facebook" style={{ marginRight: '8px' }}></i>
                                                        <span>Login with Facebook</span>
                                                    </button>
                                                </div>
                                                <div className="col-md-6">
                                                    <button
                                                        id="login-with-google"
                                                        className="social-account-button w-100 google-button"
                                                        style={{color: '#db4437', borderRadius: '5px', padding: '10px', fontWeight: 'bold', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                                    >
                                                        <img
                                                            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
                                                            alt="Google logo"
                                                            style={{ width: '20px', height: '20px', marginRight: '8px' }}
                                                        />
                                                        <span>Login with Google</span>
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
                {/* login end */}
                <Footer />
            </div>
        );
    }
}

export default withRouter(Login);
