import React, { Component } from 'react';
import Header from '../components/layout/Header';
import PageHeader from '../components/layout/PageHeader';
import { Footer } from '../components/layout/Footer';

export class Services_details extends Component {
    render() {
        return (
            <div className="site-main">
                <Header />
            
                {/* PageHeader */} 
                <PageHeader
                    title="Service Details"
                    breadcrumb="Services"
                />
                {/* PageHeader end */}  

                <div className="ttm-row sidebar ttm-sidebar clearfix">
                    <div className="container">
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-8 content-area order-lg-2">
                                {/* ttm-service-single-content-area */}
                                <div className="ttm-service-single-content-area">
                                    <div className="ttm_single_image-wrapper">
                                        <img className="img-fluid" src="https://themetechmount.com/react/hireco/images/services/services-06.jpg" alt="Service Image" />
                                    </div>
                                    <div className="ttm-service-description mt-40">
                                    <h3 className="mb-20">Our Service Description</h3>
<p>We provide a comprehensive overview of our services, including expert evaluations and tailored solutions to meet your specific needs. Our team is dedicated to ensuring the highest quality and efficiency in every aspect of our service delivery. We focus on delivering results that drive success and add value to your business.</p>

                                        <div className="row">
                                            {/* Feature Boxes */}
                                            {[
                                                {
                                                    icon: 'flaticon-research',
                                                    title: 'Water & Soil Quality',
                                                    desc: 'We offer comprehensive assessments of water and soil quality to ensure environmental sustainability.',
                                                },
                                                {
                                                    icon: 'flaticon-healthcare',
                                                    title: 'Health and Safety',
                                                    desc: 'Our services focus on ensuring health and safety standards for optimal performance.',
                                                },
                                                {
                                                    icon: 'flaticon-conveyor',
                                                    title: 'Logistics Management',
                                                    desc: 'Expert management of logistics to streamline operations and improve efficiency.',
                                                },
                                                {
                                                    icon: 'flaticon-human-resources-3',
                                                    title: 'Human Resources',
                                                    desc: 'Professional HR services to support your organization’s staffing and employee needs.',
                                                }
                                            ].map((item, index) => (
                                                <div className="col-lg-6 col-md-6 col-sm-6" key={index}>
                                                    <div className="featured-icon-box icon-align-before-content icon-ver_align-top mr-50 mr-md-0 mt-20">
                                                        <div className="featured-icon">
                                                            <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                                                <i className={item.icon}></i>
                                                            </div>
                                                        </div>
                                                        <div className="featured-content">
                                                            <div className="featured-title">
                                                                <h3>{item.title}</h3>
                                                            </div>
                                                            <div className="featured-desc">
                                                                <p>{item.desc}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="ttm-horizontal_sep width-100 mt-25 mb-35"></div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h4>Become the Best You Can Be</h4>
                                                <p>Discover your full potential with our expert services and guidance.</p>
                                                <ul className="ttm-list ttm-list-style-square ttm-list-icon-color-skincolor mb-30">
                                                    <li>Comprehensive support for all your needs.</li>
                                                    <li>Customized solutions tailored to your goals.</li>
                                                    <li>Expert advice and industry insights.</li>
                                                    <li>Reliable and efficient service delivery.</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="ttm_single_image-wrapper mb-30">
                                                    <img className="img-fluid" src="https://themetechmount.com/react/hireco/images/services/services-01.jpg" alt="Service Image" />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <p>Our services are designed to meet the highest standards and ensure your success. Contact us today to learn more about how we can help you achieve your objectives.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* ttm-service-single-content-area end */}
                            </div>
                            <div className="col-lg-4 widget-area">
                                <div className="sidebar-right">
                                    <aside className="widget widget-nav-menu">
                                        <ul>
                                            <li><a className="active" href={process.env.PUBLIC_URL + '/services_details'}>Manpower Supply</a></li>
                                            <li><a href={process.env.PUBLIC_URL + '/services_details'}>Technical Services</a></li>
                                            <li><a href={process.env.PUBLIC_URL + '/services_details'}>Executive Search</a></li>
                                            <li><a href={process.env.PUBLIC_URL + '/services_details'}>Forte Acquisition</a></li>
                                            <li><a href={process.env.PUBLIC_URL + '/services_details'}>Human Resource</a></li>
                                            <li><a href={process.env.PUBLIC_URL + '/services_details'}>Retained Search</a></li>
                                        </ul>
                                    </aside>
                                    <aside className="widget widget-download">
                                        <ul className="download">
                                            <li>
                                                <span className="download-img">
                                                    <i className="fas fa-file-pdf fa-3x"></i>
                                                </span>
                                                <span className="download-caption">
                                                    <span>Case Studies</span>
                                                    <h6>Audit & Assurance</h6>
                                                    <a 
                                                        className="ttm-btn btn-inline ttm-btn-size-md ttm-icon-btn-left ttm-btn-color-grey" 
                                                        href="/Recrute.pdf" 
                                                        download
                                                    >
                                                        <i className="ti ti-arrow-right"></i>Download (3.5 MB)
                                                    </a>
                                                </span>
                                            </li>
                                        </ul>
                                    </aside>
                                    <aside className="widget widget-banner">
                                        <div className="ttm-col-bgcolor-yes bg-theme-DarkColor ttm-bg p-30 pb-50 pt-45">
                                            <div className="ttm-col-wrapper-bg-layer ttm-bg-layer bg-theme-DarkColor">
                                                <div className="ttm-col-wrapper-bg-layer-inner"></div>
                                            </div>
                                            <div className="layer-content text-center text-theme-WhiteColor">
                                                <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-style-round ttm-icon_element-color-skincolor ttm-icon_element-size-xl">
                                                    <i className="far fa-comments"></i>
                                                </div>
                                                <h3>Do You Need Any Help?</h3>
                                                <div className="ttm-horizontal_sep width-100 mt-25 mb-25"></div>
                                                <ul>
                                                    <li>+212 800 556 77 894</li>
                                                    <li>info@recrute.ma</li>
                                                </ul>
                                                <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor" href={process.env.PUBLIC_URL + '/contact_01'}>Make an Appointment!</a>
                                            </div>
                                        </div>
                                    </aside>       
                                </div>
                            </div>
                        </div>{/* row end */}
                    </div>
                </div>

                <Footer />
            </div>
        );
    }
}

export default Services_details;
