import React, { Component } from 'react';
import Header from '../components/layout/Header';
import PageHeader from "../components/layout/PageHeader";
import { Footer } from '../components/layout/Footer';

export class Contact_01 extends Component {
    render() {
        return (
            <div className="site-main">
                <Header />

                {/* PageHeader */}
                <PageHeader           
                    title="Contact us" 
                    breadcrumb="Contact 01" 
                />
                {/* PageHeader end */}

                {/* grid-section */}
                <section className="ttm-row grid-section clearfix">
                    <div className="container">
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="featured-imagebox box-shadow">
                                    <div className="featured-thumbnail">
                                        <img className="img-fluid" src="https://themetechmount.com/react/hireco/images/country/country-01.jpg" alt="casablanca" />
                                    </div>
                                    <div className="featured-content p-30">
                                        <div className="featured-title">
                                            <h3><a href={process.env.PUBLIC_URL + '/'}>Casablanca</a></h3>
                                        </div>
                                        <div className="featured-desc">
                                            <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor">
                                                <li className="pb-5">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                    <div className="ttm-list-li-content">Adresse: Boulevard de la Corniche, Casablanca</div>
                                                </li>
                                                <li className="pb-5">
                                                    <i className="fas fa-phone-alt"></i>
                                                    <div className="ttm-list-li-content">Téléphone: 123 456 7890</div>
                                                </li>
                                                <li>
                                                    <i className="fa fa-envelope"></i>
                                                    <div className="ttm-list-li-content">
                                                        <a href="mailto:info@expertshumancapital.ma">Email:info@expertshumancapital.ma</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="featured-imagebox box-shadow">
                                    <div className="featured-thumbnail">
                                        <img className="img-fluid" src="https://themetechmount.com/react/hireco/images/country/country-02.jpg" alt="marrakech" />
                                    </div>
                                    <div className="featured-content p-30">
                                        <div className="featured-title">
                                            <h3><a href={process.env.PUBLIC_URL + '/'}>Marrakech</a></h3>
                                        </div>
                                        <div className="featured-desc">
                                            <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor">
                                                <li className="pb-5">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                    <div className="ttm-list-li-content">Adresse: Avenue Mohammed V, Marrakech</div>
                                                </li>
                                                <li className="pb-5">
                                                    <i className="fas fa-phone-alt"></i>
                                                    <div className="ttm-list-li-content">Téléphone: 123 456 7890</div>
                                                </li>
                                                <li>
                                                    <i className="fa fa-envelope"></i>
                                                    <div className="ttm-list-li-content">
                                                        <a href="mailto:info@expertshumancapital.ma">Email:info@expertshumancapital.ma</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="featured-imagebox box-shadow">
                                    <div className="featured-thumbnail">
                                        <img className="img-fluid" src="https://themetechmount.com/react/hireco/images/country/country-03.jpg" alt="fes" />
                                    </div>
                                    <div className="featured-content p-30">
                                        <div className="featured-title">
                                            <h3><a href={process.env.PUBLIC_URL + '/'}>Fès</a></h3>
                                        </div>
                                        <div className="featured-desc">
                                            <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor">
                                                <li className="pb-5">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                    <div className="ttm-list-li-content">Adresse: Rue Talaa Sghira, Fès</div>
                                                </li>
                                                <li className="pb-5">
                                                    <i className="fas fa-phone-alt"></i>
                                                    <div className="ttm-list-li-content">Téléphone: 123 456 7890</div>
                                                </li>
                                                <li>
                                                    <i className="fa fa-envelope"></i>
                                                    <div className="ttm-list-li-content">
                                                        <a href="mailto:info@expertshumancapital.ma">Email:info@expertshumancapital.ma</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="featured-imagebox box-shadow">
                                    <div className="featured-thumbnail">
                                        <img className="img-fluid" src="https://themetechmount.com/react/hireco/images/country/country-04.jpg" alt="rabat" />
                                    </div>
                                    <div className="featured-content p-30">
                                        <div className="featured-title">
                                            <h3><a href={process.env.PUBLIC_URL + '/'}>Rabat</a></h3>
                                        </div>
                                        <div className="featured-desc">
                                            <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor">
                                                <li className="pb-5">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                    <div className="ttm-list-li-content">Adresse: Avenue Mohammed V, Rabat</div>
                                                </li>
                                                <li className="pb-5">
                                                    <i className="fas fa-phone-alt"></i>
                                                    <div className="ttm-list-li-content">Téléphone: 123 456 7890</div>
                                                </li>
                                                <li>
                                                    <i className="fa fa-envelope"></i>
                                                    <div className="ttm-list-li-content">
                                                        <a href="mailto:info@expertshumancapital.ma">Email:info@expertshumancapital.ma</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="featured-imagebox box-shadow">
                                    <div className="featured-thumbnail">
                                        <img className="img-fluid" src="https://themetechmount.com/react/hireco/images/country/country-05.jpg" alt="tanger" />
                                    </div>
                                    <div className="featured-content p-30">
                                        <div className="featured-title">
                                            <h3><a href={process.env.PUBLIC_URL + '/'}>Tanger</a></h3>
                                        </div>
                                        <div className="featured-desc">
                                            <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor">
                                                <li className="pb-5">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                    <div className="ttm-list-li-content">Adresse: Boulevard Mohamed V, Tanger</div>
                                                </li>
                                                <li className="pb-5">
                                                    <i className="fas fa-phone-alt"></i>
                                                    <div className="ttm-list-li-content">Téléphone: 123 456 7890</div>
                                                </li>
                                                <li>
                                                    <i className="fa fa-envelope"></i>
                                                    <div className="ttm-list-li-content">
                                                        <a href="mailto:info@expertshumancapital.ma">Email: info@expertshumancapital.ma</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="featured-imagebox box-shadow">
                                    <div className="featured-thumbnail">
                                        <img className="img-fluid" src="https://themetechmount.com/react/hireco/images/country/country-01.jpg" alt="agadir" />
                                    </div>
                                    <div className="featured-content p-30">
                                        <div className="featured-title">
                                            <h3><a href={process.env.PUBLIC_URL + '/'}>Agadir</a></h3>
                                        </div>
                                        <div className="featured-desc">
                                            <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor">
                                                <li className="pb-5">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                    <div className="ttm-list-li-content">Adresse: Avenue du Général Kettani, Agadir</div>
                                                </li>
                                                <li className="pb-5">
                                                    <i className="fas fa-phone-alt"></i>
                                                    <div className="ttm-list-li-content">Téléphone: 123 456 7890</div>
                                                </li>
                                                <li>
                                                    <i className="fa fa-envelope"></i>
                                                    <div className="ttm-list-li-content">
                                                        <a href="mailto:info@expertshumancapital.ma">Email: info@expertshumancapital.ma</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* row end */}
                    </div>
                </section>
                {/* grid-section end */}

                {/* map-section */}
                <section className="ttm-row map-section bg-theme-GreyColor clearfix">
                    <div className="container">
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-12">
                                {/* section title */}
                                <div className="section-title title-style-center_text pb-15">
                                    <div className="title-header">
                                        <h3>get in <span className="text-theme-SkinColor">touch</span></h3>
                                        <h2 className="title">Feel Free To Contact</h2>
                                    </div>
                                </div>{/* section title end */}
                            </div>
                            <div className="col-lg-6">
                                <iframe
                                    height="530"
                                    width="100%"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d273430.6289812058!2d-8.674929573448923!3d34.02088268283789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdce572c51d0c7bb%3A0x58d8b8798e5423b!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2sus!4v1698829458147!5m2!1sen!2sus"
                                    frameBorder="0"
                                    allowFullScreen=""
                                    aria-hidden="false"
                                    tabIndex="0"
                                    title="Google Map of Casablanca"
                                ></iframe>
                            </div>
                            <div className="col-lg-6">
                                <div className="ttm-col-bgcolor-yes ttm-bg bg-theme-WhiteColor z-index-2 p-40 p-lg-30 mt-lg-30">
                                    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                                    <div className="layer-content">
                                        <form id="contact_form" className="contact_form wrap-form">
                                            <div className="row ttm-boxes-spacing-10px">
                                                <div className="col-md-12 ttm-box-col-wrapper">
                                                    <label>
                                                        <input name="name" type="text" placeholder="Your Name" required="required" />
                                                    </label>
                                                </div>
                                                <div className="col-md-6 ttm-box-col-wrapper">
                                                    <label>
                                                        <input name="email" type="text" placeholder="Your Email" required="required" />
                                                    </label>
                                                </div>
                                                <div className="col-md-6 ttm-box-col-wrapper">
                                                    <label>
                                                        <input name="subject" type="text" placeholder="Subject" required="required" />
                                                    </label>
                                                </div>
                                                <div className="col-md-12 ttm-box-col-wrapper">
                                                    <label>
                                                        <input name="phone" type="text" placeholder="Phone Number" required="required" />
                                                    </label>
                                                </div>
                                                <div className="col-md-12 ttm-box-col-wrapper">
                                                    <label>
                                                        <textarea name="message" rows="7" placeholder="Message" required="required"></textarea>
                                                    </label>
                                                </div>
                                            </div>
                                            <button className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill 
                                            ttm-btn-color-skincolor w-100" type="submit">send a message!</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>{/* row end */}
                    </div>
                </section>
                {/* map-section end */}

                {/* action-section */}
                <section className="ttm-row action-section bg-theme-SkinColor text-theme-WhiteColor clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-md-flex align-items-center justify-content-between">
                                    {/* featured-icon-box */}
                                    <div className="featured-icon-box icon-align-before-content style2">
                                        <div className="featured-icon">
                                            <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-white ttm-icon_element-size-xl">
                                                <i className="flaticon flaticon-recruitment-5"></i>
                                            </div>
                                        </div>
                                        <div className="featured-content">
                                            <div className="featured-title">
                                                <h3>Incredible Recruitment & Staffing Agency</h3>
                                            </div>
                                            <div className="featured-desc">
                                                <p>We have over 30 years experience in the industry, providing exceptional staffing solutions tailored to your needs.</p>
                                            </div>
                                        </div>
                                    </div>{/* featured-icon-box end */}
                                    <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-white" 
                                    href={process.env.PUBLIC_URL + '/contact_01'}>Hiring Now!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* action-section end */}

                <Footer/>
            </div>
        )
    }
}

export default Contact_01;
